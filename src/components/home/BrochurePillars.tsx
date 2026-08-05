"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { brochurePillars } from "@/data/brochureHome";

/** Four pillars as a 2×2 field — red × owns the chapter */
export function BrochurePillars() {
  return (
    <section id="pillars" className="relative scroll-mt-28 overflow-hidden bg-[#0a0a0a] py-20 text-white md:py-28">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 select-none font-display font-black leading-none text-x-red/[0.07]"
        style={{ fontSize: "clamp(18rem, 40vw, 32rem)" }}
      >
        ×
      </span>

      <Container className="relative z-10">
        <Reveal>
          <p className="font-label text-[10px] tracking-[0.28em] text-x-red">The FormX way</p>
          <h2
            className="mt-4 max-w-[12ch] font-display font-bold leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            Four pillars of the practice
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
          {brochurePillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={0.07 * i} from="fade">
              <article className="group relative flex min-h-[220px] flex-col justify-between bg-[#0a0a0a] p-8 transition-colors duration-300 hover:bg-[#111] md:min-h-[260px] md:p-10">
                <span className="font-display text-4xl font-bold text-x-red/80 transition-transform duration-500 group-hover:scale-110">
                  ×
                </span>
                <div className="mt-10">
                  <h3 className="font-display text-xl font-bold tracking-tight text-white md:text-2xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 max-w-[28ch] text-[15px] leading-[1.65] text-white/45">
                    {pillar.body}
                  </p>
                </div>
                <span className="absolute bottom-6 right-8 font-label text-[10px] tracking-[0.28em] text-white/15">
                  0{i + 1}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
