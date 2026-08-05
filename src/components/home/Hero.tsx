"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useState, type MouseEvent } from "react";
import { Container } from "@/components/ui/Container";

/**
 * Hero as experience — Form× owns the viewport.
 * Hiren: no BG photos on open; animate the FormX mark; slogan present.
 */
export function Hero() {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(!!reduce);
  const [phase, setPhase] = useState(0);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const xShift = useTransform(sx, [-0.5, 0.5], [-28, 28]);
  const yShift = useTransform(sy, [-0.5, 0.5], [-18, 18]);
  const gridX = useTransform(sx, [-0.5, 0.5], [8, -8]);
  const gridY = useTransform(sy, [-0.5, 0.5], [6, -6]);
  const glowX = useTransform(sx, [-0.5, 0.5], ["35%", "65%"]);
  const glowY = useTransform(sy, [-0.5, 0.5], ["40%", "70%"]);
  const glowBg = useMotionTemplate`radial-gradient(55% 45% at ${glowX} ${glowY}, rgba(224,49,40,0.28), transparent 70%)`;

  useEffect(() => {
    if (reduce) {
      setReady(true);
      setPhase(4);
      return;
    }
    const t0 = window.setTimeout(() => setReady(true), 80);
    const t1 = window.setTimeout(() => setPhase(1), 200);
    const t2 = window.setTimeout(() => setPhase(2), 900);
    const t3 = window.setTimeout(() => setPhase(3), 1400);
    const t4 = window.setTimeout(() => setPhase(4), 1900);
    return () => {
      window.clearTimeout(t0);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
      window.clearTimeout(t4);
    };
  }, [reduce]);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section
      onMouseMove={onMove}
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-black text-white"
    >
      {/* Atmosphere */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background: glowBg }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 fx-grid-dark opacity-[0.35]"
        style={{ x: gridX, y: gridY }}
        aria-hidden
      />

      {/* Corner crop marks */}
      <div className="pointer-events-none absolute inset-0 z-[5]" aria-hidden>
        <span className="absolute left-5 top-24 h-8 w-8 border-l border-t border-x-red/70 md:left-8 md:top-28" />
        <span className="absolute right-5 top-24 h-8 w-8 border-r border-t border-white/25 md:right-8 md:top-28" />
        <span className="absolute bottom-28 left-5 h-8 w-8 border-b border-l border-white/25 md:bottom-32 md:left-8" />
        <span className="absolute bottom-28 right-5 h-8 w-8 border-b border-r border-x-red/70 md:bottom-32 md:right-8" />
      </div>

      {/* Giant watermark × fills the void */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-end overflow-hidden pr-[2vw]"
        style={{ x: xShift, y: yShift }}
      >
        <motion.span
          initial={reduce ? false : { opacity: 0, scale: 0.7, rotate: -18 }}
          animate={
            ready
              ? { opacity: 0.09, scale: 1, rotate: -8 }
              : { opacity: 0 }
          }
          transition={{ duration: 1.4, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="select-none font-display font-black leading-none text-x-red"
          style={{ fontSize: "clamp(18rem, 55vw, 42rem)" }}
        >
          ×
        </motion.span>
      </motion.div>

      {/* Vertical stamp — fills right edge intentionally */}
      <motion.p
        initial={reduce ? false : { opacity: 0 }}
        animate={phase >= 3 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="pointer-events-none absolute right-3 top-1/2 z-[6] hidden -translate-y-1/2 font-label text-[10px] tracking-[0.45em] text-white/25 md:right-6 lg:block"
        style={{ writingMode: "vertical-rl" }}
        aria-hidden
      >
        BEFORE × ISSUE · AHMEDABAD
      </motion.p>

      <Container className="relative z-10 flex flex-1 flex-col justify-center pb-28 pt-28 md:pb-32 md:pt-32">
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-9">
            {/* Drawing line intro */}
            <motion.div
              initial={reduce ? false : { scaleX: 0 }}
              animate={phase >= 1 ? { scaleX: 1 } : undefined}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 h-px w-24 origin-left bg-x-red md:mb-10 md:w-32"
            />

            <p className="font-label text-[10px] tracking-[0.35em] text-white/40 md:text-[11px]">
              <motion.span
                initial={reduce ? false : { opacity: 0 }}
                animate={phase >= 1 ? { opacity: 1 } : undefined}
                transition={{ duration: 0.5 }}
              >
                Ahmedabad · 23°01′N · 72°35′E
              </motion.span>
            </p>

            {/* THE MARK — owns the stage */}
            <h1
              className="mt-4 font-display font-black leading-[0.82] tracking-[-0.05em]"
              style={{ fontSize: "clamp(4.5rem, 18vw, 12rem)" }}
              aria-label="FormX Consultants"
            >
              <span className="inline-flex">
                {"Form".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={reduce ? false : { y: "110%", opacity: 0 }}
                    animate={ready ? { y: "0%", opacity: 1 } : undefined}
                    transition={{
                      duration: 0.75,
                      delay: 0.12 + i * 0.09,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block overflow-hidden text-white"
                  >
                    <span className="inline-block">{char}</span>
                  </motion.span>
                ))}
              </span>
              <motion.span
                initial={reduce ? false : { scale: 0.2, opacity: 0, rotate: -45 }}
                animate={
                  ready
                    ? { scale: 1, opacity: 1, rotate: 0 }
                    : undefined
                }
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 16,
                  delay: 0.55,
                }}
                className="relative ml-[0.02em] inline-block text-x-red"
                style={{ textShadow: "0 0 80px rgba(224,49,40,0.45)" }}
              >
                ×
              </motion.span>
            </h1>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={phase >= 2 ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 flex flex-wrap items-end gap-x-8 gap-y-3 md:mt-8"
            >
              <div>
                <p className="font-label text-[13px] font-semibold tracking-[0.32em] text-white md:text-[14px]">
                  Consultants
                </p>
                <p className="mt-2 font-label text-[10px] tracking-[0.36em] text-white/40 md:text-[11px]">
                  Design <span className="text-x-red">|</span> Engineering
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, x: 24 }}
            animate={phase >= 3 ? { opacity: 1, x: 0 } : undefined}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-end lg:col-span-3 lg:pb-3"
          >
            <p className="font-label text-[10px] tracking-[0.22em] text-x-red">Method</p>
            <p className="mt-3 font-display text-2xl font-bold uppercase leading-none tracking-tight text-white">
              Before
              <br />
              <span className="text-x-red">×</span> Issue
            </p>
            <ul className="mt-6 space-y-2 border-t border-white/15 pt-5">
              {["Architecture", "Structure", "Infrastructure"].map((d, i) => (
                <li
                  key={d}
                  className="flex items-center gap-3 font-label text-[10px] tracking-[0.18em] text-white/45"
                >
                  <span className="text-x-red">0{i + 1}</span>
                  {d}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Slogan + CTA band — second beat of the experience */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={phase >= 4 ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 grid gap-8 border-t border-white/10 pt-10 md:mt-16 md:grid-cols-12 md:items-end md:gap-10 md:pt-12"
        >
          <div className="md:col-span-7">
            <p
              className="font-display font-semibold tracking-tight text-white"
              style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.35rem)" }}
            >
              Where Vision Takes Form
            </p>
            <p className="mt-4 max-w-[40ch] text-[15px] font-medium leading-[1.75] text-white/50 md:text-[16px]">
              We do not issue until Architecture, Structure and Infrastructure have answered each
              other — so the facility that gets built is the one you meant.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center md:col-span-5 md:justify-end">
            <Link
              href="/contact"
              transitionTypes={["nav-forward"]}
              className="group inline-flex items-center justify-center gap-3 bg-x-red px-8 py-4 font-label text-[10px] tracking-[0.22em] text-white transition-transform hover:bg-x-red-hover hover:scale-[1.02]"
            >
              Discuss your facility
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/#work"
              className="inline-flex items-center justify-center gap-2 border border-white/25 px-7 py-4 font-label text-[10px] tracking-[0.22em] text-white/70 transition-colors hover:border-white hover:text-white"
            >
              See the work
            </Link>
          </div>
        </motion.div>
      </Container>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={reduce ? false : { opacity: 0 }}
        animate={phase >= 4 ? { opacity: 1 } : undefined}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10 bg-black/40 backdrop-blur-sm"
      >
        <Container className="flex items-center justify-between py-3.5 md:py-4">
          <p className="font-label text-[9px] tracking-[0.28em] text-white/30">
            Scroll into the practice
          </p>
          <span className="inline-flex items-center gap-2 font-label text-[9px] tracking-[0.28em] text-white/45">
            Enter
            <ChevronDown className="size-3.5 animate-bounce text-x-red" />
          </span>
        </Container>
      </motion.a>
    </section>
  );
}
