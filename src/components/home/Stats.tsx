"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { formxNumbers } from "@/data/site";

export function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#0d0d0d] py-14 text-white md:py-16">
      <div className="pointer-events-none absolute inset-0 pattern-grid-dark opacity-20" aria-hidden />

      <Container className="relative z-10">
        <Reveal className="mb-8 flex flex-col gap-3 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-x-red" />
              <span className="font-display text-[11px] font-bold uppercase tracking-[0.26em] text-x-red">
                FORMX by Numbers
              </span>
            </div>
            <h2 className="mt-2 font-display text-2xl font-extrabold uppercase tracking-tight text-white md:text-3xl lg:text-4xl">
              Track Record of Industrial Scale
            </h2>
          </div>
          <p className="max-w-[42ch] text-[13px] leading-relaxed text-white/45 md:text-right">
            High-precision GFC packages across industrial hubs, manufacturing complexes, and logistics developments.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 border border-white/10 md:grid-cols-3 lg:grid-cols-6">
          {formxNumbers.map((m, i) => (
            <Reveal
              key={m.label}
              delay={0.04 * i}
              className={`border-white/10 px-4 py-6 md:px-5 md:py-7 ${
                i % 2 !== 0 ? "border-l" : ""
              } ${i >= 2 ? "border-t" : ""} md:border-l md:border-t-0 ${
                i === 0 ? "md:border-l-0" : ""
              } ${i >= 3 ? "lg:border-t-0" : ""}`}
            >
              <p
                className="font-display font-black leading-none text-white"
                style={{ fontSize: "clamp(1.85rem, 2.8vw, 2.75rem)" }}
              >
                <Counter value={m.value} suffix={m.suffix} />
              </p>
              <div className="my-3 h-px w-8 bg-x-red" />
              <h3 className="font-display text-[12px] font-bold uppercase tracking-tight text-white md:text-[13px]">
                {m.label}
              </h3>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/40">
                {m.highlight ?? m.sublabel}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
