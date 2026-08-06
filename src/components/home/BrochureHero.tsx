"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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

/**
 * HERO CONCEPT (frozen intent): "Issued sheet"
 * — White drawing paper, not a logo poster or SaaS split.
 * — Official solid lockup as the stamp.
 * — Slogan is the statement (sentence case, large).
 * — Red exists only as × and the primary action.
 * — No photo (Hiren). One composition. Subtle staged motion.
 */
export function BrochureHero() {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(!!reduce);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const sheetFade = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const sheetY = useTransform(scrollYProgress, [0, 0.45], [0, reduce ? 0 : 36]);

  useEffect(() => {
    if (reduce) {
      setReady(true);
      return;
    }
    const t = window.setTimeout(() => setReady(true), 80);
    return () => window.clearTimeout(t);
  }, [reduce]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[calc(100svh-4.25rem)] flex-col overflow-hidden bg-[#fafaf8] text-ink sm:min-h-[calc(100svh-4.75rem)]"
    >
      {/* Paper grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
        aria-hidden
      />

      {/* Giant × — X-factor as atmosphere, not decoration chrome */}
      <motion.span
        aria-hidden
        initial={reduce ? false : { opacity: 0, scale: 0.92 }}
        animate={ready ? { opacity: 0.06, scale: 1 } : undefined}
        transition={{ duration: 1.8, delay: 0.2, ease }}
        className="pointer-events-none absolute -right-[6%] top-[18%] select-none font-display font-black leading-none text-x-red md:top-[8%]"
        style={{ fontSize: "clamp(18rem, 48vw, 36rem)" }}
      >
        ×
      </motion.span>

      {/* Registration / crop marks — issued drawing language */}
      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden>
        <motion.span
          initial={reduce ? false : { opacity: 0 }}
          animate={ready ? { opacity: 1 } : undefined}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="absolute left-5 top-6 h-7 w-7 border-l border-t border-ink/20 md:left-8 md:top-8"
        />
        <motion.span
          initial={reduce ? false : { opacity: 0 }}
          animate={ready ? { opacity: 1 } : undefined}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="absolute right-5 top-6 h-7 w-7 border-r border-t border-ink/20 md:right-8 md:top-8"
        />
        <motion.span
          initial={reduce ? false : { opacity: 0 }}
          animate={ready ? { opacity: 1 } : undefined}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="absolute bottom-6 left-5 h-7 w-7 border-b border-l border-ink/20 md:bottom-8 md:left-8"
        />
        <motion.span
          initial={reduce ? false : { opacity: 0 }}
          animate={ready ? { opacity: 1 } : undefined}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="absolute bottom-6 right-5 h-7 w-7 border-b border-r border-x-red/50 md:bottom-8 md:right-8"
        />
      </div>

      <motion.div
        style={reduce ? undefined : { opacity: sheetFade, y: sheetY }}
        className="relative z-10 flex flex-1 flex-col"
      >
        <Container className="flex flex-1 flex-col justify-center py-20 md:py-24">
          <div className="mx-auto w-full max-w-3xl">
            {/* Stamp — official lockup, restrained scale */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={ready ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 1, delay: 0.35, ease }}
              className="flex justify-center md:justify-start"
            >
              <Image
                src="/formx-logo-solid.png"
                alt="FormX Consultants"
                width={280}
                height={120}
                priority
                className="h-auto w-[min(56vw,220px)] object-contain md:w-[240px]"
              />
            </motion.div>

            {/* Statement — this is the hero, not the logo */}
            <h1 className="mt-14 md:mt-16">
              <span className="sr-only">{brochureBrand.slogan}</span>
              <span
                className="block overflow-hidden"
                aria-hidden
              >
                <motion.span
                  initial={reduce ? false : { y: "100%" }}
                  animate={ready ? { y: "0%" } : undefined}
                  transition={{ duration: 1, delay: 0.55, ease }}
                  className="block font-display font-bold tracking-tight text-ink"
                  style={{
                    fontSize: "clamp(2.75rem, 7.5vw, 5.25rem)",
                    lineHeight: 1.02,
                  }}
                >
                  Where Vision
                </motion.span>
              </span>
              <span className="mt-1 block overflow-hidden" aria-hidden>
                <motion.span
                  initial={reduce ? false : { y: "100%" }}
                  animate={ready ? { y: "0%" } : undefined}
                  transition={{ duration: 1, delay: 0.72, ease }}
                  className="block font-display font-bold tracking-tight text-ink"
                  style={{
                    fontSize: "clamp(2.75rem, 7.5vw, 5.25rem)",
                    lineHeight: 1.02,
                  }}
                >
                  Takes Form
                  <span className="text-x-red">.</span>
                </motion.span>
              </span>
            </h1>

            <motion.div
              initial={reduce ? false : { opacity: 0, scaleX: 0 }}
              animate={ready ? { opacity: 1, scaleX: 1 } : undefined}
              transition={{ duration: 0.9, delay: 1.0, ease }}
              className="mt-10 flex origin-left items-center gap-3 md:mt-12"
              aria-hidden
            >
              <span className="h-px w-10 bg-ink/15 md:w-14" />
              <span className="font-display text-xs font-bold text-x-red">×</span>
              <span className="h-px flex-1 max-w-[8rem] bg-ink/10" />
            </motion.div>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={ready ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.8, delay: 1.15, ease }}
              className="mt-8 max-w-[38ch] text-[15px] leading-[1.75] text-ink/50 md:text-[16px]"
            >
              Ahmedabad · Architecture, Structure and Infrastructure — held together until the
              facility is ready to issue.
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={ready ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.75, delay: 1.35, ease }}
              className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Link
                href="/contact"
                transitionTypes={["nav-forward"]}
                className="group inline-flex w-fit items-center justify-center gap-3 bg-x-red px-9 py-4 font-label text-[10px] tracking-[0.2em] text-white transition-colors hover:bg-x-red-hover"
              >
                Discuss your facility
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="#projects"
                className="inline-flex w-fit items-center gap-2 font-label text-[10px] tracking-[0.2em] text-ink/40 transition-colors hover:text-ink"
              >
                See completed work
              </a>
            </motion.div>
          </div>
        </Container>

        {/* Title block — quiet drawing footer */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ delay: 1.5, duration: 0.7 }}
          className="relative z-10 border-t border-ink/[0.07] bg-[#fafaf8]/80 backdrop-blur-[2px]"
        >
          <Container className="flex flex-wrap items-center justify-between gap-3 py-3.5 md:py-4">
            <p className="font-label text-[9px] tracking-[0.22em] text-ink/30">
              FormX Consultants
              <span className="mx-2 text-x-red/60">×</span>
              Design | Engineering
            </p>
            <a
              href="#about"
              className="font-label text-[9px] tracking-[0.22em] text-ink/35 transition-colors hover:text-x-red"
            >
              Continue
            </a>
          </Container>
        </motion.div>
      </motion.div>
    </section>
  );
}
