"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { faqs } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function Faqs() {
  const [open, setOpen] = useState(0);
  const reduce = useReducedMotion();

  return (
    <section className="border-y border-line bg-white py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* VMS-style: left title stays while accordion scrolls */}
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="FAQs"
              title="Answers before the first workshop"
              description="What promoters and project teams usually ask when evaluating FormX."
            />
            <div className="mt-8 hidden border border-line bg-white p-6 lg:block">
              <p className="font-display text-base font-bold text-ink">
                Still deciding?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Share your facility type and timeline — a senior lead will
                respond with next steps.
              </p>
              <Button href="/contact" variant="primary" className="mt-5">
                Ask FormX
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="overflow-hidden border border-line bg-white">
              {faqs.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={faq.q}
                    className={cn(
                      "border-b border-line last:border-b-0 transition-colors",
                      isOpen && "bg-white",
                    )}
                  >
                    <button
                      type="button"
                      className={cn(
                        "flex w-full items-start gap-4 px-5 py-5 text-left transition-colors md:gap-5 md:px-6 md:py-6",
                        isOpen && "border-l-2 border-l-x-red",
                      )}
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                    >
                      <span
                        className={cn(
                          "mt-0.5 font-display text-[12px] font-bold tabular-nums tracking-wide",
                          isOpen ? "text-x-red" : "text-ink/30",
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span
                          className={cn(
                            "block font-display text-[15px] font-bold leading-snug tracking-tight md:text-lg",
                            isOpen ? "text-ink" : "text-ink",
                          )}
                        >
                          {faq.q}
                        </span>
                      </span>
                      <span
                        className={cn(
                          "mt-0.5 inline-flex size-8 shrink-0 items-center justify-center border transition-all duration-200",
                          isOpen
                            ? "border-x-red bg-x-red text-white"
                            : "border-line text-ink-muted hover:border-x-red hover:text-x-red",
                        )}
                      >
                        {isOpen ? (
                          <Minus className="size-4" />
                        ) : (
                          <Plus className="size-4" />
                        )}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          initial={reduce ? false : { height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={reduce ? undefined : { height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <p className="border-l-2 border-l-x-red pb-6 pl-5 pr-6 text-[14px] leading-[1.8] text-ink-muted md:pl-[3.25rem] md:pr-12 md:text-[15px]">
                            {faq.a}
                          </p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <p className="mt-6 text-center text-sm text-ink-muted lg:hidden">
              Still have a question?{" "}
              <Link href="/contact" className="font-semibold text-x-red">
                Contact FormX →
              </Link>
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
