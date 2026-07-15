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
          {/* Progress line — desktop */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-[1.65rem] z-0 hidden h-px bg-line lg:block"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-0 top-[1.65rem] z-0 hidden h-px w-full bg-gradient-to-r from-x-red via-x-red/40 to-transparent lg:block"
            aria-hidden
          />

          <ol className="relative z-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {processSteps.map((step, i) => (
              <Reveal key={step.num} delay={0.06 * i}>
                <li
                  className={cn(
                    "group flex h-full flex-col border border-line bg-white p-5 transition-all duration-300 hover:border-x-red/50 hover:shadow-[0_12px_40px_rgba(0,0,0,0.04)] sm:p-6",
                    "lg:border-y lg:border-l-0 lg:border-r lg:border-line lg:first:border-l lg:hover:border-x-red/50 lg:hover:bg-[#fafafa]",
                  )}
                >
                  <div className="mb-6 flex items-center gap-3">
                    <span className="relative flex size-12 shrink-0 items-center justify-center bg-x-red font-display text-lg font-bold text-white transition-transform duration-300 group-hover:scale-105">
                      {step.num}
                    </span>
                    <span className="hidden h-px flex-1 bg-line lg:block" aria-hidden />
                  </div>

                  <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-ink/30">
                    Step {step.num}
                  </p>
                  <h3 className="mt-2 font-display text-[17px] font-bold leading-snug tracking-tight text-ink md:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[13px] leading-[1.7] text-ink-muted">
                    {step.body}
                  </p>

                  <span className="mt-6 h-[2px] w-0 bg-x-red transition-all duration-300 group-hover:w-10" />
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
