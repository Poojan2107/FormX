"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { brochureBrand } from "@/data/brochureHome";
import { trustMetrics } from "@/data/site";
import { AssetImage } from "@/components/ui/AssetImage";

/**
 * ABOUT — First human contact after the no-photo hero.
 * Split studio photo + judgement copy. Metrics sparse, no chrome clutter.
 */
export function BrochureAbout() {
  return (
    <section id="about" className="scroll-mt-28 overflow-hidden bg-white">
      <div className="grid lg:grid-cols-2">
        <Reveal
          from="left"
          className="relative min-h-[420px] overflow-hidden bg-[#111] lg:min-h-[720px]"
        >
          <AssetImage
            slot="about/home-about.jpg"
            alt="FormX studio — coordination before issue"
            fit="cover"
            kind="studio"
            tone="dark"
            aspect="auto"
            priority
            objectPosition="center center"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="absolute inset-0 h-full w-full opacity-95"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
            <p className="font-label text-[10px] tracking-[0.24em] text-x-red">Studio · Ahmedabad</p>
            <p className="mt-2 max-w-[20ch] font-display text-xl font-extrabold leading-tight tracking-tight text-white md:text-2xl">
              Judgement stays close to the work
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col justify-center px-8 py-16 sm:px-12 md:px-14 lg:py-24 xl:px-16">
          <Reveal>
            <p className="eyebrow text-x-red">About FormX</p>
            <h2
              className="mt-5 max-w-[18ch] font-display font-black leading-[1.02] tracking-tight text-ink"
              style={{ fontSize: "clamp(1.85rem, 3vw, 2.75rem)" }}
            >
              A practice built on engineering judgement
            </h2>
            <p className="mt-7 max-w-[46ch] text-[16px] leading-[1.9] text-ink/62 md:text-[17px]">
              {brochureBrand.intro}
            </p>
            <Link
              href="/about"
              transitionTypes={["nav-forward"]}
              className="group mt-9 inline-flex items-center gap-2 font-label text-[10px] tracking-[0.2em] text-x-red transition-colors hover:text-ink"
            >
              Know the studio
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-14 grid gap-8 border-t border-ink/[0.08] pt-9 sm:grid-cols-3">
              {trustMetrics.map((m) => (
                <div key={m.label}>
                  <dt className="sr-only">{m.label}</dt>
                  <dd
                    className="font-display font-black leading-none tracking-tight text-ink"
                    style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.35rem)" }}
                  >
                    {m.value}
                  </dd>
                  <p className="mt-3 max-w-[12ch] font-label text-[9px] tracking-[0.16em] text-ink/40">
                    {m.label}
                  </p>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
