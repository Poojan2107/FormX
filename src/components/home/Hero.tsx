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
    }, 3400);
    return () => clearInterval(id);
  }, [phase, reduce]);

  return (
    <section className="relative isolate overflow-hidden border-b border-line bg-white">
      <div className="pointer-events-none absolute inset-0 pattern-grid opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(800px 400px at 92% 8%, rgba(222,48,36,0.07), transparent 55%)",
        }}
        aria-hidden
      />

      <Container className="relative grid min-h-[min(90vh,840px)] items-center gap-10 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:py-20">
        <div>
          <motion.p
            className="mb-5 font-display text-[11px] font-bold uppercase tracking-[0.28em] text-x-red"
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            {hero.eyebrow}
          </motion.p>

          {/* Brand stamp — FormX */}
          <div className="relative mb-5" aria-label="FormX">
            <motion.span
              aria-hidden
              className="pointer-events-none absolute -left-1 -top-8 select-none font-display text-[6.5rem] font-extrabold leading-none text-x-red/[0.07] md:-top-10 md:text-[8.5rem]"
              initial={reduce ? false : { opacity: 0 }}
              animate={phase >= 4 ? { opacity: 1 } : { opacity: 0 }}
            >
              X
            </motion.span>

            <div className="relative flex items-end">
              {letters.map((letter, i) => (
                <motion.span
                  key={letter + i}
                  className="font-display text-[clamp(2.75rem,6vw,5.25rem)] font-extrabold leading-[0.88] tracking-[-0.05em] text-ink"
                  initial={reduce ? false : { opacity: 0, y: 20 }}
                  animate={phase > i ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.15, ease: "linear" }}
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% 88%, 90% 100%, 0 100%)",
                  }}
                >
                  {letter}
                </motion.span>
              ))}
              <motion.span
                className="relative font-display text-[clamp(2.75rem,6vw,5.25rem)] font-extrabold leading-[0.88] tracking-[-0.05em] text-x-red"
                initial={reduce ? false : { opacity: 0, scale: 0.5, rotate: -12 }}
                animate={
                  phase >= 4
                    ? { opacity: 1, scale: 1, rotate: 0 }
                    : { opacity: 0, scale: 0.5, rotate: -12 }
                }
                transition={{ type: "spring", stiffness: 380, damping: 16 }}
                style={{
                  clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 14%)",
                }}
              >
                X
              </motion.span>
            </div>

            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              animate={phase >= 5 ? { opacity: 1 } : { opacity: 0 }}
              className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1"
            >
              <p className="font-display text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-ink">
                Consultants
              </p>
              <span className="text-ink/20">·</span>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">
                Design <span className="text-x-red">|</span> Engineering
              </p>
            </motion.div>
          </div>

          {/* Rotating claim — sentence case like VMS headlines */}
          <div className="relative mb-6 min-h-[4.5rem] border-y border-line py-4 sm:min-h-[5rem]">
            <AnimatePresence mode="wait">
              <motion.h1
                key={lineIndex}
                className="absolute inset-x-0 font-display text-[clamp(1.25rem,0.9rem+1.4vw,1.85rem)] font-bold leading-[1.2] tracking-[-0.025em] text-ink"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -14 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                {heroLines[lineIndex]}
              </motion.h1>
            </AnimatePresence>
            <div className="absolute bottom-0 left-0 flex items-center gap-2">
              {heroLines.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Show line ${i + 1}`}
                  onClick={() => setLineIndex(i)}
                  className={cnDot(i === lineIndex)}
                />
              ))}
            </div>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={phase >= 5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.35 }}
          >
            <p className="max-w-xl text-lead text-ink-muted">{hero.body}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={hero.primaryCta.href} variant="primary" className="min-w-[170px]">
                {hero.primaryCta.label}
                <ArrowRight className="size-4" />
              </Button>
              <Button href={hero.secondaryCta.href} variant="outline">
                {hero.secondaryCta.label}
              </Button>
            </div>

            {/* Trust micro-row — VMS proof energy, quieter */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-6">
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

        {/* Facility board */}
        <motion.div
          ref={panelRef}
          className="relative min-h-[320px] overflow-hidden bg-black sm:min-h-[380px] lg:min-h-[480px]"
          style={{
            rotateX: reduce ? 0 : springY,
            rotateY: reduce ? 0 : springX,
            transformStyle: "preserve-3d",
          }}
          initial={reduce ? false : { opacity: 0, x: 28 }}
          animate={phase >= 3 ? { opacity: 1, x: 0 } : { opacity: 0, x: 28 }}
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

          <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-display text-[10px] font-bold uppercase tracking-[0.26em] text-x-red">
                  Delivery lens
                </p>
                <p className="mt-2 text-[11px] tracking-[0.14em] text-white/40 uppercase">
                  Layout · Structure · Utilities
                </p>
              </div>
              <span className="font-display text-3xl font-extrabold text-x-red">X</span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
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
              <p className="font-display text-3xl font-extrabold tracking-[-0.04em] text-white md:text-4xl">
                Form<span className="text-x-red">X</span>
              </p>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/50">
                Coordinated industrial design — concept through site.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function cnDot(active: boolean) {
  return [
    "h-1 transition-all duration-300",
    active ? "w-6 bg-x-red" : "w-1.5 bg-ink/20 hover:bg-ink/40",
  ].join(" ");
}
