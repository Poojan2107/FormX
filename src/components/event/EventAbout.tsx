"use client";

import { motion, useReducedMotion } from "framer-motion";
import { eventAbout, eventHero } from "@/data/eventLanding";
import { EventPillarsGraphic } from "@/components/event/EventPillarsGraphic";
import { Container } from "@/components/ui/Container";

export function EventAbout() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="scroll-mt-[5.75rem] bg-[#f4f2ec]">
      {/* 1. Tagline Banner — SHAPING FORM. DEFINING FUTURE & Paragraph */}
      <div className="relative overflow-hidden border-y border-ink/15 bg-[#0e0e0d] text-white py-14 md:py-18">
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-y-0 left-0 flex items-center whitespace-nowrap font-display text-[clamp(3rem,10vw,7rem)] font-black uppercase tracking-[0.08em] text-white/[0.04] ${
            reduce ? "" : "event-marquee"
          }`}
        >
          <span className="px-8">Shaping Form Defining Future — Shaping Form Defining Future — </span>
          <span className="px-8">Shaping Form Defining Future — Shaping Form Defining Future — </span>
        </div>
        <Container className="relative text-center">
          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold uppercase tracking-[0.12em] text-white"
          >
            Shaping Form <span className="text-x-red">Defining Future</span>
          </motion.h2>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mx-auto mt-4 max-w-2xl text-[15px] sm:text-[17px] font-medium leading-relaxed text-white/80"
          >
            {eventHero.body}
          </motion.p>
        </Container>
      </div>

      {/* 2. Who Builds FormX */}
      <div className="border-b border-ink/10">
        <Container className="grid gap-0 py-0 lg:grid-cols-12">
          <div className="border-b border-ink/10 px-0 py-12 lg:col-span-4 lg:border-b-0 lg:border-r lg:py-18 lg:pr-10">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex h-full flex-col justify-center"
            >
              <h2 className="font-display text-[clamp(3.25rem,6.5vw,5.25rem)] font-black uppercase leading-[0.9] tracking-[-0.035em] text-ink select-none">
                Who
                <br />
                builds
                <br />
                <span className="text-x-red">FormX</span>
              </h2>
            </motion.div>
          </div>

          <div className="relative flex items-center lg:col-span-8 lg:py-18 lg:pl-12">
            <motion.span
              aria-hidden
              initial={reduce ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="pointer-events-none absolute right-0 top-8 hidden select-none font-display text-[9rem] font-black leading-none text-ink/[0.04] lg:block"
            >
              FX
            </motion.span>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65 }}
              className="py-12 font-display text-[clamp(1.2rem,2.2vw,1.65rem)] font-medium leading-[1.7] text-ink lg:py-0"
            >
              {eventAbout.body}
            </motion.p>
          </div>
        </Container>
      </div>

      {/* 3. Pillars Graphic */}
      <EventPillarsGraphic pillars={eventAbout.pillars} />
    </section>
  );
}

