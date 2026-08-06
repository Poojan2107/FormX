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

/**
 * White lockup hero — FormX logo system:
 * white field · black type · red × only as X-factor.
 * No photo. Official solid lockup. Subtle enter + scroll fade.
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
  const rise = useTransform(scrollYProgress, [0, 0.55], [0, reduce ? 0 : 48]);

  useEffect(() => {
    if (reduce) {
      setReady(true);
      return;
    }
    const t = window.setTimeout(() => setReady(true), 60);
    return () => window.clearTimeout(t);
  }, [reduce]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[calc(100svh-4.25rem)] flex-col overflow-hidden bg-white text-ink sm:min-h-[calc(100svh-4.75rem)]"
    >
      {/* Quiet paper depth — no red glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          background:
            "radial-gradient(80% 55% at 50% 42%, rgba(0,0,0,0.03), transparent 70%)",
        }}
        aria-hidden
      />

      <motion.div
        style={reduce ? undefined : { opacity: fadeOut, y: rise }}
        className="relative z-10 flex flex-1 flex-col"
      >
        <Container className="flex flex-1 flex-col items-center justify-center py-16 text-center md:py-20">
          {/* Official solid lockup */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/formx-logo-solid.png"
              alt="FormX Consultants — Design | Engineering"
              width={640}
              height={280}
              priority
              className="mx-auto h-auto w-[min(78vw,420px)] object-contain md:w-[480px]"
            />
          </motion.div>

          {/* Hairline × — brand accent only */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scaleX: 0 }}
            animate={ready ? { opacity: 1, scaleX: 1 } : undefined}
            transition={{ duration: 0.85, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 flex items-center gap-4 md:mt-14"
            aria-hidden
          >
            <span className="h-px w-14 bg-ink/15 md:w-20" />
            <span className="font-display text-sm font-bold text-x-red">×</span>
            <span className="h-px w-14 bg-ink/15 md:w-20" />
          </motion.div>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.95, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-[22ch] font-display text-[13px] font-semibold uppercase leading-relaxed tracking-[0.38em] text-ink md:text-[15px] md:tracking-[0.42em]"
          >
            {brochureBrand.slogan}
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={ready ? { opacity: 1 } : undefined}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-5 max-w-[34ch] text-[15px] leading-[1.7] text-ink/45"
          >
            Ahmedabad · Architecture, Structure & Infrastructure
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
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
              className="inline-flex items-center justify-center px-6 py-4 font-label text-[10px] tracking-[0.22em] text-ink/40 transition-colors hover:text-ink"
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
          className="mb-9 flex flex-col items-center gap-3 self-center font-label text-[9px] tracking-[0.3em] text-ink/30 transition-colors hover:text-ink/55"
        >
          Scroll
          <span className="h-9 w-px bg-gradient-to-b from-x-red/80 to-transparent" aria-hidden />
        </motion.a>
      </motion.div>
    </section>
  );
}
