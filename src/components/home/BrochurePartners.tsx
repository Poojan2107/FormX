"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { brochurePartners, brochureContactNote } from "@/data/brochureHome";

/** Partners as a quiet word-index — no fake logos */
export function BrochurePartners() {
  return (
    <section id="partners" className="scroll-mt-28 bg-[#f4f3f0] py-20 md:py-28">
      <Container>
        <Reveal>
          <p className="font-label text-[10px] tracking-[0.28em] text-x-red">Partners</p>
          <h2
            className="mt-4 max-w-[14ch] font-display font-bold leading-[1.05] tracking-tight text-ink"
            style={{ fontSize: "clamp(2rem, 4vw, 3.15rem)" }}
          >
            Who we partner with
          </h2>
          <p className="mt-5 max-w-[44ch] text-[15px] leading-[1.7] text-ink/50">
            {brochureContactNote}
          </p>
        </Reveal>

        <ul className="mt-14 flex flex-wrap gap-3 md:gap-4">
          {brochurePartners.map((partner, i) => (
            <Reveal key={partner.name} delay={0.04 * i} from="fade">
              <li className="group border border-ink/10 bg-white px-6 py-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-x-red/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] md:px-8 md:py-6">
                <p className="font-display text-base font-bold tracking-tight text-ink transition-colors group-hover:text-x-red md:text-lg">
                  {partner.name}
                </p>
                <p className="mt-1 text-[12px] text-ink/40">{partner.tag}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
