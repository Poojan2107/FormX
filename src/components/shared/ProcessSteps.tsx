import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export type ProcessStep = {
  num: string;
  title: string;
  body: string;
};

const defaultSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Concept & Zoning",
    body: "Operational flow analysis, master planning, statutory setback compliance, and preliminary structural grid definition.",
  },
  {
    num: "02",
    title: "Schematic Engineering",
    body: "Architecture, Structure and Infrastructure coordinated against the same facility reality before issue.",
  },
  {
    num: "03",
    title: "Tender & GFC Package",
    body: "Construction-ready GFC drawings, calculation reports, BOQ, and tender technical specs.",
  },
  {
    num: "04",
    title: "Site Execution Support",
    body: "Technical clarifications, shop drawing reviews, revisions, and on-site engineering verification.",
  },
];

export function ProcessSteps({
  steps = defaultSteps,
  eyebrow = "Delivery methodology",
  title = "Concept to construction",
  description = "A disciplined workflow for Architecture, Structure and Infrastructure — from concept through site support.",
}: {
  steps?: ProcessStep[];
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section className="border-t border-line bg-white py-14 md:py-18">
      <Container>
        <Reveal className="mb-8 max-w-2xl md:mb-10">
          <span className="font-display text-[11px] font-bold uppercase tracking-[0.22em] text-x-red">
            {eyebrow}
          </span>
          <h2 className="mt-2 font-display text-2xl font-extrabold uppercase tracking-tight text-ink md:text-3xl">
            {title}
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">{description}</p>
        </Reveal>

        <div className="grid border border-line sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal
              key={s.num}
              delay={0.04 * i}
              className={`border-line p-5 md:p-6 ${
                i > 0 ? "border-t sm:border-t-0 sm:border-l" : ""
              } ${i >= 2 ? "lg:border-t-0" : ""} ${i === 2 ? "sm:border-t lg:border-t-0" : ""}`}
            >
              <p className="font-display text-[11px] font-bold text-x-red">
                {s.num}
              </p>
              <h3 className="mt-2 font-display text-base font-bold uppercase tracking-tight text-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
