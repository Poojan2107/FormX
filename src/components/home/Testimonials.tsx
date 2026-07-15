"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { testimonials } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const item = testimonials[index];

  const prev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="border-y border-line bg-white py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="Hear from our clients"
            description="Long associations and delivery feedback from industrial project teams."
          />
        </Reveal>

        <div className="formx-cut-x formx-edge formx-edge-x mt-12 border border-line bg-white p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-12">
            <Quote className="size-10 text-x-red/70" strokeWidth={1.25} />

            <div className="min-h-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={item.name}
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -6 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                >
                  <blockquote className="max-w-3xl text-[17px] leading-[1.75] text-ink md:text-xl md:leading-[1.7]">
                    “{item.quote}”
                  </blockquote>
                  <footer className="mt-8">
                    <p className="font-display text-base font-bold text-ink">
                      {item.name}
                    </p>
                    <p className="mt-1 text-[13px] text-ink-muted">
                      {item.role} — {item.company}
                    </p>
                  </footer>
                </motion.div>
              </AnimatePresence>

              <div className="mt-10 flex items-center gap-3">
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
                <p className="ml-2 text-[12px] tabular-nums text-ink-muted">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(testimonials.length).padStart(2, "0")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
