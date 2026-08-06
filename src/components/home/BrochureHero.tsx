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
 * White editorial hero — Form× lockup language without the blown-up PNG poster.
 * Black type · red × only · slogan is the human line · subtle staged fades.
 */
export function BrochureHero() {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(!!reduce);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const fadeOut = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const rise = useTransform(scrollYProgress, [0, 0.5], [0, reduce ? 0 : 56]);

  useEffect(() => {
    if (reduce) {
      setReady(true);
      return;
    }
    const t = window.setTimeout(() => setReady(true), 40);
    return () => window.clearTimeout(t);
  }, [reduce]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[calc(100svh-4.25rem)] flex-col overflow-hidden bg-white text-ink sm:min-h-[calc(100svh-4.75rem)]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,10,10,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(10,10,10,0.03) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 45%, black, transparent)",
        }}
        aria-hidden
      />

      <motion.div
        style={reduce ? undefined : { opacity: fadeOut, y: rise }}
        className="relative z-10 flex flex-1 flex-col"
      >
        <Container className="flex flex-1 flex-col justify-center py-20 md:py-24">
          <div className="mx-auto w-full max-w-5xl">
            {/* Mark — letter rise, × lands as the accent */}
            <h1 className="sr-only">FormX Consultants — {brochureBrand.slogan}</h1>

            <div className="text-center" aria-hidden>
              <p className="overflow-hidden">
                <span
                  className="inline-flex font-display font-black leading-[0.85] tracking-[-0.05em]"
                  style={{ fontSize: "clamp(4.5rem, 16vw, 9.5rem)" }}
                >
                  {"Form".split("").map((char, i) => (
                    <motion.span
                      key={i}
                      initial={reduce ? false : { y: "110%", opacity: 0 }}
                      animate={ready ? { y: "0%", opacity: 1 } : undefined}
                      transition={{ duration: 0.85, delay: 0.12 + i * 0.07, ease }}
                      className="inline-block text-ink"
                    >
                      {char}
                    </motion.span>
                  ))}
                  <motion.span
                    initial={reduce ? false : { opacity: 0, scale: 0.6 }}
                    animate={ready ? { opacity: 1, scale: 1 } : undefined}
                    transition={{ duration: 0.7, delay: 0.5, ease }}
                    className="inline-block text-x-red"
                  >
                    ×
                  </motion.span>
                </span>
              </p>

              <motion.p
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={ready ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.7, delay: 0.65, ease }}
                className="mt-5 font-label text-[11px] font-semibold tracking-[0.42em] text-ink md:text-[12px] md:tracking-[0.48em]"
              >
                Consultants
              </motion.p>

              <motion.p
                initial={reduce ? false : { opacity: 0 }}
                animate={ready ? { opacity: 1 } : undefined}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="mt-2 font-label text-[9px] tracking-[0.36em] text-ink/40 md:text-[10px] md:tracking-[0.4em]"
              >
                Design <span className="text-x-red">|</span> Engineering
              </motion.p>
            </div>

            <motion.div
              initial={reduce ? false : { opacity: 0, scaleX: 0 }}
              animate={ready ? { opacity: 1, scaleX: 1 } : undefined}
              transition={{ duration: 0.9, delay: 0.95, ease }}
              className="mx-auto mt-12 h-px w-full max-w-[12rem] origin-center bg-ink/10 md:mt-14"
              aria-hidden
            />

            {/* Slogan — the real human line, not a logo caption */}
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={ready ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.95, delay: 1.1, ease }}
              className="mx-auto mt-10 max-w-[16ch] text-center font-display text-[1.65rem] font-bold leading-[1.15] tracking-tight text-ink md:mt-12 md:text-[2.15rem]"
            >
              Where Vision Takes Form
            </motion.p>

            <motion.p
              initial={reduce ? false : { opacity: 0 }}
              animate={ready ? { opacity: 1 } : undefined}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="mx-auto mt-4 max-w-[36ch] text-center text-[14px] leading-[1.7] text-ink/45 md:text-[15px]"
            >
              Ahmedabad practice — Architecture, Structure and Infrastructure.
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={ready ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.75, delay: 1.45, ease }}
              className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
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
                className="font-label text-[10px] tracking-[0.22em] text-ink/35 transition-colors hover:text-ink"
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
          transition={{ delay: 1.7, duration: 0.6 }}
          className="mb-8 flex items-center justify-center gap-3 self-center font-label text-[9px] tracking-[0.28em] text-ink/25 transition-colors hover:text-ink/50"
        >
          <span className="h-px w-8 bg-ink/15" aria-hidden />
          Scroll
          <span className="h-px w-8 bg-ink/15" aria-hidden />
        </motion.a>
      </motion.div>
    </section>
  );
}
