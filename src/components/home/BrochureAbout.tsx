"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { brochureBrand } from "@/data/brochureHome";
import { trustMetrics } from "@/data/site";
import { AssetImage } from "@/components/ui/AssetImage";

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
        <Reveal from="left" className="relative overflow-hidden bg-[#ece9e2] lg:min-h-[760px]">
          <div className="absolute inset-0 border-r border-line" />
          <AssetImage
            slot="projects/brochure/brochure_p3_4.png"
            alt="FormX industrial facility"
            fit="cover"
            tone="light"
            aspect="auto"
            priority
            objectPosition="center center"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="absolute inset-0 h-full w-full"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-transparent" />
        </Reveal>

        {/* ── Right: Editorial column ───────────────────────── */}
        <div className="flex flex-col justify-center px-8 py-18 sm:px-12 md:px-14 lg:px-16 lg:py-24 xl:px-20">

          <Reveal>
            <p className="font-label text-[10.5px] tracking-[0.35em] uppercase text-x-red">
              About FormX
            </p>
            <h2
              className="mt-4 max-w-[11ch] font-display font-black leading-[0.96] tracking-[-0.05em] text-ink"
              style={{ fontSize: "clamp(2.15rem, 4vw, 3.55rem)" }}
            >
              A structural engineering firm
              <br />
              built on{" "}
              <span className="relative">
                engineering judgement
                <span aria-hidden className="absolute -bottom-1 left-0 h-[2.5px] w-12 bg-x-red" />
              </span>
            </h2>
            <p className="mt-6 max-w-[35ch] text-[16px] font-medium leading-[1.92] text-ink/66 md:text-[17px]">
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
            <div className="mt-14 border-t border-ink/[0.1] pt-9">
              <div className="grid gap-6 sm:grid-cols-3">
                {trustMetrics.map((m, i) => (
                  <div key={m.label} className="relative">
                    <div>
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
                    {i < trustMetrics.length - 1 ? (
                      <span className="absolute -right-3 top-2 hidden font-display text-xl font-black text-x-red/30 sm:block">
                        ×
                      </span>
                    ) : null}
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
