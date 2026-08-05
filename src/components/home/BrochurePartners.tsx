"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { brochurePartners, brochureContactNote } from "@/data/brochureHome";
import { brochureVisuals } from "@/data/projects";

/** Partners — types only, never fake logos */
export function BrochurePartners() {
  return (
    <section id="partners" className="scroll-mt-28 bg-white py-20 md:py-28">
      <Container>
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="font-label text-[10px] tracking-[0.28em] text-x-red">Partners</p>
            <h2
              className="mt-4 font-display font-extrabold uppercase leading-[0.95] tracking-tight text-ink"
              style={{ fontSize: "clamp(1.85rem, 4vw, 3rem)" }}
            >
              Who we partner with
            </h2>
            <p className="mt-5 max-w-[40ch] text-[15px] leading-[1.7] text-ink/55">
              {brochureContactNote}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="relative overflow-hidden border border-line bg-[#f7f7f5]">
              <AssetImage
                slot={brochureVisuals.partnersBanner}
                alt="FormX collaboration"
                fit="contain"
                aspect="wide"
                className="min-h-[180px] md:min-h-[220px]"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          </Reveal>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
          {brochurePartners.map((partner, i) => (
            <Reveal key={partner.name} delay={0.04 * i} from="fade">
              <li className="flex min-h-[120px] flex-col justify-center bg-white px-6 py-7 transition-colors hover:bg-[#fafafa] md:min-h-[140px] md:px-8">
                <p className="font-display text-base font-bold uppercase tracking-tight text-ink md:text-lg">
                  {partner.name}
                </p>
                <p className="mt-2 font-label text-[9px] tracking-[0.2em] text-ink/35">
                  {partner.tag}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
