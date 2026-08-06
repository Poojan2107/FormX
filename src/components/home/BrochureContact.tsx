"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { brochureFaqs } from "@/data/brochureHome";
import { site } from "@/data/site";

// ─────────────────────────────────────────────────────────────────────────────
// FAQ accordion item
// ─────────────────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <div className="border-b border-white/[0.09]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="group flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-x-red"
        aria-expanded={open}
      >
        <span className="flex items-center gap-3 text-[14px] font-medium tracking-tight text-white/80 transition-colors group-hover:text-white md:text-[15px]">
          <span className="font-display text-xs font-black text-x-red/60 group-hover:text-x-red">×</span>
          {q}
        </span>
        <ChevronDown
          className={`size-4 shrink-0 text-x-red/60 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 pl-6 pr-8 text-[13px] leading-[1.75] text-white/38">
              {a}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Contact + FAQ — Final Statement
// Absolute black, FORM× as the graphic element, FormX logo, two columns
// ─────────────────────────────────────────────────────────────────────────────
export function BrochureContact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-28 overflow-hidden bg-black py-20 text-white md:py-28"
    >
      {/* ── FORM× watermark — the brand IS the graphic ─────── */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-6 right-0 select-none font-display font-black leading-[0.85] tracking-[-0.04em] text-white/[0.04]"
        style={{ fontSize: "clamp(8rem, 22vw, 18rem)" }}
      >
        FORM×
      </span>

      {/* ── Red accent line — top left decoration ──────────── */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-[2px] w-16 bg-x-red"
      />

      <Container className="relative z-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">

          {/* ── Left column ────────────────────────────────── */}
          <Reveal className="lg:col-span-7">

            {/* FormX logo — white version, per Hiren: use logo everywhere */}
            <div className="mb-8">
              <Image
                src="/formx-logo.png"
                alt="FormX Consultants"
                width={200}
                height={85}
                className="h-auto w-[160px] object-contain brightness-0 invert md:w-[180px]"
              />
            </div>

            {/* Heading */}
            <h2
              className="max-w-[14ch] font-display font-extrabold leading-[1.02] tracking-tight text-white"
              style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.25rem)" }}
            >
              Bring us your next facility
            </h2>

            {/* Sub-copy */}
            <p className="mt-5 max-w-[40ch] text-[15px] leading-[1.8] text-white/42">
              Every project begins with a conversation. Tell us what you are
              building — we will tell you what to resolve before issue.
            </p>

            {/* Contact details */}
            <dl className="mt-10 space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="mt-0.5 size-4 shrink-0 text-x-red" />
                <dd className="text-[14px] leading-[1.65] text-white/48">
                  {site.addressDetail}
                </dd>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="size-4 shrink-0 text-x-red" />
                <a
                  href={`mailto:${site.email}`}
                  className="text-[14px] text-white/48 transition-colors hover:text-white"
                >
                  {site.email}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="size-4 shrink-0 text-x-red" />
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="text-[14px] text-white/48 transition-colors hover:text-white"
                >
                  {site.phone}
                </a>
              </div>
            </dl>

            {/* CTA */}
            <div className="mt-10">
              <Link
                href="/contact"
                transitionTypes={["nav-forward"]}
                className="fx-btn-primary group inline-flex"
              >
                Enquire Now
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

          </Reveal>

          {/* ── Right: FAQ ──────────────────────────────────── */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-6 bg-x-red" />
              <p className="font-label text-[10px] tracking-[0.3em] text-white/30">
                FAQ
              </p>
            </div>
            <div className="border-t border-white/[0.09]">
              {brochureFaqs.map((item) => (
                <FaqItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>

            {/* Tagline */}
            <p className="mt-10 font-label text-[9px] tracking-[0.26em] text-white/18">
              Where Vision Takes Form · Ahmedabad · 2025
            </p>
          </Reveal>

        </div>
      </Container>
    </section>
  );
}
