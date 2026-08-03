"use client";

import { portfolioPillars } from "@/data/portfolio";
import { trustMetrics } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/** PDF pillars + sparse delivery metrics from founder review */
export function TrustProof() {
  return (
    <section className="border-b border-line bg-[#f7f7f7] py-16 md:py-20">
      <Container>
        <Reveal>
          <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
            How we work
          </p>
          <h2 className="mt-2 max-w-xl font-display text-2xl font-extrabold uppercase tracking-tight text-ink md:text-3xl">
            Structural integrity · Functional design
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {portfolioPillars.map((p, i) => (
            <Reveal key={p.title} delay={0.04 * i}>
              <p className="font-display text-sm font-extrabold uppercase tracking-tight text-ink">
                {p.title}
              </p>
              <p className="mt-2 text-[13px] leading-[1.75] text-ink-muted">{p.body}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-10 border-t border-line pt-10 sm:grid-cols-3">
          {trustMetrics.map((m, i) => (
            <Reveal key={m.label} delay={0.06 * i}>
              <p className="font-display text-4xl font-black tracking-tight text-ink md:text-5xl">
                {m.value}
              </p>
              <p className="mt-2 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-ink/45">
                {m.label}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
