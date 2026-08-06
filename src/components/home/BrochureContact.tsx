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
// FAQ Accordion Item — Light Theme
// ─────────────────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <div className="border-b border-ink/[0.09]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="group flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-x-red"
        aria-expanded={open}
      >
        <span className="flex items-center gap-3 text-[14px] font-semibold leading-[1.5] tracking-tight text-ink/80 transition-colors group-hover:text-ink md:text-[15px]">
          <span className="shrink-0 font-display text-sm font-black text-x-red group-hover:text-x-red">×</span>
          {q}
        </span>
        <ChevronDown
          className={`size-4 shrink-0 text-x-red/60 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pl-7 pr-6 text-[13px] leading-[1.8] text-ink/55">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Contact + FAQ — Studio Paper Theme (Breaks up dark black block before Footer)
// ─────────────────────────────────────────────────────────────────────────────
export function BrochureContact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-28 overflow-hidden bg-[#fafaf8] py-24 text-ink md:py-32"
    >
      {/* Paper grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "180px",
        }}
      />

      {/* Atmospheric FORM× watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-6 -right-6 select-none font-display font-black leading-[0.8] tracking-[-0.05em] text-ink/[0.03]"
        style={{ fontSize: "clamp(8rem, 24vw, 20rem)" }}
      >
        FORM×
      </span>

      {/* Top red accent */}
      <span aria-hidden className="pointer-events-none absolute left-0 top-0 h-[3px] w-24 bg-x-red" />

      <Container className="relative z-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">

          {/* ── Left: Contact Statement ───────────────────────────── */}
          <Reveal className="lg:col-span-7">

            {/* FormX Solid Logo */}
            <div className="mb-10">
              <Image
                src="/formx-logo-solid.png"
                alt="FormX Consultants"
                width={220}
                height={94}
                priority
                className="h-auto w-[180px] object-contain md:w-[210px]"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>

            <h2
              className="max-w-[10ch] font-display font-black leading-[0.95] tracking-[-0.05em] text-ink"
              style={{ fontSize: "clamp(2.35rem, 5vw, 4rem)" }}
            >
              Bring us your next facility
            </h2>

            <p className="mt-5 max-w-[42ch] text-[15px] leading-[1.9] text-ink/56 md:text-[16px]">
              Every serious project starts with clarity. Share the facility, scale, and
              constraints, and we will help define the engineering decisions that need to be
              resolved before execution begins.
            </p>

            <dl className="mt-10 grid gap-3 md:grid-cols-3">
              <div className="border border-ink/[0.08] bg-white/80 p-5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-x-red" />
                <dt className="mt-3 font-label text-[9px] uppercase tracking-[0.22em] text-ink/35">
                  Studio address
                </dt>
                <dd className="mt-2 text-[14px] font-medium leading-[1.7] text-ink/68">
                  {site.addressDetail}
                </dd>
              </div>
              <div className="border border-ink/[0.08] bg-white/80 p-5">
                <Mail className="size-4 shrink-0 text-x-red" />
                <dt className="mt-3 font-label text-[9px] uppercase tracking-[0.22em] text-ink/35">
                  Email
                </dt>
                <dd className="mt-2">
                  <a href={`mailto:${site.email}`} className="text-[14px] font-medium text-ink/68 transition-colors hover:text-x-red">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div className="border border-ink/[0.08] bg-white/80 p-5">
                <Phone className="size-4 shrink-0 text-x-red" />
                <dt className="mt-3 font-label text-[9px] uppercase tracking-[0.22em] text-ink/35">
                  Phone
                </dt>
                <dd className="mt-2">
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-[14px] font-medium text-ink/68 transition-colors hover:text-x-red">
                    {site.phone}
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-9">
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

          {/* ── Right: FAQ Accordion ─────────────────────────────── */}
          <Reveal delay={0.1} className="lg:col-span-5 lg:pt-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-x-red" />
              <p className="font-label text-[10px] tracking-[0.32em] text-ink/40 uppercase">Frequently Asked Questions</p>
            </div>
            <div className="border border-ink/[0.08] bg-white/82 px-5 py-1 shadow-[0_18px_60px_rgba(0,0,0,0.03)] md:px-7">
              {brochureFaqs.map((item) => (
                <FaqItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
            <p className="mt-10 font-label text-[9px] tracking-[0.28em] text-ink/30 uppercase">
              Where Vision Takes Form · Design | Engineering
            </p>
          </Reveal>

        </div>
      </Container>
    </section>
  );
}
