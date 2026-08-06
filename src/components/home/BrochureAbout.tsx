"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { brochureBrand } from "@/data/brochureHome";
import { trustMetrics } from "@/data/site";
import { VisualFrame } from "@/components/ui/VisualFrame";

/**
 * ABOUT — "Split Editorial"
 * Left: full-height facility image, object-cover, image owns the frame.
 * Right: editorial column with premium typography and metric rail.
 * Background: white.
 */
export function BrochureAbout() {
  return (
    <section id="about" className="scroll-mt-28 overflow-hidden bg-white">
      <div className="grid lg:grid-cols-2">

        {/* ── Left: Brochure facility image ─────────────────────── */}
        <Reveal from="left" className="bg-[#efede8] lg:min-h-[720px]">
          <VisualFrame
            slot="projects/brochure/brochure_p3_4.png"
            alt="FormX industrial facility"
            fit="contain"
            tone="light"
            aspect="auto"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-full min-h-[420px] border-r border-line lg:min-h-[720px]"
            imgClassName="p-10 md:p-14"
          />
        </Reveal>

        {/* ── Right: Editorial column ───────────────────────── */}
        <div className="flex flex-col justify-center px-8 py-20 sm:px-12 md:px-14 lg:py-28 xl:px-18">

          <Reveal>
            <p className="font-label text-[10.5px] tracking-[0.35em] uppercase text-x-red">
              About FormX
            </p>
            <h2
              className="mt-5 font-display font-black leading-[1.04] tracking-[-0.03em] text-ink"
              style={{ fontSize: "clamp(2rem, 3.8vw, 3.25rem)" }}
            >
              A structural engineering firm
              <br />
              built on{" "}
              <span className="relative">
                engineering judgement
                <span aria-hidden className="absolute -bottom-1 left-0 h-[2.5px] w-12 bg-x-red" />
              </span>
            </h2>
            <p className="mt-7 max-w-[42ch] text-[15.5px] font-medium leading-[1.85] text-ink/70 md:text-[16.5px]">
              {brochureBrand.intro}
            </p>
            <Link
              href="/about"
              transitionTypes={["nav-forward"]}
              className="group mt-9 inline-flex w-fit items-center gap-2.5 border-b-2 border-x-red/60 pb-1.5 font-label text-[10.5px] tracking-[0.22em] text-x-red transition-all hover:border-x-red hover:gap-3"
            >
              Know More
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          {/* Metric rail */}
          <Reveal delay={0.12}>
            <div className="mt-16 border-t border-ink/[0.1] pt-10">
              <div className="flex flex-wrap items-start gap-y-6">
                {trustMetrics.map((m, i) => (
                  <div key={m.label} className="flex items-stretch">
                    <div className="pr-7 md:pr-9">
                      <p
                        className="font-display font-black leading-none tracking-[-0.03em] text-ink"
                        style={{ fontSize: "clamp(1.85rem, 3.4vw, 2.65rem)" }}
                      >
                        {m.value}
                      </p>
                      <p className="mt-2.5 font-label text-[10px] uppercase tracking-[0.2em] text-ink/50">
                        {m.label}
                      </p>
                    </div>
                    {i < trustMetrics.length - 1 && (
                      <div className="mr-7 flex items-center md:mr-9">
                        <span className="font-display text-xl font-black text-x-red/35">×</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
