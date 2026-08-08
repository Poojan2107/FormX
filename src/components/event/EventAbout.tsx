"use client";

import { motion, useReducedMotion } from "framer-motion";
import { eventAbout } from "@/data/eventLanding";
import { EventPillarsGraphic } from "@/components/event/EventPillarsGraphic";
import { Container } from "@/components/ui/Container";

export function EventAbout() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="scroll-mt-[5.75rem] bg-[#f4f2ec]">
      {/* Spec sheet intro */}
      <div className="border-b border-ink/10">
        <Container className="grid gap-0 py-0 lg:grid-cols-12">
          <div className="border-b border-ink/10 px-0 py-14 lg:col-span-4 lg:border-b-0 lg:border-r lg:py-20 lg:pr-10">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-label text-[11px] font-bold uppercase tracking-[0.32em] text-x-red">
                ABOUT FORMX
              </p>
              <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,4rem)] font-black uppercase leading-[0.95] tracking-[-0.03em] text-ink">
                Who
                <br />
                builds
                <br />
                <span className="text-x-red">FormX</span>
              </h2>
              <div className="mt-8 space-y-2 font-label text-[10px] uppercase tracking-[0.2em] text-ink/40">
                <p>Discipline — Design | Engineering</p>
                <p>Base — Ahmedabad, Gujarat</p>
                <p>Status — Active Practice</p>
              </div>
            </motion.div>
          </div>

          <div className="relative lg:col-span-8 lg:py-20 lg:pl-12">
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
              className="py-14 font-display text-[clamp(1.25rem,2.4vw,1.75rem)] font-medium leading-[1.7] text-ink lg:py-0"
            >
              {eventAbout.body}
            </motion.p>
          </div>
        </Container>
      </div>

      <EventPillarsGraphic pillars={eventAbout.pillars} />

      {/* Tagline band */}
      <div className="relative overflow-hidden border-y border-ink/10 bg-ink py-16 md:py-20">
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-y-0 left-0 flex items-center whitespace-nowrap font-display text-[clamp(3rem,10vw,7rem)] font-black uppercase tracking-[0.08em] text-white/[0.06] ${
            reduce ? "" : "event-marquee"
          }`}
        >
          <span className="px-8">Shaping Form Defining Future — Shaping Form Defining Future — </span>
          <span className="px-8">Shaping Form Defining Future — Shaping Form Defining Future — </span>
        </div>
        <Container className="relative">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center font-display text-[clamp(1.6rem,3.8vw,2.75rem)] font-bold uppercase tracking-[0.14em] text-white"
          >
            Shaping Form <span className="text-x-red">Defining Future</span>
          </motion.p>
        </Container>
      </div>
    </section>
  );
}
