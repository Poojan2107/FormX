"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";

/**
 * Founder mark (home_comment_p1):
 * Animated FORM× · slogan · NO background photos (next scroll only).
 * Content is always visible — motion enhances, never hides.
 */
export function Hero() {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(!!reduce);

  useEffect(() => {
    if (reduce) {
      setReady(true);
      return;
    }
    const t = window.setTimeout(() => setReady(true), 60);
    return () => window.clearTimeout(t);
  }, [reduce]);

  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-[#0a0a0a] text-white md:min-h-[min(92vh,880px)]">
      <div
        className="pointer-events-none absolute inset-0 z-0 pattern-grid-dark opacity-[0.16]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(70% 55% at 12% 45%, rgba(222,48,36,0.18), transparent 62%), radial-gradient(50% 40% at 88% 80%, rgba(255,255,255,0.04), transparent 55%)",
        }}
        aria-hidden
      />

      <Container className="relative z-10 flex flex-1 flex-col justify-center pb-24 pt-28 md:pb-28 md:pt-32">
        <div className="max-w-4xl">
          <motion.div
            initial={false}
            animate={{ opacity: 1 }}
            className="mb-7 md:mb-9"
          >
            <h1
              className="font-display font-black uppercase leading-[0.92] tracking-[-0.04em] text-white"
              style={{ fontSize: "clamp(3.25rem, 11vw, 7.75rem)" }}
              aria-label="FormX Consultants"
            >
              {"FORM".split("").map((char, i) => (
                <motion.span
                  key={`f-${i}`}
                  initial={reduce ? false : { y: "0.35em", opacity: 0 }}
                  animate={ready ? { y: 0, opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
              <motion.span
                initial={reduce ? false : { scale: 0.6, opacity: 0 }}
                animate={ready ? { scale: 1, opacity: 1 } : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block text-x-red"
              >
                ×
              </motion.span>
            </h1>
            <motion.p
              initial={false}
              animate={{ opacity: 1 }}
              className="mt-4 font-display text-[11px] font-bold uppercase tracking-[0.3em] text-white/65 md:text-[12px]"
            >
              Consultants · Design | Engineering
            </motion.p>
          </motion.div>

          <p className="mb-5 font-display text-xl font-medium tracking-wide text-white md:mb-6 md:text-2xl lg:text-[1.85rem]">
            Where Vision Takes Form
          </p>

          <p className="mb-9 measure-studio text-[15px] leading-[1.85] text-white/55 md:mb-10 md:text-[16px]">
            Architecture, Structure and Infrastructure — coordinated Before × Issue so facilities
            reach site with fewer surprises.
          </p>

          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <Link
              href="/contact"
              transitionTypes={["nav-forward"]}
              className="group inline-flex items-center gap-3 bg-x-red px-7 py-3.5 font-display text-[12px] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-x-red-hover md:px-8 md:py-4"
            >
              Discuss your facility
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/projects"
              transitionTypes={["nav-forward"]}
              className="inline-flex items-center gap-2.5 border border-white/25 px-7 py-3.5 font-display text-[12px] font-bold uppercase tracking-[0.18em] text-white/90 transition-colors hover:border-white hover:text-white md:px-8 md:py-4"
            >
              See completed work
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </Container>

      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10 bg-black/20 backdrop-blur-[2px]">
        <Container className="flex items-center justify-between py-3.5 md:py-4">
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-white/35">
            Architecture · Structure · Infrastructure
          </p>
          <a
            href="#about"
            className="inline-flex items-center gap-2 font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white/45 transition-colors hover:text-white"
          >
            Scroll
            <ChevronDown className="size-3.5 animate-bounce" />
          </a>
        </Container>
      </div>
    </section>
  );
}
