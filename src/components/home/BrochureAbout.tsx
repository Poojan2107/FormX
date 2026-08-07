"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { brochureBrand } from "@/data/brochureHome";
import { trustMetrics } from "@/data/site";

/**
 * ABOUT — Cream band: copy + aligned metrics left, structural photo right.
 */
export function BrochureAbout() {
  return (
    <section
      id="about"
      className="scroll-mt-28 overflow-hidden border-y border-ink/[0.06] bg-[#fafaf8]"
    >
      <Container className="py-16 md:py-20 lg:py-24">
        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-14">
          <div className="flex flex-col justify-center lg:col-span-5">
            <Reveal>
              <div className="flex items-center justify-between">
                <p className="font-label text-[10px] uppercase tracking-[0.32em] text-x-red sm:text-[10.5px]">
                  About FormX
                </p>
                <span className="font-label text-[9.5px] font-bold tracking-[0.24em] text-ink/35">
                  [FORMX.02]
                </span>
              </div>
              <h2
                className="mt-4 font-display font-black leading-[1.1] tracking-[-0.035em] text-ink"
                style={{ fontSize: "clamp(1.7rem, 2.5vw, 2.4rem)" }}
              >
                A structural engineering firm built on engineering judgement
              </h2>
              <p className="mt-6 text-[15px] leading-[1.85] text-ink/60 sm:text-[15.5px] md:text-[16px]">
                {brochureBrand.intro}
              </p>
              <Link
                href="/about"
                transitionTypes={["nav-forward"]}
                className="group mt-8 inline-flex w-fit items-center gap-2 font-label text-[10px] tracking-[0.22em] text-x-red transition-colors hover:text-ink sm:text-[10.5px]"
              >
                Know More
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>

            <Reveal delay={0.1}>
              <dl className="mt-12 flex w-full border-t border-ink/[0.08] pt-8">
                {trustMetrics.map((m, i) => (
                  <div
                    key={m.label}
                    className={`flex min-w-0 flex-1 flex-col ${
                      i === 0
                        ? "pr-4 sm:pr-5"
                        : i === trustMetrics.length - 1
                          ? "border-l border-ink/[0.08] pl-4 sm:pl-5"
                          : "border-l border-ink/[0.08] px-4 sm:px-5"
                    }`}
                  >
                    <dt className="sr-only">{m.label}</dt>
                    <dd className="flex h-10 items-end sm:h-11">
                      <span className="font-display text-[1.25rem] font-black leading-none tracking-[-0.03em] text-ink whitespace-nowrap sm:text-[1.45rem]">
                        {m.value}
                      </span>
                    </dd>
                    <span aria-hidden className="mt-3 block h-[2px] w-6 bg-x-red" />
                    <p className="mt-3 min-h-[2.4em] font-label text-[8px] uppercase leading-[1.3] tracking-[0.11em] text-ink/45 sm:text-[9px]">
                      {m.label}
                    </p>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal from="right" className="lg:col-span-7" delay={0.06}>
            <div className="formx-cut x-corner-glow group relative aspect-[4/3] overflow-hidden bg-[#111] border border-ink/10 transition-all duration-500 hover:border-x-red/50 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] lg:aspect-auto lg:h-full lg:min-h-[480px]">
              <Image
                src="/assets/services/structural-02.jpg"
                alt="Structural steel frame — FormX engineering"
                fill
                priority
                unoptimized
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90"
              />
              <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8">
                <p className="font-label text-[10px] uppercase tracking-[0.28em] text-x-red font-semibold">
                  Studio · Practice
                </p>
                <p className="mt-2 max-w-[24ch] font-display text-lg font-extrabold leading-snug tracking-tight text-white sm:text-xl">
                  Judgement stays close to the work
                </p>
              </div>
              <span
                aria-hidden
                className="absolute left-0 top-0 z-10 h-[3px] w-16 bg-x-red transition-all duration-500 group-hover:w-28 sm:w-20"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
