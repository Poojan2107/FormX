"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { brochureFaqs, brochureContactNote } from "@/data/brochureHome";
import { site } from "@/data/site";

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-[15px] font-semibold tracking-tight text-white md:text-base">
          {q}
        </span>
        <ChevronDown
          className={`size-4 shrink-0 text-x-red transition-transform duration-300 ${
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
            <p className="pb-5 pr-8 text-[14px] leading-[1.7] text-white/45 md:text-[15px]">{a}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

/** Contact close + thin brochure-true FAQ */
export function BrochureContact() {
  return (
    <section id="contact" className="scroll-mt-28 bg-[#0c0c0c] py-20 text-white md:py-28">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-6">
            <p className="font-label text-[10px] tracking-[0.28em] text-x-red">Contact</p>
            <h2
              className="mt-4 font-display font-extrabold uppercase leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
            >
              Bring us your next facility
            </h2>
            <p className="mt-6 max-w-[40ch] text-[15px] leading-[1.7] text-white/45">
              {brochureContactNote}
            </p>

            <dl className="mt-10 space-y-5">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-x-red" />
                <dd className="text-[14px] leading-[1.6] text-white/60">{site.addressDetail}</dd>
              </div>
              <div className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-x-red" />
                <a
                  href={`mailto:${site.email}`}
                  className="text-[14px] text-white/60 transition-colors hover:text-white"
                >
                  {site.email}
                </a>
              </div>
              <div className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-x-red" />
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="text-[14px] text-white/60 transition-colors hover:text-white"
                >
                  {site.phone}
                </a>
              </div>
            </dl>

            <Link
              href="/contact"
              transitionTypes={["nav-forward"]}
              className="group mt-10 inline-flex items-center gap-3 bg-x-red px-9 py-4 font-label text-[10px] tracking-[0.22em] text-white transition-colors hover:bg-x-red-hover"
            >
              Enquire now
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6">
            <p className="font-label text-[10px] tracking-[0.28em] text-white/30">FAQ</p>
            <h3 className="mt-3 font-display text-xl font-bold uppercase tracking-tight">
              Quick answers
            </h3>
            <div className="mt-6 border-t border-white/10">
              {brochureFaqs.map((item) => (
                <FaqItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
