"use client";

import { portfolioPillars } from "@/data/portfolio";
import { trustMetrics } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Founder: stats AFTER scroll only (home_comment_p1 / p2).
 * Keep 25+ / 15 Lakh+ / 5 States. Jacobs-like large numbers on white.
 * No inflated crossed metrics.
 */
export function TrustProof() {
  return (
    <section className="border-b border-line bg-white py-16 md:py-24">
      <Container>
        <Reveal>
          <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
            How we work
          </p>
          <h2 className="mt-2 max-w-2xl font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
            Technical proficiency with practical wisdom
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 border-b border-line pb-12 sm:grid-cols-2 lg:grid-cols-4">
          {portfolioPillars.map((p, i) => (
            <Reveal key={p.title} delay={0.04 * i}>
              <p className="font-display text-[11px] font-bold uppercase tracking-[0.16em] text-x-red">
                0{i + 1}
              </p>
              <p className="mt-2 font-display text-sm font-extrabold uppercase tracking-tight text-ink">
                {p.title}
              </p>
              <p className="mt-2 text-[13px] leading-[1.75] text-ink-muted">{p.body}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-12 sm:grid-cols-3">
          {trustMetrics.map((m, i) => (
            <Reveal key={m.label} delay={0.06 * i}>
              <p
                className="font-display font-black tracking-tight text-ink"
                style={{ fontSize: "clamp(2.75rem, 6.5vw, 4.75rem)" }}
              >
                {m.value}
              </p>
              <p className="mt-2 font-display text-[12px] font-bold uppercase tracking-[0.2em] text-ink/40">
                {m.label}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-3 border-t border-line pt-8">
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
