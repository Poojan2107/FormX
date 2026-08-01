"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { formxNumbers } from "@/data/site";

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#0d0d0d] py-20 md:py-28 text-white border-y border-white/10">
      {/* Background texture & ambient glow */}
      <div className="pointer-events-none absolute inset-0 pattern-grid-dark opacity-25" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(900px 500px at 50% 50%, rgba(222,48,36,0.1), transparent 70%)" }}
        aria-hidden
      />

      <Container className="relative z-10">
        {/* Top Header */}
        <Reveal className="mb-14 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <span className="h-px w-8 bg-x-red" />
            <span className="font-display text-[11px] font-bold uppercase tracking-[0.26em] text-x-red">
              FORMX by Numbers
            </span>
          </div>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-white md:text-4xl lg:text-5xl">
            Track Record of Industrial Scale
          </h2>
          <p className="mt-3 max-w-[70ch] text-[14px] leading-relaxed text-white/50">
            Delivering high-precision GFC packages across major industrial hubs, manufacturing complexes, and logistics developments in India.
          </p>
        </Reveal>

        {/* 6 Metrics Grid — Clean 3-col Grid */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:gap-x-10 lg:gap-y-14">
          {formxNumbers.map((m, i) => (
            <Reveal key={m.label} delay={0.05 * i}>
              <div className="group formx-cut-x formx-edge formx-edge-x relative border border-white/10 bg-white/5 p-6 md:p-8 transition-all duration-300 hover:border-x-red/50 hover:bg-white/[0.08] hover:shadow-[0_12px_40px_rgba(222,48,36,0.15)]">
                {/* Metric Number */}
                <div className="flex items-baseline gap-1">
                  <p
                    className="font-display font-black leading-none text-white transition-colors duration-300 group-hover:text-x-red"
                    style={{ fontSize: "clamp(2.6rem, 4.5vw, 4.2rem)" }}
                  >
                    <Counter value={m.value} suffix={m.suffix} />
                  </p>
                </div>

                {/* Accent Divider Line */}
                <div className="my-4 h-px w-10 bg-x-red/50 transition-all duration-500 group-hover:w-16 group-hover:bg-x-red" />

                {/* Title & Sublabel */}
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-white md:text-lg">
                  {m.label}
                </h3>
                <p className="mt-1 text-[11px] font-semibold text-white/40 uppercase tracking-[0.14em]">
                  {m.highlight ?? m.sublabel}
                </p>

                {/* Red Left Accent */}
                <span className="absolute left-0 top-0 h-full w-[2px] bg-x-red opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
