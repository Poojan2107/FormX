"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { brochurePartners, brochureContactNote } from "@/data/brochureHome";

/**
 * PARTNERS — "Who Places Trust in FormX"
 * Pure white background — breathing space before the Contact finale.
 * Left: editorial header + note paragraph.
 * Right: partner types as premium formx-cut pills.
 */
export function BrochurePartners() {
  return (
    <section id="partners" className="scroll-mt-28 bg-white py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ── Left: Header ─────────────────────────────────── */}
          <Reveal>
            <p className="font-label text-[10.5px] tracking-[0.35em] uppercase text-x-red">
              Partners
            </p>
            <h2
              className="mt-4 max-w-[16ch] font-display font-black leading-[1.04] tracking-tight text-ink"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Who places trust in FormX
            </h2>
            <p className="mt-5 max-w-[40ch] text-[15.5px] font-medium leading-[1.8] text-ink/75">
              {brochureContactNote}
            </p>

            {/* Red accent line */}
            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-8 bg-x-red" />
              <span className="font-label text-[9.5px] tracking-[0.24em] uppercase text-ink/45">
                Clients · Architects · Contractors
              </span>
            </div>
          </Reveal>

          {/* ── Right: Partner pills ─────────────────────────── */}
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-3.5 md:gap-4">
              {brochurePartners.map((partner) => (
                <div
                  key={partner.name}
                  className="fx-partner-pill group cursor-default border border-ink/[0.14] bg-[#f9f8f5] px-6 py-5 transition-all hover:bg-white md:px-7 md:py-6"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)",
                  }}
                >
                  <p className="font-display text-base font-bold tracking-tight text-ink transition-colors group-hover:text-x-red md:text-lg">
                    {partner.name}
                  </p>
                  <p className="mt-1 font-label text-[10px] uppercase tracking-[0.16em] text-ink/50">
                    {partner.tag}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

        </div>

        {/* ── Red × separator ───────────────────── */}
        <Reveal delay={0.2} from="fade">
          <div className="mt-16 flex items-center gap-4">
            <span className="h-px flex-1 bg-ink/[0.08]" />
            <span className="font-display font-black text-x-red/50 text-2xl">×</span>
            <span className="h-px w-12 bg-x-red/35" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
