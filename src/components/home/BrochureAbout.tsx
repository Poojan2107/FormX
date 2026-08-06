"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";
import { brochureBrand } from "@/data/brochureHome";
import { trustMetrics } from "@/data/site";

/**
 * ABOUT — "Split Editorial"
 * Left: full-height facility image, image owns the frame, FormX brand overlay.
 * Right: editorial column with premium typography and metric rail.
 * Background: white.
 */
export function BrochureAbout() {
  return (
    <section id="about" className="scroll-mt-28 overflow-hidden bg-white">
      <div className="grid lg:grid-cols-2">

        {/* ── Left: Image Column ────────────────────────────── */}
        <Reveal from="left" className="relative min-h-[420px] bg-[#ebeae6] lg:min-h-[680px]">
          {/* Image fills the full column — no letterbox */}
          <AssetImage
            slot="projects/brochure/brochure_p3_2.png"
            alt="FormX — industrial facility coordination"
            fit="cover"
            aspect="auto"
            tone="light"
            className="absolute inset-0 size-full"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />

          {/* Gradient overlay from bottom */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

          {/* FormX brand mark in image — per Hiren: use logo everywhere possible */}
          <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
            {/* Small lockup */}
            <div className="flex items-center gap-2">
              <span
                className="font-display font-black tracking-[-0.04em] text-white"
                style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)" }}
              >
                FORM<span className="text-x-red">×</span>
              </span>
              <span className="font-label text-[8px] tracking-[0.22em] text-white/50">
                CONSULTANTS
              </span>
            </div>
            <p className="mt-1 font-label text-[9px] tracking-[0.24em] text-white/40">
              {brochureBrand.tagline}
            </p>
          </div>

          {/* Subtle formx-cut on the right edge (desktop only) */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 hidden w-10 lg:block"
            style={{
              background:
                "linear-gradient(to bottom-left, white 50%, transparent 50%)",
            }}
          />
        </Reveal>

        {/* ── Right: Editorial Column ───────────────────────── */}
        <div className="flex flex-col justify-center px-6 py-16 sm:px-10 md:px-12 lg:py-24 xl:px-16">

          <Reveal>
            <p className="font-label text-[10px] tracking-[0.3em] text-x-red">
              About
            </p>
            <h2
              className="mt-5 max-w-[16ch] font-display font-extrabold leading-[1.04] tracking-tight text-ink"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.85rem)" }}
            >
              An Ahmedabad practice built on{" "}
              <span className="relative inline-block">
                engineering judgement
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-[2px] w-10 bg-x-red"
                />
              </span>
            </h2>
            <p className="mt-7 max-w-[40ch] text-[15px] leading-[1.8] text-ink/55 md:text-[16px]">
              {brochureBrand.intro}
            </p>
            <Link
              href="/about"
              transitionTypes={["nav-forward"]}
              className="group mt-8 inline-flex w-fit items-center gap-2 border-b border-x-red/60 pb-1 font-label text-[10px] tracking-[0.2em] text-x-red transition-colors hover:border-x-red"
            >
              Know More
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>

          {/* ── Metric Rail ──────────────────────────────────── */}
          <Reveal delay={0.1}>
            <div className="mt-14 border-t border-line pt-8">
              <div className="flex flex-wrap gap-x-0 gap-y-4">
                {trustMetrics.map((m, i) => (
                  <div key={m.label} className="flex items-stretch">
                    <div className="pr-6 md:pr-8">
                      <p
                        className="font-display font-extrabold leading-none tracking-tight text-ink"
                        style={{ fontSize: "clamp(1.65rem, 3vw, 2.25rem)" }}
                      >
                        {m.value}
                      </p>
                      <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-ink/38">
                        {m.label}
                      </p>
                    </div>
                    {/* Separator */}
                    {i < trustMetrics.length - 1 && (
                      <div className="mr-6 flex items-center md:mr-8">
                        <span className="font-display text-base font-black text-x-red/30">×</span>
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
