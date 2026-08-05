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
    <section id="about" className="relative scroll-mt-28 overflow-hidden bg-white">
      <Container className="py-20 md:py-28 lg:py-32">
        <Reveal>
          <p className="font-label text-center text-[11px] tracking-[0.32em] text-x-red">
            {about.legacy}
          </p>
        </Reveal>

        <div className="mt-14 grid items-center gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-10">
          <Reveal className="relative lg:col-span-6">
            <div className="relative aspect-[5/6] overflow-hidden bg-[#0a0a0a] md:aspect-[4/5]">
              <AssetImage
                alt="G+2 Industrial Facility, Vapi — FormX completed work"
                slot="projects/brochure/brochure_p3_2.png"
                kind="facility"
                fit="cover"
                aspect="auto"
                objectPosition="center"
                priority
                className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="font-label text-[10px] tracking-[0.24em] text-white/90">
                  Built proof · Vapi G+2 · 66,000 sq.ft.
                </p>
              </div>
              <span className="absolute left-5 top-5 h-6 w-6 border-l-2 border-t-2 border-x-red" aria-hidden />
              <span className="absolute bottom-5 right-5 h-6 w-6 border-b-2 border-r-2 border-white/40" aria-hidden />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6 lg:pl-4">
            <h2
              className="font-display font-black uppercase leading-[0.95] tracking-tight text-ink"
              style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)" }}
            >
              An Ahmedabad practice built on judgement
            </h2>
            <p className="mt-8 max-w-[40ch] text-[17px] font-medium leading-[1.8] text-ink-muted md:text-[18px]">
              {about.paragraphs[0]}
            </p>
            <p className="mt-6 max-w-[42ch] font-label text-[9px] leading-relaxed tracking-[0.14em] text-ink/35">
              {about.industriesLine}
            </p>

            <div className="mt-12 grid grid-cols-3 gap-4 border-y border-line py-8">
              {trustMetrics.map((m) => {
                const parsed = metricValues[m.value] ?? { value: 0, suffix: m.value };
                return (
                  <div key={m.label}>
                    <p className="font-display text-3xl font-black tracking-tight text-ink md:text-4xl lg:text-5xl">
                      <AnimatedCounter value={parsed.value} suffix={parsed.suffix} />
                    </p>
                    <p className="mt-2 font-label text-[8px] tracking-[0.16em] text-ink/40 md:text-[9px]">
                      {m.label}
                    </p>
                  </div>
                );
              })}
            </div>

            <Link
              href="/about"
              transitionTypes={["nav-forward"]}
              className="mt-8 inline-flex items-center gap-2 font-label text-[11px] tracking-[0.18em] text-x-red transition-colors hover:text-ink"
            >
              Meet the practice
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
