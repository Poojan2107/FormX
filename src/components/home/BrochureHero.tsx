"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { brochureBrand } from "@/data/brochureHome";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * No-photo identity entrance. Brand is the landscape.
 * Slogan + one sentence + one CTA — silence as luxury.
 */
export function BrochureHero() {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(!!reduce);

  useEffect(() => {
    if (reduce) {
      setReady(true);
      return;
    }
    const t = window.setTimeout(() => setReady(true), 40);
    return () => window.clearTimeout(t);
  }, [reduce]);

  return (
    <section
      className="relative isolate flex min-h-[calc(100svh-4.25rem)] flex-col overflow-hidden bg-[#fafaf8] sm:min-h-[calc(100svh-4.75rem)]"
      aria-label="FormX Consultants — Where Vision Takes Form"
    >
      {/* Red rail — draws on load */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 z-20 w-[3px] origin-top bg-x-red"
        initial={reduce ? false : { scaleY: 0 }}
        animate={ready ? { scaleY: 1 } : undefined}
        transition={{ duration: 1.1, delay: 0.05, ease }}
        style={{ top: 0 }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 12% 20%, #ffffff 0%, #fafaf8 45%, #f3f1ea 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "160px",
        }}
      />

      <div className="relative z-10 flex flex-1 flex-col justify-center px-6 py-16 md:px-10 lg:px-16 xl:px-20">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="font-label text-[10px] tracking-[0.28em] text-x-red"
        >
          Architecture · Structure · Infrastructure
        </motion.p>

        {/* Brand = hero landscape */}
        <h1 className="mt-8 max-w-[18ch]" aria-label="FormX Consultants">
          <span className="sr-only">FormX Consultants — {brochureBrand.slogan}</span>
          <div className="overflow-hidden" aria-hidden>
            <motion.span
              initial={reduce ? false : { y: "105%" }}
              animate={ready ? { y: "0%" } : undefined}
              transition={{ duration: 1.05, delay: 0.18, ease }}
              className="block font-display font-black leading-[0.88] tracking-[-0.055em] text-ink"
              style={{ fontSize: "clamp(3.4rem, 12vw, 9.5rem)" }}
            >
              Form<span className="text-x-red">X</span>
            </motion.span>
          </div>
          <motion.span
            initial={reduce ? false : { opacity: 0 }}
            animate={ready ? { opacity: 1 } : undefined}
            transition={{ duration: 0.8, delay: 0.55, ease }}
            className="mt-4 block font-display text-[11px] font-extrabold uppercase tracking-[0.42em] text-ink/55 md:text-[13px] md:tracking-[0.48em]"
            aria-hidden
          >
            Consultants
          </motion.span>
        </h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.75, delay: 0.65, ease }}
          className="mt-8 max-w-[28ch] font-display text-[1.35rem] font-bold leading-[1.25] tracking-tight text-ink md:text-[1.65rem]"
        >
          {brochureBrand.slogan}
          <span className="text-x-red">×</span>
        </motion.p>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.75, delay: 0.78, ease }}
          className="fx-read mt-5 text-[15.5px] text-ink/58 md:text-[16.5px]"
        >
          Architecture, Structure and Infrastructure engineered together before drawings leave the
          studio.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, delay: 0.92, ease }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Link
            href="/contact"
            transitionTypes={["nav-forward"]}
            className="fx-btn-primary group"
          >
            Discuss your facility
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="#before-issue"
            className="group inline-flex items-center gap-2 font-label text-[10px] tracking-[0.22em] text-ink/45 transition-colors hover:text-x-red"
          >
            Before × Issue
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={reduce ? false : { opacity: 0 }}
        animate={ready ? { opacity: 1 } : undefined}
        transition={{ delay: 1.15, duration: 0.6 }}
        className="relative z-10 mb-8 ml-6 inline-flex items-center gap-2.5 md:ml-10 lg:ml-16 xl:ml-20"
      >
        <span className="font-label text-[10px] tracking-[0.24em] text-ink/40 transition-colors hover:text-x-red">
          Enter the studio
        </span>
        <ChevronDown className="size-3.5 fx-scroll-cue text-x-red" />
      </motion.a>
    </section>
  );
}
