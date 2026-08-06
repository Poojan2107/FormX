"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { brochureFaqs } from "@/data/brochureHome";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Faqs() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section className="border-y border-line bg-[#fafaf8] section-y">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <Reveal className="lg:sticky lg:top-36 lg:self-start">
            <p className="eyebrow text-x-red">FAQ</p>
            <h2
              className="mt-4 max-w-[12ch] font-display font-extrabold leading-[1.05] tracking-tight text-ink"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              Questions before issue
            </h2>
            <p className="mt-5 max-w-[36ch] text-[15px] leading-[1.85] text-ink/55">
              Straight answers drawn from how FormX works with clients, architects and contractors.
            </p>
            <Link
              href="/contact"
              transitionTypes={["nav-forward"]}
              className="mt-8 inline-flex items-center gap-2 font-label text-[11px] tracking-[0.16em] text-x-red transition-colors hover:text-ink"
            >
              Ask FormX
              <ArrowRight className="size-3.5" />
            </Link>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="border-t border-ink/[0.09]">
              {brochureFaqs.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <div key={faq.q} className="border-b border-ink/[0.09]">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="group grid w-full grid-cols-[auto_1fr_auto] items-start gap-4 py-5 text-left md:gap-5 md:py-6"
                      aria-expanded={isOpen}
                    >
                      <span className="mt-0.5 font-label text-[10px] tracking-[0.2em] text-x-red">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[15px] font-semibold leading-[1.45] tracking-tight text-ink/82 transition-colors group-hover:text-ink md:text-[16px]">
                        {faq.q}
                      </span>
                      <span
                        className={`mt-0.5 flex size-7 shrink-0 items-center justify-center border border-ink/[0.1] transition-colors ${
                          isOpen ? "border-x-red/50 bg-x-red text-white" : "bg-white text-x-red"
                        }`}
                      >
                        <ChevronDown
                          className={`size-3.5 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          initial={reduce ? false : { height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 pl-10 pr-12 text-[14.5px] leading-[1.85] text-ink/58 md:pl-12 md:text-[15px]">
                            {faq.a}
                          </p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
