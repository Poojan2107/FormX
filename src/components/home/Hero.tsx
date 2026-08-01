"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, MapPin, Grid, Layers } from "lucide-react";
import { heroLines, hero } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";

const heroSlides = [
  {
    title: "Kalpataru Corporate House",
    tag: "Commercial Headquarters",
    location: "Ahmedabad, Gujarat",
    slot: "projects/pdf_p1_1.jpeg",
    year: "2024",
  },
  {
    title: "Vir Bhadra Enterprise",
    tag: "Industrial Manufacturing",
    location: "Gujarat, India",
    slot: "projects/pdf_p4_1.jpeg",
    year: "2024",
  },
  {
    title: "Nutan Vidhyalaya Campus",
    tag: "Institutional Campus",
    location: "Gujarat, India",
    slot: "projects/pdf_p6_1.jpeg",
    year: "2023",
  },
  {
    title: "PEB Industrial Warehouse",
    tag: "Logistics Facility",
    location: "Gujarat, India",
    slot: "projects/pdf_p20_1.jpeg",
    year: "2024",
  },
];

const heroStats = [
  { value: "25+", label: "Turnkey Projects" },
  { value: "15 Lakh+", label: "Sq.Ft Designed" },
  { value: "15+", label: "Industrial Clients" },
  { value: "10", label: "Core Disciplines" },
];

export function Hero() {
  const reduce = useReducedMotion();
  const [lineIndex, setLineIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [showBlueprintGrid, setShowBlueprintGrid] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (reduce) return;
    intervalRef.current = setInterval(() => {
      setLineIndex((i) => (i + 1) % heroLines.length);
      setSlideIndex((i) => (i + 1) % heroSlides.length);
    }, 6500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [reduce]);

  const goToSlide = (i: number) => {
    setSlideIndex(i);
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!reduce) {
      intervalRef.current = setInterval(() => {
        setSlideIndex((s) => (s + 1) % heroSlides.length);
        setLineIndex((l) => (l + 1) % heroLines.length);
      }, 6500);
    }
  };

  const current = heroSlides[slideIndex];

  return (
    <section className="relative isolate min-h-[90vh] overflow-hidden bg-[#0a0a0a] text-white flex flex-col justify-between">
      {/* Background Photography Slider with Smooth Crossfade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={slideIndex}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <AssetImage
              alt={current.title}
              slot={current.slot}
              kind="facility"
              aspect="auto"
              fit="cover"
              objectPosition="center"
              priority={slideIndex === 0}
              className="absolute inset-0 h-full w-full"
            />
          </motion.div>
        </AnimatePresence>

        {/* Multi-layered Architectural Dark Gradients & Blueprint Texture */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/75 to-[#0a0a0a]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
        
        {/* Toggleable CAD Engineering Grid */}
        <div className={`pointer-events-none absolute inset-0 pattern-grid-dark transition-opacity duration-500 ${showBlueprintGrid ? "opacity-70" : "opacity-30"}`} />

        {/* Crosshair Engineering Annotations when Grid Active */}
        {showBlueprintGrid && (
          <div className="pointer-events-none absolute inset-0 z-0 border border-x-red/30">
            <div className="absolute left-8 top-8 font-display text-[9px] font-bold text-x-red">
              GRID REF: X-01 · Y-04 · TOLERANCE: ±0.5mm
            </div>
            <div className="absolute right-8 top-8 font-display text-[9px] font-bold text-x-red">
              IS 1893 SEISMIC ZONE IV
            </div>
            <div className="absolute bottom-12 left-8 font-display text-[9px] font-bold text-white/40">
              STAAD.PRO MODEL COORDINATION LOAD PATH ACTIVE
            </div>
          </div>
        )}

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(1000px 600px at 20% 40%, rgba(222,48,36,0.16), transparent 75%)",
          }}
        />
      </div>

      {/* Decorative Red Accent Line */}
      <div className="absolute left-0 top-0 z-10 h-32 w-1.5 bg-gradient-to-b from-x-red to-transparent" />

      {/* Hero Content Body */}
      <Container className="relative z-10 flex flex-1 flex-col justify-center pb-12 pt-28 sm:pt-32 md:pb-16 md:pt-36 lg:pt-40">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:items-end">
          {/* Main Copy Area */}
          <div className="max-w-3xl">
            {/* Top Status Pill with Interactive CAD Blueprint Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex flex-wrap items-center gap-3"
            >
              <div className="inline-flex items-center gap-2.5 border border-white/20 bg-black/60 px-3.5 py-1.5 backdrop-blur-md">
                <span className="flex size-2 rounded-full bg-x-red animate-pulse" />
                <span className="font-display text-[10px] font-extrabold uppercase tracking-[0.24em] text-white/90">
                  FORMX Consultants · Single-Window Multidisciplinary Practice
                </span>
              </div>

              {/* CAD Grid Overlay Toggle Button */}
              <button
                type="button"
                onClick={() => setShowBlueprintGrid((prev) => !prev)}
                className={`inline-flex items-center gap-1.5 border px-3 py-1.5 font-display text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md transition-all ${
                  showBlueprintGrid
                    ? "border-x-red bg-x-red text-white shadow-[0_0_12px_rgba(222,48,36,0.5)]"
                    : "border-white/20 bg-black/40 text-white/70 hover:border-white/40 hover:text-white"
                }`}
              >
                <Grid className="size-3" />
                <span>{showBlueprintGrid ? "CAD Grid Active" : "Toggle CAD Overlay"}</span>
              </button>
            </motion.div>

            {/* Dynamic Title Switcher */}
            <div className="relative mb-6 min-h-[110px] sm:min-h-[140px] md:min-h-[160px]">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={lineIndex}
                  initial={reduce ? false : { opacity: 0, y: 24, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={reduce ? undefined : { opacity: 0, y: -16, filter: "blur(4px)" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display font-black leading-[1.04] tracking-[-0.035em] text-white uppercase"
                  style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.8rem)" }}
                >
                  {heroLines[lineIndex]}
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Subtitle & Key Credentials */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-8 prose-measure text-[15px] leading-[1.8] text-white/75 sm:text-[16px]"
            >
              {hero.body}
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href={hero.primaryCta.href}
                transitionTypes={["nav-forward"]}
                className="formx-cut-sm group inline-flex items-center gap-3 bg-x-red px-8 py-4 font-display text-[12px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_6px_24px_rgba(222,48,36,0.4)] transition-all hover:bg-x-red-hover hover:shadow-[0_8px_32px_rgba(222,48,36,0.6)]"
              >
                {hero.primaryCta.label}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
              </Link>

              <Link
                href={hero.secondaryCta.href}
                transitionTypes={["nav-forward"]}
                className="inline-flex items-center gap-2.5 border border-white/30 bg-black/40 px-8 py-4 font-display text-[12px] font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm transition-all hover:border-white hover:bg-white/10 hover:text-white"
              >
                {hero.secondaryCta.label}
                <ArrowUpRight className="size-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right Slide Indicator Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="hidden lg:block"
          >
            <div className="border border-white/15 bg-black/60 p-5 backdrop-blur-md shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slideIndex}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-4 border-l-2 border-x-red pl-3.5"
                >
                  <span className="font-display text-[9px] font-bold uppercase tracking-[0.2em] text-x-red">
                    {current.tag} · {current.year}
                  </span>
                  <h4 className="mt-1 font-display text-[14px] font-bold text-white uppercase leading-snug">
                    {current.title}
                  </h4>
                  <p className="mt-1 flex items-center gap-1.5 text-[11px] text-white/50">
                    <MapPin className="size-3 text-x-red" />
                    {current.location}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="space-y-2 border-t border-white/10 pt-4">
                {heroSlides.map((slide, i) => (
                  <button
                    key={slide.title}
                    type="button"
                    onClick={() => goToSlide(i)}
                    className="group flex w-full items-center justify-between text-left transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`block h-1 transition-all duration-300 ${
                          i === slideIndex ? "w-6 bg-x-red" : "w-2 bg-white/20 group-hover:w-4 group-hover:bg-white/50"
                        }`}
                      />
                      <span
                        className={`font-display text-[10px] font-bold uppercase tracking-wider ${
                          i === slideIndex ? "text-white" : "text-white/40 group-hover:text-white/70"
                        }`}
                      >
                        0{i + 1}
                      </span>
                    </div>
                    <span
                      className={`truncate max-w-[170px] text-[10px] font-medium transition-colors ${
                        i === slideIndex ? "text-x-red font-semibold" : "text-white/30 group-hover:text-white/60"
                      }`}
                    >
                      {slide.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-14 grid grid-cols-2 gap-6 border-t border-white/15 pt-8 sm:grid-cols-4 md:gap-8"
        >
          {heroStats.map((stat, i) => (
            <div
              key={stat.label}
              className={i !== 0 ? "border-l border-white/15 pl-6 md:pl-8" : ""}
            >
              <p className="font-display text-2xl font-black text-white md:text-3xl lg:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
