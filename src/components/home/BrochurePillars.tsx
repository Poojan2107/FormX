"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { brochurePillars } from "@/data/brochureHome";

/**
 * PILLARS — Light manifesto (paper field).
 * Kept quiet so Before × Issue owns the black signature stop.
 */
export function BrochurePillars() {
  return (
    <section id="pillars" className="scroll-mt-28 border-y border-ink/[0.06] bg-[#fafaf8] py-24 md:py-32">
      <Container>
        <div className="grid gap-8 border-b border-ink/[0.08] pb-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-16">
          <Reveal>
            <p className="eyebrow text-x-red">The FormX way</p>
            <h2
              className="mt-4 font-display font-black leading-[0.98] tracking-tight text-ink"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Four pillars
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="text-[15px] leading-[1.9] text-ink/55 md:text-[16px] lg:pb-1">
              How we think before we draw — judgement, coordination and accountability held through
              issue.
            </p>
          </Reveal>
        </div>

        <ol className="mt-2">
          {brochurePillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={0.04 * i} from="fade">
              <li className="grid gap-3 border-b border-ink/[0.08] py-8 md:grid-cols-[4.5rem_minmax(0,14rem)_minmax(0,1fr)] md:items-baseline md:gap-10 md:py-9">
                <span className="font-label text-[10px] tracking-[0.24em] text-x-red">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl font-extrabold tracking-tight text-ink md:text-[1.35rem]">
                  {pillar.title}
                </h3>
                <p className="text-[15px] leading-[1.85] text-ink/58">{pillar.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-5">
            <p className="font-label text-[10px] tracking-[0.2em] text-ink/35">
              Design <span className="text-x-red">|</span> Engineering
            </p>
            <Link
              href="/#before-issue"
              className="group inline-flex items-center gap-2 font-label text-[10px] tracking-[0.18em] text-x-red transition-colors hover:text-ink"
            >
              Before × Issue
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
