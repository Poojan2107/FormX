"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { brochureOngoing } from "@/data/brochureHome";

/**
 * UPCOMING — Quiet live pipeline (documentary list, not diamond timeline theatre).
 */
export function BrochureUpcoming() {
  return (
    <section
      id="upcoming"
      className="fx-grain scroll-mt-28 border-y border-black bg-[#0a0a09] py-24 text-white md:py-32"
    >
      <Container>
        <div className="grid gap-8 border-b border-white/10 pb-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-16">
          <Reveal>
            <p className="eyebrow text-x-red">Currently active</p>
            <h2
              className="mt-4 font-display font-black leading-[0.98] tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Live pipeline
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="text-[15px] leading-[1.9] text-white/50 md:text-[16px] lg:pb-1">
              In active engineering — from design through site support.
            </p>
          </Reveal>
        </div>

        <ol className="mt-2">
          {brochureOngoing.map((project, i) => (
            <Reveal key={project.title} delay={0.04 * i} from="fade">
              <li className="grid gap-3 border-b border-white/[0.08] py-8 md:grid-cols-[4.5rem_minmax(0,1fr)_minmax(0,1.2fr)] md:items-baseline md:gap-10 md:py-9">
                <span className="font-label text-[10px] tracking-[0.24em] text-x-red">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-extrabold tracking-tight md:text-xl">
                  {project.title}
                </h3>
                <p className="text-[14.5px] leading-[1.85] text-white/55 md:text-[15px]">
                  {project.detail}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.2}>
          <p className="mt-10 font-label text-[10px] tracking-[0.18em] text-white/30">
            More work in progress · listed at construction start
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
