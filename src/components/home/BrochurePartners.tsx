"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { brochurePartners, brochureContactNote } from "@/data/brochureHome";

/**
 * PARTNERS — Trust types as formx-cut pills beside editorial header.
 */
export function BrochurePartners() {
  return (
    <section id="partners" className="scroll-mt-28 bg-white py-24 md:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-16">
          <Reveal>
            <p className="font-label text-[10.5px] tracking-[0.32em] uppercase text-x-red">
              Partners
            </p>
            <h2
              className="mt-4 max-w-[15ch] font-display font-black leading-[1.05] tracking-[-0.045em] text-ink"
              style={{ fontSize: "clamp(2rem, 3.8vw, 3.15rem)" }}
            >
              Who places trust in FormX
            </h2>
            <p className="mt-6 max-w-[44ch] text-[16px] font-medium leading-[1.9] text-ink/62">
              {brochureContactNote}
            </p>

            <div className="mt-9 flex items-center gap-3">
              <span className="h-px w-9 bg-x-red" />
              <span className="font-label text-[9.5px] tracking-[0.22em] uppercase text-ink/42">
                Clients · Architects · Contractors
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-3.5 sm:grid-cols-2 xl:grid-cols-3">
              {brochurePartners.map((partner) => (
                <div
                  key={partner.name}
                  className="fx-partner-pill group cursor-default border border-ink/[0.1] bg-[#f8f6f1] px-6 py-7 transition-all duration-300 hover:border-x-red/40 hover:bg-white hover:shadow-[0_12px_40px_rgba(0,0,0,0.04)] md:px-7"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)",
                  }}
                >
                  <p className="max-w-[14ch] font-display text-[1.05rem] font-bold leading-[1.15] tracking-tight text-ink transition-colors group-hover:text-x-red md:text-lg">
                    {partner.name}
                  </p>
                  <p className="mt-2.5 font-label text-[10px] uppercase tracking-[0.16em] text-ink/45">
                    {partner.tag}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18} from="fade">
          <div className="mt-16 flex items-center gap-4">
            <span className="h-px flex-1 bg-ink/[0.08]" />
            <span className="font-display text-2xl font-black text-x-red/45">×</span>
            <span className="h-px w-14 bg-x-red/30" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
