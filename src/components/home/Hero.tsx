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
 * Hero — true first viewport.
 * Hiren: no BG photos. Brand is the landscape. Header merges into black.
 */
export function Hero() {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(!!reduce);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 36, damping: 26 });
  const sy = useSpring(my, { stiffness: 36, damping: 26 });
  const xShift = useTransform(sx, [-0.5, 0.5], [-18, 18]);
  const yShift = useTransform(sy, [-0.5, 0.5], [-12, 12]);
  const glowX = useTransform(sx, [-0.5, 0.5], ["48%", "62%"]);
  const glowY = useTransform(sy, [-0.5, 0.5], ["35%", "55%"]);
  const glowBg = useMotionTemplate`radial-gradient(50% 42% at ${glowX} ${glowY}, rgba(224,49,40,0.32), transparent 70%)`;

  useEffect(() => {
    if (reduce) {
      setReady(true);
      return;
    }
    const t = window.setTimeout(() => setReady(true), 40);
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
      className="relative isolate flex min-h-[calc(100svh-4.25rem)] flex-col overflow-hidden bg-black text-white sm:min-h-[calc(100svh-4.75rem)]"
    >
      {/* Field */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background: glowBg }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(90% 70% at 15% 110%, rgba(0,0,0,1), transparent 55%), linear-gradient(180deg, rgba(0,0,0,0.35) 0%, transparent 28%, transparent 62%, rgba(0,0,0,0.75) 100%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
        aria-hidden
      />

      {/* Landscape × — fills the void so the right side is not dead */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-[8%] top-[8%] z-[1] md:top-[2%]"
        style={{ x: xShift, y: yShift }}
      >
        <motion.span
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={ready ? { opacity: 0.14, scale: 1 } : { opacity: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="block select-none font-display font-black leading-none text-x-red"
          style={{ fontSize: "clamp(22rem, 68vw, 48rem)" }}
        >
          ×
        </motion.span>
      </motion.div>

      {/* Mark + copy as one vertical composition: mark owns upper mass, copy locks the floor */}
      <div className="relative z-10 flex flex-1 flex-col">
        <Container className="flex flex-1 flex-col pt-8 md:pt-10">
          {/* Brand mass — nearly full width, sits in the upper-middle like a billboard */}
          <div className="flex flex-1 flex-col justify-center pb-6 pt-4 md:pb-8 md:pt-2">
            <motion.p
              initial={reduce ? false : { opacity: 0 }}
              animate={ready ? { opacity: 1 } : undefined}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-label text-[10px] tracking-[0.4em] text-white/30 md:text-[11px]"
            >
              Ahmedabad · Design <span className="text-x-red">|</span> Engineering
            </motion.p>

            <h1
              className="mt-3 w-full font-display font-black leading-[0.76] tracking-[-0.06em] md:mt-4"
              style={{ fontSize: "clamp(4.75rem, 22vw, 15rem)" }}
              aria-label="FormX Consultants"
            >
              <span className="sr-only">FormX</span>
              <span className="inline-flex overflow-hidden" aria-hidden>
                {"Form".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={reduce ? false : { y: "108%" }}
                    animate={ready ? { y: "0%" } : undefined}
                    transition={{
                      duration: 0.9,
                      delay: 0.12 + i * 0.06,
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
                initial={reduce ? false : { opacity: 0, scale: 0.85 }}
                animate={ready ? { opacity: 1, scale: 1 } : undefined}
                transition={{ duration: 0.85, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="ml-[0.01em] inline-block text-x-red"
              >
                ×
              </motion.span>
            </h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={ready ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-[22ch] font-display text-[1.15rem] font-semibold leading-snug tracking-tight text-white md:mt-6 md:text-[1.45rem]"
            >
              Where Vision Takes Form
            </motion.p>
          </div>

          {/* Floor — copy + CTA + ASI share one horizon across the width */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-8 border-t border-white/10 py-8 md:grid-cols-12 md:items-end md:gap-6 md:py-10"
          >
            <div className="md:col-span-5 lg:col-span-4">
              <p className="max-w-[34ch] text-[14px] font-medium leading-[1.7] text-white/45 md:text-[15px]">
                Architecture, Structure and Infrastructure held until the facility is ready —
                then we issue.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center md:col-span-5 md:justify-center lg:col-span-5">
              <Link
                href="/contact"
                transitionTypes={["nav-forward"]}
                className="group inline-flex items-center justify-center gap-3 bg-x-red px-8 py-4 font-label text-[10px] tracking-[0.22em] text-white transition-colors hover:bg-x-red-hover"
              >
                Contact us
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/services"
                transitionTypes={["nav-forward"]}
                className="inline-flex items-center justify-center border border-white/20 px-7 py-4 font-label text-[10px] tracking-[0.22em] text-white/60 transition-colors hover:border-white/50 hover:text-white"
              >
                Services
              </Link>
            </div>

            <div className="hidden md:col-span-2 md:flex md:justify-end lg:col-span-3">
              <a
                href="#about"
                className="group inline-flex flex-col items-end gap-2 text-right"
              >
                <span className="font-label text-[9px] tracking-[0.28em] text-white/30 transition-colors group-hover:text-white/55">
                  Scroll
                </span>
                <span className="h-10 w-px bg-gradient-to-b from-x-red to-transparent" aria-hidden />
              </a>
            </div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
