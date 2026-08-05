"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
 * Hero — Phase B.1
 * Hiren: no BG photos on open; FORM× owns the viewport; slogan present.
 * Roadmap: one composition, silence as luxury, no method-panel chrome.
 */
export function Hero() {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(!!reduce);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 24 });
  const sy = useSpring(my, { stiffness: 40, damping: 24 });
  const xShift = useTransform(sx, [-0.5, 0.5], [-14, 14]);
  const yShift = useTransform(sy, [-0.5, 0.5], [-10, 10]);
  const glowX = useTransform(sx, [-0.5, 0.5], ["42%", "58%"]);
  const glowY = useTransform(sy, [-0.5, 0.5], ["28%", "48%"]);
  const glowBg = useMotionTemplate`radial-gradient(42% 38% at ${glowX} ${glowY}, rgba(224,49,40,0.22), transparent 72%)`;

  useEffect(() => {
    if (reduce) {
      setReady(true);
      return;
    }
    const t = window.setTimeout(() => setReady(true), 60);
    return () => window.clearTimeout(t);
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
      {/* Atmosphere — void + one red breath + paper grain. No photo. */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background: glowBg }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.55]"
        style={{
          background:
            "radial-gradient(120% 80% at 0% 100%, rgba(0,0,0,0.9), transparent 55%), radial-gradient(90% 60% at 100% 0%, rgba(224,49,40,0.08), transparent 50%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
        aria-hidden
      />

      {/* Giant × — depth only, not decoration chrome */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-end overflow-hidden"
        style={{ x: xShift, y: yShift }}
      >
        <motion.span
          initial={reduce ? false : { opacity: 0, scale: 0.92 }}
          animate={ready ? { opacity: 0.07, scale: 1 } : { opacity: 0 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="select-none pr-[1vw] font-display font-black leading-none text-x-red"
          style={{ fontSize: "clamp(16rem, 52vw, 40rem)", marginRight: "-0.08em" }}
        >
          ×
        </motion.span>
      </motion.div>

      <Container className="relative z-10 flex flex-1 flex-col justify-center pb-24 pt-28 md:pb-28 md:pt-32">
        <div className="max-w-[1100px]">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-label text-[10px] tracking-[0.38em] text-white/35 md:text-[11px]"
          >
            FormX Consultants · Ahmedabad
          </motion.p>

          {/* THE MARK — landscape of the first viewport */}
          <h1
            className="mt-5 font-display font-black leading-[0.78] tracking-[-0.055em] md:mt-6"
            style={{ fontSize: "clamp(5rem, 19vw, 13.5rem)" }}
            aria-label="FormX Consultants"
          >
            <span className="sr-only">FormX</span>
            <span className="inline-flex overflow-hidden" aria-hidden>
              {"Form".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={reduce ? false : { y: "105%" }}
                  animate={ready ? { y: "0%" } : undefined}
                  transition={{
                    duration: 0.85,
                    delay: 0.2 + i * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block text-white"
                >
                  {char}
                </motion.span>
              ))}
            </span>
            <motion.span
              aria-hidden
              initial={reduce ? false : { opacity: 0, y: "20%" }}
              animate={ready ? { opacity: 1, y: "0%" } : undefined}
              transition={{
                duration: 0.9,
                delay: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative ml-[0.01em] inline-block text-x-red"
            >
              ×
            </motion.span>
          </h1>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 md:mt-10"
          >
            <p
              className="max-w-[18ch] font-display font-semibold tracking-tight text-white"
              style={{ fontSize: "clamp(1.35rem, 2.8vw, 2rem)", lineHeight: 1.2 }}
            >
              Where Vision Takes Form
            </p>
            <p className="mt-4 max-w-[36ch] text-[15px] font-medium leading-[1.75] text-white/48 md:text-[16px]">
              Architecture, Structure and Infrastructure — held together until the facility is
              ready to be built. Then we issue.
            </p>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.75, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:items-center sm:gap-4"
          >
            <Link
              href="/contact"
              transitionTypes={["nav-forward"]}
              className="group inline-flex items-center justify-center gap-3 bg-x-red px-9 py-4 font-label text-[10px] tracking-[0.22em] text-white transition-colors hover:bg-x-red-hover"
            >
              Contact us
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/services"
              transitionTypes={["nav-forward"]}
              className="inline-flex items-center justify-center border border-white/20 px-8 py-4 font-label text-[10px] tracking-[0.22em] text-white/65 transition-colors hover:border-white/55 hover:text-white"
            >
              Services
            </Link>
          </motion.div>
        </div>
      </Container>

      {/* Quiet floor — one line, no bounce chrome */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={ready ? { opacity: 1 } : undefined}
        transition={{ delay: 1.15, duration: 0.8 }}
        className="relative z-10 border-t border-white/[0.08]"
      >
        <Container className="flex items-center justify-between py-4 md:py-5">
          <p className="hidden font-label text-[9px] tracking-[0.28em] text-white/28 sm:block">
            Architecture <span className="text-x-red/80">·</span> Structure{" "}
            <span className="text-x-red/80">·</span> Infrastructure
          </p>
          <a
            href="#about"
            className="group ml-auto inline-flex items-center gap-3 font-label text-[9px] tracking-[0.28em] text-white/40 transition-colors hover:text-white/70"
          >
            Enter the practice
            <span
              className="block h-8 w-px origin-top bg-x-red/80 transition-transform group-hover:scale-y-110"
              aria-hidden
            />
          </a>
        </Container>
      </motion.div>
    </section>
  );
}
