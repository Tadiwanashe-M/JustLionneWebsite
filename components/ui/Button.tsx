import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "quote";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--jl-red] focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  /** Solid quote CTA — maximum visible fill (no “hollow” look) */
  quote:
    "border-2 border-red-900 bg-red-700 text-white shadow-[0_4px_18px_rgba(185,28,28,0.55)] hover:border-red-950 hover:bg-red-800 hover:shadow-[0_6px_22px_rgba(127,29,29,0.45)] active:translate-y-px",
  primary:
    "bg-[--jl-red] text-white shadow-md ring-2 ring-red-950/30 hover:bg-[--jl-red-2] hover:ring-red-950/40 active:translate-y-px",
  secondary:
    "bg-slate-200 text-slate-900 shadow-md ring-2 ring-slate-500/50 hover:bg-slate-300 hover:ring-slate-600/60 active:translate-y-px",
  ghost:
    "bg-white text-slate-800 shadow-sm ring-2 ring-slate-300 hover:bg-slate-50 hover:ring-slate-400 active:translate-y-px",
};

export function Button({
  className,
  variant = "primary",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
}) {
  return (
    <button className={cn(base, variants[variant], className)} {...props} />
  );
}

export function ButtonLink({
  className,
  variant = "primary",
  href,
  ...props
}: Omit<React.ComponentProps<typeof Link>, "href"> & {
  href: string;
  variant?: ButtonVariant;
}) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)} {...props} />
  );
}

