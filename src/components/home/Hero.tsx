"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";

/**
 * First viewport = brand only.
 * No photos (Hiren). FORM× is the architecture.
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
    <section className="fx-grain relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-[#0a0a09] text-white">
      <div className="pointer-events-none absolute inset-0 fx-grid-dark opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute -left-1/4 top-1/3 h-[60vmax] w-[60vmax] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(224,49,40,0.35) 0%, transparent 68%)",
        }}
        aria-hidden
      />

      <Container className="relative z-10 flex flex-1 flex-col justify-center pb-16 pt-28 md:pb-20 md:pt-32">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-label text-[11px] text-white/45"
        >
          Ahmedabad · India
        </motion.p>

        <h1
          className="mt-6 font-display font-extrabold uppercase leading-[0.86] tracking-[-0.05em] text-white"
          style={{ fontSize: "clamp(4rem, 18vw, 11rem)" }}
          aria-label="FormX Consultants"
        >
          {"FORM".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={reduce ? false : { y: "0.4em", opacity: 0 }}
              animate={ready ? { y: 0, opacity: 1 } : undefined}
              transition={{ duration: 0.55, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            initial={reduce ? false : { scale: 0.4, opacity: 0, rotate: -30 }}
            animate={ready ? { scale: 1, opacity: 1, rotate: 0 } : undefined}
            transition={{ duration: 0.55, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block text-x-red"
          >
            ×
          </motion.span>
        </h1>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-8 max-w-2xl md:mt-10"
        >
          <p className="font-body text-2xl font-medium leading-snug tracking-tight text-white md:text-3xl lg:text-[2.15rem]">
            Where Vision Takes Form
          </p>
          <p className="mt-5 measure-studio text-[17px] leading-[1.75] text-white/55">
            We coordinate Architecture, Structure and Infrastructure before a single sheet leaves
            the studio — so the facility that gets built is the one you meant.
          </p>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.55, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4 md:mt-12"
        >
          <Link
            href="/contact"
            transitionTypes={["nav-forward"]}
            className="group inline-flex items-center gap-3 bg-x-red px-8 py-4 font-label text-[11px] text-white transition-colors hover:bg-x-red-hover"
          >
            Discuss your facility
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/#work"
            className="font-label text-[11px] text-white/50 underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            See the work
          </Link>
        </motion.div>

        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={ready ? { opacity: 1 } : undefined}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-16 font-label text-[10px] text-white/30 md:mt-20"
        >
          Architecture · Structure · Infrastructure
        </motion.p>
      </Container>
    </section>
  );
}
