"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { cn } from "@/lib/cn";

const metrics = [
  {
    value: 10,
    suffix: "+",
    label: "Engineering disciplines",
    sub: "One coordinated practice",
    featured: true,
  },
  {
    value: 4,
    suffix: "",
    label: "Delivery stages",
    sub: "Understand → Develop → Coordinate → Support",
  },
  {
    value: 15,
    suffix: "+",
    label: "Sectors served",
    sub: "Industrial, commercial & institutional",
  },
  {
    value: 100,
    suffix: "%",
    label: "Construction-ready",
    sub: "Concept through GFC packages",
  },
];

const capabilities = [
  {
    num: "01",
    title: "One coordinated window",
    hint: "Architecture, structure, civil, and MEP delivered as one construction-ready practice.",
  },
  {
    num: "02",
    title: "Buildable packages",
    hint: "GA, GFC, BOQs, and schedules prepared for tendering and site execution.",
  },
  {
    num: "03",
    title: "Clash-free coordination",
    hint: "Disciplines aligned so junctions and corridors are resolved before construction.",
  },
  {
    num: "04",
    title: "Code & compliance",
    hint: "Statutory, structural, electrical, and fire requirements embedded in design.",
  },
  {
    num: "05",
    title: "Operational performance",
    hint: "Layouts and systems tuned for functionality, maintainability, and energy use.",
  },
  {
    num: "06",
    title: "Execution support",
    hint: "Technical clarifications and revisions that keep construction aligned to intent.",
  },
];

export function Stats() {
  return (
    <section className="border-y border-line bg-white section-y">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Delivery"
            title="How FORMX delivers"
            description="Capabilities that bridge design intent with on-site execution — across industrial, commercial, and institutional projects."
          />
        </Reveal>

        {/* Metrics row */}
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={0.05 * i}>
              <div
                className={cn(
                  "formx-cut-x formx-edge formx-edge-x flex flex-col justify-between border p-5 md:p-6",
                  m.featured
                    ? "border-transparent bg-[#1a1a1a] text-white"
                    : "border-line bg-white",
                )}
              >
                <p
                  className={cn(
                    "font-display text-[2.2rem] font-bold leading-none md:text-[2.8rem]",
                    m.featured ? "text-x-red" : "text-ink",
                  )}
                >
                  <Counter value={m.value} suffix={m.suffix} />
                </p>
                <div className="mt-4">
                  <p
                    className={cn(
                      "font-display text-sm font-bold leading-snug",
                      m.featured ? "text-white" : "text-ink",
                    )}
                  >
                    {m.label}
                  </p>
                  <p
                    className={cn(
                      "mt-1 text-[11px] leading-snug",
                      m.featured ? "text-white/45" : "text-ink-muted",
                    )}
                  >
                    {m.sub}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Capabilities grid */}
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, i) => (
            <Reveal key={item.num} delay={0.04 * (i % 3)}>
              <article className="formx-cut-x formx-edge formx-edge-x x-hover-rail group relative flex h-full min-h-[148px] flex-col justify-between overflow-hidden border border-line bg-white p-5 transition-all duration-300 hover:border-x-red/35 hover:shadow-[0_12px_32px_rgba(222,48,36,0.06)] sm:min-h-[160px] sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-display text-[11px] font-bold tracking-[0.16em] text-ink/25 group-hover:text-x-red">
                    {item.num}
                  </span>
                  <span className="size-1.5 rotate-45 bg-x-red/0 transition-all duration-300 group-hover:bg-x-red" />
                </div>
                <div className="mt-8">
                  <h3 className="font-display text-base font-bold tracking-tight text-ink sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">
                    {item.hint}
                  </p>
                  <span className="mt-4 block h-[2px] w-0 bg-x-red transition-all duration-350 group-hover:w-10" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
