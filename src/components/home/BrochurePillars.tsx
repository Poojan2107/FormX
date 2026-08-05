"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { brochurePillars } from "@/data/brochureHome";

/**
 * Four pillars — brochure order & language.
 * Not a card grid: numbered editorial list on charcoal.
 */
export function BrochurePillars() {
  return (
    <section id="pillars" className="scroll-mt-28 bg-[#0c0c0c] py-20 text-white md:py-28">
      <Container>
        <Reveal>
          <p className="font-label text-[10px] tracking-[0.28em] text-x-red">The FormX way</p>
          <h2
            className="mt-4 max-w-[16ch] font-display font-extrabold uppercase leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(1.85rem, 4.5vw, 3.25rem)" }}
          >
            Four pillars of the practice
          </h2>
        </Reveal>

        <ul className="mt-14 divide-y divide-white/10 border-y border-white/10">
          {brochurePillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={0.06 * i} from="fade">
              <li className="group grid gap-4 py-8 transition-colors md:grid-cols-12 md:items-baseline md:gap-8 md:py-10">
                <span className="font-label text-[11px] tracking-[0.28em] text-x-red md:col-span-1">
                  0{i + 1}
                </span>
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-white transition-colors group-hover:text-x-red md:col-span-4 md:text-2xl">
                  {pillar.title}
                </h3>
                <p className="max-w-[42ch] text-[16px] leading-[1.7] text-white/50 md:col-span-7 md:text-[17px]">
                  {pillar.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
