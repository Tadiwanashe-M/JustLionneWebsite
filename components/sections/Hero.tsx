import { Reveal } from "@/components/motion/Reveal";
import { BrandMark } from "@/components/site/BrandMark";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[--jl-bg] pt-10 sm:pt-14">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#f8fafc,transparent_45%,#f8fafc)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(220,38,38,0.12),transparent_55%),radial-gradient(circle_at_85%_25%,rgba(15,23,42,0.06),transparent_55%)]" />
        <div className="absolute -top-24 left-1/2 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-[--jl-red]/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-900/10 to-transparent" />
      </div>

      <Container className="relative pb-16 sm:pb-20 lg:pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6">
                <BrandMark variant="hero" />
                <div className="inline-flex items-center gap-3 rounded-full bg-white/90 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-700 ring-1 ring-[--jl-border] shadow-sm backdrop-blur">
                  <span className="size-1.5 shrink-0 rounded-full bg-[--jl-red]" />
                  Mining & Logistics (South Africa)
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Roaring with Quality.
                <span className="block text-[--jl-red]">
                  Delivering with Pride.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              JUSTLIONNE PTY LTD delivers efficient logistics and coal supply chain 
solutions—powered by reliable transport, bulk handling, and processing
 for mines, industry, and government.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href="#contact" variant="quote">
                  Get a Quote
                </ButtonLink>
                <ButtonLink href="#services" variant="secondary">
                  Our Services
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 grid max-w-xl grid-cols-2 gap-4">
                {[
                  { k: "Established", v: "2022" },
                  { k: "Focus", v: "Mining + Logistics" },
                ].map((s) => (
                  <div
                    key={s.k}
                    className="rounded-2xl bg-white/80 p-4 ring-1 ring-[--jl-border] backdrop-blur"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      {s.k}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-slate-900">
                      {s.v}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="relative">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl bg-white/85 ring-1 ring-[--jl-border] shadow-sm backdrop-blur">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(220,38,38,0.10),transparent_55%),radial-gradient(circle_at_80%_45%,rgba(15,23,42,0.06),transparent_65%)]" />
                <div className="relative p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Operational capabilities
                  </p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {[
                      {
                        t: "Coal supply & processing",
                        d: "Crushing, washing, screening, and quality control.",
                      },
                      {
                        t: "Dry bulk handling",
                        d: "Coal, maize, chemicals, and industrial commodities.",
                      },
                      {
                        t: "Transport & storage",
                        d: "End-to-end logistics with scheduling and oversight.",
                      },
                      {
                        t: "Maintenance support",
                        d: "Equipment upkeep for consistent uptime and safety.",
                      },
                    ].map((c) => (
                      <div
                        key={c.t}
                        className="rounded-2xl bg-white p-5 ring-1 ring-[--jl-border]"
                      >
                        <p className="text-sm font-semibold text-slate-900">{c.t}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {c.d}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl bg-[--jl-red]/5 p-5 ring-1 ring-[rgba(220,38,38,0.22)]">
                    <p className="text-sm font-semibold text-slate-900">
                      Enterprise-ready delivery
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Transparent communication, consistent lead times, and a
                      safety-first operating culture.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

