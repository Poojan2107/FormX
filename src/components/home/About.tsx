"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { about } from "@/data/site";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";

/**
 * VMS-style About after hero scroll: filled photo column + logo + copy.
 * Cover fill — never letterboxed matte that looks “placed”.
 */
export function About() {
  return (
    <section id="about" className="scroll-mt-32 border-b border-line bg-white py-16 md:py-24 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-14">
          <Reveal className="relative min-h-[320px] overflow-hidden bg-[#111] sm:min-h-[400px] lg:col-span-5 lg:min-h-0">
            <AssetImage
              alt="G+2 Industrial Facility, Vapi — FORMX completed work"
              slot="projects/brochure/brochure_p3_2.png"
              kind="facility"
              fit="cover"
              aspect="auto"
              objectPosition="center"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
              <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                G+2 Industrial · Vapi
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="flex flex-col justify-center lg:col-span-7">
            <Logo variant="full" className="origin-left scale-110" />
            <p className="mt-8 font-display text-[11px] font-bold uppercase tracking-[0.28em] text-x-red">
              Shaping form · Defining futures
            </p>
            <p className="mt-5 font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-ink/35">
              About Us
            </p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-extrabold uppercase leading-[1.08] tracking-tight text-ink md:text-4xl lg:text-[2.5rem]">
              Trusted structural engineering &amp; design practice
            </h2>
            <p className="mt-6 max-w-xl text-[16px] leading-[1.9] text-ink-muted">
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
