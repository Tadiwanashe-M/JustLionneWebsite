"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";
import { BrandMark } from "@/components/site/BrandMark";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeading } from "@/components/ui/Section";

type Status = "idle" | "sending" | "sent" | "error";

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  required,
  placeholder,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  placeholder?: string;
  textarea?: boolean;
}) {
  const common =
    "mt-2 box-border min-w-0 w-full max-w-full rounded-2xl bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 ring-1 ring-[--jl-border] outline-none transition focus:ring-2 focus:ring-[rgba(220,38,38,0.22)]";
  return (
    <label className="block min-w-0 w-full">
      <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
        {label}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={5}
          className={cn(common, "resize-none")}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={common}
        />
      )}
    </label>
  );
}

export function Contact() {
  const address = "3 Kingsmead St, Reyno Ridge, Emalahleni, 1040";
  const mapHref = useMemo(() => {
    const q = encodeURIComponent(address);
    return `https://www.google.com/maps/search/?api=1&query=${q}`;
  }, [address]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorDetail, setErrorDetail] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorDetail(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok) {
        setStatus("error");
        setErrorDetail(
          typeof json.error === "string" && json.error.length > 0
            ? json.error
            : "Something went wrong. Please try again.",
        );
        return;
      }
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorDetail("Something went wrong. Please try again.");
    } finally {
      window.setTimeout(() => {
        setStatus("idle");
        setErrorDetail(null);
      }, 6000);
    }
  }

  return (
    <Section id="contact" className="relative">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Request a quote or start a conversation"
          description="Tell us what you need—coal supply, processing, dry bulk handling, storage, or transport—and we’ll respond with clear next steps."
        />
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-5">
        <Reveal className="min-w-0 lg:col-span-2">
          <Card className="h-full p-7">
            <div className="flex items-start gap-4">
              <BrandMark variant="section" />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Office
                </p>
                <p className="mt-2 text-sm font-medium text-slate-900">JUSTLIONNE PTY LTD</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-700">{address}</p>
            <a
              className="mt-3 inline-block text-sm font-semibold text-[--jl-red] hover:text-[--jl-red-2]"
              href={mapHref}
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps
            </a>

            <div className="mt-8 space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Email
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  <a className="hover:text-slate-900" href="mailto:info@justlionne.co.za">
                    info@justlionne.co.za
                  </a>
                  <span className="text-slate-400"> · </span>
                  <a
                    className="hover:text-slate-900"
                    href="mailto:justice@justlionne.co.za"
                  >
                    justice@justlionne.co.za
                  </a>
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Phone
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  <a className="hover:text-slate-900" href="tel:+27650743911">
                    +27 65 074 3911
                  </a>
                  <span className="text-slate-400"> · </span>
                  <a className="hover:text-slate-900" href="tel:+27670594722">
                    +27 67 059 4722
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-slate-50 p-5 ring-1 ring-[--jl-border]">
              <p className="text-sm font-semibold text-slate-900">Procurement-ready</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                We deliver professional communication, documentation, and predictable
                execution aligned to industrial and government standards.
              </p>
            </div>
          </Card>
        </Reveal>

        <Reveal className="min-w-0 lg:col-span-3" delay={0.05}>
          <Card className="h-full p-7">
            <form onSubmit={onSubmit} className="grid min-w-0 gap-4">
              <div className="grid min-w-0 gap-4 sm:grid-cols-2">
                <Field
                  label="Name"
                  name="name"
                  value={name}
                  onChange={setName}
                  required
                  placeholder="Your name"
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={setEmail}
                  required
                  placeholder="you@company.com"
                />
              </div>
              <Field
                label="Message"
                name="message"
                value={message}
                onChange={setMessage}
                required
                placeholder="What do you need? Include commodity, volumes, locations, and timelines."
                textarea
              />

              <div className="mt-2 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                <Button type="submit" variant="quote" disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : "Send Message"}
                </Button>

                <motion.p
                  aria-live="polite"
                  initial={false}
                  animate={{ opacity: status === "idle" ? 0 : 1 }}
                  className={cn(
                    "text-sm",
                    status === "sent" && "text-[--jl-red]",
                    status === "error" && "text-red-700",
                    status === "sending" && "text-slate-500",
                  )}
                >
                  {status === "sent" ? "Message received. We’ll respond shortly." : null}
                  {status === "error"
                    ? errorDetail ?? "Something went wrong. Please try again."
                    : null}
                  {status === "sending" ? "Submitting your request..." : null}
                </motion.p>
              </div>
            </form>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}

