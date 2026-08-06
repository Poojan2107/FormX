"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { brochureOngoing } from "@/data/brochureHome";

/**
 * UPCOMING — "Live Pipeline"
 * Visual DNA: VERTICAL TIMELINE with connecting red line and project dots.
 * Dark background. Each project hangs off a continuous vertical red spine.
 * Completely distinct from Pillars (editorial number bands) and Services (tile grid).
 */
export function BrochureUpcoming() {
  return (
    <section
      id="upcoming"
      className="relative scroll-mt-28 overflow-hidden bg-[#080808] py-24 text-white md:py-32"
    >
      {/* Subtle red top bar */}
      <span aria-hidden className="absolute left-0 top-0 h-[3px] w-24 bg-x-red/70" />

      <Container>
        {/* Header */}
        <div className="grid gap-6 md:grid-cols-2 md:items-start">
          <Reveal>
            <p className="font-label text-[10px] tracking-[0.35em] text-x-red">
              Currently Active
            </p>
            <h2
              className="mt-5 font-display font-black leading-[1.0] tracking-[-0.04em] text-white"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)" }}
            >
              Live Pipeline
            </h2>
          </Reveal>
          <Reveal delay={0.07}>
            <p className="max-w-[36ch] text-[13px] leading-[1.8] text-white/28 md:mt-16 md:text-right md:text-[14px]">
              Currently in active engineering — from design through site support.
            </p>
          </Reveal>
        </div>

        {/* VERTICAL TIMELINE */}
        <div className="relative mt-16 pl-6 md:pl-10">

          {/* The spine — vertical red line */}
          <Reveal from="fade">
            <div
              aria-hidden
              className="absolute left-0 top-0 w-[2px] bg-gradient-to-b from-x-red via-x-red/60 to-transparent"
              style={{ height: "calc(100% - 3rem)" }}
            />
          </Reveal>

          {/* Timeline items */}
          <div className="space-y-0">
            {brochureOngoing.map((project, i) => (
              <Reveal key={project.title} delay={0.08 * i} from="fade">
                <div className="group relative cursor-default py-8 pl-8 md:grid md:grid-cols-[1fr_1fr] md:gap-12 md:py-9 md:pl-10 lg:grid-cols-[2fr_3fr]">

                  {/* Dot on the spine */}
                  <div
                    aria-hidden
                    className="absolute -left-[3px] top-1/2 -translate-y-1/2"
                  >
                    {/* Outer ring */}
                    <div className="size-3.5 rounded-full border-2 border-x-red/60 bg-[#080808] transition-all duration-300 group-hover:border-x-red group-hover:scale-125" />
                    {/* Active pulse dot */}
                    {i === 0 && (
                      <div className="absolute inset-1.5 rounded-full bg-x-red animate-pulse" />
                    )}
                  </div>

                  {/* Connector line to content */}
                  <div
                    aria-hidden
                    className="absolute left-[calc(0px-0.5px)] top-1/2 h-[1px] w-8 -translate-y-1/2 bg-x-red/20 md:w-10"
                  />

                  {/* Project number + label */}
                  <div className="flex flex-col justify-center">
                    <span className="font-label text-[10px] tracking-[0.3em] text-x-red/55">
                      ×{String(i + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className="mt-2 font-display font-bold tracking-[-0.02em] text-white/90 transition-colors group-hover:text-white"
                      style={{ fontSize: "clamp(1rem, 1.8vw, 1.35rem)" }}
                    >
                      {project.title}
                    </h3>
                  </div>

                  {/* Project description */}
                  <p className="mt-3 text-[13px] leading-[1.78] text-white/30 transition-colors group-hover:text-white/45 md:mt-0 md:text-[14px]">
                    {project.detail}
                  </p>

                  {/* Bottom separator */}
                  <div
                    aria-hidden
                    className="absolute bottom-0 right-0 h-px w-[calc(100%)] bg-white/[0.045]"
                  />
                </div>
              </Reveal>
            ))}
          </div>

          {/* Timeline end marker */}
          <Reveal delay={0.35} from="fade">
            <div className="relative mt-2 pl-8 md:pl-10">
              <div
                aria-hidden
                className="absolute -left-[3px] top-1/2 size-2 -translate-y-1/2 rounded-full bg-white/10"
              />
              <p className="font-label text-[9px] tracking-[0.3em] text-white/14">
                More projects in progress · Not listed until construction start
              </p>
            </div>
          </Reveal>
        </div>

      </Container>
    </section>
  );
}
