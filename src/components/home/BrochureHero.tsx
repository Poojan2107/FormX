"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { brochureBrand } from "@/data/brochureHome";

/** Intro: official logo + slogan — cinematic, no photo */
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
    <section className="relative isolate flex min-h-[calc(100svh-4.25rem)] flex-col overflow-hidden bg-black text-white sm:min-h-[calc(100svh-4.75rem)]">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[42%] h-[55vmax] w-[55vmax] -translate-x-1/2 -translate-y-1/2 rounded-full"
        initial={reduce ? false : { opacity: 0, scale: 0.7 }}
        animate={ready ? { opacity: 1, scale: 1 } : undefined}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background:
            "radial-gradient(circle, rgba(224,49,40,0.28) 0%, rgba(224,49,40,0.08) 35%, transparent 68%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
        aria-hidden
      />

      <Container className="relative z-10 flex flex-1 flex-col items-center justify-center py-20 text-center">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 36, filter: "blur(8px)" }}
          animate={ready ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <Image
            src="/formx-logo.png"
            alt="FormX Consultants"
            width={640}
            height={200}
            priority
            className="h-auto w-[min(86vw,560px)] object-contain drop-shadow-[0_20px_60px_rgba(224,49,40,0.15)]"
          />
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scaleX: 0 }}
          animate={ready ? { opacity: 1, scaleX: 1 } : undefined}
          transition={{ duration: 0.85, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex items-center gap-4"
          aria-hidden
        >
          <span className="h-px w-10 bg-white/20 md:w-16" />
          <span className="font-display text-sm font-bold text-x-red">×</span>
          <span className="h-px w-10 bg-white/20 md:w-16" />
        </motion.div>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 1, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-[18ch] font-display text-[13px] font-semibold uppercase leading-relaxed tracking-[0.38em] text-white/70 md:text-[15px] md:tracking-[0.42em]"
        >
          {brochureBrand.slogan}
        </motion.h1>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.8, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Link
            href="/contact"
            transitionTypes={["nav-forward"]}
            className="group inline-flex items-center justify-center gap-3 bg-x-red px-10 py-4 font-label text-[10px] tracking-[0.22em] text-white transition-all hover:bg-x-red-hover"
          >
            Contact us
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-4 font-label text-[10px] tracking-[0.22em] text-white/45 transition-colors hover:text-white"
          >
            View projects
          </a>
        </motion.div>
      </Container>

      <motion.a
        href="#about"
        initial={reduce ? false : { opacity: 0 }}
        animate={ready ? { opacity: 1 } : undefined}
        transition={{ delay: 1.35, duration: 0.7 }}
        className="relative z-10 mb-10 flex flex-col items-center gap-3 self-center font-label text-[9px] tracking-[0.32em] text-white/25 transition-colors hover:text-white/50"
      >
        Scroll
        <span className="h-10 w-px bg-gradient-to-b from-x-red via-x-red/40 to-transparent" />
      </motion.a>
    </section>
  );
}
