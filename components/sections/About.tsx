import { Reveal } from "@/components/motion/Reveal";
import { BrandMark } from "@/components/site/BrandMark";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeading } from "@/components/ui/Section";
import { IconBolt, IconHandshake, IconShield, IconTarget } from "@/components/icons";
import Image from "next/image";
import { SITE_FLEET_TRUCK } from "@/lib/site-images";

const values = [
  { t: "Reliability", icon: IconShield, d: "On-time execution backed by disciplined operations." },
  { t: "Commitment", icon: IconTarget, d: "Focused delivery aligned to client requirements." },
  { t: "Integrity", icon: IconHandshake, d: "Transparent, professional, and accountable service." },
  { t: "Commercial Value", icon: IconBolt, d: "Solutions designed to reduce risk and cost." },
];

export function About() {
  return (
    <Section id="about" className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(220,38,38,0.06),transparent_45%)]" />

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
            <BrandMark variant="section" className="sm:mt-0.5" />
            <div className="min-w-0 flex-1">
              <SectionHeading
                eyebrow="About"
                title="A focused mining and logistics partner"
                description="Established in 2022, JUSTLIONNE PTY LTD operates across Mining and Logistics divisions—built to serve mines, industrial institutions, and public sector procurement with a premium, compliant approach."
              />
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-slate-100 ring-1 ring-[--jl-border] shadow-md">
              <div className="relative aspect-[4/5] max-h-[min(520px,70vh)] w-full sm:aspect-[5/6] sm:max-h-[560px]">
                <Image
                  src={SITE_FLEET_TRUCK}
                  alt="JUSTLIONNE heavy-duty bulk transport — modern tractor and side-tipper trailer at a mining site"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 42rem"
                />
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.88),transparent_50%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/85">
                  Fleet & equipment
                </p>
                <p className="mt-2 text-base font-semibold text-white">
                  Built for bulk commodities and tough site conditions
                </p>
                <p className="mt-2 text-sm leading-6 text-white/90">
                  Our trucks are well maintained, customised for long distances, and
                  equipped with a modern tracking system.
                </p>
                <p className="mt-2 text-sm leading-6 text-white/85">
                  Side-tipper and heavy-haul capability aligned to coal, maize, and
                  industrial dry-bulk movements—with the same discipline we apply
                  across mining and logistics operations.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            <Reveal>
              <Card className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Mission
                </p>
                <p className="mt-3 text-base font-semibold text-slate-900">
                  Provide reliable supply, processing, handling, and transport—safely,
                  efficiently, and with pride.
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  We align resources, people, and processes to deliver consistent results
                  for high-stakes industrial operations.
                </p>
              </Card>
            </Reveal>

            <Reveal delay={0.05}>
              <Card className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Vision
                </p>
                <p className="mt-3 text-base font-semibold text-slate-900">
                  Become a trusted, enterprise-grade partner in South African mining and
                  logistics.
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Known for operational control, safety, and dependable outcomes across
                  the value chain.
                </p>
              </Card>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v, idx) => {
          const I = v.icon;
          return (
            <Reveal key={v.t} delay={idx * 0.04}>
              <Card className="group h-full p-6 transition hover:bg-slate-50">
                <div className="flex items-start gap-4">
                  <span className="grid size-11 place-items-center rounded-2xl bg-[rgba(220,38,38,0.10)] text-[--jl-red] ring-1 ring-[rgba(220,38,38,0.22)] transition group-hover:bg-[rgba(220,38,38,0.14)]">
                    <I className="size-5" />
                  </span>
                  <div>
                    <p className="text-base font-semibold text-slate-900">{v.t}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{v.d}</p>
                  </div>
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

