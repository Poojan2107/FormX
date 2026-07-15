"use client";

import { processSteps } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function Process() {
  return (
    <section className="bg-white section-y">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title="Our development process"
            description="A structured, design-first approach that reduces delivery risk and keeps industrial projects predictable from concept to site."
          />
        </Reveal>

        <div className="relative mt-10">
          <div
            className="pointer-events-none absolute left-0 right-0 top-[1.65rem] z-0 hidden h-px bg-line lg:block"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-0 top-[1.65rem] z-0 hidden h-px w-full bg-gradient-to-r from-x-red via-x-red/40 to-transparent lg:block"
            aria-hidden
          />

          <ol className="relative z-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3">
            {processSteps.map((step, i) => (
              <Reveal key={step.num} delay={0.06 * i}>
                <li
                  className={cn(
                    "formx-cut-x formx-edge formx-edge-x x-hover-rail group flex h-full flex-col border border-line bg-white p-5 transition-all duration-300 hover:border-x-red/45 hover:shadow-[0_12px_40px_rgba(222,48,36,0.06)] sm:p-6",
                  )}
                >
                  <div className="mb-6 flex items-center gap-3">
                    <span className="formx-cut-sm formx-edge formx-edge-sm relative flex size-12 shrink-0 items-center justify-center bg-x-red font-display text-lg font-bold text-white transition-transform duration-300 group-hover:scale-105">
                      {step.num}
                    </span>
                  </div>

                  <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-ink/30 transition-colors group-hover:text-x-red">
                    Step {step.num}
                  </p>
                  <h3 className="mt-2 font-display text-[17px] font-bold leading-snug tracking-tight text-ink md:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[13px] leading-[1.7] text-ink-muted">
                    {step.body}
                  </p>

                  <span className="mt-6 h-[2px] w-0 bg-x-red transition-all duration-350 group-hover:w-10" />
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
