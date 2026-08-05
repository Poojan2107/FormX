"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { brochureFaqs } from "@/data/brochureHome";
import { site } from "@/data/site";

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-x-red"
        aria-expanded={open}
      >
        <span className="text-[15px] font-medium tracking-tight text-white md:text-base">{q}</span>
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
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-8 text-[14px] leading-[1.7] text-white/40">{a}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function BrochureContact() {
  return (
    <section id="contact" className="relative scroll-mt-28 overflow-hidden bg-black py-20 text-white md:py-28">
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-16 right-0 select-none font-display font-black leading-none text-white/[0.035]"
        style={{ fontSize: "clamp(10rem, 28vw, 22rem)" }}
      >
        FORM×
      </span>

      <Container className="relative z-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7">
            <Image
              src="/formx-logo.png"
              alt="FormX"
              width={180}
              height={56}
              className="h-9 w-auto object-contain"
            />
            <h2
              className="mt-8 max-w-[12ch] font-display font-bold leading-[1.02] tracking-tight"
              style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.25rem)" }}
            >
              Bring us your next facility
            </h2>

            <dl className="mt-10 space-y-4">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-x-red" />
                <dd className="text-[14px] leading-[1.6] text-white/55">{site.addressDetail}</dd>
              </div>
              <div className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-x-red" />
                <a
                  href={`mailto:${site.email}`}
                  className="text-[14px] text-white/55 transition-colors hover:text-white"
                >
                  {site.email}
                </a>
              </div>
              <div className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-x-red" />
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="text-[14px] text-white/55 transition-colors hover:text-white"
                >
                  {site.phone}
                </a>
              </div>
            </dl>

            <Link
              href="/contact"
              transitionTypes={["nav-forward"]}
              className="group mt-10 inline-flex items-center gap-3 bg-x-red px-10 py-4 font-label text-[10px] tracking-[0.22em] text-white transition-colors hover:bg-x-red-hover"
            >
              Enquire now
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="font-label text-[10px] tracking-[0.28em] text-white/30">FAQ</p>
            <div className="mt-4 border-t border-white/10">
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
