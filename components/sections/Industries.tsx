import { Reveal } from "@/components/motion/Reveal";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeading } from "@/components/ui/Section";

const industries = [
  {
    label: "Mines",
    description:
      "Coal and briquettes supply, on-site material handling, and heavy-haul transport matched to production schedules.",
  },
  {
    label: "Industrial Institutions",
    description:
      "Processed coal, dry bulk handling, and storage support for plants that need consistent fuel and feedstock.",
  },
  {
    label: "Government Departments",
    description:
      "Procurement-ready supply and logistics with clear documentation, compliance focus, and accountable delivery.",
  },
  {
    label: "Private & Public Companies",
    description:
      "End-to-end coal supply, processing, and transport solutions scaled to commercial and institutional demand.",
  },
  {
    label: "Local Municipalities",
    description:
      "Reliable fuel supply and bulk logistics for municipal operations, facilities, and service programmes.",
  },
];

export function Industries() {
  return (
    <Section id="industries" className="relative">
      <Reveal>
        <SectionHeading
          eyebrow="Industries"
          title="Built for regulated, high-stakes operations"
          description="We support clients that require reliable supply, strong delivery controls, and professional reporting—across both private and public sector environments."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {industries.map((item, idx) => (
          <Reveal key={item.label} delay={idx * 0.04}>
            <Card className="group h-full p-6 transition hover:bg-slate-50">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                <span className="size-2 rounded-full bg-[--jl-red] opacity-70 transition group-hover:opacity-100" />
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
