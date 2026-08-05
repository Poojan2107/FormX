"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";

/**
 * Hero = animated Form× lockup language (Hiren: make FormX logo in animation).
 * No photos on open. Typography matches official logo geometry.
 */
export function Hero() {
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
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 fx-grid-dark opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute left-[-10%] top-[35%] h-[50vmax] w-[50vmax] rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(224,49,40,0.4) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <Container className="relative z-10 flex flex-1 flex-col justify-center pb-16 pt-28 md:pb-24 md:pt-32">
        <div className="max-w-5xl">
          <h1
            className="font-display font-black leading-[0.88] tracking-[-0.04em] text-white"
            style={{ fontSize: "clamp(3.75rem, 16vw, 9.5rem)" }}
            aria-label="FormX Consultants"
          >
            {"Form".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={reduce ? false : { y: "0.35em", opacity: 0 }}
                animate={ready ? { y: 0, opacity: 1 } : undefined}
                transition={{ duration: 0.5, delay: 0.07 * i, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
            <motion.span
              initial={reduce ? false : { scale: 0.5, opacity: 0 }}
              animate={ready ? { scale: 1, opacity: 1 } : undefined}
              transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block text-x-red"
            >
              ×
            </motion.span>
          </h1>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.55, delay: 0.5 }}
            className="mt-5 space-y-2 md:mt-6"
          >
            <p className="font-label text-[12px] font-semibold tracking-[0.28em] text-white/85 md:text-[13px]">
              Consultants
            </p>
            <p className="font-label text-[10px] font-medium tracking-[0.32em] text-white/45 md:text-[11px]">
              Design <span className="text-x-red">|</span> Engineering
            </p>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.55, delay: 0.65 }}
            className="mt-10 max-w-xl md:mt-12"
          >
            <p className="font-display text-xl font-semibold tracking-tight text-white md:text-2xl lg:text-[1.85rem]">
              Where Vision Takes Form
            </p>
            <p className="mt-5 max-w-[36ch] text-[15px] font-medium leading-[1.75] text-white/50 md:text-[16px]">
              Architecture, Structure and Infrastructure — coordinated Before × Issue so facilities
              reach site with fewer surprises.
            </p>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4 md:mt-12"
          >
            <Link
              href="/contact"
              transitionTypes={["nav-forward"]}
              className="group inline-flex items-center gap-3 bg-x-red px-8 py-4 font-label text-[10px] tracking-[0.2em] text-white hover:bg-x-red-hover"
            >
              Discuss your facility
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/#work"
              className="font-label text-[10px] tracking-[0.2em] text-white/45 underline-offset-4 hover:text-white hover:underline"
            >
              See the work
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
