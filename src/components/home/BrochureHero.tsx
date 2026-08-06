"use client";

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
 * Split editorial hero — NOT a centered logo poster.
 * Left: Form× as landscape. Right: slogan + CTA.
 * White · black type · red × only.
 */
export function BrochureHero() {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(!!reduce);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const fadeOut = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const drift = useTransform(scrollYProgress, [0, 0.55], [0, reduce ? 0 : 40]);

  useEffect(() => {
    if (reduce) {
      setReady(true);
      return;
    }
    const t = window.setTimeout(() => setReady(true), 50);
    return () => window.clearTimeout(t);
  }, [reduce]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[calc(100svh-4.25rem)] flex-col overflow-hidden bg-white text-ink sm:min-h-[calc(100svh-4.75rem)]"
    >
      {/* Soft paper edge — right side only, so the split has depth */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#f6f5f2] to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-ink/[0.06]"
        aria-hidden
      />

      <motion.div
        style={reduce ? undefined : { opacity: fadeOut, y: drift }}
        className="relative z-10 flex flex-1 flex-col"
      >
        <Container className="flex flex-1 flex-col justify-center py-16 md:py-20">
          <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-8 lg:items-center">
            {/* LEFT — the mark owns the field */}
            <div className="lg:col-span-7">
              <motion.p
                initial={reduce ? false : { opacity: 0 }}
                animate={ready ? { opacity: 1 } : undefined}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-label text-[10px] tracking-[0.32em] text-ink/35"
              >
                Ahmedabad
              </motion.p>

              <h1
                className="mt-4 font-display font-black leading-[0.82] tracking-[-0.055em]"
                style={{ fontSize: "clamp(4.75rem, 14vw, 10.5rem)" }}
                aria-label="FormX Consultants"
              >
                <span className="sr-only">FormX</span>
                <span className="inline-flex overflow-hidden" aria-hidden>
                  {"Form".split("").map((char, i) => (
                    <motion.span
                      key={i}
                      initial={reduce ? false : { y: "108%" }}
                      animate={ready ? { y: "0%" } : undefined}
                      transition={{ duration: 0.9, delay: 0.15 + i * 0.06, ease }}
                      className="inline-block text-ink"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
                <motion.span
                  aria-hidden
                  initial={reduce ? false : { opacity: 0, y: "30%" }}
                  animate={ready ? { opacity: 1, y: "0%" } : undefined}
                  transition={{ duration: 0.85, delay: 0.48, ease }}
                  className="inline-block text-x-red"
                >
                  ×
                </motion.span>
              </h1>

              <motion.div
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={ready ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.7, delay: 0.7, ease }}
                className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-1"
              >
                <span className="font-label text-[11px] tracking-[0.36em] text-ink">
                  Consultants
                </span>
                <span className="hidden text-ink/20 sm:inline" aria-hidden>
                  ·
                </span>
                <span className="font-label text-[10px] tracking-[0.28em] text-ink/40">
                  Design <span className="text-x-red">|</span> Engineering
                </span>
              </motion.div>
            </div>

            {/* RIGHT — human copy + decision */}
            <div className="lg:col-span-5 lg:pb-3">
              <motion.div
                initial={reduce ? false : { opacity: 0, x: 24 }}
                animate={ready ? { opacity: 1, x: 0 } : undefined}
                transition={{ duration: 0.9, delay: 0.55, ease }}
                className="max-w-md lg:ml-auto"
              >
                <div className="mb-6 h-px w-12 bg-x-red" aria-hidden />
                <p
                  className="font-display font-bold leading-[1.15] tracking-tight text-ink"
                  style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)" }}
                >
                  {brochureBrand.slogan}
                </p>
                <p className="mt-5 text-[15px] leading-[1.75] text-ink/50 md:text-[16px]">
                  Architecture, Structure and Infrastructure — coordinated before drawings leave
                  the studio.
                </p>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href="/contact"
                    transitionTypes={["nav-forward"]}
                    className="group inline-flex items-center justify-center gap-3 bg-x-red px-8 py-4 font-label text-[10px] tracking-[0.2em] text-white transition-colors hover:bg-x-red-hover"
                  >
                    Contact us
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center px-2 py-3 font-label text-[10px] tracking-[0.2em] text-ink/40 transition-colors hover:text-ink"
                  >
                    View projects
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={ready ? { opacity: 1 } : undefined}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="border-t border-ink/[0.06]"
        >
          <Container className="flex items-center justify-between py-4">
            <p className="hidden font-label text-[9px] tracking-[0.24em] text-ink/25 sm:block">
              Architecture <span className="text-x-red/70">·</span> Structure{" "}
              <span className="text-x-red/70">·</span> Infrastructure
            </p>
            <a
              href="#about"
              className="ml-auto inline-flex items-center gap-3 font-label text-[9px] tracking-[0.24em] text-ink/35 transition-colors hover:text-ink"
            >
              Enter the practice
              <span className="h-6 w-px bg-x-red/70" aria-hidden />
            </a>
          </Container>
        </motion.div>
      </motion.div>
    </section>
  );
}
