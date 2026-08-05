"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";
import { brochureBrand } from "@/data/brochureHome";
import { trustMetrics } from "@/data/site";

/** First photo arrives here — judgement + proof, not a text wall */
export function BrochureAbout() {
  return (
    <section id="about" className="scroll-mt-28 overflow-hidden bg-white">
      <div className="grid lg:grid-cols-2">
        <Reveal from="left" className="relative min-h-[420px] bg-[#111] lg:min-h-[640px]">
          <AssetImage
            slot="about/home-about.jpg"
            alt="FormX practice — built work"
            fit="cover"
            aspect="auto"
            tone="dark"
            className="absolute inset-0"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 md:bottom-10 md:left-10">
            <Image
              src="/formx-logo.png"
              alt=""
              width={160}
              height={48}
              className="h-8 w-auto object-contain opacity-90"
            />
            <p className="mt-3 font-label text-[9px] tracking-[0.28em] text-white/50">
              {brochureBrand.tagline}
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col justify-center px-6 py-16 sm:px-10 md:px-14 lg:py-20 xl:px-20">
          <Reveal>
            <p className="font-label text-[10px] tracking-[0.28em] text-x-red">About</p>
            <h2
              className="mt-5 max-w-[14ch] font-display font-bold leading-[1.05] tracking-tight text-ink"
              style={{ fontSize: "clamp(2rem, 3.8vw, 3.15rem)" }}
            >
              An Ahmedabad practice built on judgement
            </h2>
            <p className="mt-7 max-w-[38ch] text-[16px] leading-[1.75] text-ink/60 md:text-[17px]">
              {brochureBrand.intro}
            </p>
            <Link
              href="/about"
              transitionTypes={["nav-forward"]}
              className="group mt-9 inline-flex items-center gap-2 border-b border-x-red pb-1 font-label text-[10px] tracking-[0.2em] text-x-red transition-colors hover:text-x-red-hover"
            >
              Know more
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-14 grid grid-cols-3 gap-4 border-t border-line pt-10">
              {trustMetrics.map((m) => (
                <div key={m.label}>
                  <p
                    className="font-display font-bold tracking-tight text-ink"
                    style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)" }}
                  >
                    {m.value}
                  </p>
                  <p className="mt-1.5 text-[11px] leading-snug text-ink/40 md:text-[12px]">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
