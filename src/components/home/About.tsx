"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { about } from "@/data/site";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { VisualFrame } from "@/components/ui/VisualFrame";

/**
 * Founder: About Us AFTER hero scroll — VMS photo + copy.
 * Real brochure facility (not stock boardroom). Logo + shaping form + one paragraph.
 */
export function About() {
  return (
    <section id="about" className="scroll-mt-32 border-b border-line bg-white py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <Reveal className="lg:col-span-5">
            <VisualFrame
              slot="projects/brochure/brochure_p3_2.png"
              alt="G+2 Industrial Facility, Vapi — FORMX completed work"
              fit="contain"
              aspect="portrait"
              tone="dark"
              className="border border-line"
            />
            <p className="mt-3 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-ink/40">
              G+2 Industrial · Vapi
            </p>
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-7">
            <Logo variant="full" className="origin-left scale-110" />
            <p className="mt-7 font-display text-[11px] font-bold uppercase tracking-[0.28em] text-x-red">
              Shaping form · Defining futures
            </p>
            <p className="mt-5 font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-ink/35">
              About Us
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[1.08] tracking-tight text-ink md:text-4xl lg:text-[2.65rem]">
              Trusted structural engineering &amp; design practice
            </h2>
            <p className="mt-6 max-w-2xl text-[16px] leading-[1.9] text-ink-muted">
              {about.paragraphs[0]}
            </p>
            <Link
              href="/about"
              transitionTypes={["nav-forward"]}
              className="mt-8 inline-flex items-center gap-2 font-display text-[12px] font-bold uppercase tracking-[0.16em] text-x-red transition-colors hover:text-ink"
            >
              Know more
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
