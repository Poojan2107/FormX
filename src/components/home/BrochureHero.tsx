"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown, Building2, ShieldCheck, Cpu, Layers, Sparkles } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FormxTransparentLogo } from "@/components/ui/FormxTransparentLogo";
import { AssetImage } from "@/components/ui/AssetImage";
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
    if (reduce) {
      const t = window.setTimeout(() => setReady(true), 0);
      return () => window.clearTimeout(t);
    }
    const t = window.setTimeout(() => setReady(true), 60);
    return () => window.clearTimeout(t);
  }, [reduce]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[calc(100svh-4.25rem)] flex-col justify-between overflow-hidden bg-[#fafaf8] lg:h-[calc(100vh-4.25rem)] lg:min-h-[calc(100vh-4.25rem)] lg:max-h-[calc(100vh-4.25rem)]"
      aria-label="FormX Consultants — Where Vision Takes Form"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle 900px at 18% 18%, rgba(255,255,255,1) 0%, rgba(250,250,248,0.96) 52%, rgba(242,240,233,0.92) 100%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 z-0 h-[680px] w-[680px] opacity-80"
        style={{
          background:
            "radial-gradient(circle 400px at 88% 18%, rgba(235, 45, 45, 0.055), transparent 72%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "180px",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.028]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <motion.span
        aria-hidden
        initial={reduce ? false : { opacity: 0, scale: 0.8 }}
        animate={ready ? { opacity: 0.035, scale: 1 } : undefined}
        transition={{ duration: 2.5, delay: 0.2, ease: smoothEase }}
        className="pointer-events-none absolute -right-[4%] -top-[10%] select-none font-display font-black leading-none text-x-red"
        style={{ fontSize: "clamp(22rem, 50vw, 42rem)" }}
      >
        ×
      </motion.span>

      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden>
        <motion.span
          initial={reduce ? false : { opacity: 0 }}
          animate={ready ? { opacity: 1 } : undefined}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="absolute left-6 top-6 block h-9 w-9 border-l-2 border-t-2 border-ink/[0.12] md:left-10 md:top-10"
        />
        <motion.span
          initial={reduce ? false : { opacity: 0 }}
          animate={ready ? { opacity: 1 } : undefined}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="absolute right-6 top-6 block h-9 w-9 border-r-2 border-t-2 border-ink/[0.12] md:right-10 md:top-10"
        />
        <motion.span
          initial={reduce ? false : { opacity: 0 }}
          animate={ready ? { opacity: 1 } : undefined}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute bottom-8 left-6 block h-9 w-9 border-b-2 border-l-2 border-ink/[0.1] md:bottom-10 md:left-10"
        />
        <motion.span
          initial={reduce ? false : { opacity: 0 }}
          animate={ready ? { opacity: 1 } : undefined}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="absolute bottom-8 right-6 block h-9 w-9 border-b-2 border-r-2 border-x-red/55 md:bottom-10 md:right-10"
        />
      </div>

      <motion.div
        style={reduce ? undefined : { opacity: sheetOpacity }}
        className="relative z-10 flex flex-1 flex-col justify-center"
      >
        <div className="flex flex-1 flex-col lg:grid lg:grid-cols-[1.18fr_0.82fr] xl:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col justify-center px-6 py-6 md:px-10 lg:order-1 lg:py-8 lg:pl-12 lg:pr-8 xl:pl-20 xl:pr-12">
            <div className="w-full max-w-[580px] xl:max-w-[640px]">
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={ready ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.7, delay: 0.15, ease: smoothEase }}
                className="flex flex-wrap items-center gap-3"
              >
                <span className="h-[2.5px] w-6 shrink-0 bg-x-red" />
                <p className="font-label text-[10px] font-bold uppercase tracking-[0.24em] text-x-red sm:text-[10.5px] sm:tracking-[0.28em]">
                  Architecture · Structure · Infrastructure
                </p>
                <span className="font-label text-[9px] font-bold uppercase tracking-[0.2em] text-x-red border border-x-red/25 bg-x-red/[0.06] px-2 py-0.5 shadow-2xs">
                  [FORMX.01]
                </span>
              </motion.div>

              <h1 className="mt-3.5 space-y-0.5" aria-label={brochureBrand.slogan}>
                <span className="sr-only">{brochureBrand.slogan}</span>
                <div className="overflow-hidden py-0.5 pr-4" aria-hidden>
                  <motion.span
                    initial={reduce ? false : { y: "110%" }}
                    animate={ready ? { y: "0%" } : undefined}
                    transition={{ duration: 1.1, delay: 0.25, ease: smoothEase }}
                    className="block font-display font-black tracking-[-0.045em] text-ink"
                    style={{ fontSize: "clamp(2.4rem, 5vw, 4.85rem)", lineHeight: 1.02 }}
                  >
                    WHERE VISION
                  </motion.span>
                </div>

                <div className="overflow-hidden py-0.5 pr-4" aria-hidden>
                  <motion.span
                    initial={reduce ? false : { y: "110%" }}
                    animate={ready ? { y: "0%" } : undefined}
                    transition={{ duration: 1.1, delay: 0.38, ease: smoothEase }}
                    className="block font-display font-black tracking-[-0.045em] text-ink"
                    style={{ fontSize: "clamp(2.4rem, 5vw, 4.85rem)", lineHeight: 1.02 }}
                  >
                    TAKES FORM<span className="inline-block text-x-red">×</span>
                  </motion.span>
                </div>
              </h1>

              {/* Editorial Lead Paragraph with Left Accent Border */}
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={ready ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.85, delay: 0.65, ease: smoothEase }}
                className="mt-4 w-full border-l-2 border-x-red/40 pl-4 py-0.5"
              >
                <p className="font-display text-[15px] font-medium leading-[1.8] text-ink/80 md:text-[16.5px]">
                  Architecture, Structure and Infrastructure engineered together before drawings leave the studio.
                </p>
              </motion.div>

              {/* Editorial Proof Metrics Bar - Fills content width seamlessly */}
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={ready ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.8, delay: 0.78, ease: smoothEase }}
                className="mt-5 w-full formx-cut-sm border border-line/80 bg-[#faf3f2]/40 p-3.5 shadow-2xs"
              >
                <div className="grid grid-cols-3 divide-x divide-ink/[0.1]">
                  <div className="pr-3">
                    <span className="block font-display text-lg font-extrabold text-x-red md:text-xl">
                      200+
                    </span>
                    <span className="font-label text-[8px] font-bold uppercase tracking-[0.16em] text-ink/60">
                      Projects Engineered
                    </span>
                  </div>
                  <div className="px-3">
                    <span className="block font-display text-lg font-extrabold text-ink md:text-xl">
                      15+ YRS
                    </span>
                    <span className="font-label text-[8px] font-bold uppercase tracking-[0.16em] text-ink/60">
                      Excellence
                    </span>
                  </div>
                  <div className="pl-3">
                    <span className="block font-display text-lg font-extrabold text-x-red md:text-xl">
                      100%
                    </span>
                    <span className="font-label text-[8px] font-bold uppercase tracking-[0.16em] text-ink/60">
                      Safety Record
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={ready ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.8, delay: 0.92, ease: smoothEase }}
                className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <Link
                  href="/contact"
                  transitionTypes={["nav-forward"]}
                  className="fx-btn-primary group relative overflow-hidden px-8 py-3.5 text-[10.5px] font-bold uppercase tracking-[0.2em] text-white shadow-md transition-all hover:shadow-xl"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)",
                  }}
                >
                  Discuss Your Facility
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="#projects"
                  className="fx-btn-ghost px-7 py-3.5 text-[10.5px] font-bold uppercase tracking-[0.2em] transition-all hover:border-x-red hover:text-x-red"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)",
                  }}
                >
                  View Projects
                </a>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Interactive Architectural Project Showcase Plate */}
          <div className="relative hidden flex-col items-center justify-center border-l border-ink/[0.07] lg:order-2 lg:flex lg:p-6 xl:p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-6 opacity-[0.045]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            <HeroRightShowcase reduce={reduce} ready={ready} />
          </div>
        </div>
      </motion.div>

      <motion.a
        href="#about"
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={ready ? { opacity: 1, y: 0 } : undefined}
        transition={{ delay: 1.35, duration: 0.6 }}
        className="relative z-10 mb-3 ml-6 inline-flex flex-col items-start gap-1.5 md:ml-10 lg:ml-14 xl:ml-20"
      >
        <span className="inline-flex items-center gap-2 font-label text-[9.5px] uppercase tracking-[0.24em] text-ink/48 transition-colors hover:text-x-red">
          Explore the studio
          <ChevronDown className="size-3 fx-scroll-cue text-x-red" />
        </span>
        <span
          aria-hidden
          className="ml-0.5 block h-6 w-px origin-top bg-gradient-to-b from-x-red/70 to-transparent fx-scroll-line"
        />
      </motion.a>
    </section>
  );
}

function HeroRightShowcase({ reduce, ready }: { reduce: boolean | null; ready: boolean }) {
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, scale: 0.94, y: 20 }}
      animate={ready ? { opacity: 1, scale: 1, y: 0 } : undefined}
      transition={{ duration: 1.1, delay: 0.3, ease: smoothEase }}
      className="group relative z-10 w-full max-w-[390px] xl:max-w-[410px] overflow-hidden border border-line bg-white p-5 shadow-[0_20px_70px_rgba(0,0,0,0.06)] transition-all duration-500 hover:border-x-red/40 hover:shadow-[0_24px_80px_rgba(224,49,40,0.12)] md:p-6 formx-cut-md"
    >
      {/* Light CAD Grid Background */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />
      <span
        aria-hidden
        className="absolute right-0 top-0 h-6 w-6 bg-x-red"
        style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
      />

      {/* CAD Registration Crosshairs */}
      <div className="absolute left-3 top-3 font-mono text-[8.5px] font-bold text-ink/30">+ 0.00</div>
      <div className="absolute right-9 top-3 font-mono text-[8.5px] font-bold text-x-red">[FORMX.CAD]</div>

      {/* Studio Emblem Header */}
      <div className="mt-1 border-b border-line/80 pb-3 text-center">
        <FormxTransparentLogo size="hero" align="center" />
        <p className="mt-1.5 font-label text-[8.5px] font-bold tracking-[0.24em] text-ink/45">
          FORMX · AHMEDABAD · GUJARAT
        </p>
      </div>

      {/* Pure Vector CAD Architectural 3D Structure Frame SVG */}
      <div className="relative mt-3.5 h-[105px] w-full overflow-hidden border border-line/80 bg-[#faf3f2]/70 p-2.5 formx-cut-sm">
        <svg
          viewBox="0 0 320 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-full"
        >
          {/* Base CAD Grid Lines */}
          <line x1="20" y1="120" x2="300" y2="120" stroke="#000" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.2" />
          <line x1="20" y1="80" x2="300" y2="80" stroke="#000" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.2" />
          <line x1="20" y1="40" x2="300" y2="40" stroke="#000" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.2" />

          {/* 3D Isometric Structural Columns */}
          <path d="M40 120V35M100 120V35M160 120V35M220 120V35M280 120V35" stroke="#111110" strokeWidth="2" strokeLinecap="round" />
          {/* Beams & Truss Members */}
          <path d="M40 35H280M40 78H280M40 120H280" stroke="#e03128" strokeWidth="2.2" strokeLinecap="round" />
          {/* Cross Diagonal Bracings */}
          <path d="M40 35L100 78M100 35L40 78M100 35L160 78M160 35L100 78M160 35L220 78M220 35L160 78M220 35L280 78M280 35L220 78" stroke="#e03128" strokeWidth="1.2" strokeOpacity="0.8" />
          
          {/* Dimension Callouts */}
          <circle cx="160" cy="35" r="4" fill="#e03128" />
          <text x="160" y="22" textAnchor="middle" fill="#e03128" fontSize="9" fontWeight="bold" fontFamily="monospace">LOAD PATH CLEAR SPAN 30M</text>
        </svg>

        <div className="absolute left-2.5 bottom-1.5 font-mono text-[7.5px] font-bold text-ink/50">
          [TEKLA & ETABS ENGINE READY]
        </div>
      </div>

      {/* Core Practice Areas Matrix */}
      <div className="mt-3.5 grid grid-cols-2 gap-2">
        <div className="border border-line/80 bg-[#faf3f2]/60 p-2.5 transition-colors hover:border-x-red/30">
          <Building2 className="size-3.5 text-x-red" />
          <p className="mt-1.5 font-display text-[11.5px] font-bold text-ink">High-Rise & PEB</p>
          <p className="font-label text-[8px] uppercase tracking-[0.14em] text-ink/50">Structural Design</p>
        </div>
        <div className="border border-line/80 bg-[#faf3f2]/60 p-2.5 transition-colors hover:border-x-red/30">
          <ShieldCheck className="size-3.5 text-x-red" />
          <p className="mt-1.5 font-display text-[11.5px] font-bold text-ink">Retrofitting</p>
          <p className="font-label text-[8px] uppercase tracking-[0.14em] text-ink/50">NDT & Audit</p>
        </div>
        <div className="border border-line/80 bg-[#faf3f2]/60 p-2.5 transition-colors hover:border-x-red/30">
          <Cpu className="size-3.5 text-x-red" />
          <p className="mt-1.5 font-display text-[11.5px] font-bold text-ink">BIM & 3D Tekla</p>
          <p className="font-label text-[8px] uppercase tracking-[0.14em] text-ink/50">Zero Conflict</p>
        </div>
        <div className="border border-line/80 bg-[#faf3f2]/60 p-2.5 transition-colors hover:border-x-red/30">
          <Layers className="size-3.5 text-x-red" />
          <p className="mt-1.5 font-display text-[11.5px] font-bold text-ink">PMC Advisory</p>
          <p className="font-label text-[8.5px] uppercase tracking-[0.14em] text-ink/50">Turnkey Support</p>
        </div>
      </div>

      {/* Footer Status Bar */}
      <div className="mt-3.5 flex items-center justify-between border-t border-line/80 pt-3 font-label text-[8.5px] font-bold uppercase tracking-[0.18em] text-ink/60">
        <div className="flex items-center gap-2">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-x-red opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-x-red" />
          </span>
          <span>Active Engineering CAD Engine</span>
        </div>
        <span className="text-x-red">[FORMX.01]</span>
      </div>
    </motion.div>
  );
}
