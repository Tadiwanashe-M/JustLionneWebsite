import { Reveal } from "@/components/motion/Reveal";
import { BrandMark } from "@/components/site/BrandMark";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function CTABanner() {
  return (
    <Section className="py-12 sm:py-14">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-8 ring-1 ring-slate-900/10 sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(220,38,38,0.35),transparent_60%),radial-gradient(circle_at_80%_40%,rgba(255,255,255,0.12),transparent_60%)]" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex max-w-2xl flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
              <BrandMark variant="banner" className="shrink-0" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
                  Ready to partner?
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Partner with a reliable coal supplier and logistics provider
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/80 sm:text-base">
                  Request a quote and we’ll respond with clear timelines, service scope,
                  and the operational approach to support your site.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#contact" variant="quote">
                Request a Quote
              </ButtonLink>
              <ButtonLink
                href="#services"
                variant="secondary"
                className="bg-white text-slate-900 shadow-lg ring-2 ring-white hover:bg-slate-100 hover:ring-slate-200"
              >
                View Services
              </ButtonLink>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

