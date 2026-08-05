"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { about, trustMetrics } from "@/data/site";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const metricValues: Record<string, { value: number; suffix: string }> = {
  "25+": { value: 25, suffix: "+" },
  "15 Lakh+": { value: 15, suffix: " Lakh+" },
  "5": { value: 5, suffix: "" },
};

/** About + quiet metrics rail — no separate Numbers chapter */
export function About() {
  return (
    <section id="about" className="scroll-mt-32 border-b border-line bg-white py-16 md:py-24 lg:py-28">
      <Container>
        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="x-corner relative min-h-[360px] overflow-hidden bg-[#0e0e0e] sm:min-h-[440px] lg:col-span-5 lg:min-h-[520px]">
            <AssetImage
              alt="G+2 Industrial Facility, Vapi — FORM× completed work"
              slot="projects/brochure/brochure_p3_2.png"
              kind="facility"
              fit="cover"
              aspect="auto"
              objectPosition="center"
              priority
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent px-5 pb-5 pt-16">
              <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white/85">
                G+2 Industrial · Vapi
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="flex flex-col justify-center lg:col-span-7 lg:py-4">
            <Logo variant="full" className="origin-left scale-[1.08]" />
            <p className="mt-8 font-display text-[11px] font-bold uppercase tracking-[0.28em] text-x-red">
              Shaping form · Defining futures
            </p>
            <p className="mt-6 font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-ink/35">
              About Us
            </p>
            <h2 className="mt-3 max-w-xl font-display text-[1.85rem] font-extrabold uppercase leading-[1.08] tracking-tight text-ink md:text-4xl lg:text-[2.55rem]">
              Ahmedabad structural practice
            </h2>
            <p className="mt-6 measure-studio text-[16px] leading-[1.9] text-ink-muted">
              {about.paragraphs[0]}
            </p>
            <p className="mt-5 max-w-xl font-display text-[11px] font-bold uppercase tracking-[0.14em] text-ink/40">
              {about.industriesLine}
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8">
              {trustMetrics.map((m) => {
                const parsed = metricValues[m.value] ?? { value: 0, suffix: m.value };
                return (
                  <div key={m.label}>
                    <p className="font-display text-2xl font-black tracking-tight text-ink md:text-3xl">
                      <AnimatedCounter value={parsed.value} suffix={parsed.suffix} />
                    </p>
                    <p className="mt-2 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-ink/40">
                      {m.label}
                    </p>
                  </div>
                );
              })}
            </div>

            <Link
              href="/about"
              transitionTypes={["nav-forward"]}
              className="mt-9 inline-flex w-fit items-center gap-2 border-b border-x-red pb-1 font-display text-[12px] font-bold uppercase tracking-[0.16em] text-x-red transition-colors hover:border-ink hover:text-ink"
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
