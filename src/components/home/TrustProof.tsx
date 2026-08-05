"use client";

import { portfolioPillars } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { XRule } from "@/components/ui/XMotif";

/**
 * FORM× by Numbers — Hiren keep:
 * 25+ / 15 Lakh+ / 5 States as primary (animated).
 */
const metrics = [
  { value: 25, suffix: "+", label: "Completed Projects" },
  { value: 15, suffix: " Lakh+", label: "Sq.Ft Designed" },
  { value: 5, suffix: "", label: "States Served" },
];

export function TrustProof() {
  return (
    <section className="border-b border-line bg-white py-20 md:py-28">
      <Container>
        <Reveal>
          <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
            Form× by Numbers
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
            Proof you can measure
          </h2>
          <XRule className="mt-6 max-w-xs" />
        </Reveal>

        <div className="mt-14 grid gap-12 border-b border-line pb-16 sm:grid-cols-3 sm:gap-8">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={0.06 * i}>
              <p
                className="font-display font-black leading-none tracking-tight text-ink"
                style={{ fontSize: "clamp(3.5rem, 9vw, 6rem)" }}
              >
                <AnimatedCounter value={m.value} suffix={m.suffix} />
              </p>
              <p className="mt-4 font-display text-[12px] font-bold uppercase tracking-[0.22em] text-ink/40">
                {m.label}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {portfolioPillars.map((p, i) => (
            <Reveal key={p.title} delay={0.04 * i}>
              <div className="relative pl-4 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-x-red/40">
                <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-x-red">
                  0{i + 1}
                </p>
                <p className="mt-2 font-display text-sm font-extrabold uppercase tracking-tight text-ink">
                  {p.title}
                </p>
                <p className="mt-2 max-w-[28ch] text-[13px] leading-[1.7] text-ink-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-x-10 gap-y-3 border-t border-line pt-8">
          <p className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-ink/45">
            Seismic &amp; wind code certified
          </p>
          <p className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-ink/45">
            Construction-ready deliverables
          </p>
        </div>
      </Container>
    </section>
  );
}
