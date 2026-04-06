import { Reveal } from "@/components/motion/Reveal";
import {
  IconBolt,
  IconHandshake,
  IconShield,
  IconTarget,
  IconTruck,
} from "@/components/icons";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeading } from "@/components/ui/Section";

const reasons = [
  {
    title: "Reliability",
    description: "Disciplined dispatching and delivery execution you can plan around.",
    icon: IconTruck,
  },
  {
    title: "Security",
    description: "Route visibility and monitoring practices for safer movement of loads.",
    icon: IconShield,
  },
  {
    title: "Control",
    description: "Direct oversight to protect timelines, quality standards, and accountability.",
    icon: IconTarget,
  },
  {
    title: "Convenience",
    description: "Supply and transport coordinated under one partner to reduce friction.",
    icon: IconHandshake,
  },
  {
    title: "Flexibility",
    description: "Adaptable capacity and workflows based on site and project needs.",
    icon: IconBolt,
  },
  {
    title: "Cost Efficiency",
    description: "Optimized handling and routing to reduce waste and operational risk.",
    icon: IconBolt,
  },
];

export function WhyChooseUs() {
  return (
    <Section id="why" className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(220,38,38,0.08),transparent_45%)]" />

      <Reveal>
        <SectionHeading
          eyebrow="Why choose us"
          title="Operational control, premium communication, dependable outcomes"
          description="We bring a corporate-grade approach to mining and logistics: transparent processes, responsible handling, and delivery you can trust."
          align="center"
        />
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, idx) => {
          const I = r.icon;
          return (
            <Reveal key={r.title} delay={idx * 0.035}>
              <Card className="group h-full p-7 transition hover:-translate-y-0.5 hover:bg-slate-50">
                <div className="flex items-start gap-4">
                  <span className="grid size-12 place-items-center rounded-2xl bg-[rgba(220,38,38,0.10)] text-[--jl-red] ring-1 ring-[rgba(220,38,38,0.22)] transition group-hover:bg-[rgba(220,38,38,0.14)]">
                    <I className="size-5" />
                  </span>
                  <div>
                    <p className="text-base font-semibold text-slate-900">{r.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {r.description}
                    </p>
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

