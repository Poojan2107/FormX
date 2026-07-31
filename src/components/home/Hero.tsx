"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck, Building2, Layers, CheckCircle2 } from "lucide-react";
import { hero, heroLines, site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AssetImage } from "@/components/ui/AssetImage";

const heroSlides = [
  {
    title: "Kalpataru Corporate House",
    tag: "Commercial Headquarters",
    slot: "projects/kalpataru-corporate-house.jpg",
    desc: "Clear-span executive floor plates & coordinated GFC documentation.",
  },
  {
    title: "FormX Practice & Studio",
    tag: "Boardroom Client Presentation",
    slot: "about/home-about.jpg",
    desc: "In-house multidisciplinary design & construction-ready packages.",
  },
  {
    title: "Nutan Vidhyalaya Campus",
    tag: "Institutional Architecture",
    slot: "projects/nutan-vidhyalaya.jpg",
    desc: "Child-safe spatial planning & IS 1893 seismic compliance.",
  },
  {
    title: "PEB Logistics Warehouse",
    tag: "Industrial & Logistics",
    slot: "projects/peb-warehouse.jpg",
    desc: "Long-span PEB steel structural framing & heavy industrial flooring.",
  },
];

export function Hero() {
  const reduce = useReducedMotion();
  const [lineIndex, setLineIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setLineIndex((i) => (i + 1) % heroLines.length);
      setSlideIndex((i) => (i + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(id);
  }, [reduce]);

  const currentSlide = heroSlides[slideIndex];

  return (
    <section className="relative isolate overflow-hidden bg-[#0c0c0c] text-white py-12 md:py-20">
      {/* Background Grid & Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 pattern-grid-dark opacity-30" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 75% 20%, rgba(222,48,36,0.12), transparent 60%)",
        }}
        aria-hidden
      />

      <Container className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        {/* Left Column: Headlines & Callouts */}
        <div>
          <div className="inline-flex items-center gap-2 border border-x-red/40 bg-x-red/10 px-3.5 py-1.5 font-display text-[11px] font-bold uppercase tracking-[0.22em] text-x-red mb-6 shadow-md">
            <span className="size-2 rounded-full bg-x-red animate-pulse" />
            {hero.eyebrow}
          </div>

          <div className="relative mb-6 min-h-[110px] md:min-h-[140px]">
            <AnimatePresence mode="wait">
              <motion.h1
                key={lineIndex}
                className="font-display text-[clamp(1.85rem,1.3rem+2.5vw,3.2rem)] font-extrabold leading-[1.15] tracking-[-0.03em] text-white"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {heroLines[lineIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>

          <p className="max-w-xl text-[15px] leading-[1.8] text-white/70 md:text-base">
            {hero.body}
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex w-full flex-col gap-3.5 sm:flex-row sm:items-center">
            <Button
              href={hero.primaryCta.href}
              variant="primary"
              className="w-full sm:w-auto px-7 py-4 text-[12px] font-bold uppercase tracking-[0.14em] shadow-[0_8px_25px_rgba(222,48,36,0.35)]"
            >
              {hero.primaryCta.label}
              <ArrowRight className="size-4" />
            </Button>
            <Button
              href={hero.secondaryCta.href}
              variant="outline"
              className="w-full sm:w-auto border-white/20 text-white hover:bg-white hover:text-ink"
            >
              {hero.secondaryCta.label}
            </Button>
          </div>

          {/* Key Metrics Strip — Setu Infrastructure Style */}
          <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:grid-cols-4">
            <div className="border-l-2 border-x-red pl-3">
              <p className="font-display text-xl font-extrabold text-white md:text-2xl">15+</p>
              <p className="text-[11px] text-white/50 uppercase tracking-wider mt-0.5">Real Projects</p>
            </div>
            <div className="border-l-2 border-x-red pl-3">
              <p className="font-display text-xl font-extrabold text-white md:text-2xl">4</p>
              <p className="text-[11px] text-white/50 uppercase tracking-wider mt-0.5">Core Disciplines</p>
            </div>
            <div className="border-l-2 border-x-red pl-3">
              <p className="font-display text-xl font-extrabold text-white md:text-2xl">100%</p>
              <p className="text-[11px] text-white/50 uppercase tracking-wider mt-0.5">GFC Precision</p>
            </div>
            <div className="border-l-2 border-x-red pl-3">
              <p className="font-display text-xl font-extrabold text-white md:text-2xl">India</p>
              <p className="text-[11px] text-white/50 uppercase tracking-wider mt-0.5">Ahmedabad, GJ</p>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Facility Showcase Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={slideIndex}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.45 }}
              className="group relative overflow-hidden border border-white/15 bg-[#161616] shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden">
                <AssetImage
                  alt={currentSlide.title}
                  slot={currentSlide.slot}
                  kind="facility"
                  aspect="landscape"
                  fit="cover"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <span className="absolute left-4 top-4 border border-x-red/40 bg-x-red px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-md">
                  {currentSlide.tag}
                </span>
              </div>

              <div className="p-6 md:p-7">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold uppercase text-white">
                    {currentSlide.title}
                  </h3>
                  <span className="font-display text-[11px] font-bold tabular-nums text-x-red">
                    0{slideIndex + 1} / 0{heroSlides.length}
                  </span>
                </div>
                <p className="mt-2 text-[13px] text-white/65 leading-relaxed">
                  {currentSlide.desc}
                </p>

                {/* Slide Nav Buttons */}
                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                  <div className="flex gap-1.5">
                    {heroSlides.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setSlideIndex(i)}
                        className={`h-1.5 transition-all duration-300 ${
                          i === slideIndex ? "w-6 bg-x-red" : "w-2 bg-white/20 hover:bg-white/40"
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>

                  <a
                    href="/projects"
                    className="inline-flex items-center gap-1.5 font-display text-[11px] font-bold uppercase tracking-[0.12em] text-x-red transition-all hover:text-white"
                  >
                    View All Projects →
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
