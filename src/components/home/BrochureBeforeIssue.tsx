"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formxMethod } from "@/data/method";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";

/**
 * BEFORE × ISSUE — Quiet signature stop on the homepage spine.
 * Not Construction Sequence theatre: editorial stages only.
 */
export function BrochureBeforeIssue() {
  return (
    <section
      id="before-issue"
      className="relative scroll-mt-28 overflow-hidden border-y border-ink/[0.06] bg-[#fafaf8] py-24 md:py-32"
    >
      <span aria-hidden className="absolute left-0 top-0 h-[3px] w-24 bg-x-red" />

      <Container className="relative z-10">
        <div className="grid gap-8 border-b border-ink/[0.08] pb-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-16">
          <Reveal>
            <p className="font-label text-[10.5px] tracking-[0.32em] uppercase text-x-red">
              {formxMethod.code}
            </p>
            <h2
              className="mt-4 font-display font-black leading-[0.95] tracking-[-0.045em] text-ink"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
            >
              Before <span className="text-x-red">×</span> Issue
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-[15.5px] leading-[1.9] text-ink/60 md:text-[16.5px] lg:pb-1">
              {formxMethod.belief}
            </p>
            <p className="mt-4 text-[14px] leading-[1.8] text-ink/42">{formxMethod.promise}</p>
          </Reveal>
        </div>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {formxMethod.stages.map((stage, i) => (
            <Reveal key={stage.id} delay={0.05 * i} from="fade" className="h-full">
              <li className="flex h-full flex-col border border-ink/[0.08] bg-white px-5 py-6 transition-colors hover:border-x-red/30">
                <span className="font-label text-[10px] tracking-[0.24em] text-x-red">
                  {stage.num}
                </span>
                <h3 className="mt-3 font-display text-xl font-extrabold tracking-tight text-ink">
                  {stage.title}
                </h3>
                <p className="mt-2 text-[13px] font-medium text-ink/45">{stage.verb}</p>
                <p className="mt-4 flex-1 text-[13.5px] leading-[1.75] text-ink/58">
                  {stage.decision}
                </p>
                <span aria-hidden className="mt-5 block h-[2px] w-7 bg-x-red/70" />
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.28}>
          <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-label text-[10px] tracking-[0.22em] text-ink/38">
              {formxMethod.disciplines.join(" · ")}
              <span className="mx-3 text-x-red/50">×</span>
              {formxMethod.stamp}
            </p>
            <Link
              href="/projects/vapi-g2-industrial"
              transitionTypes={["nav-forward"]}
              className="group inline-flex items-center gap-2 font-label text-[10.5px] tracking-[0.2em] text-x-red transition-colors hover:text-ink"
            >
              See it hold on a real facility
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
