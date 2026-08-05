"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { BrandMark } from "@/components/ui/BrandMark";
import { brochureBrand } from "@/data/brochureHome";

/** Hero: visible Form× + slogan — never the broken logo PNG */
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
        className="pointer-events-none absolute left-1/2 top-[40%] h-[50vmax] w-[50vmax] -translate-x-1/2 -translate-y-1/2 rounded-full"
        initial={reduce ? false : { opacity: 0, scale: 0.75 }}
        animate={ready ? { opacity: 1, scale: 1 } : undefined}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background:
            "radial-gradient(circle, rgba(224,49,40,0.3) 0%, rgba(224,49,40,0.08) 38%, transparent 68%)",
        }}
      />

      <Container className="relative z-10 flex flex-1 flex-col items-center justify-center py-16 text-center">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <BrandMark tone="dark" size="hero" showSub className="items-center text-center" />
        </motion.div>

        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={ready ? { opacity: 1 } : undefined}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-5 font-label text-[10px] tracking-[0.36em] text-white/35 md:text-[11px]"
        >
          Design <span className="text-x-red">|</span> Engineering
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, scaleX: 0 }}
          animate={ready ? { opacity: 1, scaleX: 1 } : undefined}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex items-center gap-4"
          aria-hidden
        >
          <span className="h-px w-12 bg-white/25 md:w-20" />
          <span className="font-display text-base font-bold text-x-red">×</span>
          <span className="h-px w-12 bg-white/25 md:w-20" />
        </motion.div>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-[20ch] font-display text-[14px] font-semibold uppercase leading-relaxed tracking-[0.36em] text-white md:text-[17px] md:tracking-[0.4em]"
        >
          {brochureBrand.slogan}
        </motion.h1>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.75, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Link
            href="/contact"
            transitionTypes={["nav-forward"]}
            className="group inline-flex items-center justify-center gap-3 bg-x-red px-10 py-4 font-label text-[10px] tracking-[0.22em] text-white transition-colors hover:bg-x-red-hover"
          >
            Contact us
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-4 font-label text-[10px] tracking-[0.22em] text-white/50 transition-colors hover:text-white"
          >
            View projects
          </a>
        </motion.div>
      </Container>

      <motion.a
        href="#about"
        initial={reduce ? false : { opacity: 0 }}
        animate={ready ? { opacity: 1 } : undefined}
        transition={{ delay: 1.25, duration: 0.6 }}
        className="relative z-10 mb-10 flex flex-col items-center gap-3 self-center font-label text-[9px] tracking-[0.32em] text-white/30 transition-colors hover:text-white/55"
      >
        Scroll
        <span className="h-10 w-px bg-gradient-to-b from-x-red to-transparent" />
      </motion.a>
    </section>
  );
}
