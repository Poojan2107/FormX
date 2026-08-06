"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { brochureFaqs } from "@/data/brochureHome";
import { site } from "@/data/site";

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
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
        <span className="text-[15px] font-medium leading-[1.45] text-ink/80 transition-colors group-hover:text-ink md:text-[16px]">
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
            <p className="pb-6 pl-10 pr-8 text-[14.5px] leading-[1.85] text-ink/55 md:pl-12">
              {a}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

/**
 * CONTACT — Invitation + facts strip + FAQ. No icon card trio.
 */
export function BrochureContact() {
  return (
    <section id="contact" className="scroll-mt-28 border-t border-ink/[0.06] bg-[#fafaf8] py-24 md:py-32">
      <Container>
        <div className="grid gap-10 border-b border-ink/[0.08] pb-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16">
          <Reveal>
            <p className="eyebrow text-x-red">Contact</p>
            <h2
              className="mt-4 max-w-[14ch] font-display font-black leading-[0.98] tracking-tight text-ink"
              style={{ fontSize: "clamp(2.1rem, 4.2vw, 3.4rem)" }}
            >
              Bring us your next facility
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="text-[15.5px] leading-[1.9] text-ink/55 md:text-[16px] lg:pb-1">
              Share the facility, scale and constraints. FormX starts with the decisions that must
              be resolved before issue.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <dl className="mt-10 grid gap-8 border-b border-ink/[0.08] pb-10 sm:grid-cols-3">
            <div>
              <dt className="font-label text-[9px] tracking-[0.2em] text-ink/35">Studio</dt>
              <dd className="mt-2 text-[14px] leading-[1.75] text-ink/65">{site.addressDetail}</dd>
            </div>
            <div>
              <dt className="font-label text-[9px] tracking-[0.2em] text-ink/35">Email</dt>
              <dd className="mt-2">
                <a
                  href={`mailto:${site.email}`}
                  className="text-[14px] text-ink/65 transition-colors hover:text-x-red"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-label text-[9px] tracking-[0.2em] text-ink/35">Phone</dt>
              <dd className="mt-2">
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="text-[14px] text-ink/65 transition-colors hover:text-x-red"
                >
                  {site.phone}
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.1}>
          <Link
            href="/contact"
            transitionTypes={["nav-forward"]}
            className="fx-btn-primary group mt-10 inline-flex"
          >
            Discuss your facility
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <div className="mt-20 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <Reveal>
            <p className="eyebrow text-x-red">FAQ</p>
            <h3
              className="mt-4 max-w-[12ch] font-display font-extrabold leading-[1.05] tracking-tight text-ink"
              style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.1rem)" }}
            >
              Questions before issue
            </h3>
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
