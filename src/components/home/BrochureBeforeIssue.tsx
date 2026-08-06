"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formxMethod } from "@/data/method";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";

/**
 * BEFORE × ISSUE — Signature homepage stop.
 * Dark documentary chapter: hold → release. Not a feature-card grid.
 */
export function BrochureBeforeIssue() {
  return (
    <section
      id="before-issue"
      className="fx-grain relative scroll-mt-28 overflow-hidden border-y border-black bg-[#0a0a09] py-24 text-white md:py-32"
    >
      <Container className="relative z-10">
        <div className="grid gap-10 border-b border-white/10 pb-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-end lg:gap-16">
          <Reveal>
            <p className="eyebrow text-x-red">{formxMethod.code}</p>
            <h2
              className="mt-5 font-display font-black leading-[0.92] tracking-[-0.045em]"
              style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)" }}
            >
              Before <span className="text-x-red">×</span> Issue
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-[15.5px] leading-[1.9] text-white/58 md:text-[16.5px]">
              {formxMethod.belief}
            </p>
          </Reveal>
        </div>

        {/* Documentary stage list — tension before release */}
        <ol className="mt-4">
          {formxMethod.stages.map((stage, i) => (
            <Reveal key={stage.id} delay={0.04 * i} from="fade">
              <li className="group grid gap-3 border-b border-white/[0.08] py-7 md:grid-cols-[5.5rem_minmax(0,12rem)_minmax(0,1fr)_minmax(0,1.1fr)] md:items-baseline md:gap-8 md:py-8">
                <span className="font-label text-[10px] tracking-[0.28em] text-x-red">
                  {stage.num}
                </span>
                <h3 className="font-display text-2xl font-extrabold tracking-tight transition-colors group-hover:text-x-red md:text-[1.65rem]">
                  {stage.title}
                </h3>
                <p className="text-[14px] font-medium leading-[1.6] text-white/45 md:text-[15px]">
                  {stage.verb}
                </p>
                <p className="text-[14px] leading-[1.75] text-white/62 md:text-[15px]">
                  {stage.decision}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        {/* Release — the stamp */}
        <Reveal delay={0.28}>
          <div className="mt-16 grid gap-10 border-t border-white/10 pt-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end lg:gap-16">
            <div>
              <p className="eyebrow text-x-red">The stamp</p>
              <p
                className="mt-5 max-w-[16ch] font-display font-black leading-[0.98] tracking-tight"
                style={{ fontSize: "clamp(1.85rem, 4vw, 3.25rem)" }}
              >
                {formxMethod.stamp}
              </p>
              <p className="mt-5 max-w-[44ch] text-[14.5px] leading-[1.85] text-white/45">
                {formxMethod.promise}
              </p>
            </div>
            <div className="lg:pb-1">
              <p className="font-label text-[10px] tracking-[0.2em] text-white/35">
                {formxMethod.disciplines.join(" · ")}
              </p>
              <Link
                href="/projects/vapi-g2-industrial"
                transitionTypes={["nav-forward"]}
                className="group mt-6 inline-flex items-center gap-2.5 border border-white/15 px-5 py-3.5 font-label text-[10px] tracking-[0.2em] text-white transition-colors hover:border-x-red hover:text-x-red"
              >
                See it hold on Vapi G+2
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
