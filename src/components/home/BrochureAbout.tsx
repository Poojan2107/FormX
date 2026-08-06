"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { brochureBrand } from "@/data/brochureHome";
import { trustMetrics } from "@/data/site";
import { AssetImage } from "@/components/ui/AssetImage";

/**
 * ABOUT — Split editorial: image owns the left frame;
 * right column fills its width with a compact title + readable body.
 */
export function BrochureAbout() {
  return (
    <section id="about" className="scroll-mt-28 overflow-hidden bg-white">
      <div className="grid lg:grid-cols-2">
        <Reveal from="left" className="relative min-h-[440px] overflow-hidden bg-[#ece9e2] lg:min-h-[760px]">
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
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent lg:bg-gradient-to-r lg:from-black/25 lg:via-transparent lg:to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9 lg:p-10">
            <p className="font-label text-[10px] tracking-[0.28em] uppercase text-white/70">
              Studio · Built work
            </p>
            <p className="mt-2 max-w-[22ch] font-display text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
              Facilities sized for operations
            </p>
          </div>
          <span aria-hidden className="absolute left-0 top-0 h-[3px] w-20 bg-x-red" />
        </Reveal>

        <div className="relative flex flex-col justify-center px-8 py-16 sm:px-12 md:px-14 lg:px-12 lg:py-24 xl:px-16">
          <span
            aria-hidden
            className="pointer-events-none absolute right-8 top-10 hidden font-display text-[7rem] font-black leading-none text-ink/[0.03] xl:block"
          >
            ×
          </span>

          <Reveal>
            <p className="font-label text-[10.5px] tracking-[0.32em] uppercase text-x-red">
              About FormX
            </p>
            <h2
              className="mt-5 max-w-[20ch] font-display font-black leading-[1.05] tracking-[-0.04em] text-ink"
              style={{ fontSize: "clamp(1.9rem, 3.1vw, 2.85rem)" }}
            >
              A structural engineering firm built on{" "}
              <span className="relative inline">
                engineering judgement
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-[2.5px] w-[3.25rem] bg-x-red"
                />
              </span>
            </h2>
            <p className="mt-7 max-w-[50ch] text-[16px] font-medium leading-[1.9] text-ink/66 md:text-[17px]">
              {brochureBrand.intro}
            </p>
            <Link
              href="/about"
              transitionTypes={["nav-forward"]}
              className="group mt-9 inline-flex w-fit items-center gap-2.5 border-b-2 border-x-red/55 pb-1.5 font-label text-[10.5px] tracking-[0.22em] text-x-red transition-all hover:border-x-red hover:gap-3.5"
            >
              Know More
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-14 border-t border-ink/[0.09] pt-9">
              <div className="grid gap-8 sm:grid-cols-3 sm:gap-6">
                {trustMetrics.map((m, i) => (
                  <div key={m.label} className="relative">
                    <p
                      className="font-display font-black leading-none tracking-[-0.035em] text-ink"
                      style={{ fontSize: "clamp(1.85rem, 3vw, 2.5rem)" }}
                    >
                      {m.value}
                    </p>
                    <p className="mt-3 max-w-[12ch] font-label text-[10px] uppercase leading-relaxed tracking-[0.16em] text-ink/48">
                      {m.label}
                    </p>
                    {i < trustMetrics.length - 1 ? (
                      <span className="absolute -right-3 top-1 hidden font-display text-lg font-black text-x-red/25 sm:block">
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
