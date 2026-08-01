"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials, projects } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const item = testimonials[index];
  const visual = projects[index % projects.length];

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
      className="relative overflow-hidden bg-white py-16 md:py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Container className="relative">
        <div className="mb-8 flex items-center gap-3 md:mb-10">
          <span className="h-px w-8 bg-x-red" />
          <span className="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-x-red">
            Client Feedback
          </span>
        </div>

        <div className="grid items-stretch gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-between border border-line border-b-0 p-6 md:p-8 lg:border-b lg:border-r-0 lg:p-10">
            <div className="min-h-[230px] md:min-h-[250px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={item.name + index}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    className="mb-4 font-display font-black leading-none text-x-red/20"
                    style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                    aria-hidden
                  >
                    &ldquo;
                  </div>

                  <blockquote
                    className="font-display font-bold leading-[1.35] tracking-[-0.01em] text-ink"
                    style={{ fontSize: "clamp(1.15rem, 2vw, 1.65rem)" }}
                  >
                    {item.quote}
                  </blockquote>

                  <footer className="mt-8 flex items-center gap-4">
                    <div className="flex size-11 items-center justify-center bg-x-red font-display text-[13px] font-bold text-white">
                      {item.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                    <div>
                      <p className="font-display text-[14px] font-bold text-ink">{item.name}</p>
                      <p className="text-[12px] text-ink/40">
                        {item.role} — {item.company}
                      </p>
                    </div>
                  </footer>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex items-center gap-3 border-t border-line pt-5">
              <button
                type="button"
                onClick={prev}
                className="flex size-9 items-center justify-center border border-line text-ink transition-colors hover:border-x-red hover:text-x-red"
                aria-label="Previous"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={next}
                className="flex size-9 items-center justify-center border border-line text-ink transition-colors hover:border-x-red hover:text-x-red"
                aria-label="Next"
              >
                <ChevronRight className="size-4" />
              </button>

              <p className="ml-1 font-display text-[12px] tabular-nums text-ink/30">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(testimonials.length).padStart(2, "0")}
              </p>

              {!reduce && !paused && (
                <div className="ml-auto h-px max-w-[140px] flex-1 overflow-hidden bg-line">
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

          <div className="relative min-h-[280px] overflow-hidden bg-[#111] lg:min-h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={visual.slug}
                className="absolute inset-0"
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduce ? undefined : { opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <AssetImage
                  alt={visual.client}
                  slot={visual.assets.cover}
                  kind="facility"
                  fit="cover"
                  tone="dark"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-x-red">
                    Featured work
                  </p>
                  <p className="mt-2 font-display text-xl font-bold uppercase tracking-tight text-white">
                    {visual.client}
                  </p>
                  <p className="mt-1 text-[12px] text-white/55">
                    {visual.sector} · {visual.location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
