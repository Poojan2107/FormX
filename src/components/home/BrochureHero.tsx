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
      className="relative isolate flex min-h-[calc(100svh-4.25rem)] flex-col justify-between overflow-hidden bg-[#fafaf8] sm:min-h-[calc(100svh-4.75rem)]"
      aria-label="FormX Consultants — Where Vision Takes Form"
    >
      {/* Paper grain atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "180px",
        }}
      />

      {/* Engineering crop marks */}
      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden>
        <motion.span initial={reduce ? false : { opacity: 0 }} animate={ready ? { opacity: 1 } : undefined} transition={{ duration: 0.5, delay: 0.1 }}
          className="absolute left-6 top-6 block h-10 w-10 border-l-2 border-t-2 border-ink/[0.12] md:left-10 md:top-10" />
        <motion.span initial={reduce ? false : { opacity: 0 }} animate={ready ? { opacity: 1 } : undefined} transition={{ duration: 0.5, delay: 0.15 }}
          className="absolute right-6 top-6 block h-10 w-10 border-r-2 border-t-2 border-ink/[0.12] md:right-10 md:top-10" />
        <motion.span initial={reduce ? false : { opacity: 0 }} animate={ready ? { opacity: 1 } : undefined} transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute bottom-8 left-6 block h-10 w-10 border-b-2 border-l-2 border-ink/[0.1] md:bottom-10 md:left-10" />
        <motion.span initial={reduce ? false : { opacity: 0 }} animate={ready ? { opacity: 1 } : undefined} transition={{ duration: 0.5, delay: 0.25 }}
          className="absolute bottom-8 right-6 block h-10 w-10 border-b-2 border-r-2 border-x-red/50 md:bottom-10 md:right-10" />
      </div>

      {/* ═══════════════════════════════════════════════════════
          TWO-COLUMN LAYOUT: Tagline + CTAs left, Logo right
          Proper font size + overflow padding so NO text cuts!
         ═══════════════════════════════════════════════════════ */}
      <motion.div
        style={reduce ? undefined : { opacity: sheetOpacity }}
        className="relative z-10 flex flex-1 flex-col"
      >
        <div className="flex flex-1 flex-col lg:grid lg:grid-cols-[58%_42%]">

          {/* ── LEFT: Tagline + CTAs ─────────────────────────────── */}
          <div className="flex flex-col justify-center px-6 py-14 md:px-10 lg:order-1 lg:py-20 lg:pl-16 lg:pr-6 xl:pl-20">

            {/* Discipline Tag */}
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={ready ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="font-label text-[10.5px] tracking-[0.32em] uppercase text-x-red"
            >
              Architecture · Structure · Infrastructure
            </motion.p>

            {/* Tagline Header — Carefully sized so NO text clips */}
            <h1 className="mt-5 space-y-1" aria-label={brochureBrand.slogan}>
              <span className="sr-only">{brochureBrand.slogan}</span>
              
              {/* Line 1: WHERE VISION */}
              <div className="overflow-hidden py-1 pr-4" aria-hidden>
                <motion.span
                  initial={reduce ? false : { y: "110%" }}
                  animate={ready ? { y: "0%" } : undefined}
                  transition={{ duration: 1.05, delay: 0.3, ease }}
                  className="block font-display font-black tracking-[-0.04em] text-ink"
                  style={{ fontSize: "clamp(2.4rem, 5.4vw, 5.8rem)", lineHeight: 1.02 }}
                >
                  WHERE VISION
                </motion.span>
              </div>

              {/* Line 2: TAKES FORM× */}
              <div className="overflow-hidden py-1 pr-4" aria-hidden>
                <motion.span
                  initial={reduce ? false : { y: "110%" }}
                  animate={ready ? { y: "0%" } : undefined}
                  transition={{ duration: 1.05, delay: 0.42, ease }}
                  className="block font-display font-black tracking-[-0.04em] text-ink"
                  style={{ fontSize: "clamp(2.4rem, 5.4vw, 5.8rem)", lineHeight: 1.02 }}
                >
                  TAKES FORM<span className="text-x-red">×</span>
                </motion.span>
              </div>
            </h1>

            {/* Red divider rule */}
            <motion.div
              initial={reduce ? false : { scaleX: 0, opacity: 0 }}
              animate={ready ? { scaleX: 1, opacity: 1 } : undefined}
              transition={{ duration: 0.9, delay: 0.75, ease }}
              className="mt-7 flex origin-left items-center gap-4"
              aria-hidden
            >
              <span className="h-[2px] w-12 bg-x-red" />
              <span className="font-display text-sm font-black text-x-red/60">×</span>
              <span className="h-[1.5px] w-8 bg-ink/[0.12]" />
            </motion.div>

            {/* Sub-copy — High legibility & crisp contrast */}
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={ready ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.8, delay: 0.85, ease }}
              className="mt-6 max-w-[44ch] text-[15.5px] font-medium leading-[1.8] text-ink/75 md:text-[17px]"
            >
              Architecture, Structure and Infrastructure — coordinated together before drawings leave the studio.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={ready ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.75, delay: 1.05, ease }}
              className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center"
            >
              <Link href="/contact" transitionTypes={["nav-forward"]} className="fx-btn-primary group">
                Discuss Your Facility
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="#projects" className="fx-btn-ghost">View Projects</a>
            </motion.div>

            {/* Mobile Scroll Cue */}
            <motion.a
              href="#about"
              initial={reduce ? false : { opacity: 0 }}
              animate={ready ? { opacity: 1 } : undefined}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="mt-10 inline-flex items-center gap-2 font-label text-[9.5px] tracking-[0.26em] text-ink/40 transition-colors hover:text-x-red lg:hidden"
            >
              Explore Studio Work
              <ChevronDown className="size-3.5 fx-scroll-cue" />
            </motion.a>
          </div>

          {/* ── RIGHT: Logo + X atmosphere ───────────────────────── */}
          <div className="relative hidden flex-col items-center justify-center overflow-hidden border-l border-ink/[0.08] lg:order-2 lg:flex">

            {/* Atmospheric × behind logo */}
            <motion.span
              aria-hidden
              initial={reduce ? false : { opacity: 0, scale: 0.8 }}
              animate={ready ? { opacity: 0.075, scale: 1 } : undefined}
              transition={{ duration: 2.5, delay: 0.2, ease }}
              className="pointer-events-none absolute select-none font-display font-black leading-none text-x-red"
              style={{ fontSize: "clamp(18rem, 40vw, 34rem)" }}
            >
              ×
            </motion.span>

            {/* FormX logo — multiply blend mode removes white container */}
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.88, y: 20 }}
              animate={ready ? { opacity: 1, scale: 1, y: 0 } : undefined}
              transition={{ duration: 1.2, delay: 0.25, ease }}
              className="relative z-10"
            >
              <Image
                src="/formx-logo-solid.png"
                alt="FormX Consultants — Design · Engineering"
                width={340}
                height={145}
                priority
                className="h-auto w-[min(50vw,260px)] object-contain xl:w-[290px]"
                style={{ mixBlendMode: "multiply" }}
              />
            </motion.div>

            {/* Label below logo */}
            <motion.p
              initial={reduce ? false : { opacity: 0 }}
              animate={ready ? { opacity: 1 } : undefined}
              transition={{ delay: 1.1, duration: 0.7 }}
              className="relative z-10 mt-6 font-label text-[9.5px] tracking-[0.3em] uppercase text-ink/40"
            >
              Design | Engineering Studio
            </motion.p>

            {/* Registration marks inside right panel */}
            <span aria-hidden className="absolute bottom-10 left-8 block h-6 w-6 border-b border-l border-ink/[0.12]" />
            <span aria-hidden className="absolute bottom-10 right-8 block h-6 w-6 border-b border-r border-x-red/40" />
            <span aria-hidden className="absolute left-8 top-10 block h-6 w-6 border-l border-t border-ink/[0.12]" />
            <span aria-hidden className="absolute right-8 top-10 block h-6 w-6 border-r border-t border-ink/[0.12]" />

            {/* Desktop Scroll Cue */}
            <motion.a
              href="#about"
              initial={reduce ? false : { opacity: 0 }}
              animate={ready ? { opacity: 1 } : undefined}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="absolute bottom-9 right-8 flex flex-col items-center gap-2 font-label text-[9.5px] tracking-[0.26em] text-ink/35 transition-colors hover:text-x-red"
            >
              <span className="[writing-mode:vertical-lr]">Explore Studio Work</span>
              <ChevronDown className="size-3.5 fx-scroll-cue" />
            </motion.a>
          </div>
        </div>

        {/* Note: Ticker strip completely removed per client request */}
      </motion.div>
    </section>
  );
}
