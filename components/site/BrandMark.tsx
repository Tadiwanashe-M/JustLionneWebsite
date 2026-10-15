import Image from "next/image";
import { cn } from "@/lib/utils";
import { SITE_LOGO } from "@/lib/site-images";

const shells: Record<
  "nav" | "footer" | "hero" | "section" | "banner" | "drawer",
  string
> = {
  nav: "h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-white shadow-sm ring-1 ring-[--jl-border]",
  footer:
    "h-[5rem] w-[5rem] sm:h-[5.75rem] sm:w-[5.75rem] rounded-2xl bg-white shadow-md ring-1 ring-[--jl-border]",
  hero: "h-32 w-32 sm:h-40 sm:w-40 rounded-3xl bg-white shadow-md ring-1 ring-[--jl-border]",
  section: "h-14 w-14 rounded-xl bg-white shadow-sm ring-1 ring-[--jl-border]",
  banner:
    "h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem] rounded-2xl bg-white/95 shadow-lg ring-1 ring-white/50",
  drawer: "h-14 w-14 rounded-2xl bg-white shadow-sm ring-1 ring-[--jl-border]",
};

const imgPad: Record<keyof typeof shells, string> = {
  nav: "p-[5%]",
  footer: "p-[4%]",
  hero: "p-[3%]",
  section: "p-[5%]",
  banner: "p-[4%]",
  drawer: "p-[5%]",
};

const sizesAttr: Record<keyof typeof shells, string> = {
  nav: "56px",
  footer: "92px",
  hero: "160px",
  section: "56px",
  banner: "72px",
  drawer: "56px",
};

/** Variants large enough for a legible typed tagline under the mark. */
const captionByDefault: Record<keyof typeof shells, boolean> = {
  nav: false,
  drawer: false,
  section: false,
  banner: true,
  footer: true,
  hero: true,
};

const captionScale: Record<keyof typeof shells, string> = {
  nav: "text-[7px] tracking-[0.14em]",
  drawer: "text-[7px] tracking-[0.14em]",
  section: "text-[7px] tracking-[0.14em]",
  banner: "text-[8px] sm:text-[9px] tracking-[0.16em]",
  footer: "text-[8px] sm:text-[9px] tracking-[0.16em]",
  hero: "text-[9px] sm:text-[10px] tracking-[0.18em]",
};

function BrandCaption({
  variant,
  onDark,
}: {
  variant: keyof typeof shells;
  onDark?: boolean;
}) {
  return (
    <span
      className={cn(
        // Matches original lockup: short gap after wordmark → thin red rule → tagline
        "mt-[0.55em] flex w-[min(100%,13.5rem)] flex-col items-center sm:w-[min(100%,15.5rem)]",
        variant === "hero" && "w-[min(100%,16.5rem)] sm:w-[min(100%,18.5rem)]",
        variant === "footer" && "w-[min(100%,14.5rem)] sm:w-[min(100%,16.5rem)]",
      )}
    >
      <span
        className="h-px w-[78%] bg-gradient-to-r from-transparent via-[--jl-red] to-transparent"
        aria-hidden
      />
      <span
        className={cn(
          "mt-[0.65em] text-center font-semibold uppercase leading-[1.35]",
          captionScale[variant],
          onDark ? "text-white/92" : "text-slate-900",
        )}
      >
        Roaring with Quality,{" "}
        <span className="text-[--jl-red]">Delivering</span> with Pride
      </span>
    </span>
  );
}

export function BrandMark({
  variant,
  className,
  priority,
  caption,
}: {
  variant: keyof typeof shells;
  className?: string;
  priority?: boolean;
  /** Typed tagline under the mark. Defaults on for hero / footer / banner. */
  caption?: boolean;
}) {
  const showCaption = caption ?? captionByDefault[variant];
  const onDark = variant === "banner";

  return (
    <span
      className={cn(
        "inline-flex shrink-0 flex-col items-center",
        className,
      )}
    >
      <span
        className={cn(
          "relative block overflow-hidden",
          shells[variant],
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
      {showCaption ? <BrandCaption variant={variant} onDark={onDark} /> : null}
    </span>
  );
}
