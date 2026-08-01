"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { heroLines, hero } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";

const heroSlides = [
  {
    title: "Kalpataru Corporate House",
    tag: "Commercial Development",
    location: "Ahmedabad, Gujarat",
    slot: "projects/pdf_p1_1.jpeg",
    year: "2024",
  },
  {
    title: "Vir Bhadra Enterprise",
    tag: "Industrial Manufacturing",
    location: "Gujarat, India",
    slot: "projects/pdf_p4_1.jpeg",
    year: "2023",
  },
  {
    title: "Nutan Vidhyalaya Campus",
    tag: "Institutional Campus",
    location: "Gujarat, India",
    slot: "projects/pdf_p6_1.jpeg",
    year: "2023",
  },
  {
    title: "PEB Logistics Warehouse",
    tag: "Industrial Logistics Hub",
    location: "Gujarat, India",
    slot: "projects/pdf_p10_1.jpeg",
    year: "2024",
  },
];

const heroStats = [
  { value: "25+", label: "Projects Delivered" },
  { value: "15 Lakh+", label: "Sq.Ft Designed" },
  { value: "15+", label: "Industrial Clients" },
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
    }, 7000);
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
      }, 7000);
    }
  };

  const current = heroSlides[slideIndex];

  return (
    <section className="relative isolate overflow-hidden bg-[#0c0c0c]" style={{ minHeight: "92vh" }}>
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={slideIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          >
            <AssetImage
              alt={current.title}
              slot={current.slot}
              kind="facility"
              aspect="auto"
              fit="cover"
              objectPosition="center"
              sizes="100vw"
              priority={slideIndex === 0}
              className="absolute inset-0 h-full w-full"
            />
          </motion.div>
        </AnimatePresence>

        {/* Editorial scrim — keep the building visible on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
      </div>

      <div className="absolute left-0 top-0 z-10 h-28 w-1 bg-gradient-to-b from-x-red to-transparent" />

      <Container className="relative z-10 flex min-h-[92vh] flex-col justify-end pb-10 pt-28 md:pb-14 md:pt-32 lg:pb-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-end">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-x-red" />
              <span className="font-display text-[11px] font-bold uppercase tracking-[0.26em] text-x-red">
                FORMX Consultants · Ahmedabad
              </span>
            </motion.div>

            <div className="relative mb-5 min-h-[110px] sm:min-h-[140px] md:min-h-[160px]">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={lineIndex}
                  initial={reduce ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -14 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display font-extrabold leading-[1.05] tracking-[-0.03em] text-white"
                  style={{ fontSize: "clamp(2.2rem, 5.2vw, 4.75rem)" }}
                >
                  {heroLines[lineIndex]}
                </motion.h1>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-8 max-w-[58ch] text-[15px] leading-[1.7] text-white/68 md:text-[16px]"
            >
              {hero.body}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Link
                href={hero.primaryCta.href}
                transitionTypes={["nav-forward"]}
                className="group inline-flex items-center gap-2.5 bg-x-red px-7 py-3.5 font-display text-[12px] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-x-red-hover"
              >
                {hero.primaryCta.label}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href={hero.secondaryCta.href}
                transitionTypes={["nav-forward"]}
                className="inline-flex items-center gap-2 border border-white/30 px-7 py-3.5 font-display text-[12px] font-bold uppercase tracking-[0.16em] text-white/85 transition-colors hover:border-white hover:text-white"
              >
                {hero.secondaryCta.label}
                <ArrowUpRight className="size-4" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="hidden lg:block"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={slideIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="mb-5 border-l-2 border-x-red pl-4"
              >
                <p className="font-display text-[9px] font-bold uppercase tracking-[0.2em] text-x-red">
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

            <div className="flex flex-col gap-1.5">
              {heroSlides.map((slide, i) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => goToSlide(i)}
                  className="group flex items-center gap-2.5 text-left"
                  aria-label={`View ${slide.title}`}
                >
                  <span
                    className={`block h-px transition-all duration-500 ${
                      i === slideIndex
                        ? "w-8 bg-x-red"
                        : "w-4 bg-white/20 group-hover:w-6 group-hover:bg-white/40"
                    }`}
                  />
                  <span
                    className={`font-display text-[10px] font-bold uppercase tracking-[0.14em] transition-colors ${
                      i === slideIndex
                        ? "text-white"
                        : "text-white/30 group-hover:text-white/60"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-end gap-8 border-t border-white/15 pt-7 md:gap-12"
        >
          {heroStats.map((stat, i) => (
            <div
              key={stat.label}
              className={i !== 0 ? "border-l border-white/15 pl-8 md:pl-12" : ""}
            >
              <p className="font-display text-2xl font-extrabold text-white md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">
                {stat.label}
              </p>
            </div>
          ))}

          <div className="ml-auto flex items-center gap-1.5 lg:hidden">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goToSlide(i)}
                className={`h-1 transition-all duration-300 ${
                  i === slideIndex ? "w-6 bg-x-red" : "w-2 bg-white/20"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
