"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { hero, heroLines, site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const letters = ["F", "o", "r", "m"] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const [lineIndex, setLineIndex] = useState(0);
  const [phase, setPhase] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 140, damping: 20 });
  const springY = useSpring(my, { stiffness: 140, damping: 20 });

  useEffect(() => {
    if (reduce) {
      setPhase(5);
      return;
    }
    const timers = [
      window.setTimeout(() => setPhase(1), 60),
      window.setTimeout(() => setPhase(2), 220),
      window.setTimeout(() => setPhase(3), 420),
      window.setTimeout(() => setPhase(4), 680),
      window.setTimeout(() => setPhase(5), 980),
    ];
    return () => timers.forEach(clearTimeout);
  }, [reduce]);

  useEffect(() => {
    if (reduce || phase < 5) return;
    const id = window.setInterval(() => {
      setLineIndex((i) => (i + 1) % heroLines.length);
    }, 3600);
    return () => clearInterval(id);
  }, [phase, reduce]);

  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 pattern-grid opacity-30" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(720px 360px at 90% 0%, rgba(222,48,36,0.06), transparent 55%)",
        }}
        aria-hidden
      />

      <Container className="relative grid items-center gap-8 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-14">
        <div>
          <motion.p
            className="mb-3 font-display text-[11px] font-bold uppercase tracking-[0.24em] text-x-red"
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            {hero.eyebrow}
          </motion.p>

          <div className="relative mb-4" aria-label="FormX">
            <motion.span
              aria-hidden
              className="pointer-events-none absolute -left-1 -top-6 select-none font-display text-[5.5rem] font-extrabold leading-none text-x-red/[0.06] md:-top-8 md:text-[7rem]"
              initial={reduce ? false : { opacity: 0 }}
              animate={phase >= 4 ? { opacity: 1 } : { opacity: 0 }}
            >
              X
            </motion.span>

            <div className="relative flex items-end">
              {letters.map((letter, i) => (
                <motion.span
                  key={letter + i}
                  className="font-display text-[clamp(2.5rem,5.5vw,4.75rem)] font-extrabold leading-[0.9] tracking-[-0.04em] text-ink"
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  animate={phase > i ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                  transition={{ duration: 0.15, ease: "linear" }}
                >
                  {letter}
                </motion.span>
              ))}
              <motion.span
                className="relative font-display text-[clamp(2.5rem,5.5vw,4.75rem)] font-extrabold leading-[0.9] tracking-[-0.04em] text-x-red"
                initial={reduce ? false : { opacity: 0, scale: 0.6, rotate: -10 }}
                animate={
                  phase >= 4
                    ? { opacity: 1, scale: 1, rotate: 0 }
                    : { opacity: 0, scale: 0.6, rotate: -10 }
                }
                transition={{ type: "spring", stiffness: 380, damping: 16 }}
              >
                X
              </motion.span>
            </div>

            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              animate={phase >= 5 ? { opacity: 1 } : { opacity: 0 }}
              className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1"
            >
              <p className="font-display text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-ink">
                Consultants
              </p>
              <span className="text-ink/15">·</span>
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                Design <span className="text-x-red">|</span> Engineering
              </p>
            </motion.div>
          </div>

          {/* Rotating claim — room for text + dual-tone progress below */}
          <div className="mb-5 border-t border-line pt-4">
            <div className="relative min-h-[3.25rem] sm:min-h-[3.5rem]">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={lineIndex}
                  className="absolute inset-x-0 top-0 font-display text-[clamp(1.2rem,0.85rem+1.2vw,1.7rem)] font-bold leading-[1.28] tracking-[-0.02em] text-ink"
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  {heroLines[lineIndex]}
                </motion.h1>
              </AnimatePresence>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <div className="relative h-[3px] w-14 overflow-hidden bg-ink" aria-hidden>
                <motion.span
                  key={lineIndex}
                  className="absolute inset-y-0 left-0 bg-x-red"
                  initial={reduce ? false : { width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3.4, ease: "linear" }}
                />
              </div>
              <div className="flex items-center gap-1.5">
                {heroLines.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Show line ${i + 1}`}
                    aria-current={i === lineIndex}
                    onClick={() => setLineIndex(i)}
                    className={[
                      "h-1.5 transition-all duration-300",
                      i === lineIndex
                        ? "w-5 bg-x-red"
                        : "w-1.5 bg-ink/15 hover:bg-ink/35",
                    ].join(" ")}
                  />
                ))}
              </div>
              <span className="ml-auto font-display text-[10px] font-semibold tabular-nums tracking-[0.14em] text-ink/35">
                {String(lineIndex + 1).padStart(2, "0")} /{" "}
                {String(heroLines.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={phase >= 5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.35 }}
          >
            <p className="max-w-xl text-[15px] leading-[1.7] text-ink-muted md:text-base">
              {hero.body}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={hero.primaryCta.href} variant="primary" className="min-w-[160px]">
                {hero.primaryCta.label}
                <ArrowRight className="size-4" />
              </Button>
              <Button href={hero.secondaryCta.href} variant="outline">
                {hero.secondaryCta.label}
              </Button>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-5">
              {hero.trust?.map((t) => (
                <div key={t.label}>
                  <p className="font-display text-sm font-bold text-ink">{t.label}</p>
                  <p className="text-[11px] text-ink-muted">{t.hint}</p>
                </div>
              ))}
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="ml-auto inline-flex items-center gap-2 text-[13px] font-semibold text-ink transition-colors hover:text-x-red"
              >
                <Phone className="size-3.5 text-x-red" />
                {site.phone}
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          ref={panelRef}
          className="relative min-h-[300px] overflow-hidden bg-black sm:min-h-[360px] lg:min-h-[440px]"
          style={{
            rotateX: reduce ? 0 : springY,
            rotateY: reduce ? 0 : springX,
            transformStyle: "preserve-3d",
          }}
          initial={reduce ? false : { opacity: 0, x: 24 }}
          animate={phase >= 3 ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onMouseMove={(e) => {
            if (reduce || !panelRef.current) return;
            const r = panelRef.current.getBoundingClientRect();
            mx.set(((e.clientX - r.left) / r.width - 0.5) * 6);
            my.set(((e.clientY - r.top) / r.height - 0.5) * -5);
          }}
          onMouseLeave={() => {
            mx.set(0);
            my.set(0);
          }}
        >
          <div className="absolute inset-0 pattern-grid-dark opacity-60" />
          <div className="absolute inset-0 pattern-stripe opacity-25" />
          <motion.div
            className="absolute inset-y-0 left-0 w-1 bg-x-red"
            initial={reduce ? false : { scaleY: 0 }}
            animate={phase >= 4 ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.35, ease: "linear" }}
            style={{ transformOrigin: "top" }}
          />

          <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-7">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-x-red">
                  Delivery lens
                </p>
                <p className="mt-1.5 text-[11px] uppercase tracking-[0.12em] text-white/40">
                  Layout · Structure · Utilities
                </p>
              </div>
              <span className="font-display text-3xl font-extrabold text-x-red">X</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {[
                { t: "Process zoning", d: "Flow-first planning" },
                { t: "Structural grid", d: "Load & span logic" },
                { t: "MEPF corridors", d: "Clash-free routes" },
                { t: "Site support", d: "GFC clarification" },
              ].map((card, i) => (
                <motion.div
                  key={card.t}
                  className="border border-white/10 bg-white/[0.04] p-3 transition-colors hover:border-x-red/45"
                  initial={reduce ? false : { opacity: 0, y: 10 }}
                  animate={phase >= 5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: 0.12 + i * 0.07, duration: 0.25 }}
                >
                  <p className="font-display text-[11px] font-bold tracking-wide text-white">
                    {card.t}
                  </p>
                  <p className="mt-1 text-[11px] text-white/45">{card.d}</p>
                </motion.div>
              ))}
            </div>

            <div>
              <p className="font-display text-3xl font-extrabold tracking-[-0.03em] text-white md:text-4xl">
                Form<span className="text-x-red">X</span>
              </p>
              <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-white/50">
                Coordinated industrial design — concept through site.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
