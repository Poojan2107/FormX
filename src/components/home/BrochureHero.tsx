"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FormxTransparentLogo } from "@/components/ui/FormxTransparentLogo";
import { brochureBrand } from "@/data/brochureHome";

const smoothEase = [0.16, 1, 0.3, 1] as const;

export function BrochureHero() {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(!!reduce);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const sheetOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

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
      className="relative isolate flex min-h-[calc(100svh-4.25rem)] flex-col justify-between overflow-hidden bg-[#fafaf8] sm:min-h-[calc(100svh-4.75rem)]"
      aria-label="FormX Consultants — Where Vision Takes Form"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle 900px at 18% 18%, rgba(255,255,255,1) 0%, rgba(250,250,248,0.96) 52%, rgba(242,240,233,0.92) 100%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 z-0 h-[680px] w-[680px] opacity-80"
        style={{
          background:
            "radial-gradient(circle 400px at 88% 18%, rgba(235, 45, 45, 0.055), transparent 72%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "180px",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.028]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <motion.span
        aria-hidden
        initial={reduce ? false : { opacity: 0, scale: 0.8 }}
        animate={ready ? { opacity: 0.035, scale: 1 } : undefined}
        transition={{ duration: 2.5, delay: 0.2, ease: smoothEase }}
        className="pointer-events-none absolute -right-[4%] -top-[10%] select-none font-display font-black leading-none text-x-red"
        style={{ fontSize: "clamp(22rem, 50vw, 42rem)" }}
      >
        ×
      </motion.span>

      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden>
        <motion.span
          initial={reduce ? false : { opacity: 0 }}
          animate={ready ? { opacity: 1 } : undefined}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="absolute left-6 top-6 block h-9 w-9 border-l-2 border-t-2 border-ink/[0.12] md:left-10 md:top-10"
        />
        <motion.span
          initial={reduce ? false : { opacity: 0 }}
          animate={ready ? { opacity: 1 } : undefined}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="absolute right-6 top-6 block h-9 w-9 border-r-2 border-t-2 border-ink/[0.12] md:right-10 md:top-10"
        />
        <motion.span
          initial={reduce ? false : { opacity: 0 }}
          animate={ready ? { opacity: 1 } : undefined}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute bottom-8 left-6 block h-9 w-9 border-b-2 border-l-2 border-ink/[0.1] md:bottom-10 md:left-10"
        />
        <motion.span
          initial={reduce ? false : { opacity: 0 }}
          animate={ready ? { opacity: 1 } : undefined}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="absolute bottom-8 right-6 block h-9 w-9 border-b-2 border-r-2 border-x-red/55 md:bottom-10 md:right-10"
        />
      </div>

      <motion.div
        style={reduce ? undefined : { opacity: sheetOpacity }}
        className="relative z-10 flex flex-1 flex-col justify-center"
      >
        <div className="flex flex-1 flex-col lg:grid lg:grid-cols-[58%_42%]">
          <div className="flex flex-col justify-center px-6 py-14 md:px-10 lg:order-1 lg:py-20 lg:pl-16 lg:pr-10 xl:pl-20">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={ready ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.7, delay: 0.15, ease: smoothEase }}
              className="flex items-center gap-3"
            >
              <span className="h-[2px] w-6 bg-x-red" />
              <p className="font-label text-[11px] font-bold uppercase tracking-[0.32em] text-x-red">
                Architecture · Structure · Infrastructure
              </p>
            </motion.div>

            <h1 className="mt-6 space-y-0.5" aria-label={brochureBrand.slogan}>
              <span className="sr-only">{brochureBrand.slogan}</span>
              <div className="overflow-hidden py-1 pr-4" aria-hidden>
                <motion.span
                  initial={reduce ? false : { y: "110%" }}
                  animate={ready ? { y: "0%" } : undefined}
                  transition={{ duration: 1.1, delay: 0.25, ease: smoothEase }}
                  className="block font-display font-black tracking-[-0.045em] text-ink"
                  style={{ fontSize: "clamp(2.55rem, 5.6vw, 5.5rem)", lineHeight: 1.02 }}
                >
                  WHERE VISION
                </motion.span>
              </div>

              <div className="overflow-hidden py-1 pr-4" aria-hidden>
                <motion.span
                  initial={reduce ? false : { y: "110%" }}
                  animate={ready ? { y: "0%" } : undefined}
                  transition={{ duration: 1.1, delay: 0.38, ease: smoothEase }}
                  className="block font-display font-black tracking-[-0.045em] text-ink"
                  style={{ fontSize: "clamp(2.55rem, 5.6vw, 5.5rem)", lineHeight: 1.02 }}
                >
                  TAKES FORM<span className="inline-block text-x-red">×</span>
                </motion.span>
              </div>
            </h1>

            <motion.div
              initial={reduce ? false : { scaleX: 0, opacity: 0 }}
              animate={ready ? { scaleX: 1, opacity: 1 } : undefined}
              transition={{ duration: 0.9, delay: 0.7, ease: smoothEase }}
              className="mt-8 flex origin-left items-center gap-4"
              aria-hidden
            >
              <span className="h-[2.5px] w-16 bg-x-red" />
              <span className="font-display text-base font-black text-x-red">×</span>
              <span className="h-px w-12 bg-ink/[0.14]" />
            </motion.div>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={ready ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.85, delay: 0.82, ease: smoothEase }}
              className="mt-7 max-w-[44ch] text-[16px] font-medium leading-[1.85] text-ink/72 md:text-[17.5px]"
            >
              Architecture, Structure and Infrastructure engineered together before drawings leave
              the studio.
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={ready ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.8, delay: 0.98, ease: smoothEase }}
              className="mt-10 flex flex-col gap-3.5 sm:flex-row sm:items-center"
            >
              <Link
                href="/contact"
                transitionTypes={["nav-forward"]}
                className="fx-btn-primary group relative overflow-hidden px-8 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-white shadow-md transition-all hover:shadow-xl"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
                }}
              >
                Discuss Your Facility
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#projects"
                className="fx-btn-ghost px-7 py-4 text-[11px] font-bold uppercase tracking-[0.22em] transition-all hover:border-x-red hover:text-x-red"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)",
                }}
              >
                View Projects
              </a>
            </motion.div>
          </div>

          <div className="relative hidden flex-col items-center justify-center border-l border-ink/[0.07] lg:order-2 lg:flex lg:p-12 xl:p-14">
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.92, y: 24 }}
              animate={ready ? { opacity: 1, scale: 1, y: 0 } : undefined}
              transition={{ duration: 1.25, delay: 0.3, ease: smoothEase }}
              className="relative z-10 flex flex-col items-center justify-center border border-ink/[0.1] bg-white p-12 shadow-[0_24px_80px_rgba(0,0,0,0.06)] transition-all duration-500 hover:border-x-red/40 hover:shadow-[0_28px_90px_rgba(0,0,0,0.08)] md:p-14 lg:p-16"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)",
              }}
            >
              <span
                aria-hidden
                className="absolute right-0 top-0 h-6 w-6 bg-x-red"
                style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
              />
              <FormxTransparentLogo size="hero" align="center" />
              <span
                aria-hidden
                className="absolute bottom-4 left-4 block h-3.5 w-3.5 border-b-2 border-l-2 border-ink/20"
              />
              <span
                aria-hidden
                className="absolute bottom-4 right-4 block h-3.5 w-3.5 border-b-2 border-r-2 border-x-red/65"
              />
              <span
                aria-hidden
                className="absolute left-4 top-4 block h-3.5 w-3.5 border-l-2 border-t-2 border-ink/20"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.a
        href="#about"
        initial={reduce ? false : { opacity: 0 }}
        animate={ready ? { opacity: 1 } : undefined}
        transition={{ delay: 1.35, duration: 0.6 }}
        className="relative z-10 mb-8 ml-6 inline-flex items-center gap-2.5 font-label text-[10px] uppercase tracking-[0.26em] text-ink/42 transition-colors hover:text-x-red md:ml-10 lg:ml-16 xl:ml-20"
      >
        Explore the studio
        <ChevronDown className="size-3.5 fx-scroll-cue" />
      </motion.a>
    </section>
  );
}
