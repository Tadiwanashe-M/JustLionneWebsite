import { Reveal } from "@/components/motion/Reveal";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeading } from "@/components/ui/Section";

const industries = [
  "Mines",
  "Industrial Institutions",
  "Government Departments",
  "Private & Public Companies",
  "Local Municipalities",
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
        {industries.map((label, idx) => (
          <Reveal key={label} delay={idx * 0.04}>
            <Card className="group h-full p-6 transition hover:bg-slate-50">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold text-slate-900">{label}</p>
                <span className="size-2 rounded-full bg-[--jl-red] opacity-70 transition group-hover:opacity-100" />
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Structured service delivery with clear communication and dependable
                lead times.
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

