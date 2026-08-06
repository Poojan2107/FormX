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
import { Container } from "@/components/ui/Container";
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

const TAGLINE_WORDS = ["WHERE", "VISION", "TAKES", "FORM"];

/**
 * HERO — "Issued Studio Sheet"
 * White, paper grain, FormX logo stamps in.
 * Tagline word-clips reveal. Ticker strip. Engineering crop marks.
 * No background photo (per Hiren feedback).
 */
export function BrochureHero() {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(!!reduce);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const sheetY = useTransform(scrollYProgress, [0, 0.5], [0, reduce ? 0 : 48]);
  const sheetOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  useEffect(() => {
    if (reduce) { setReady(true); return; }
    const t = window.setTimeout(() => setReady(true), 60);
    return () => window.clearTimeout(t);
  }, [reduce]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[calc(100svh-4.25rem)] flex-col overflow-hidden bg-[#fafaf8] text-ink sm:min-h-[calc(100svh-4.75rem)]"
      aria-label="FormX Consultants — Where Vision Takes Form"
    >
      {/* Paper grain atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.042] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Giant × — X-factor atmosphere */}
      <motion.span
        aria-hidden
        initial={reduce ? false : { opacity: 0, scale: 0.9 }}
        animate={ready ? { opacity: 0.055, scale: 1 } : undefined}
        transition={{ duration: 2.2, delay: 0.3, ease }}
        className="pointer-events-none absolute -right-[4%] -top-[6%] select-none font-display font-black leading-none text-x-red"
        style={{ fontSize: "clamp(20rem, 52vw, 42rem)" }}
      >
        ×
      </motion.span>

      {/* Engineering crop marks — four corners */}
      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden>
        {/* TL */}
        <motion.span
          initial={reduce ? false : { opacity: 0 }}
          animate={ready ? { opacity: 1 } : undefined}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="absolute left-5 top-5 block h-8 w-8 border-l border-t border-ink/[0.14] md:left-9 md:top-8"
        />
        {/* TR */}
        <motion.span
          initial={reduce ? false : { opacity: 0 }}
          animate={ready ? { opacity: 1 } : undefined}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="absolute right-5 top-5 block h-8 w-8 border-r border-t border-ink/[0.14] md:right-9 md:top-8"
        />
        {/* BL */}
        <motion.span
          initial={reduce ? false : { opacity: 0 }}
          animate={ready ? { opacity: 1 } : undefined}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="absolute bottom-14 left-5 block h-8 w-8 border-b border-l border-ink/[0.14] md:bottom-10 md:left-9"
        />
        {/* BR — red accent corner */}
        <motion.span
          initial={reduce ? false : { opacity: 0 }}
          animate={ready ? { opacity: 1 } : undefined}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="absolute bottom-14 right-5 block h-8 w-8 border-b border-r border-x-red/40 md:bottom-10 md:right-9"
        />
      </div>

      {/* Main scrolling content wrapper */}
      <motion.div
        style={reduce ? undefined : { opacity: sheetOpacity, y: sheetY }}
        className="relative z-10 flex flex-1 flex-col"
      >
        <Container className="flex flex-1 flex-col justify-center py-20 md:py-28">
          <div className="mx-auto w-full max-w-4xl">

            {/* ── Logo stamp-in ───────────────────────────────── */}
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.94, y: 14 }}
              animate={ready ? { opacity: 1, scale: 1, y: 0 } : undefined}
              transition={{ duration: 1.1, delay: 0.3, ease }}
              className="flex justify-center md:justify-start"
            >
              <Image
                src="/formx-logo-solid.png"
                alt="FormX Consultants — Design · Engineering"
                width={300}
                height={128}
                priority
                className="h-auto w-[min(58vw,230px)] object-contain md:w-[260px]"
              />
            </motion.div>

            {/* ── Red rule draws out ──────────────────────────── */}
            <motion.div
              initial={reduce ? false : { scaleX: 0, opacity: 0 }}
              animate={ready ? { scaleX: 1, opacity: 1 } : undefined}
              transition={{ duration: 0.85, delay: 0.9, ease }}
              className="mt-9 flex origin-left items-center gap-3 md:mt-10"
              aria-hidden
            >
              <span className="h-px w-12 bg-ink/10 md:w-16" />
              <span className="font-display text-sm font-black text-x-red">×</span>
              <span className="h-px w-24 bg-ink/[0.07]" />
            </motion.div>

            {/* ── Tagline — word-by-word clip reveal ──────────── */}
            <h1 className="mt-9 flex flex-wrap gap-x-4 gap-y-1 md:mt-10" aria-label={brochureBrand.slogan}>
              <span className="sr-only">{brochureBrand.slogan}</span>
              {TAGLINE_WORDS.map((word, i) => (
                <span
                  key={word}
                  className="overflow-hidden"
                  aria-hidden
                >
                  <motion.span
                    initial={reduce ? false : { y: "105%" }}
                    animate={ready ? { y: "0%" } : undefined}
                    transition={{
                      duration: 0.95,
                      delay: 0.65 + i * 0.12,
                      ease,
                    }}
                    className="block font-display font-extrabold tracking-[-0.03em] text-ink"
                    style={{ fontSize: "clamp(2.6rem, 7.5vw, 6rem)", lineHeight: 1.02 }}
                  >
                    {word === "FORM" ? (
                      <>FORM<span className="text-x-red">×</span></>
                    ) : word}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* ── Discipline line ──────────────────────────────── */}
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={ready ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.8, delay: 1.2, ease }}
              className="mt-7 max-w-[44ch] text-[15px] leading-[1.8] text-ink/48 md:text-[16px]"
            >
              Architecture · Structure · Infrastructure — engineered together
              before drawings leave the studio. Ahmedabad.
            </motion.p>

            {/* ── CTAs ─────────────────────────────────────────── */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={ready ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.75, delay: 1.45, ease }}
              className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Link
                href="/contact"
                transitionTypes={["nav-forward"]}
                className="fx-btn-primary group"
              >
                Discuss Your Facility
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="#projects"
                className="fx-btn-ghost"
              >
                View Projects
              </a>
            </motion.div>

          </div>
        </Container>

        {/* ── Ticker strip ─────────────────────────────────────── */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={ready ? { opacity: 1 } : undefined}
          transition={{ delay: 1.7, duration: 0.6 }}
          className="relative z-10 overflow-hidden border-y border-ink/[0.07] bg-[#fafaf8]/80 py-3 backdrop-blur-[2px]"
          aria-hidden
        >
          <div className="ticker-track select-none">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="flex items-center gap-4 px-4"
              >
                <span className="font-display text-[10px] font-bold tracking-[0.28em] text-ink/30 uppercase">
                  {item}
                </span>
                <span className="font-display font-black text-x-red/50 text-base leading-none">×</span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── Drawing footer / scroll cue ───────────────────────── */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={ready ? { opacity: 1 } : undefined}
          transition={{ delay: 1.65, duration: 0.7 }}
          className="relative z-10 border-t border-ink/[0.06] bg-[#fafaf8]/70 backdrop-blur-[2px]"
        >
          <Container className="flex items-center justify-between py-3 md:py-4">
            <p className="font-label text-[9px] tracking-[0.24em] text-ink/25">
              FormX Consultants
              <span className="mx-2 text-x-red/50">×</span>
              Design | Engineering · Ahmedabad
            </p>
            <a
              href="#about"
              className="flex items-center gap-2 font-label text-[9px] tracking-[0.24em] text-ink/30 transition-colors hover:text-x-red"
            >
              Enter the Practice
              <ChevronDown className="size-3 fx-scroll-cue" />
            </a>
          </Container>
        </motion.div>
      </motion.div>
    </section>
  );
}
