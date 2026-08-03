"use client";

import { portfolioPillars, brochureVisuals } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { VisualFrame } from "@/components/ui/VisualFrame";

export function HowWeThink() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              How we think
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[1.08] tracking-tight text-ink md:text-4xl">
              Technical proficiency with practical wisdom
            </h2>
            <p className="mt-5 text-[15px] leading-[1.85] text-ink-muted">
              We seamlessly merge technical proficiency with practical wisdom to create structures
              that prioritize safety, efficiency, and alignment with architectural vision and user
              requirements.
            </p>

            <VisualFrame
              slot={brochureVisuals.pillars}
              alt="FORMX practice pillars"
              fit="contain"
              aspect="wide"
              tone="dark"
              className="mt-10"
              caption="Structural Integrity · Functional Design · Technical Expertise · Collaborative Insight"
            />
          </Reveal>

          <div className="flex flex-col justify-center gap-10 lg:col-span-7">
            {portfolioPillars.map((beat, i) => (
              <Reveal key={beat.title} delay={0.05 * i}>
                <div className="border-l-2 border-x-red pl-6">
                  <span className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-x-red">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-extrabold uppercase text-ink md:text-2xl">
                    {beat.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-[14px] leading-[1.85] text-ink-muted">
                    {beat.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
