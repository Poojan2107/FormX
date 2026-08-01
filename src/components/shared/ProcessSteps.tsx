import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    num: "01",
    title: "Concept & Zoning",
    body: "Operational flow analysis, master planning, statutory setback compliance, and preliminary structural grid definition.",
  },
  {
    num: "02",
    title: "Schematic Engineering",
    body: "Multi-discipline 3D BIM coordination aligning RCC/steel structural frames with HVAC ducting, piping, and electrical risers.",
  },
  {
    num: "03",
    title: "Tender & GFC Package",
    body: "100% construction-ready GFC drawings, structural calculation reports, bill of quantities (BOQ), and tender technical specs.",
  },
  {
    num: "04",
    title: "Site Execution Support",
    body: "Continuous technical clarifications, shop drawing reviews, structural revisions, and on-site engineering verification.",
  },
];

export function ProcessSteps() {
  return (
    <section className="border-t border-line bg-white py-16 md:py-24">
      <Container>
        <Reveal>
          <div className="mb-12 prose-measure">
            <span className="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-x-red">
              FormX Delivery Methodology
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
              01 to 04 Process — Concept to Construction
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-ink-muted">
              A disciplined 4-stage engineering workflow ensuring zero clash rework and 100% constructability on site.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={0.05 * i} className="h-full">
              <div className="formx-cut-x formx-edge formx-edge-x group flex h-full flex-col justify-between border border-line bg-[#fafafa] p-6 transition-all hover:border-x-red/40 hover:bg-white hover:shadow-md">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display text-xs font-bold text-x-red">
                      STAGE {s.num}
                    </span>
                    <span className="size-2 rotate-45 bg-x-red/40" />
                  </div>
                  <h3 className="font-display text-lg font-bold uppercase text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-[13px] leading-[1.7] text-ink-muted">
                    {s.body}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-line/60 text-[10px] font-bold uppercase tracking-wider text-x-red">
                  Stage {s.num} Deliverable →
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
