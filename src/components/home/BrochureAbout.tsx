"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { brochureBrand } from "@/data/brochureHome";
import { trustMetrics } from "@/data/site";

/** Practice intro + logo + kept stats — first content after hero */
export function BrochureAbout() {
  return (
    <section id="about" className="scroll-mt-28 bg-white py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <Image
              src="/formx-logo-solid.png"
              alt="FormX Consultants"
              width={280}
              height={88}
              className="h-auto w-[200px] object-contain md:w-[240px]"
            />
            <p className="mt-6 font-display text-sm font-semibold tracking-tight text-ink/50">
              {brochureBrand.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <p className="font-label text-[10px] tracking-[0.28em] text-x-red">About us</p>
            <h2
              className="mt-4 font-display font-extrabold uppercase leading-[0.95] tracking-tight text-ink"
              style={{ fontSize: "clamp(1.85rem, 4vw, 3rem)" }}
            >
              An Ahmedabad practice built on judgement
            </h2>
            <p className="mt-6 max-w-[52ch] text-[17px] leading-[1.75] text-ink/65">
              {brochureBrand.intro}
            </p>
            <p className="mt-5 max-w-[48ch] text-[16px] leading-[1.7] text-ink/50">
              {brochureBrand.statement}
            </p>
            <Link
              href="/about"
              transitionTypes={["nav-forward"]}
              className="group mt-8 inline-flex items-center gap-2 font-label text-[10px] tracking-[0.2em] text-x-red transition-colors hover:text-x-red-hover"
            >
              Know more
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
            {trustMetrics.map((m) => (
              <div key={m.label} className="bg-white px-6 py-8 text-center sm:py-10">
                <p
                  className="font-display font-black tracking-tight text-ink"
                  style={{ fontSize: "clamp(2.25rem, 5vw, 3.25rem)" }}
                >
                  {m.value}
                </p>
                <p className="mt-2 font-label text-[9px] tracking-[0.22em] text-ink/40">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
