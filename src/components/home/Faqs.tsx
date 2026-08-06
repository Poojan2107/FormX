"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { brochureFaqs } from "@/data/brochureHome";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const reduce = useReducedMotion();

  return (
    <div className="border-b border-ink/[0.08]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="group grid w-full grid-cols-[auto_1fr_auto] items-start gap-4 py-5 text-left md:gap-5 md:py-6"
        aria-expanded={open}
      >
        <span className="mt-0.5 font-label text-[10px] tracking-[0.2em] text-x-red">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="font-body text-[15px] leading-[1.45] text-ink/80 transition-colors group-hover:text-ink md:text-[16px]">
          {q}
        </span>
        <ChevronDown
          className={`mt-1 size-4 shrink-0 text-ink/30 transition-transform duration-300 ${
            open ? "rotate-180 text-x-red" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="fx-read-wide pb-6 pl-10 pr-8 text-[14.5px] text-ink/55 md:pl-12">{a}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

/** Contact FAQ — same FormX language as home BrochureContact */
export function Faqs() {
  return (
    <section className="border-y border-ink/[0.06] bg-[#fafaf8] py-16 md:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow text-x-red">FAQ</p>
            <h2
              className="mt-4 max-w-[12ch] font-display font-extrabold leading-[1.05] tracking-tight text-ink"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              Questions before issue
            </h2>
            <p className="fx-read mt-5 text-[15px] text-ink/55">
              Straight answers drawn from how FormX works with clients, architects and contractors.
            </p>
            <Link
              href="/contact"
              transitionTypes={["nav-forward"]}
              className="mt-8 inline-flex items-center gap-2 font-label text-[10px] tracking-[0.18em] text-x-red transition-colors hover:text-ink"
            >
              Discuss your facility
              <ArrowRight className="size-3.5" />
            </Link>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="border-t border-ink/[0.08]">
              {brochureFaqs.map((item, i) => (
                <FaqItem key={item.q} q={item.q} a={item.a} index={i} />
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
