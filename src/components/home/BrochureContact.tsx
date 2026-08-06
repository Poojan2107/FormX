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
    <div className="border-b border-white/[0.08]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="group flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-x-red"
        aria-expanded={open}
      >
        <span className="flex items-center gap-3 text-[14px] font-medium leading-[1.5] tracking-tight text-white/75 transition-colors group-hover:text-white md:text-[15px]">
          <span className="shrink-0 font-display text-sm font-black text-x-red/55 group-hover:text-x-red">×</span>
          {q}
        </span>
        <ChevronDown
          className={`size-4 shrink-0 text-x-red/50 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pl-7 pr-6 text-[13px] leading-[1.8] text-white/35">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Contact + FAQ — Final Statement
// ─────────────────────────────────────────────────────────────────────────────
export function BrochureContact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-28 overflow-hidden bg-black py-24 text-white md:py-32"
    >
      {/* FORM× watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-4 -right-4 select-none font-display font-black leading-[0.82] tracking-[-0.05em] text-white/[0.038]"
        style={{ fontSize: "clamp(7rem, 20vw, 17rem)" }}
      >
        FORM×
      </span>

      {/* Red accent — top edge */}
      <span aria-hidden className="pointer-events-none absolute left-0 top-0 h-[3px] w-20 bg-x-red" />

      <Container className="relative z-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">

          {/* ── Left: Contact ──────────────────────────────── */}
          <Reveal className="lg:col-span-7">

            {/* FormX logo — white */}
            <div className="mb-10">
              <Image
                src="/formx-logo.png"
                alt="FormX Consultants"
                width={220}
                height={94}
                unoptimized
                className="h-auto w-[175px] object-contain brightness-0 invert md:w-[200px]"
              />
            </div>

            <h2
              className="max-w-[14ch] font-display font-black leading-[1.0] tracking-[-0.04em] text-white"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Bring us your next facility
            </h2>

            <p className="mt-6 max-w-[40ch] text-[15px] leading-[1.85] text-white/40">
              Every project begins with a conversation. Tell us what you are
              building — we will tell you what to resolve before issue.
            </p>

            <dl className="mt-11 space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="mt-0.5 size-4 shrink-0 text-x-red" />
                <dd className="text-[14px] leading-[1.65] text-white/45">
                  {site.addressDetail}
                </dd>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="size-4 shrink-0 text-x-red" />
                <a href={`mailto:${site.email}`} className="text-[14px] text-white/45 transition-colors hover:text-white">
                  {site.email}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="size-4 shrink-0 text-x-red" />
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-[14px] text-white/45 transition-colors hover:text-white">
                  {site.phone}
                </a>
              </div>
            </dl>

            <div className="mt-11">
              <Link
                href="/contact"
                transitionTypes={["nav-forward"]}
                className="fx-btn-primary group inline-flex"
              >
                Enquire Now
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </Reveal>

          {/* ── Right: FAQ ──────────────────────────────────── */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-x-red" />
              <p className="font-label text-[10px] tracking-[0.32em] text-white/28">FAQ</p>
            </div>
            <div className="border-t border-white/[0.08]">
              {brochureFaqs.map((item) => (
                <FaqItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
            <p className="mt-10 font-label text-[9px] tracking-[0.28em] text-white/16">
              Where Vision Takes Form · Ahmedabad · 2025
            </p>
          </Reveal>

        </div>
      </Container>
    </section>
  );
}
