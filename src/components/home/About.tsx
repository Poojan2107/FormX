"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { about, trustMetrics } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const metricValues: Record<string, { value: number; suffix: string }> = {
  "25+": { value: 25, suffix: "+" },
  "15 Lakh+": { value: 15, suffix: " Lakh+" },
  "5": { value: 5, suffix: "" },
};

export function About() {
  return (
    <section id="about" className="scroll-mt-28 border-b border-line bg-bg section-y">
      <Container>
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="x-corner relative aspect-[4/5] overflow-hidden bg-[#111] formx-cut-lg">
              <AssetImage
                alt="G+2 Industrial Facility, Vapi — FORM× completed work"
                slot="projects/brochure/brochure_p3_2.png"
                kind="facility"
                fit="cover"
                aspect="auto"
                objectPosition="center"
                priority
                className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-6 pb-6 pt-20">
                <p className="font-label text-[10px] text-white/80">Built proof · Vapi G+2</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="flex flex-col justify-end lg:col-span-7 lg:pb-2">
            <p className="font-label text-[11px] text-x-red">Shaping form · Defining futures</p>
            <h2
              className="mt-5 max-w-[12ch] font-display font-extrabold uppercase leading-[0.95] tracking-tight text-ink"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
            >
              An Ahmedabad practice that refuses to issue early
            </h2>
            <p className="mt-8 measure-essay text-[18px] leading-[1.8] text-ink-muted">
              {about.paragraphs[0]}
            </p>
            <p className="mt-6 measure-essay font-label text-[10px] leading-relaxed text-ink/40">
              {about.industriesLine}
            </p>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-line pt-10">
              {trustMetrics.map((m) => {
                const parsed = metricValues[m.value] ?? { value: 0, suffix: m.value };
                return (
                  <div key={m.label}>
                    <p className="font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
                      <AnimatedCounter value={parsed.value} suffix={parsed.suffix} />
                    </p>
                    <p className="mt-2 font-label text-[9px] text-ink/40">{m.label}</p>
                  </div>
                );
              })}
            </div>

            <Link
              href="/about"
              transitionTypes={["nav-forward"]}
              className="mt-10 inline-flex w-fit items-center gap-2 font-label text-[11px] text-x-red transition-colors hover:text-ink"
            >
              The practice
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
