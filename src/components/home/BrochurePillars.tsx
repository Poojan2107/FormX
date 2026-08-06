"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { brochurePillars } from "@/data/brochureHome";

/**
 * PILLARS — "The Four Principles"
 * Dark editorial section. Horizontal rows — numbered, typographic manifesto.
 * Not a card grid. Each row reveals on scroll with stagger.
 */
export function BrochurePillars() {
  return (
    <section
      id="pillars"
      className="relative scroll-mt-28 overflow-hidden bg-[#0a0a0a] py-20 text-white md:py-28"
    >
      {/* Giant ghost × watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-6 bottom-0 translate-y-[18%] select-none font-display font-black leading-none text-white/[0.032]"
        style={{ fontSize: "clamp(22rem, 50vw, 40rem)" }}
      >
        ×
      </span>

      <Container className="relative z-10">
        {/* ── Section header ─────────────────────────────────── */}
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="font-label text-[10px] tracking-[0.3em] text-x-red">
                The FormX Way
              </p>
              <h2
                className="mt-4 max-w-[16ch] font-display font-extrabold leading-[1.03] tracking-tight text-white"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
              >
                Four pillars of the practice
              </h2>
            </div>
            <span
              aria-hidden
              className="hidden font-display text-[4rem] font-black text-white/[0.07] md:block"
            >
              ×
            </span>
          </div>
        </Reveal>

        {/* ── Pillars as editorial rows ──────────────────────── */}
        <div className="mt-14">
          {brochurePillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={0.07 * i} from="fade">
              <article className="fx-pillar-row group grid cursor-default gap-4 py-9 transition-all md:grid-cols-12 md:items-center md:gap-8 md:py-10">

                {/* Number + × glyph */}
                <div className="flex items-center gap-4 md:col-span-2">
                  <span className="font-display text-4xl font-black leading-none text-x-red/70 transition-transform duration-500 group-hover:scale-110 group-hover:text-x-red">
                    ×
                  </span>
                  <span className="font-label text-[10px] tracking-[0.28em] text-white/20">
                    0{i + 1}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="font-display font-bold tracking-tight text-white transition-colors group-hover:text-x-red md:col-span-4 md:text-[1.4rem]"
                  style={{ fontSize: "clamp(1rem, 2vw, 1.4rem)" }}
                >
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="max-w-[44ch] text-[14px] leading-[1.75] text-white/40 transition-colors group-hover:text-white/55 md:col-span-5 md:text-[15px]">
                  {pillar.body}
                </p>

                {/* Right arrow accent */}
                <div className="hidden md:col-span-1 md:flex md:justify-end">
                  <span className="font-label text-[9px] tracking-[0.22em] text-white/12 transition-colors group-hover:text-x-red/40">
                    ↗
                  </span>
                </div>

              </article>
            </Reveal>
          ))}
        </div>

        {/* ── Bottom accent line ─────────────────────────────── */}
        <Reveal delay={0.32} from="fade">
          <div className="mt-10 flex items-center gap-4 border-t border-white/[0.07] pt-8">
            <span className="h-px flex-1 bg-white/[0.06]" />
            <span className="font-label text-[9px] tracking-[0.28em] text-white/20">
              FormX Consultants · Ahmedabad
            </span>
            <span className="h-px w-8 bg-x-red/30" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
