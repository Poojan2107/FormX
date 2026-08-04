"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { VisualFrame } from "@/components/ui/VisualFrame";

/** V3 home About — calm practice intro after "why we exist" */
export function About() {
  return (
    <section id="about" className="scroll-mt-32 border-b border-line bg-[#f7f7f7] py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-14">
          <Reveal className="lg:col-span-5">
            <VisualFrame
              slot="about/home-about.jpg"
              alt="FORMX Ahmedabad practice"
              fit="cover"
              aspect="portrait"
              tone="dark"
              className="border border-line"
            />
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-7">
            <Logo variant="full" className="origin-left scale-110" />
            <p className="mt-6 font-display text-[11px] font-bold uppercase tracking-[0.28em] text-x-red">
              Shaping form · Defining futures
            </p>
            <p className="mt-4 font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-ink/35">
              About Us
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[1.08] tracking-tight text-ink md:text-4xl lg:text-[2.65rem]">
              An Ahmedabad practice that stays close to the work
            </h2>
            <p className="mt-6 max-w-2xl text-[16px] leading-[1.9] text-ink-muted">
              A dynamic team of structural engineers and designers — merging technical proficiency
              with practical wisdom. We craft spaces that are robust and functional, aligned with
              architectural vision and how people actually use the facility.
            </p>
            <p className="mt-4 max-w-2xl text-[15px] leading-[1.85] text-ink-muted">
              Industrial houses, pharma companies, architects, contractors and homeowners come to
              FORMX for Architecture, Structure and Infrastructure coordinated as one accountable
              practice.
            </p>
            <Link
              href="/about"
              transitionTypes={["nav-forward"]}
              className="mt-8 inline-flex items-center gap-2 font-display text-[12px] font-bold uppercase tracking-[0.16em] text-x-red transition-colors hover:text-ink"
            >
              Know the people and philosophy
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
