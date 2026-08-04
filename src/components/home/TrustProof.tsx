"use client";

import { portfolioPillars } from "@/data/portfolio";
import { trustMetrics } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Jacobs-scale metrics after scroll (home_comment_p2).
 * Big numbers first — pillars as a quiet secondary row.
 */
export function TrustProof() {
  return (
    <section className="border-b border-line bg-white py-16 md:py-24">
      <Container>
        <Reveal>
          <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
            Practice at a glance
          </p>
        </Reveal>

        <div className="mt-10 grid gap-10 border-b border-line pb-14 sm:grid-cols-3 sm:gap-8">
          {trustMetrics.map((m, i) => (
            <Reveal key={m.label} delay={0.05 * i}>
              <p
                className="font-display font-black leading-none tracking-tight text-ink"
                style={{ fontSize: "clamp(3.25rem, 8vw, 5.5rem)" }}
              >
                {m.value}
              </p>
              <p className="mt-3 font-display text-[12px] font-bold uppercase tracking-[0.22em] text-ink/40">
                {m.label}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {portfolioPillars.map((p, i) => (
            <Reveal key={p.title} delay={0.04 * i}>
              <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-x-red">
                0{i + 1}
              </p>
              <p className="mt-2 font-display text-sm font-extrabold uppercase tracking-tight text-ink">
                {p.title}
              </p>
              <p className="mt-2 text-[13px] leading-[1.7] text-ink-muted">{p.body}</p>
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
