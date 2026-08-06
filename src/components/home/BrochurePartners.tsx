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
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

          {/* ── Left: Header ─────────────────────────────────── */}
          <Reveal>
            <p className="font-label text-[10.5px] tracking-[0.35em] uppercase text-x-red">
              Partners
            </p>
            <h2
              className="mt-4 max-w-[11ch] font-display font-black leading-[0.98] tracking-[-0.05em] text-ink"
              style={{ fontSize: "clamp(2.2rem, 4.6vw, 3.75rem)" }}
            >
              Who places trust in FormX
            </h2>
            <p className="mt-5 max-w-[36ch] text-[16px] font-medium leading-[1.9] text-ink/64">
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
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {brochurePartners.map((partner) => (
                <div
                  key={partner.name}
                  className="fx-partner-pill group cursor-default border border-ink/[0.12] bg-[#f8f6f1] px-6 py-6 transition-all hover:border-x-red/35 hover:bg-white md:px-7 md:py-7"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)",
                  }}
                >
                  <p className="max-w-[12ch] font-display text-base font-bold leading-[1.1] tracking-tight text-ink transition-colors group-hover:text-x-red md:text-lg">
                    {partner.name}
                  </p>
                  <p className="mt-2 font-label text-[10px] uppercase tracking-[0.16em] text-ink/46">
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
