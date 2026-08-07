"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { brochurePartners, brochureContactNote } from "@/data/brochureHome";

/**
 * PARTNERS — Editorial header + equal-height partner grid.
 */
export function BrochurePartners() {
  return (
    <section id="partners" className="scroll-mt-28 bg-[#f7f6f2] py-24 md:py-32">
      <Container>
        <div className="mb-12 grid gap-6 border-b border-ink/[0.08] pb-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-end lg:gap-14">
          <Reveal>
            <p className="font-label text-[10.5px] tracking-[0.32em] uppercase text-x-red">
              Partners
            </p>
            <h2
              className="mt-4 font-display font-black leading-[1.05] tracking-[-0.045em] text-ink"
              style={{ fontSize: "clamp(2rem, 3.8vw, 3.15rem)" }}
            >
              Who places trust in FormX
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-[15.5px] font-medium leading-[1.9] text-ink/60 md:text-[16px] lg:pb-1">
              {brochureContactNote}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {brochurePartners.map((partner, i) => (
              <div
                key={partner.name}
                className="formx-card x-corner-glow group relative flex min-h-[132px] flex-col justify-between overflow-hidden p-6 transition-all duration-400 md:min-h-[148px] md:p-7"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0 100%)",
                }}
              >
                <div>
                  <span className="font-label text-[9.5px] font-bold tracking-[0.24em] text-x-red font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 font-display text-[1.1rem] font-bold leading-[1.15] tracking-tight text-ink transition-colors duration-300 group-hover:text-x-red md:text-[1.2rem]">
                    {partner.name}
                  </p>
                </div>
                <p className="mt-4 font-label text-[10px] uppercase tracking-[0.16em] text-ink/50 font-medium">
                  {partner.tag}
                </p>
                <span
                  aria-hidden
                  className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-x-red shadow-[0_0_10px_rgba(224,49,40,0.8)] transition-transform duration-400 group-hover:scale-x-100"
                />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.16} from="fade">
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-x-red" />
              <span className="font-label text-[9.5px] tracking-[0.22em] uppercase text-ink/42">
                Clients · Architects · Contractors
              </span>
            </div>
            <Link
              href="/clients"
              transitionTypes={["nav-forward"]}
              className="group inline-flex items-center gap-2 font-label text-[10.5px] tracking-[0.2em] text-ink/55 transition-colors hover:text-x-red"
            >
              View partner types
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
