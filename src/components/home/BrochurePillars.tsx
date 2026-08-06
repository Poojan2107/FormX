"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { brochurePillars } from "@/data/brochureHome";

/**
 * PILLARS — "The Manifesto"
 * Visual DNA: GIANT ghost numbers on the left, editorial headline on right.
 * Each pillar is a full-width band with dramatic number presence.
 * Completely distinct from Services (grid tiles) and Pipeline (timeline).
 */
export function BrochurePillars() {
  return (
    <section
      id="pillars"
      className="relative scroll-mt-28 overflow-hidden bg-[#0a0a0a] py-20 text-white md:py-28"
    >
      <Container className="relative z-10">

        {/* Section label */}
        <Reveal>
          <p className="font-label text-[10px] tracking-[0.35em] text-x-red">
            The FormX Way
          </p>
        </Reveal>

      </Container>

      {/* Full-bleed pillar bands */}
      <ol className="mt-10">
        {brochurePillars.map((pillar, i) => (
          <Reveal key={pillar.title} delay={0.07 * i} from="fade">
            <li className="group relative cursor-default overflow-hidden border-b border-white/[0.06] transition-colors hover:bg-white/[0.03]">
              <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
                <div className="flex items-stretch gap-0 py-8 md:py-10 lg:gap-8 xl:py-11">

                  {/* GIANT ghost number */}
                  <div
                    aria-hidden
                    className="flex w-28 shrink-0 items-center md:w-40 lg:w-52"
                  >
                    <span
                      className="select-none font-display font-black leading-none text-white/[0.06] transition-all duration-700 group-hover:text-white/[0.11]"
                      style={{ fontSize: "clamp(4.5rem, 9vw, 8.5rem)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* × glyph */}
                  <div className="flex items-center pr-6 md:pr-8">
                    <span
                      className="font-display font-black leading-none text-x-red/50 transition-all duration-500 group-hover:scale-110 group-hover:text-x-red"
                      style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
                    >
                      ×
                    </span>
                  </div>

                  {/* Title + body */}
                  <div className="flex flex-1 flex-col justify-center gap-3 lg:flex-row lg:items-center lg:gap-16">
                    <h3
                      className="font-display font-bold tracking-[-0.02em] text-white/90 transition-colors group-hover:text-white lg:w-72 lg:shrink-0"
                      style={{ fontSize: "clamp(1.15rem, 2vw, 1.65rem)" }}
                    >
                      {pillar.title}
                    </h3>
                    <p className="max-w-[56ch] text-[13px] leading-[1.8] text-white/32 transition-colors group-hover:text-white/50 md:text-[14px]">
                      {pillar.body}
                    </p>
                  </div>

                  {/* Hover arrow indicator */}
                  <div className="hidden items-center md:flex">
                    <span
                      className="font-label text-[10px] tracking-[0.2em] text-x-red/0 transition-all duration-300 group-hover:text-x-red/50"
                    >
                      ↗
                    </span>
                  </div>

                </div>
              </div>

              {/* Red left-edge bar on hover */}
              <span
                aria-hidden
                className="absolute left-0 top-0 h-full w-[3px] origin-bottom scale-y-0 bg-x-red transition-transform duration-500 group-hover:scale-y-100"
              />
            </li>
          </Reveal>
        ))}
      </ol>

      {/* Footer strip */}
      <Reveal delay={0.3} from="fade">
        <Container className="relative z-10">
          <div className="mt-12 flex items-center justify-between">
            <p className="font-label text-[9px] tracking-[0.3em] text-white/20 uppercase">
              FormX Consultants · Design | Engineering
            </p>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-white/[0.07]" />
              <span className="font-display text-sm font-black text-x-red/30">×</span>
            </div>
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
