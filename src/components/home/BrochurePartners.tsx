"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { brochurePartners, brochureContactNote } from "@/data/brochureHome";
import { PartnerTypesBanner } from "@/components/shared/PartnerTypesBanner";

/**
 * PARTNERS — Editorial header + equal-height partner grid.
 */
export function BrochurePartners() {
  return (
    <section id="partners" className="scroll-mt-28 bg-[#f7f6f2] py-16 md:py-24 border-t border-ink/[0.06]">
      <Container>
        <div className="mb-12 grid gap-6 border-b border-ink/[0.08] pb-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-end lg:gap-14">
          <Reveal>
            <div className="flex items-center justify-between">
              <p className="font-label text-[10.5px] tracking-[0.32em] uppercase text-x-red">
                Partners
              </p>
              <span className="font-label text-[9.5px] font-bold tracking-[0.24em] text-ink/35">
                [FORMX.08]
              </span>
            </div>
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

        <div className="my-4">
          <PartnerTypesBanner showHeading={false} />
        </div>

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
