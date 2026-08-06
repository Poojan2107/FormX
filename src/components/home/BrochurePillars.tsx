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
          <p className="font-label text-[10.5px] tracking-[0.35em] uppercase text-x-red">
            The FormX Way
          </p>
          <h2
            className="mt-4 font-display font-black leading-[1.01] tracking-[-0.04em] text-white"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4.25rem)" }}
          >
            Four pillars of FormX
          </h2>
        </Reveal>

      </Container>

      {/* Full-bleed pillar bands */}
      <ol className="mt-12 border-t border-white/[0.08]">
        {brochurePillars.map((pillar, i) => (
          <Reveal key={pillar.title} delay={0.07 * i} from="fade">
            <li className="group relative cursor-default overflow-hidden border-b border-white/[0.08] transition-colors hover:bg-white/[0.03]">
              <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
                <div className="grid items-center gap-6 py-8 md:grid-cols-[120px_28px_minmax(260px,360px)_1fr] md:py-10 lg:grid-cols-[180px_36px_360px_1fr] xl:py-11">

                  {/* GIANT ghost number */}
                  <div aria-hidden className="flex items-center">
                    <span
                      className="select-none font-display font-black leading-none text-white/[0.08] transition-all duration-700 group-hover:text-white/[0.16]"
                      style={{ fontSize: "clamp(4.5rem, 9vw, 8.5rem)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* × glyph */}
                  <div className="flex items-center">
                    <span
                      className="font-display font-black leading-none text-x-red/60 transition-all duration-500 group-hover:scale-110 group-hover:text-x-red"
                      style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
                    >
                      ×
                    </span>
                  </div>

                  {/* Title + body */}
                  <div className="flex min-h-[72px] items-center">
                    <h3
                      className="font-display font-bold leading-[1.05] tracking-[-0.02em] text-white transition-colors group-hover:text-x-red"
                      style={{ fontSize: "clamp(1.2rem, 2vw, 1.7rem)" }}
                    >
                      {pillar.title}
                    </h3>
                  </div>
                  <div className="flex items-center">
                    <p className="max-w-[48ch] text-[14px] leading-[1.85] text-white/72 transition-colors group-hover:text-white/90 md:text-[15px]">
                      {pillar.body}
                    </p>
                  </div>

                  {/* Hover arrow indicator */}
                  <div className="hidden items-center md:flex">
                    <span
                      className="font-label text-[11px] tracking-[0.2em] text-x-red/0 transition-all duration-300 group-hover:text-x-red"
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
            <p className="font-label text-[9.5px] tracking-[0.3em] uppercase text-white/30">
              FormX Consultants · Design | Engineering
            </p>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-white/[0.08]" />
              <span className="font-display text-sm font-black text-x-red/40">×</span>
            </div>
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
