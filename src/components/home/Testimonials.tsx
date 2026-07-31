"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const item = testimonials[index];

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  useEffect(() => {
    if (paused || reduce) return;
    const id = setInterval(() => {
      setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
    }, 6000);
    return () => clearInterval(id);
  }, [paused, reduce]);

  return (
    <section
      className="relative overflow-hidden bg-white py-20 md:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Architectural background detail — large X mark */}
      <div
        className="pointer-events-none absolute right-[-5%] top-[-10%] select-none font-display font-black text-ink/[0.025]"
        style={{ fontSize: "clamp(14rem, 28vw, 28rem)", lineHeight: 1 }}
        aria-hidden
      >
        ×
      </div>

      <Container className="relative">
        {/* Section label */}
        <div className="mb-16 flex items-center gap-3">
          <span className="h-px w-6 bg-x-red" />
          <span className="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-x-red">
            Client Feedback
          </span>
        </div>

        {/* Large quote area */}
        <div className="max-w-4xl">
          <div className="mb-8" style={{ minHeight: "200px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={item.name + index}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Quote mark */}
                <div
                  className="mb-6 font-display font-black leading-none text-x-red/25"
                  style={{ fontSize: "clamp(3rem, 6vw, 6rem)" }}
                  aria-hidden
                >
                  "
                </div>

                <blockquote
                  className="font-display font-bold leading-[1.35] tracking-[-0.01em] text-ink"
                  style={{ fontSize: "clamp(1.3rem, 2.5vw, 2.1rem)" }}
                >
                  {item.quote}
                </blockquote>

                <footer className="mt-8 flex items-center gap-4">
                  {/* Avatar placeholder — initials */}
                  <div className="flex size-12 items-center justify-center bg-x-red font-display text-[14px] font-bold text-white">
                    {item.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <p className="font-display text-[14px] font-bold text-ink">{item.name}</p>
                    <p className="text-[12px] text-ink/40">{item.role} — {item.company}</p>
                  </div>
                </footer>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4 border-t border-line pt-6">
            <button
              type="button"
              onClick={prev}
              className="flex size-10 items-center justify-center border border-line text-ink transition-colors hover:border-x-red hover:text-x-red"
              aria-label="Previous"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={next}
              className="flex size-10 items-center justify-center border border-line text-ink transition-colors hover:border-x-red hover:text-x-red"
              aria-label="Next"
            >
              <ChevronRight className="size-4" />
            </button>

            <p className="ml-2 font-display text-[12px] tabular-nums text-ink/30">
              {String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </p>

            {/* Progress bar */}
            {!reduce && !paused && (
              <div className="ml-auto h-px flex-1 overflow-hidden bg-line">
                <motion.div
                  key={`progress-${index}`}
                  className="h-full bg-x-red"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 6, ease: "linear" }}
                  style={{ transformOrigin: "left center" }}
                />
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
