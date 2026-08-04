"use client";

import { portfolioPillars } from "@/data/portfolio";
import { trustMetrics } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/** V3 — quiet trust: how we work + sparse metrics after scroll identity */
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
          <p className="mt-4 max-w-2xl text-[15px] leading-[1.85] text-ink-muted">
            Structural integrity, functional design, technical expertise and collaborative insight —
            the same four pillars that guide every review inside the studio.
          </p>
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

        <div className="mt-12 grid gap-12 sm:grid-cols-3">
          {trustMetrics.map((m, i) => (
            <Reveal key={m.label} delay={0.06 * i}>
              <p
                className="font-display font-black tracking-tight text-ink"
                style={{ fontSize: "clamp(2.75rem, 6vw, 4.5rem)" }}
              >
                {m.value}
              </p>
              <p className="mt-2 font-display text-[12px] font-bold uppercase tracking-[0.2em] text-ink/40">
                {m.label}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-8">
          <p className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-ink/50">
            Seismic &amp; wind code certified
          </p>
          <p className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-ink/50">
            Construction-ready deliverables
          </p>
        </div>
      </Container>
    </section>
  );
}
