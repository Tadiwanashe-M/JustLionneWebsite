import Image from "next/image";
import { cn } from "@/lib/utils";
import { SITE_LOGO } from "@/lib/site-images";

const shells: Record<
  "nav" | "footer" | "hero" | "section" | "banner" | "drawer",
  string
> = {
  nav: "h-11 w-11 sm:h-[52px] sm:w-[52px] rounded-2xl bg-slate-50 shadow-sm ring-1 ring-[--jl-border]",
  footer:
    "h-[4.5rem] w-[4.5rem] sm:h-[5.25rem] sm:w-[5.25rem] rounded-2xl bg-slate-50 shadow-md ring-1 ring-[--jl-border]",
  hero: "h-28 w-28 sm:h-36 sm:w-36 rounded-3xl bg-white shadow-md ring-1 ring-[--jl-border]",
  section: "h-12 w-12 rounded-xl bg-slate-50 shadow-sm ring-1 ring-[--jl-border]",
  banner:
    "h-14 w-14 sm:h-16 sm:w-16 rounded-2xl bg-white/95 shadow-lg ring-1 ring-white/50",
  drawer: "h-12 w-12 rounded-2xl bg-slate-50 shadow-sm ring-1 ring-[--jl-border]",
};

const imgPad: Record<keyof typeof shells, string> = {
  nav: "p-[12%]",
  footer: "p-[11%]",
  hero: "p-[10%]",
  section: "p-[12%]",
  banner: "p-[11%]",
  drawer: "p-[12%]",
};

const sizesAttr: Record<keyof typeof shells, string> = {
  nav: "52px",
  footer: "84px",
  hero: "144px",
  section: "48px",
  banner: "64px",
  drawer: "48px",
};

export function BrandMark({
  variant,
  className,
  priority,
}: {
  variant: keyof typeof shells;
  className?: string;
  priority?: boolean;
}) {
  return (
    <span
      className={cn(
        "relative block shrink-0 overflow-hidden",
        shells[variant],
        className,
      )}
    >
      <Image
        src={SITE_LOGO}
        alt="JUSTLIONNE PTY LTD"
        fill
        className={cn("object-contain", imgPad[variant])}
        sizes={sizesAttr[variant]}
        priority={priority}
      />
    </span>
  );
}
