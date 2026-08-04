"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";

/**
 * Founder mark (home_comment_p1) — EXACT:
 * - Animated FORM× logo
 * - "Where Vision Takes Form"
 * - NO background images on open — images belong on the NEXT scroll (About)
 * - No project card / CAD / stats in hero
 * Ref: VMS calm identity + Jacobs restraint
 */
export function Hero() {
  const reduce = useReducedMotion();
  const [logoReady, setLogoReady] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setLogoReady(true), reduce ? 0 : 180);
    return () => window.clearTimeout(t);
  }, [reduce]);

  return (
    <section className="relative isolate flex min-h-[min(92vh,900px)] overflow-hidden bg-[#0a0a0a] text-white">
      <div
        className="pointer-events-none absolute inset-0 z-0 pattern-grid-dark opacity-[0.18]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(900px 480px at 18% 40%, rgba(222,48,36,0.16), transparent 65%)",
        }}
        aria-hidden
      />

      <Container className="relative z-10 flex w-full flex-col justify-center py-28 md:py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="overflow-hidden">
              <motion.h1
                className="font-display font-black uppercase leading-none tracking-[-0.04em] text-white"
                style={{ fontSize: "clamp(3.5rem, 12vw, 8.5rem)" }}
                aria-label="FormX Consultants"
              >
                {"FORM".split("").map((char, i) => (
                  <motion.span
                    key={`f-${i}`}
                    initial={reduce ? false : { y: "110%", opacity: 0 }}
                    animate={logoReady ? { y: 0, opacity: 1 } : undefined}
                    transition={{ duration: 0.55, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
                <motion.span
                  initial={reduce ? false : { scale: 0.4, opacity: 0 }}
                  animate={logoReady ? { scale: 1, opacity: 1 } : undefined}
                  transition={{ duration: 0.5, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block text-x-red"
                >
                  ×
                </motion.span>
              </motion.h1>
            </div>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={logoReady ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="mt-3 font-display text-[12px] font-bold uppercase tracking-[0.32em] text-white/70 md:text-[13px]"
            >
              Consultants · Design | Engineering
            </motion.p>
          </motion.div>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={logoReady ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-6 font-display text-xl font-medium tracking-wide text-white/90 md:text-2xl lg:text-3xl"
          >
            Where Vision Takes Form
          </motion.p>

          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={logoReady ? { opacity: 1 } : undefined}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mb-10 max-w-xl text-[15px] leading-[1.85] text-white/55 md:text-[16px]"
          >
            Architecture, Structure and Infrastructure — coordinated Before Issue so facilities reach
            site with fewer surprises.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={logoReady ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              transitionTypes={["nav-forward"]}
              className="group inline-flex items-center gap-3 bg-x-red px-8 py-4 font-display text-[12px] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-x-red-hover"
            >
              Discuss your facility
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/projects"
              transitionTypes={["nav-forward"]}
              className="inline-flex items-center gap-2.5 border border-white/25 px-8 py-4 font-display text-[12px] font-bold uppercase tracking-[0.18em] text-white/90 transition-colors hover:border-white hover:text-white"
            >
              See completed work
              <ArrowUpRight className="size-4" />
            </Link>
          </motion.div>

          <p className="mt-14 font-display text-[10px] font-bold uppercase tracking-[0.22em] text-white/25">
            Scroll to continue
          </p>
        </div>
      </Container>
    </section>
  );
}
