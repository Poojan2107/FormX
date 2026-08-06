"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { brochureBrand } from "@/data/brochureHome";

const ease = [0.22, 1, 0.36, 1] as const;

const TICKER_ITEMS = [
  "Structural Integrity",
  "Technical Expertise",
  "Functional Design",
  "Collaborative Insight",
  "Architecture",
  "Structure",
  "Infrastructure",
];

const TAGLINE_LINES = [["WHERE", "VISION"], ["TAKES", "FORM"]];

export function BrochureHero() {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(!!reduce);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const sheetOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    if (reduce) { setReady(true); return; }
    const t = window.setTimeout(() => setReady(true), 60);
    return () => window.clearTimeout(t);
  }, [reduce]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[calc(100svh-4.25rem)] flex-col overflow-hidden bg-[#fafaf8] sm:min-h-[calc(100svh-4.75rem)]"
      aria-label="FormX Consultants — Where Vision Takes Form"
    >
      {/* Paper grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "180px",
        }}
      />

      {/* Engineering crop marks */}
      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden>
        <motion.span initial={reduce ? false : { opacity: 0 }} animate={ready ? { opacity: 1 } : undefined} transition={{ duration: 0.5, delay: 0.1 }}
          className="absolute left-6 top-6 block h-10 w-10 border-l-2 border-t-2 border-ink/[0.1] md:left-10 md:top-10" />
        <motion.span initial={reduce ? false : { opacity: 0 }} animate={ready ? { opacity: 1 } : undefined} transition={{ duration: 0.5, delay: 0.15 }}
          className="absolute right-6 top-6 block h-10 w-10 border-r-2 border-t-2 border-ink/[0.1] md:right-10 md:top-10" />
        <motion.span initial={reduce ? false : { opacity: 0 }} animate={ready ? { opacity: 1 } : undefined} transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute bottom-16 left-6 block h-10 w-10 border-b-2 border-l-2 border-ink/[0.08] md:bottom-12 md:left-10" />
        <motion.span initial={reduce ? false : { opacity: 0 }} animate={ready ? { opacity: 1 } : undefined} transition={{ duration: 0.5, delay: 0.25 }}
          className="absolute bottom-16 right-6 block h-10 w-10 border-b-2 border-r-2 border-x-red/45 md:bottom-12 md:right-10" />
      </div>

      {/* ═══════════════════════════════════════════════════════
          TWO-COLUMN LAYOUT: both logo + tagline visible at once
          Left: tagline + CTAs (58%)  |  Right: logo + atmosphere (42%)
         ═══════════════════════════════════════════════════════ */}
      <motion.div
        style={reduce ? undefined : { opacity: sheetOpacity }}
        className="relative z-10 flex flex-1 flex-col"
      >
        <div className="flex flex-1 flex-col lg:grid lg:grid-cols-[58%_42%]">

          {/* ── LEFT: Tagline + CTAs ─────────────────────────────── */}
          <div className="flex flex-col justify-center px-6 py-16 md:px-10 lg:order-1 lg:pl-16 lg:pr-8 lg:py-20 xl:pl-20">

            {/* Label */}
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={ready ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="font-label text-[10px] tracking-[0.35em] text-x-red"
            >
              Architecture · Structure · Infrastructure
            </motion.p>

            {/* Tagline — two lines */}
            <h1 className="mt-5" aria-label={brochureBrand.slogan}>
              <span className="sr-only">{brochureBrand.slogan}</span>
              {TAGLINE_LINES.map((line, lineIdx) => (
                <div key={lineIdx} className="flex gap-x-4 md:gap-x-5" aria-hidden>
                  {line.map((word, wordIdx) => {
                    const globalIdx = lineIdx * 2 + wordIdx;
                    return (
                      <span key={word} className="overflow-hidden">
                        <motion.span
                          initial={reduce ? false : { y: "110%" }}
                          animate={ready ? { y: "0%" } : undefined}
                          transition={{ duration: 1.05, delay: 0.3 + globalIdx * 0.1, ease }}
                          className="block font-display font-black tracking-[-0.04em] text-ink"
                          style={{ fontSize: "clamp(2.8rem, 7vw, 7rem)", lineHeight: 1.0 }}
                        >
                          {word === "FORM" ? (
                            <>FORM<span className="text-x-red">×</span></>
                          ) : word}
                        </motion.span>
                      </span>
                    );
                  })}
                </div>
              ))}
            </h1>

            {/* Red divider rule */}
            <motion.div
              initial={reduce ? false : { scaleX: 0, opacity: 0 }}
              animate={ready ? { scaleX: 1, opacity: 1 } : undefined}
              transition={{ duration: 0.9, delay: 0.75, ease }}
              className="mt-8 flex origin-left items-center gap-4"
              aria-hidden
            >
              <span className="h-[1.5px] w-10 bg-x-red/50" />
              <span className="font-display text-sm font-black text-x-red/40">×</span>
              <span className="h-[1.5px] w-6 bg-ink/[0.08]" />
            </motion.div>

            {/* Sub-copy */}
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={ready ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.8, delay: 0.85, ease }}
              className="mt-6 max-w-[44ch] text-[15px] leading-[1.82] text-ink/48 md:text-[16px]"
            >
              Architecture, Structure and Infrastructure — engineered together before drawings leave the studio.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={ready ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.75, delay: 1.05, ease }}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link href="/contact" transitionTypes={["nav-forward"]} className="fx-btn-primary group">
                Discuss Your Facility
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="#projects" className="fx-btn-ghost">View Projects</a>
            </motion.div>

            {/* Scroll cue */}
            <motion.a
              href="#about"
              initial={reduce ? false : { opacity: 0 }}
              animate={ready ? { opacity: 1 } : undefined}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="mt-10 inline-flex items-center gap-2 font-label text-[9px] tracking-[0.26em] text-ink/28 transition-colors hover:text-x-red lg:hidden"
            >
              Enter the Practice
              <ChevronDown className="size-3.5 fx-scroll-cue" />
            </motion.a>
          </div>

          {/* ── RIGHT: Logo + X atmosphere ───────────────────────── */}
          <div className="relative hidden flex-col items-center justify-center overflow-hidden border-l border-ink/[0.06] lg:order-2 lg:flex">

            {/* Atmospheric × behind logo */}
            <motion.span
              aria-hidden
              initial={reduce ? false : { opacity: 0, scale: 0.8 }}
              animate={ready ? { opacity: 0.07, scale: 1 } : undefined}
              transition={{ duration: 2.5, delay: 0.2, ease }}
              className="pointer-events-none absolute select-none font-display font-black leading-none text-x-red"
              style={{ fontSize: "clamp(18rem, 42vw, 36rem)" }}
            >
              ×
            </motion.span>

            {/* FormX logo — mix-blend-mode:multiply removes white background */}
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.88, y: 20 }}
              animate={ready ? { opacity: 1, scale: 1, y: 0 } : undefined}
              transition={{ duration: 1.2, delay: 0.25, ease }}
              className="relative z-10"
            >
              <Image
                src="/formx-logo-solid.png"
                alt="FormX Consultants"
                width={320}
                height={137}
                priority
                className="h-auto w-[min(55vw,240px)] object-contain xl:w-[280px]"
                style={{ mixBlendMode: "multiply" }}
              />
            </motion.div>

            {/* Discipline label below logo */}
            <motion.p
              initial={reduce ? false : { opacity: 0 }}
              animate={ready ? { opacity: 1 } : undefined}
              transition={{ delay: 1.1, duration: 0.7 }}
              className="relative z-10 mt-6 font-label text-[9px] tracking-[0.3em] text-ink/25 uppercase"
            >
              Design | Engineering Studio
            </motion.p>

            {/* Registration corners inside right panel */}
            <span aria-hidden className="absolute bottom-10 left-8 block h-6 w-6 border-b border-l border-ink/[0.12]" />
            <span aria-hidden className="absolute bottom-10 right-8 block h-6 w-6 border-b border-r border-x-red/30" />
            <span aria-hidden className="absolute left-8 top-10 block h-6 w-6 border-l border-t border-ink/[0.12]" />
            <span aria-hidden className="absolute right-8 top-10 block h-6 w-6 border-r border-t border-ink/[0.12]" />

            {/* Scroll cue — desktop right */}
            <motion.a
              href="#about"
              initial={reduce ? false : { opacity: 0 }}
              animate={ready ? { opacity: 1 } : undefined}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="absolute bottom-9 right-8 flex flex-col items-center gap-2 font-label text-[9px] tracking-[0.26em] text-ink/25 transition-colors hover:text-x-red"
            >
              <span className="[writing-mode:vertical-lr]">Enter the Practice</span>
              <ChevronDown className="size-3.5 fx-scroll-cue" />
            </motion.a>
          </div>
        </div>

        {/* ── Ticker strip ─────────────────────────────────────────── */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={ready ? { opacity: 1 } : undefined}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="relative z-10 overflow-hidden border-t border-ink/[0.07] bg-[#fafaf8]/80 py-3 backdrop-blur-sm"
          aria-hidden
        >
          <div className="ticker-track select-none">
            {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={`${item}-${i}`} className="flex items-center gap-5 px-5">
                <span className="whitespace-nowrap font-display text-[10px] font-bold tracking-[0.3em] uppercase text-ink/25">
                  {item}
                </span>
                <span className="font-display text-lg font-black leading-none text-x-red/40">×</span>
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
