"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { testimonials } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const item = testimonials[index];

  const prev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  // Auto-rotate every 5s unless paused or reduced motion
  useEffect(() => {
    if (paused || reduce) return;
    const id = setInterval(() => {
      setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
    }, 5000);
    return () => clearInterval(id);
  }, [paused, reduce]);

  return (
    <section
      className="border-y border-line bg-white py-20 md:py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Client feedback"
            title="What project teams value"
            description="Themes we hear when coordinated, construction-ready packages reach tender and site."
          />
        </Reveal>

        <div className="formx-cut-x formx-edge formx-edge-x mt-12 border border-line bg-white p-6 md:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-12">
            <Quote
              className="hidden size-10 text-x-red/60 lg:block"
              strokeWidth={1.25}
            />

            <div>
              <div className="min-h-[160px] md:min-h-[180px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={item.name + index}
                    initial={reduce ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? undefined : { opacity: 0, y: -8 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* Mobile quote icon */}
                    <Quote
                      className="mb-4 size-7 text-x-red/50 lg:hidden"
                      strokeWidth={1.25}
                    />
                    <blockquote className="max-w-3xl text-[16px] leading-[1.8] text-ink md:text-xl md:leading-[1.7]">
                      "{item.quote}"
                    </blockquote>
                    <footer className="mt-6 md:mt-8">
                      <p className="font-display text-base font-bold text-ink">
                        {item.name}
                      </p>
                      <p className="mt-1 text-[13px] text-ink-muted">
                        {item.role} — {item.company}
                      </p>
                    </footer>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Controls row */}
              <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-line pt-6">
                {/* Prev / Next */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prev}
                    className="inline-flex size-10 items-center justify-center border border-line text-ink transition-colors hover:border-x-red hover:text-x-red"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="size-4" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    className="inline-flex size-10 items-center justify-center border border-line text-ink transition-colors hover:border-x-red hover:text-x-red"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="size-4" />
                  </button>
                </div>

                {/* Dot navigation */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Go to testimonial ${i + 1}`}
                      aria-current={i === index}
                      onClick={() => setIndex(i)}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        i === index
                          ? "w-6 bg-x-red"
                          : "w-1.5 bg-ink/20 hover:bg-ink/40",
                      )}
                    />
                  ))}
                </div>

                {/* Counter */}
                <p className="ml-auto font-display text-[12px] tabular-nums text-ink-muted">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(testimonials.length).padStart(2, "0")}
                </p>
              </div>

              {/* Auto-rotate progress bar */}
              {!reduce && !paused && (
                <motion.div
                  key={`progress-${index}`}
                  className="mt-2 h-0.5 bg-x-red/30"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 5, ease: "linear" }}
                  style={{ transformOrigin: "left center" }}
                />
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
