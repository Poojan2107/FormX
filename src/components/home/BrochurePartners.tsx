"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { brochurePartners, brochureContactNote } from "@/data/brochureHome";

/**
 * PARTNERS — Brochure types as rows (no clip-path card mosaic).
 */
export function BrochurePartners() {
  return (
    <section id="partners" className="scroll-mt-28 bg-white py-24 md:py-32">
      <Container>
        <div className="mb-4 grid gap-8 border-b border-ink/[0.08] pb-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-16">
          <Reveal>
            <p className="eyebrow text-x-red">Partners</p>
            <h2
              className="mt-4 font-display font-black leading-[0.98] tracking-tight text-ink"
              style={{ fontSize: "clamp(2rem, 3.8vw, 3.15rem)" }}
            >
              Who places trust in FormX
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="text-[15px] leading-[1.9] text-ink/55 md:text-[16px] lg:pb-1">
              {brochureContactNote}
            </p>
          </Reveal>
        </div>

        <div className="divide-y divide-ink/[0.08] border-b border-ink/[0.08]">
          {brochurePartners.map((partner, i) => (
            <Reveal key={partner.name} delay={0.03 * i} from="fade">
              <div className="grid gap-2 py-7 md:grid-cols-12 md:items-baseline md:gap-8 md:py-8">
                <span className="font-label text-[10px] tracking-[0.24em] text-x-red md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display text-lg font-extrabold tracking-tight text-ink md:col-span-5 md:text-xl">
                  {partner.name}
                </p>
                <p className="font-label text-[10px] tracking-[0.16em] text-ink/40 md:col-span-6">
                  {partner.tag}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.14}>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-5">
            <p className="font-label text-[10px] tracking-[0.18em] text-ink/35">
              Clients · Architects · Contractors
            </p>
            <Link
              href="/clients"
              transitionTypes={["nav-forward"]}
              className="group inline-flex items-center gap-2 font-label text-[10px] tracking-[0.18em] text-x-red transition-colors hover:text-ink"
            >
              Partner types
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
