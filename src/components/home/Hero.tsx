"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { heroLines, site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";

const heroSlides = [
  {
    title: "Kalpataru Corporate House",
    tag: "Commercial",
    location: "Ahmedabad, Gujarat",
    slot: "projects/kalpataru-corporate-house.jpg",
    year: "2024",
  },
  {
    title: "FormX Practice & Studio",
    tag: "Studio",
    location: "Ahmedabad, Gujarat",
    slot: "about/home-about.jpg",
    year: "2023",
  },
  {
    title: "Nutan Vidhyalaya Campus",
    tag: "Institutional",
    location: "Gujarat, India",
    slot: "projects/nutan-vidhyalaya.jpg",
    year: "2023",
  },
  {
    title: "PEB Logistics Warehouse",
    tag: "Industrial",
    location: "Gujarat, India",
    slot: "projects/peb-warehouse.jpg",
    year: "2024",
  },
];

const stats = [
  { value: "15+", label: "Projects" },
  { value: "10", label: "Disciplines" },
  { value: "100%", label: "GFC Ready" },
];

export function Hero() {
  const reduce = useReducedMotion();
  const [lineIndex, setLineIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (reduce) return;
    intervalRef.current = setInterval(() => {
      setLineIndex((i) => (i + 1) % heroLines.length);
      setSlideIndex((i) => (i + 1) % heroSlides.length);
    }, 6500);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [reduce, slideIndex]);

  const goToSlide = (i: number) => {
    setSlideIndex(i);
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!reduce) {
      intervalRef.current = setInterval(() => {
        setSlideIndex((s) => (s + 1) % heroSlides.length);
      }, 6500);
    }
  };

  const current = heroSlides[slideIndex];

  return (
    <section className="relative isolate overflow-hidden bg-[#0c0c0c]" style={{ minHeight: "92vh" }}>
      {/* Full-bleed background image with Ken Burns */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={slideIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <div className={`absolute inset-0 overflow-hidden ${reduce ? "" : "animate-ken-burns"}`}>
              <AssetImage
                alt={current.title}
                slot={current.slot}
                kind="facility"
                aspect="landscape"
                fit="cover"
                className="absolute inset-0 h-full w-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c]/90 via-[#0c0c0c]/50 to-[#0c0c0c]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c]/70 via-transparent to-[#0c0c0c]/20" />

        {/* Architectural grid texture */}
        <div className="pointer-events-none absolute inset-0 pattern-grid-dark opacity-20" aria-hidden />
      </div>

      {/* Red accent top-left corner line */}
      <div className="absolute left-0 top-0 z-10 h-32 w-1 bg-gradient-to-b from-x-red to-transparent" />

      <Container className="relative z-10 flex min-h-[92vh] flex-col justify-end pb-12 pt-32 md:pb-16 md:pt-36 lg:pb-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          {/* Left: Main content */}
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-x-red" />
              <span className="font-display text-[11px] font-bold uppercase tracking-[0.28em] text-x-red">
                {site.tagline} · Ahmedabad, India
              </span>
            </motion.div>

            {/* Headline — animated cycling */}
            <div className="relative mb-6 min-h-[120px] sm:min-h-[150px] md:min-h-[180px]">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={lineIndex}
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display font-extrabold leading-[1.06] tracking-[-0.03em] text-white"
                  style={{ fontSize: "clamp(2.4rem, 6vw, 5.5rem)" }}
                >
                  {heroLines[lineIndex]}
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8 max-w-lg text-[15px] leading-[1.8] text-white/60 md:text-[16px]"
            >
              In-house multidisciplinary practice delivering Architecture, Structure, Civil &amp; MEP — as one construction-ready package.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 bg-x-red px-7 py-4 font-display text-[12px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_8px_28px_rgba(222,48,36,0.4)] transition-all duration-300 hover:bg-x-red-hover hover:shadow-[0_12px_36px_rgba(222,48,36,0.5)] hover:-translate-y-0.5"
              >
                Enquire Now
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 border border-white/25 px-7 py-4 font-display text-[12px] font-bold uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:text-white"
              >
                View Portfolio
                <ArrowUpRight className="size-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right: Slide info + nav */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block"
          >
            {/* Current slide caption */}
            <AnimatePresence mode="wait">
              <motion.div
                key={slideIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-6 border-l-2 border-x-red pl-4"
              >
                <p className="font-display text-[9px] font-bold uppercase tracking-[0.24em] text-x-red">
                  {current.tag} · {current.year}
                </p>
                <p className="mt-1 font-display text-[14px] font-bold text-white">
                  {current.title}
                </p>
                <p className="mt-1 flex items-center gap-1 text-[11px] text-white/45">
                  <MapPin className="size-3" />
                  {current.location}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Slide nav pills */}
            <div className="flex flex-col gap-1.5">
              {heroSlides.map((slide, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goToSlide(i)}
                  className="group flex items-center gap-2.5 text-left"
                  aria-label={`View ${slide.title}`}
                >
                  <span
                    className={`block h-px transition-all duration-500 ${
                      i === slideIndex ? "w-8 bg-x-red" : "w-4 bg-white/20 group-hover:w-6 group-hover:bg-white/40"
                    }`}
                  />
                  <span className={`font-display text-[10px] font-bold uppercase tracking-[0.14em] transition-colors ${
                    i === slideIndex ? "text-white" : "text-white/30 group-hover:text-white/60"
                  }`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8 md:gap-12"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className={`${i !== 0 ? "border-l border-white/10 pl-8 md:pl-12" : ""}`}>
              <p className="font-display text-2xl font-extrabold text-white md:text-3xl">{stat.value}</p>
              <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                {stat.label}
              </p>
            </div>
          ))}

          {/* Mobile slide indicator */}
          <div className="ml-auto flex items-center gap-1.5 lg:hidden">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goToSlide(i)}
                className={`h-1 transition-all duration-300 ${i === slideIndex ? "w-6 bg-x-red" : "w-2 bg-white/20"}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
