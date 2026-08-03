"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";

const thinkingBeats = [
  {
    title: "Design for how it will be built",
    body: "Every layout, grid and utility corridor is checked against construction sequence, contractor methods and statutory clearances—before drawings leave the studio.",
  },
  {
    title: "Resolve clashes on paper",
    body: "Architecture, structure and MEP are coordinated as one package. Conflicts that would stop a site are closed in the office, not discovered during erection.",
  },
  {
    title: "Stay accountable through execution",
    body: "Senior engineers remain available for RFIs, shop drawing reviews and site clarifications until the facility matches the documented intent.",
  },
];

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
              Engineering judgement before documentation volume
            </h2>
            <p className="mt-5 text-[15px] leading-[1.85] text-ink-muted">
              We do not sell drawings as a commodity. We sell coordinated decisions that protect
              capital, schedule and safety on industrial projects.
            </p>

            <div className="relative mt-10 aspect-[4/3] overflow-hidden bg-[#111]">
              <AssetImage
                alt="FORMX coordination and review"
                slot="about/home-about.jpg"
                kind="studio"
                tone="dark"
                fit="cover"
                aspect="auto"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                Studio review · Ahmedabad
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col justify-center gap-10 lg:col-span-7">
            {thinkingBeats.map((beat, i) => (
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
