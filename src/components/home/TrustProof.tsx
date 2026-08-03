"use client";

import { trustMetrics } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/** Sparse trust proof — appears after scroll as part of HQ journey */
export function TrustProof() {
  return (
    <section className="border-b border-line bg-[#f7f7f7] py-16 md:py-20">
      <Container>
        <Reveal>
          <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
            Why clients trust us
          </p>
          <h2 className="mt-2 max-w-xl font-display text-2xl font-extrabold uppercase tracking-tight text-ink md:text-3xl">
            Empirical delivery across industrial India
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {trustMetrics.map((m, i) => (
            <Reveal key={m.label} delay={0.06 * i}>
              <p className="font-display text-5xl font-black tracking-tight text-ink md:text-6xl">
                {m.value}
              </p>
              <p className="mt-2 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-ink/45">
                {m.label}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <p className="mt-10 max-w-2xl border-t border-line pt-6 text-[14px] leading-[1.8] text-ink-muted">
            IS &amp; NBC code-compliant structural engineering. Single-window coordination across
            architecture, structure and infrastructure—so promoters deal with one accountable practice,
            not a chain of disconnected consultants.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
