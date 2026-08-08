"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { FormxTransparentLogo } from "@/components/ui/FormxTransparentLogo";
import { brochureFaqs } from "@/data/brochureHome";
import { site } from "@/data/site";

function FaqItem({
  q,
  a,
  index,
}: {
  q: string;
  a: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <div className="border-b border-ink/[0.09]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="group grid w-full grid-cols-[2rem_1fr_auto] items-center gap-3 py-5 text-left md:gap-4 md:py-5"
        aria-expanded={open}
      >
        <span className="font-label text-[10px] tracking-[0.2em] text-x-red">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-[15px] font-semibold leading-[1.45] tracking-tight text-ink/82 transition-colors group-hover:text-ink md:text-[16px]">
          {q}
        </span>
        <span
          className={`flex size-7 shrink-0 items-center justify-center border transition-colors group-hover:border-x-red/40 ${
            open ? "border-x-red/50 bg-x-red text-white" : "border-ink/[0.1] bg-white text-x-red"
          }`}
        >
          <ChevronDown
            className={`size-3.5 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </span>
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
            <p className="pb-5 pl-[calc(2rem+0.75rem)] pr-12 text-[14.5px] leading-[1.85] text-ink/58 md:pl-[calc(2rem+1rem)] md:text-[15px]">
              {a}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function BrochureContact() {
  const contactFacts = [
    {
      icon: MapPin,
      label: "Studio address",
      body: site.addressDetail,
    },
    {
      icon: Mail,
      label: "Email",
      body: (
        <a
          href={`mailto:${site.email}`}
          className="transition-colors hover:text-x-red"
        >
          {site.email}
        </a>
      ),
    },
    {
      icon: Phone,
      label: "Phone",
      body: (
        <a
          href={`tel:${site.phone.replace(/\s/g, "")}`}
          className="transition-colors hover:text-x-red"
        >
          {site.phone}
        </a>
      ),
    },
  ] as const;

  return (
    <section
      id="contact"
      className="relative scroll-mt-28 overflow-hidden bg-[#fafaf8] py-16 text-ink md:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "180px",
        }}
      />

      <span aria-hidden className="pointer-events-none absolute left-0 top-0 h-[3px] w-24 bg-x-red" />

      <Container className="relative z-10">
        <div className="grid gap-10 border-b border-ink/[0.08] pb-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16">
          <Reveal>
            <div className="mb-8">
              <FormxTransparentLogo size="md" align="left" />
            </div>
            <div className="flex items-center justify-between">
              <p className="font-label text-[10.5px] tracking-[0.32em] uppercase text-x-red">
                Contact
              </p>
              <span className="font-label text-[9.5px] font-bold tracking-[0.24em] text-ink/35">
                [FORMX.09]
              </span>
            </div>
            <h2
              className="mt-4 max-w-[14ch] font-display font-black leading-[1.02] tracking-[-0.045em] text-ink"
              style={{ fontSize: "clamp(2.15rem, 4.4vw, 3.5rem)" }}
            >
              Bring us your next facility
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-[15.5px] leading-[1.9] text-ink/60 md:text-[16.5px] lg:pb-1">
              Every serious project starts with clarity. Share the facility, scale, and
              constraints, and we will help define the engineering decisions that need to be
              resolved before execution begins.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <dl className="mt-10 grid gap-3 sm:grid-cols-3 sm:items-stretch">
            {contactFacts.map((fact) => {
              const Icon = fact.icon;
              return (
                <div
                  key={fact.label}
                  className="formx-card x-corner-glow formx-cut-sm flex h-full min-h-[130px] flex-col p-5 transition-all duration-400 md:p-6"
                >
                  <Icon className="size-4.5 text-x-red" />
                  <dt className="mt-4 font-label text-[9px] font-bold uppercase tracking-[0.2em] text-ink/40">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 flex-1 text-[13.5px] font-medium leading-[1.7] text-ink/75 md:text-[14px]">
                    {fact.body}
                  </dd>
                </div>
              );
            })}
          </dl>
        </Reveal>

        <div className="mt-8">
          <Reveal delay={0.12}>
            <Link
              href="/contact"
              transitionTypes={["nav-forward"]}
              className="fx-btn-primary group inline-flex"
            >
              Enquire Now
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div aria-hidden className="mt-14 h-px w-full bg-ink/[0.08]" />

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <Reveal>
            <p className="font-label text-[10.5px] tracking-[0.32em] uppercase text-x-red">
              FAQ
            </p>
            <h3
              className="mt-4 max-w-[14ch] font-display font-black leading-[1.05] tracking-[-0.04em] text-ink"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.25rem)" }}
            >
              Common questions
            </h3>
            <p className="mt-4 max-w-[36ch] text-[15px] leading-[1.85] text-ink/55">
              Straight answers drawn from how Form
              <span className="text-x-red">X</span> works with clients, architects and
              contractors.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="border-t border-ink/[0.09]">
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
