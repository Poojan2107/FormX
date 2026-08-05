"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";
import { BrandMark } from "@/components/ui/BrandMark";
import { brochureBrand } from "@/data/brochureHome";
import { trustMetrics } from "@/data/site";

/** Real facility photo (brochure) — not stock conference room */
export function BrochureAbout() {
  return (
    <section id="about" className="scroll-mt-28 overflow-hidden bg-white">
      <div className="grid lg:grid-cols-2">
        <Reveal from="left" className="relative min-h-[380px] bg-[#ebeae6] lg:min-h-[600px]">
          <AssetImage
            slot="projects/brochure/brochure_p3_2.png"
            alt="FormX industrial facility"
            fit="contain"
            aspect="auto"
            tone="light"
            className="absolute inset-0"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-8 py-8">
            <BrandMark tone="dark" size="sm" showSub />
            <p className="mt-2 font-label text-[9px] tracking-[0.24em] text-white/50">
              {brochureBrand.tagline}
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col justify-center px-6 py-14 sm:px-10 md:px-14 lg:py-20 xl:px-16">
          <Reveal>
            <p className="font-label text-[10px] tracking-[0.28em] text-x-red">About</p>
            <h2
              className="mt-5 max-w-[14ch] font-display font-bold leading-[1.05] tracking-tight text-ink"
              style={{ fontSize: "clamp(1.85rem, 3.5vw, 2.85rem)" }}
            >
              An Ahmedabad practice built on judgement
            </h2>
            <p className="mt-6 max-w-[38ch] text-[16px] leading-[1.75] text-ink/60">
              {brochureBrand.intro}
            </p>
            <Link
              href="/about"
              transitionTypes={["nav-forward"]}
              className="group mt-8 inline-flex items-center gap-2 border-b border-x-red pb-1 font-label text-[10px] tracking-[0.2em] text-x-red"
            >
              Know more
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-line pt-8">
              {trustMetrics.map((m) => (
                <div key={m.label}>
                  <p
                    className="font-display font-bold tracking-tight text-ink"
                    style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
                  >
                    {m.value}
                  </p>
                  <p className="mt-1 text-[11px] leading-snug text-ink/40">{m.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
