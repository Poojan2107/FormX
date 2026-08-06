"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FormxTransparentLogo } from "@/components/ui/FormxTransparentLogo";
import { brochureBrand } from "@/data/brochureHome";

const smoothEase = [0.16, 1, 0.3, 1] as const;

export function BrochureHero() {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(!!reduce);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const sheetOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

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
      {/* ── Background Atmosphere & Soul ──────────────────────────── */}
      {/* Radial warm studio light */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle 850px at 20% 20%, rgba(255,255,255,1) 0%, rgba(250,250,248,0.95) 55%, rgba(243,241,234,0.9) 100%)",
        }}
      />

      {/* Ambient Red × Studio Glow — Shifted top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 z-0 h-[650px] w-[650px] opacity-70"
        style={{
          background:
            "radial-gradient(circle 380px at 85% 25%, rgba(235, 45, 45, 0.05), transparent 70%)",
        }}
      />

      {/* Paper grain texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "180px",
        }}
      />

      {/* Fine architectural grid lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Giant Background × Watermark — Positioned top-right so it doesn't clash behind logo */}
      <motion.span
        aria-hidden
        initial={reduce ? false : { opacity: 0, scale: 0.8 }}
        animate={ready ? { opacity: 0.045, scale: 1 } : undefined}
        transition={{ duration: 2.5, delay: 0.2, ease: smoothEase }}
        className="pointer-events-none absolute -right-[4%] -top-[10%] select-none font-display font-black leading-none text-x-red"
        style={{ fontSize: "clamp(22rem, 50vw, 42rem)" }}
      >
        ×
      </motion.span>

      {/* Engineering crop marks with FormX diagonal cuts */}
      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden>
        <motion.span initial={reduce ? false : { opacity: 0 }} animate={ready ? { opacity: 1 } : undefined} transition={{ duration: 0.5, delay: 0.1 }}
          className="absolute left-6 top-6 block h-10 w-10 border-l-2 border-t-2 border-ink/[0.14] md:left-10 md:top-10" />
        <motion.span initial={reduce ? false : { opacity: 0 }} animate={ready ? { opacity: 1 } : undefined} transition={{ duration: 0.5, delay: 0.15 }}
          className="absolute right-6 top-6 block h-10 w-10 border-r-2 border-t-2 border-ink/[0.14] md:right-10 md:top-10" />
        <motion.span initial={reduce ? false : { opacity: 0 }} animate={ready ? { opacity: 1 } : undefined} transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute bottom-10 left-6 block h-10 w-10 border-b-2 border-l-2 border-ink/[0.12] md:bottom-12 md:left-10" />
        <motion.span initial={reduce ? false : { opacity: 0 }} animate={ready ? { opacity: 1 } : undefined} transition={{ duration: 0.5, delay: 0.25 }}
          className="absolute bottom-10 right-6 block h-10 w-10 border-b-2 border-r-2 border-x-red/60 md:bottom-12 md:right-10" />
      </div>

      {/* ═══════════════════════════════════════════════════════
          HERO CONTENT: Split Two-Column Layout
          Left: Tagline + CTAs  |  Right: Transparent Vector Logo Card
         ═══════════════════════════════════════════════════════ */}
      <motion.div
        style={reduce ? undefined : { opacity: sheetOpacity }}
        className="relative z-10 flex flex-1 flex-col justify-center"
      >
        <div className="flex flex-1 flex-col lg:grid lg:grid-cols-[57%_43%]">

          {/* ── LEFT COLUMN: Tagline + Copy + CTAs ───────────────── */}
          <div className="flex flex-col justify-center px-6 py-14 md:px-10 lg:order-1 lg:py-20 lg:pl-16 lg:pr-8 xl:pl-20">

            {/* Tag label with FormX signature dot */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={ready ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.7, delay: 0.15, ease: smoothEase }}
              className="flex items-center gap-2.5"
            >
              <span className="h-2 w-2 rounded-none bg-x-red" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)" }} />
              <p className="font-label text-[11px] tracking-[0.34em] uppercase text-x-red font-bold">
                Architecture · Structure · Infrastructure
              </p>
            </motion.div>

            {/* Tagline Header — Sized with margin so NO text clips */}
            <h1 className="mt-5 space-y-1" aria-label={brochureBrand.slogan}>
              <span className="sr-only">{brochureBrand.slogan}</span>
              
              {/* Line 1: WHERE VISION */}
              <div className="overflow-hidden py-1 pr-6" aria-hidden>
                <motion.span
                  initial={reduce ? false : { y: "110%" }}
                  animate={ready ? { y: "0%" } : undefined}
                  transition={{ duration: 1.1, delay: 0.25, ease: smoothEase }}
                  className="block font-display font-black tracking-[-0.04em] text-ink"
                  style={{ fontSize: "clamp(2.5rem, 5.5vw, 5.6rem)", lineHeight: 1.02 }}
                >
                  WHERE VISION
                </motion.span>
              </div>

              {/* Line 2: TAKES FORM× */}
              <div className="overflow-hidden py-1 pr-6" aria-hidden>
                <motion.span
                  initial={reduce ? false : { y: "110%" }}
                  animate={ready ? { y: "0%" } : undefined}
                  transition={{ duration: 1.1, delay: 0.38, ease: smoothEase }}
                  className="block font-display font-black tracking-[-0.04em] text-ink"
                  style={{ fontSize: "clamp(2.5rem, 5.5vw, 5.6rem)", lineHeight: 1.02 }}
                >
                  TAKES FORM<span className="text-x-red inline-block transition-transform hover:rotate-45">×</span>
                </motion.span>
              </div>
            </h1>

            {/* Red divider rule with FormX diagonal notch */}
            <motion.div
              initial={reduce ? false : { scaleX: 0, opacity: 0 }}
              animate={ready ? { scaleX: 1, opacity: 1 } : undefined}
              transition={{ duration: 0.9, delay: 0.7, ease: smoothEase }}
              className="mt-7 flex origin-left items-center gap-4"
              aria-hidden
            >
              <span className="h-[2px] w-14 bg-x-red" />
              <span className="font-display text-base font-black text-x-red">×</span>
              <span className="h-[1.5px] w-10 bg-ink/[0.14]" />
            </motion.div>

            {/* Sub-copy — High legibility & crisp contrast */}
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={ready ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.85, delay: 0.82, ease: smoothEase }}
              className="mt-6 max-w-[44ch] text-[16px] font-medium leading-[1.82] text-ink/80 md:text-[17.5px]"
            >
              Architecture, Structure and Infrastructure — engineered together before drawings leave the studio.
            </motion.p>

            {/* CTAs with FormX signature angled corner cut */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={ready ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.8, delay: 0.98, ease: smoothEase }}
              className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Link
                href="/contact"
                transitionTypes={["nav-forward"]}
                className="fx-btn-primary group relative overflow-hidden px-8 py-4 text-[11px] font-bold tracking-[0.22em] uppercase text-white shadow-md transition-all hover:shadow-xl"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
                }}
              >
                Discuss Your Facility
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#projects"
                className="fx-btn-ghost px-7 py-4 text-[11px] font-bold tracking-[0.22em] uppercase transition-all hover:border-x-red hover:text-x-red"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)",
                }}
              >
                View Projects
              </a>
            </motion.div>

            {/* Mobile Scroll Cue */}
            <motion.a
              href="#about"
              initial={reduce ? false : { opacity: 0 }}
              animate={ready ? { opacity: 1 } : undefined}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="mt-10 inline-flex items-center gap-2 font-label text-[10px] tracking-[0.26em] uppercase text-ink/50 transition-colors hover:text-x-red lg:hidden"
            >
              Explore Studio Work
              <ChevronDown className="size-3.5 fx-scroll-cue" />
            </motion.a>
          </div>

          {/* ── RIGHT COLUMN: Clean Studio Logo Card ───────── */}
          <div className="relative hidden flex-col items-center justify-center overflow-hidden border-l border-ink/[0.08] lg:order-2 lg:flex lg:p-12">

            {/* Studio Logo Card — Solid studio background for 100% clean contrast! */}
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.92, y: 24 }}
              animate={ready ? { opacity: 1, scale: 1, y: 0 } : undefined}
              transition={{ duration: 1.25, delay: 0.3, ease: smoothEase }}
              className="relative z-10 flex flex-col items-center justify-center rounded-xs border border-ink/[0.12] bg-white p-12 shadow-md transition-all duration-500 hover:border-x-red/50 hover:shadow-xl md:p-14 lg:p-16"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)",
              }}
            >
              {/* FormX Signature Cut Corner Accent */}
              <span
                aria-hidden
                className="absolute right-0 top-0 h-6 w-6 bg-x-red"
                style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
              />

              {/* TRANSPARENT VECTOR LOGO — 100% sharp, zero clashing watermark! */}
              <FormxTransparentLogo size="hero" align="center" />

              {/* Technical Registration Corner Marks */}
              <span aria-hidden className="absolute bottom-4 left-4 block h-3.5 w-3.5 border-b-2 border-l-2 border-ink/25" />
              <span aria-hidden className="absolute bottom-4 right-4 block h-3.5 w-3.5 border-b-2 border-r-2 border-x-red/70" />
              <span aria-hidden className="absolute left-4 top-4 block h-3.5 w-3.5 border-l-2 border-t-2 border-ink/25" />
            </motion.div>

            {/* Desktop Scroll Cue */}
            <motion.a
              href="#about"
              initial={reduce ? false : { opacity: 0 }}
              animate={ready ? { opacity: 1 } : undefined}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="absolute bottom-9 right-8 flex flex-col items-center gap-2 font-label text-[10px] tracking-[0.28em] uppercase text-ink/40 transition-colors hover:text-x-red"
            >
              <span className="[writing-mode:vertical-lr]">Explore Studio Work</span>
              <ChevronDown className="size-3.5 fx-scroll-cue" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
