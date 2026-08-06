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

export function BrochureHero() {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(!!reduce);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const sheetY = useTransform(scrollYProgress, [0, 0.5], [0, reduce ? 0 : 56]);
  const sheetOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

  useEffect(() => {
    if (reduce) { setReady(true); return; }
    const t = window.setTimeout(() => setReady(true), 80);
    return () => window.clearTimeout(t);
  }, [reduce]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[calc(100svh-4.25rem)] flex-col overflow-hidden bg-[#fafaf8] text-ink sm:min-h-[calc(100svh-4.75rem)]"
      aria-label="FormX Consultants — Where Vision Takes Form"
    >
      {/* Paper grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "180px",
        }}
      />

      {/* Giant atmospheric × */}
      <motion.span
        aria-hidden
        initial={reduce ? false : { opacity: 0, scale: 0.85 }}
        animate={ready ? { opacity: 0.065, scale: 1 } : undefined}
        transition={{ duration: 2.5, delay: 0.2, ease }}
        className="pointer-events-none absolute -right-[6%] -top-[8%] select-none font-display font-black leading-[0.85] text-x-red"
        style={{ fontSize: "clamp(22rem, 58vw, 46rem)" }}
      >
        ×
      </motion.span>

      {/* Engineering crop marks */}
      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden>
        <motion.span initial={reduce ? false : { opacity: 0 }} animate={ready ? { opacity: 1 } : undefined} transition={{ duration: 0.6, delay: 0.05 }}
          className="absolute left-6 top-6 block h-10 w-10 border-l-2 border-t-2 border-ink/[0.1] md:left-10 md:top-10" />
        <motion.span initial={reduce ? false : { opacity: 0 }} animate={ready ? { opacity: 1 } : undefined} transition={{ duration: 0.6, delay: 0.1 }}
          className="absolute right-6 top-6 block h-10 w-10 border-r-2 border-t-2 border-ink/[0.1] md:right-10 md:top-10" />
        <motion.span initial={reduce ? false : { opacity: 0 }} animate={ready ? { opacity: 1 } : undefined} transition={{ duration: 0.6, delay: 0.15 }}
          className="absolute bottom-16 left-6 block h-10 w-10 border-b-2 border-l-2 border-ink/[0.1] md:bottom-12 md:left-10" />
        <motion.span initial={reduce ? false : { opacity: 0 }} animate={ready ? { opacity: 1 } : undefined} transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute bottom-16 right-6 block h-10 w-10 border-b-2 border-r-2 border-x-red/50 md:bottom-12 md:right-10" />
      </div>

      {/* Main content */}
      <motion.div
        style={reduce ? undefined : { opacity: sheetOpacity, y: sheetY }}
        className="relative z-10 flex flex-1 flex-col"
      >
        <Container className="flex flex-1 flex-col justify-center py-24 md:py-32">
          <div className="mx-auto w-full max-w-5xl">

            {/* Logo */}
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.92, y: 18 }}
              animate={ready ? { opacity: 1, scale: 1, y: 0 } : undefined}
              transition={{ duration: 1.15, delay: 0.25, ease }}
              className="flex justify-center md:justify-start"
            >
              <Image
                src="/formx-logo-solid.png"
                alt="FormX Consultants — Design · Engineering"
                width={360}
                height={154}
                priority
                className="h-auto w-[min(64vw,280px)] object-contain md:w-[320px] lg:w-[360px]"
              />
            </motion.div>

            {/* Red rule */}
            <motion.div
              initial={reduce ? false : { scaleX: 0, opacity: 0 }}
              animate={ready ? { scaleX: 1, opacity: 1 } : undefined}
              transition={{ duration: 1, delay: 0.85, ease }}
              className="mt-10 flex origin-left items-center gap-4 md:mt-12"
              aria-hidden
            >
              <span className="h-[1.5px] w-14 bg-ink/[0.12] md:w-20" />
              <span className="font-display text-base font-black text-x-red">×</span>
              <span className="h-[1.5px] w-28 bg-ink/[0.07]" />
            </motion.div>

            {/* Tagline */}
            <h1
              className="mt-10 flex flex-wrap gap-x-5 gap-y-0 md:mt-12"
              aria-label={brochureBrand.slogan}
            >
              <span className="sr-only">{brochureBrand.slogan}</span>
              {TAGLINE_WORDS.map((word, i) => (
                <span key={word} className="overflow-hidden" aria-hidden>
                  <motion.span
                    initial={reduce ? false : { y: "108%" }}
                    animate={ready ? { y: "0%" } : undefined}
                    transition={{ duration: 1, delay: 0.6 + i * 0.11, ease }}
                    className="block font-display font-black tracking-[-0.04em] text-ink"
                    style={{ fontSize: "clamp(3rem, 8.5vw, 7.5rem)", lineHeight: 1.0 }}
                  >
                    {word === "FORM" ? (
                      <>FORM<span className="text-x-red">×</span></>
                    ) : word}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Discipline sub-copy */}
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={ready ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.85, delay: 1.15, ease }}
              className="mt-8 max-w-[46ch] text-base leading-[1.8] text-ink/50 md:mt-9 md:text-[17px]"
            >
              Architecture · Structure · Infrastructure — coordinated before
              drawings leave the studio. Ahmedabad.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={ready ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.8, delay: 1.35, ease }}
              className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Link
                href="/contact"
                transitionTypes={["nav-forward"]}
                className="fx-btn-primary group"
              >
                Discuss Your Facility
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="#projects" className="fx-btn-ghost">
                View Projects
              </a>
            </motion.div>

          </div>
        </Container>

        {/* Ticker */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={ready ? { opacity: 1 } : undefined}
          transition={{ delay: 1.65, duration: 0.7 }}
          className="relative z-10 overflow-hidden border-y border-ink/[0.08] bg-[#fafaf8]/80 py-3.5 backdrop-blur-sm"
          aria-hidden
        >
          <div className="ticker-track select-none">
            {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={`${item}-${i}`} className="flex items-center gap-5 px-5">
                <span className="font-display text-[10px] font-bold tracking-[0.3em] text-ink/28 uppercase whitespace-nowrap">
                  {item}
                </span>
                <span className="font-display font-black text-x-red/45 text-lg leading-none">×</span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* Footer bar */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={ready ? { opacity: 1 } : undefined}
          transition={{ delay: 1.6, duration: 0.7 }}
          className="relative z-10 bg-[#fafaf8]/80 backdrop-blur-sm"
        >
          <Container className="flex items-center justify-between py-3.5">
            <p className="font-label text-[9px] tracking-[0.25em] text-ink/22">
              FormX Consultants
              <span className="mx-2 text-x-red/40">×</span>
              Design | Engineering · Ahmedabad
            </p>
            <a
              href="#about"
              className="flex items-center gap-2 font-label text-[9px] tracking-[0.25em] text-ink/28 transition-colors hover:text-x-red"
            >
              Enter the Practice
              <ChevronDown className="size-3.5 fx-scroll-cue" />
            </a>
          </Container>
        </motion.div>
      </motion.div>
    </section>
  );
}
