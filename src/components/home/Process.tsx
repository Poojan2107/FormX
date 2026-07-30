"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { processSteps } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

// Deliverables per stage (matches processSteps)
const stageDetails: Record<
  string,
  { deliverables: string[]; callout: string }
> = {
  "1": {
    callout:
      "Every project begins with listening — understanding your site, capacity intent, regulatory requirements, and timeline before any drawing begins.",
    deliverables: [
      "Site and facility requirement brief",
      "Regulatory and statutory review",
      "Discipline scope confirmation",
      "Project timeline and milestone plan",
    ],
  },
  "2": {
    callout:
      "Concepts, structural strategies, and utility systems take shape — coordinated between architecture, structure, and MEP from day one.",
    deliverables: [
      "Concept layouts and massing",
      "Structural system selection",
      "MEP design basis and routing",
      "Coordinated design development drawings",
    ],
  },
  "3": {
    callout:
      "All disciplines are aligned and clash-resolved into a single construction-ready package — GA drawings, GFC sets, BOQs, and schedules.",
    deliverables: [
      "General arrangement (GA) drawings",
      "Good for construction (GFC) packages",
      "Bill of quantities and schedules",
      "Tender documentation",
    ],
  },
  "4": {
    callout:
      "Design support continues on site — technical clarifications, revision management, and vendor data integration to keep construction aligned with intent.",
    deliverables: [
      "Construction-stage clarifications",
      "Drawing revisions and shop drawing review",
      "Vendor data review and integration",
      "As-built documentation support",
    ],
  },
};

export function Process() {
  const [active, setActive] = useState("1");
  const detail = stageDetails[active];
  const activeStep = processSteps.find((s) => s.num === active);

  return (
    <section className="bg-white section-y">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title="Our development process"
            description="Understand requirements, develop concepts, coordinate disciplines, and support execution — the same rhythm across every FORMX package."
          />
        </Reveal>

        {/* Step selector — horizontal tabs */}
        <Reveal delay={0.06}>
          <div className="relative mt-10">
            {/* Connector line */}
            <div
              className="pointer-events-none absolute left-0 right-0 top-[2.2rem] z-0 hidden h-px bg-line lg:block"
              aria-hidden
            />

            <ol className="relative z-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-0">
              {processSteps.map((step) => {
                const isActive = active === step.num;
                return (
                  <li key={step.num}>
                    <button
                      type="button"
                      onClick={() => setActive(step.num)}
                      className={cn(
                        "group w-full text-left transition-all duration-200",
                        "lg:pr-4",
                      )}
                      aria-current={isActive ? "step" : undefined}
                    >
                      {/* Step number badge */}
                      <div className="mb-4 flex items-center gap-3">
                        <span
                          className={cn(
                            "formx-cut-sm relative flex size-[2.6rem] shrink-0 items-center justify-center font-display text-base font-bold transition-all duration-200",
                            isActive
                              ? "bg-x-red text-white shadow-[0_4px_16px_rgba(222,48,36,0.3)]"
                              : "border border-line bg-white text-ink/40 group-hover:border-x-red/50 group-hover:text-x-red",
                          )}
                        >
                          {step.num}
                        </span>
                        {/* Progress dot on desktop */}
                        <span
                          className={cn(
                            "hidden h-px flex-1 transition-colors duration-300 lg:block",
                            isActive ? "bg-x-red" : "bg-transparent",
                          )}
                        />
                      </div>
                      <p
                        className={cn(
                          "font-display text-[10px] font-bold uppercase tracking-[0.18em] transition-colors",
                          isActive ? "text-x-red" : "text-ink/30 group-hover:text-x-red/60",
                        )}
                      >
                        Step {step.num}
                      </p>
                      <h3
                        className={cn(
                          "mt-1 font-display text-sm font-bold tracking-tight transition-colors sm:text-base md:text-[17px]",
                          isActive ? "text-ink" : "text-ink/55 group-hover:text-ink",
                        )}
                      >
                        {step.title}
                      </h3>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </Reveal>

        {/* Expanded detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 grid overflow-hidden border border-line md:grid-cols-[1fr_auto]"
          >
            {/* Left: content */}
            <div className="formx-cut-x formx-edge formx-edge-x bg-white p-6 md:p-8 lg:p-10">
              <p className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-x-red">
                Stage {active} of {processSteps.length}
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
                {activeStep?.title}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-[1.75] text-ink-muted">
                {detail.callout}
              </p>

              <div className="mt-8">
                <p className="mb-4 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-ink/40">
                  Key deliverables
                </p>
                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {detail.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-x-red" />
                      <span className="text-[14px] text-ink-muted">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact" variant="primary" className="gap-2">
                  Start a project
                  <ArrowRight className="size-4" />
                </Button>
                <Button href="/services" variant="outline">
                  View all services
                </Button>
              </div>
            </div>

            {/* Right: step overview strip */}
            <div className="hidden border-l border-line bg-[#1a1a1a] p-6 lg:block lg:w-56 xl:w-64">
              <p className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-x-red">
                All stages
              </p>
              <ol className="mt-5 space-y-1">
                {processSteps.map((step) => (
                  <li key={step.num}>
                    <button
                      type="button"
                      onClick={() => setActive(step.num)}
                      className={cn(
                        "group flex w-full items-start gap-3 rounded-sm px-2 py-2.5 text-left transition-colors",
                        active === step.num
                          ? "bg-white/[0.08]"
                          : "hover:bg-white/[0.04]",
                      )}
                    >
                      <span
                        className={cn(
                          "mt-0.5 font-display text-[11px] font-bold tabular-nums",
                          active === step.num ? "text-x-red" : "text-white/30",
                        )}
                      >
                        {step.num}
                      </span>
                      <span
                        className={cn(
                          "text-[12px] font-medium leading-snug",
                          active === step.num
                            ? "text-white"
                            : "text-white/40 group-hover:text-white/60",
                        )}
                      >
                        {step.title}
                      </span>
                    </button>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
