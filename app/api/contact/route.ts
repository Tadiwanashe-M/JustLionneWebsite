import { NextResponse } from "next/server";
import { Resend } from "resend";
import nodemailer from "nodemailer";

const RECIPIENTS = [
  "info@justlionne.co.za",
  "justice@justlionne.co.za",
] as const;

type Payload = {
  name: string;
  email: string;
  message: string;
};

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildBody(name: string, email: string, message: string) {
  const subject = `JUSTLIONNE website — message from ${name}`;
  const text = [
    "New message from the JUSTLIONNE website contact form.",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; line-height: 1.5; color: #0f172a;">
  <h2 style="margin: 0 0 12px;">New contact form submission</h2>
  <p style="margin: 0 0 8px;"><strong>Name:</strong> ${escapeHtml(name)}</p>
  <p style="margin: 0 0 16px;"><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
  <p style="margin: 0 0 8px;"><strong>Message</strong></p>
  <div style="padding: 12px 16px; background: #f1f5f9; border-radius: 8px; white-space: pre-wrap;">${escapeHtml(message)}</div>
</body>
</html>`;

  return { subject, text, html };
}

async function deliverEmail(
  name: string,
  replyEmail: string,
  message: string,
): Promise<void> {
  const { subject, text, html } = buildBody(name, replyEmail, message);

  if (process.env.RESEND_API_KEY) {
    const from = process.env.RESEND_FROM_EMAIL?.trim();
    if (!from) {
      throw new Error("RESEND_FROM_EMAIL is required when using Resend");
    }
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from,
      to: [...RECIPIENTS],
      replyTo: replyEmail,
      subject,
      text,
      html,
    });
    if (error) {
      throw new Error(error.message);
    }
    return;
  }

  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  if (host && user && pass) {
    const port = Number(process.env.SMTP_PORT || "587");
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });
    const fromAddr = process.env.SMTP_FROM?.trim() || user;
    await transporter.sendMail({
      from: `JUSTLIONNE Website <${fromAddr}>`,
      to: [...RECIPIENTS],
      replyTo: replyEmail,
      subject,
      text,
      html,
    });
    return;
  }

  throw new Error("MAIL_NOT_CONFIGURED");
}

export async function POST(request: Request) {
  let data: Payload | null = null;
  try {
    data = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = (data?.name ?? "").trim();
  const email = (data?.email ?? "").trim();
  const message = (data?.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Missing fields" },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Invalid email address" },
      { status: 400 },
    );
  }

  try {
    await deliverEmail(name, email, message);
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    if (msg === "MAIL_NOT_CONFIGURED") {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Email is not configured on the server. Add RESEND_API_KEY and RESEND_FROM_EMAIL, or SMTP settings.",
        },
        { status: 503 },
      );
    }
    console.error("[contact]", msg);
    return NextResponse.json(
      { ok: false, error: "Could not send your message. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
