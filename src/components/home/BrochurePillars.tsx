"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { brochurePillars } from "@/data/brochureHome";

/**
 * PILLARS — "The Four Principles"
 * Dark editorial manifesto. Horizontal numbered rows — not a card grid.
 */
export function BrochurePillars() {
  return (
    <section
      id="pillars"
      className="relative scroll-mt-28 overflow-hidden bg-[#0a0a0a] py-24 text-white md:py-32"
    >
      {/* Ghost × watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-4 bottom-0 translate-y-[20%] select-none font-display font-black leading-none text-white/[0.028]"
        style={{ fontSize: "clamp(24rem, 55vw, 44rem)" }}
      >
        ×
      </span>

      <Container className="relative z-10">

        {/* Section header */}
        <Reveal>
          <p className="font-label text-[10px] tracking-[0.35em] text-x-red">
            The FormX Way
          </p>
          <div className="mt-5 flex items-end justify-between gap-6">
            <h2
              className="font-display font-black leading-[1.01] tracking-[-0.04em] text-white"
              style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)" }}
            >
              Four pillars<br />of the practice
            </h2>
            <span
              aria-hidden
              className="hidden shrink-0 font-display font-black text-white/[0.06] md:block"
              style={{ fontSize: "clamp(3rem, 5vw, 4rem)" }}
            >
              ×
            </span>
          </div>
        </Reveal>

        {/* Divider */}
        <div className="mt-14 h-px w-full bg-white/[0.07]" />

        {/* Pillar rows */}
        <ol>
          {brochurePillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={0.06 * i} from="fade">
              <li className="fx-pillar-row group grid cursor-default py-10 md:grid-cols-12 md:items-start md:gap-x-8 md:py-11">

                {/* Index + × */}
                <div className="mb-4 flex items-center gap-4 md:col-span-2 md:mb-0 md:pt-1">
                  <span
                    className="font-display font-black leading-none text-x-red/60 transition-all duration-500 group-hover:scale-110 group-hover:text-x-red"
                    style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
                  >
                    ×
                  </span>
                  <span className="font-label text-[10px] tracking-[0.3em] text-white/18">
                    0{i + 1}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="mb-3 font-display font-bold tracking-tight text-white/90 transition-colors group-hover:text-x-red md:col-span-4 md:mb-0"
                  style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)" }}
                >
                  {pillar.title}
                </h3>

                {/* Body */}
                <p className="max-w-[48ch] text-[14px] leading-[1.8] text-white/38 transition-colors group-hover:text-white/55 md:col-span-5 md:text-[15px]">
                  {pillar.body}
                </p>

                {/* Arrow */}
                <div className="hidden md:col-span-1 md:flex md:items-start md:justify-end md:pt-1">
                  <span className="text-[10px] text-white/10 transition-colors group-hover:text-x-red/40">↗</span>
                </div>

              </li>
            </Reveal>
          ))}
        </ol>

        {/* Bottom accent */}
        <Reveal delay={0.3} from="fade">
          <div className="mt-2 flex items-center gap-4 border-t border-white/[0.07] pt-8">
            <span className="h-px flex-1 bg-white/[0.05]" />
            <span className="font-label text-[9px] tracking-[0.3em] text-white/18">
              FormX Consultants · Ahmedabad
            </span>
            <span className="h-px w-10 bg-x-red/25" />
          </div>
        </Reveal>

      </Container>
    </section>
  );
}
