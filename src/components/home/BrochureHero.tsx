"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { brochureBrand } from "@/data/brochureHome";

/** Brochure open: official logo animates in, slogan arrives — no photo. */
export function BrochureHero() {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(!!reduce);

  useEffect(() => {
    if (reduce) {
      setReady(true);
      return;
    }
    const t = window.setTimeout(() => setReady(true), 50);
    return () => window.clearTimeout(t);
  }, [reduce]);

  return (
    <section className="relative isolate flex min-h-[calc(100svh-4.25rem)] flex-col overflow-hidden bg-black text-white sm:min-h-[calc(100svh-4.75rem)]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 45% at 70% 40%, rgba(224,49,40,0.22), transparent 70%), radial-gradient(80% 60% at 10% 100%, rgba(0,0,0,0.85), transparent 50%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
        aria-hidden
      />

      <Container className="relative z-10 flex flex-1 flex-col justify-center py-16 md:py-20">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 28, scale: 0.94 }}
            animate={ready ? { opacity: 1, y: 0, scale: 1 } : undefined}
            transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <Image
              src="/formx-logo.png"
              alt="FormX Consultants"
              width={520}
              height={160}
              priority
              className="h-auto w-[min(78vw,420px)] object-contain md:w-[480px]"
            />
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scaleX: 0 }}
            animate={ready ? { opacity: 1, scaleX: 1 } : undefined}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 h-px w-16 origin-center bg-x-red md:mt-12"
            aria-hidden
          />

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.9, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 font-display text-[11px] font-semibold uppercase tracking-[0.42em] text-white/55 md:text-[12px] md:tracking-[0.48em]"
          >
            {brochureBrand.slogan}
          </motion.p>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-[34ch] text-[15px] leading-[1.7] text-white/40 md:text-[16px]"
          >
            Design <span className="text-x-red">|</span> Engineering · Ahmedabad
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.75, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
          >
            <Link
              href="/contact"
              transitionTypes={["nav-forward"]}
              className="group inline-flex items-center justify-center gap-3 bg-x-red px-9 py-4 font-label text-[10px] tracking-[0.22em] text-white transition-colors hover:bg-x-red-hover"
            >
              Contact us
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="#projects"
              className="inline-flex items-center justify-center border border-white/20 px-8 py-4 font-label text-[10px] tracking-[0.22em] text-white/60 transition-colors hover:border-white/50 hover:text-white"
            >
              View projects
            </a>
          </motion.div>
        </div>
      </Container>

      <motion.a
        href="#about"
        initial={reduce ? false : { opacity: 0 }}
        animate={ready ? { opacity: 1 } : undefined}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="relative z-10 mx-auto mb-8 flex flex-col items-center gap-2 font-label text-[9px] tracking-[0.3em] text-white/30 transition-colors hover:text-white/55"
      >
        Enter
        <span className="h-8 w-px bg-gradient-to-b from-x-red to-transparent" aria-hidden />
      </motion.a>
    </section>
  );
}
