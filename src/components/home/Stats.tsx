"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";

const metrics = [
  { value: 15, suffix: "+", label: "Real projects delivered", sub: "Across India" },
  { value: 10, suffix: "+", label: "Engineering disciplines", sub: "One coordinated practice" },
  { value: 4, suffix: "", label: "Project delivery stages", sub: "Concept to site" },
  { value: 100, suffix: "%", label: "Construction-ready", sub: "GFC precision packages" },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#111111]">
      {/* Subtle pattern */}
      <div className="pointer-events-none absolute inset-0 pattern-grid-dark opacity-20" aria-hidden />
      {/* Red ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(800px 400px at 50% 100%, rgba(222,48,36,0.08), transparent 70%)" }}
        aria-hidden
      />

      <Container className="relative py-16 md:py-24">
        {/* Top label */}
        <Reveal className="mb-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-x-red" />
            <span className="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-x-red">
              By the Numbers
            </span>
          </div>
        </Reveal>

        {/* Metrics — massive numbers, no card borders */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={0.07 * i}>
              <div className="group">
                {/* The number */}
                <p
                  className="font-display font-black leading-none text-white transition-colors duration-300 group-hover:text-x-red"
                  style={{ fontSize: "clamp(2.8rem, 5vw, 5rem)" }}
                >
                  <Counter value={m.value} suffix={m.suffix} />
                </p>

                {/* Red divider line */}
                <div className="my-4 h-px w-12 bg-x-red/40 transition-all duration-500 group-hover:w-20 group-hover:bg-x-red" />

                {/* Labels */}
                <p className="font-display text-[13px] font-bold uppercase tracking-tight text-white/80 md:text-[14px]">
                  {m.label}
                </p>
                <p className="mt-1 text-[11px] text-white/30 uppercase tracking-[0.12em]">
                  {m.sub}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
