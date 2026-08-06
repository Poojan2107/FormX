"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { brochureBrand } from "@/data/brochureHome";
import { trustMetrics } from "@/data/site";
import Image from "next/image";

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

        {/* ── Left: Full-height image ───────────────────────── */}
        <div className="relative min-h-[480px] overflow-hidden bg-[#1a1a1a] lg:min-h-[720px]">
          <Image
            src="/assets/projects/brochure/brochure_p3_4.png"
            alt="FormX — engineering precision on site"
            fill
            unoptimized
            priority
            className="object-cover object-center transition-transform duration-[2s] hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* Rich gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />

          {/* FormX brand overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
            <div className="flex items-center gap-3 mb-1.5">
              <span className="font-display text-2xl font-black tracking-[-0.04em] text-white">
                FORM<span className="text-x-red">×</span>
              </span>
              <span className="font-label text-[9.5px] tracking-[0.26em] text-white/60 uppercase">
                Consultants
              </span>
            </div>
            <p className="font-label text-[9.5px] tracking-[0.22em] text-white/45">
              {brochureBrand.tagline}
            </p>
          </div>

          {/* FormX-cut accent on right edge */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 hidden w-12 lg:block"
            style={{ background: "linear-gradient(to bottom-left, white 50%, transparent 50%)" }}
          />

          {/* Red accent tag */}
          <div className="absolute left-0 top-0 h-[3px] w-16 bg-x-red" aria-hidden />
        </div>

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
              A structural engineering firm<br />
              built on{" "}
              <span className="relative">
                engineering judgement
                <span aria-hidden className="absolute -bottom-1 left-0 h-[2.5px] w-12 bg-x-red" />
              </span>
            </h2>
            <p className="mt-7 max-w-[44ch] text-[15.5px] font-medium leading-[1.85] text-ink/75 md:text-[16.5px]">
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
