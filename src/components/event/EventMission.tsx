"use client";

import { motion, useReducedMotion } from "framer-motion";
import { eventMission } from "@/data/eventLanding";
import { EventIconFrame, valueIcons } from "@/components/event/EventIcons";
import { Container } from "@/components/ui/Container";

export function EventMission() {
  const reduce = useReducedMotion();

  return (
    <section id="mission" className="scroll-mt-[5.75rem] bg-white">
      <Container className="py-20 md:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-black uppercase leading-[0.92] tracking-[-0.03em] text-ink select-none">
              Trusted
              <br />
              technical
              <br />
              <span className="text-x-red">partner</span>
            </h2>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative lg:col-span-7"
          >
            <div className="relative border-l-4 border-x-red bg-[#f7f6f2] p-8 shadow-xs border-y border-r border-ink/15 md:p-10">
              {/* Corner CAD Ticks */}
              <span aria-hidden className="absolute right-2.5 top-2.5 size-2 border-r-2 border-t-2 border-x-red/80" />
              <span aria-hidden className="absolute bottom-2.5 right-2.5 size-2 border-b-2 border-r-2 border-x-red/80" />

              <p className="font-display text-[clamp(1.1rem,1.9vw,1.4rem)] font-bold leading-[1.6] text-ink">
                {eventMission.p1}
              </p>

              <div className="my-6 h-px w-full bg-ink/10" aria-hidden />

              <p className="font-display text-[15px] leading-[1.75] text-ink/75 md:text-[16.5px]">
                <span className="font-bold text-x-red">Our mission is simple —</span>
                {eventMission.p2.replace(/^Our mission is simple —/, "")}
              </p>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Values as horizontal process */}
      <div className="border-t border-ink/10 bg-[#111110]">
        <div className="mx-auto grid max-w-[1400px] sm:grid-cols-2 lg:grid-cols-4">
          {eventMission.values.map((value, i) => {
            const Icon = valueIcons[value.id];
            const firstLine = value.accent;
            const secondLine = value.title.replace(new RegExp(`^${value.accent}\\s*`, "i"), "");

            return (
              <motion.div
                key={value.id}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={reduce ? undefined : { y: -4 }}
                className={`group relative flex flex-col justify-between gap-8 px-6 py-12 transition-all duration-300 hover:bg-white/[0.04] md:px-8 ${
                  i > 0 ? "border-t border-white/10 sm:border-t-0 lg:border-l" : ""
                } ${i === 1 ? "sm:border-l" : ""} ${i === 2 ? "sm:border-t lg:border-t-0" : ""} ${
                  i === 3 ? "sm:border-l sm:border-t lg:border-t-0" : ""
                }`}
              >
                <span aria-hidden className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-x-red/0 to-transparent transition-all duration-300 group-hover:via-x-red" />
                
                {/* Larger, high-clarity Red Icon */}
                <div className="flex items-center justify-end">
                  <EventIconFrame
                    size="lg"
                    className="h-12 w-12 text-x-red transition-transform duration-300 group-hover:scale-110 [&_svg]:size-11"
                  >
                    <Icon />
                  </EventIconFrame>
                </div>

                {/* 2-Line Title: Line 1 RED, Line 2 WHITE */}
                <h3 className="font-display text-[clamp(1.25rem,2vw,1.6rem)] font-black uppercase leading-[1.05] tracking-[0.05em]">
                  <span className="block text-x-red">{firstLine}</span>
                  <span className="block text-white">{secondLine}</span>
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
