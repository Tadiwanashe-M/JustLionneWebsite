import { Reveal } from "@/components/motion/Reveal";
import { IconPickaxe, IconTruck } from "@/components/icons";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeading } from "@/components/ui/Section";
import Image from "next/image";
import { SITE_FLEET_TRUCK } from "@/lib/site-images";

type Service = { title: string; description: string };

const mining: Service[] = [
  { title: "Coal Crushing", description: "Consistent sizing for downstream handling and combustion requirements." },
  { title: "Coal Washing & Screening", description: "Improved quality control through washing and grading." },
  { title: "Coal Supply", description: "Reliable supply aligned to client specifications and lead times." },
  { title: "Material Handling", description: "Safe loading, offloading, stockpiling, and movement workflows." },
  { title: "Mining Consultancy", description: "Operational guidance for efficiency, compliance, and delivery planning." },
  { title: "Purchase, Process & Resell", description: "Value-added procurement and processing for optimized pricing." },
];

const logistics: Service[] = [
  { title: "End-to-End Transport", description: "Planning, dispatch, and execution across supply routes." },
  { title: "Storage", description: "Secure, organized storage for improved availability and control." },
  { title: "Dry Bulk Handling", description: "Coal, maize, chemicals, and industrial commodities—handled responsibly." },
  { title: "Equipment Maintenance", description: "Maintenance support to reduce downtime and improve safety." },
];

function ServiceCard({
  s,
  icon,
  accent = "gold",
}: {
  s: Service;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  accent?: "gold" | "blue";
}) {
  const accentClass =
    accent === "gold"
      ? "bg-[rgba(220,38,38,0.10)] text-[--jl-red] ring-[rgba(220,38,38,0.22)]"
      : "bg-slate-100 text-slate-700 ring-[--jl-border]";
  const I = icon;

  return (
    <Card className="group h-full p-6 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-50">
      <div className="flex items-start gap-4">
        <span
          className={`grid size-11 place-items-center rounded-2xl ring-1 ${accentClass} transition group-hover:scale-[1.02]`}
        >
          <I className="size-5" />
        </span>
        <div>
          <p className="text-base font-semibold text-slate-900">{s.title}</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">{s.description}</p>
        </div>
      </div>
    </Card>
  );
}

export function Services() {
  return (
    <Section id="services" className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-slate-100 via-white to-[--jl-bg] ring-1 ring-[--jl-border] shadow-sm" />
      <Reveal>
        <SectionHeading
          eyebrow="Services"
          title="Mining and logistics services designed for reliability"
          description="Two specialized divisions, one accountable partner. Every service is delivered with operational control, safety discipline, and premium client communication."
          align="center"
        />
      </Reveal>

      <Reveal delay={0.06}>
        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-md">
          <div className="grid lg:grid-cols-12">
            <div className="relative min-h-[220px] lg:col-span-5 lg:min-h-[260px]">
              <Image
                src={SITE_FLEET_TRUCK}
                alt="JUSTLIONNE logistics fleet — heavy-duty tractor and side-tipper for bulk commodities"
                fill
                className="object-cover object-[center_40%] sm:object-[center_35%]"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
            <div className="flex flex-col justify-center border-t border-white/10 p-8 lg:col-span-7 lg:border-l lg:border-t-0 lg:px-10 lg:py-10">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[--jl-red-2]">
                On the road
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                Fleet matched to mining and bulk logistics
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/80">
                Modern tractor units and side-tipper trailers for coal, maize, and
                industrial dry bulk—planned dispatch, disciplined execution, and
                professional oversight from load to delivery.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-2xl bg-[rgba(220,38,38,0.10)] text-[--jl-red] ring-1 ring-[rgba(220,38,38,0.22)]">
                <IconPickaxe className="size-5" />
              </span>
              <div>
                <p className="text-lg font-semibold text-slate-900">Mining Division</p>
                <p className="text-sm text-slate-600">Processing, handling, and coal supply</p>
              </div>
            </div>
          </Reveal>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {mining.map((s, idx) => (
              <Reveal key={s.title} delay={idx * 0.03}>
                <ServiceCard s={s} icon={IconPickaxe} accent="gold" />
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-2xl bg-slate-100 text-slate-700 ring-1 ring-[--jl-border]">
                <IconTruck className="size-5" />
              </span>
              <div>
                <p className="text-lg font-semibold text-slate-900">Logistics Division</p>
                <p className="text-sm text-slate-600">Transport, storage, and dry bulk handling</p>
              </div>
            </div>
          </Reveal>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {logistics.map((s, idx) => (
              <Reveal key={s.title} delay={idx * 0.03}>
                <ServiceCard s={s} icon={IconTruck} accent="blue" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

