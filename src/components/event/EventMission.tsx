"use client";

import { motion, useReducedMotion } from "framer-motion";
import { eventMission } from "@/data/eventLanding";
import { EventIconFrame, valueIcons } from "@/components/event/EventIcons";
import { Container } from "@/components/ui/Container";

export function EventMission() {
  const reduce = useReducedMotion();

  return (
    <section id="mission" className="scroll-mt-[5.75rem] bg-white overflow-hidden">
      {/* Full-width wide container filling horizontal gaps on left and right */}
      <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-8 md:px-12 lg:px-16 py-16 md:py-24">
        <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-12 w-full">
          {/* Left Title — Ample column width so TECHNICAL fits with generous breathing room */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center lg:col-span-6 xl:col-span-5 text-center lg:text-left w-full"
          >
            <h2 className="font-display text-[clamp(2rem,3.6vw,4.2rem)] xl:text-[4.6rem] font-black uppercase leading-[0.9] tracking-tight text-ink select-none">
              <span className="block whitespace-nowrap">Trusted</span>
              <span className="block whitespace-nowrap">Technical</span>
              <span className="block whitespace-nowrap text-x-red">Partner</span>
            </h2>
          </motion.div>

          {/* Right Card — Stretches horizontally across right side */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative lg:col-span-6 xl:col-span-7 w-full flex items-center"
          >
            <div className="relative w-full border-l-4 border-x-red bg-[#f7f6f2] p-8 sm:p-10 md:p-14 lg:p-16 shadow-xs border-y border-r border-ink/15 text-center lg:text-left">
              {/* Corner CAD Ticks */}
              <span aria-hidden className="absolute right-3 top-3 size-2.5 border-r-2 border-t-2 border-x-red/80" />
              <span aria-hidden className="absolute bottom-3 right-3 size-2.5 border-b-2 border-r-2 border-x-red/80" />

              <p className="font-display text-[clamp(1.2rem,2vw,1.65rem)] font-bold leading-[1.6] text-ink text-center lg:text-left">
                {eventMission.p1}
              </p>

              <div className="my-6 sm:my-8 h-px w-full bg-ink/10" aria-hidden />

              <p className="font-display text-[15.5px] leading-[1.8] text-ink/80 md:text-[18px] text-center lg:text-left">
                <span className="font-bold text-x-red">Our mission is simple —</span>
                {eventMission.p2.replace(/^Our mission is simple —/, "")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Values as horizontal process */}
      <div className="border-t border-ink/10 bg-[#111110]">
        <div className="mx-auto grid max-w-[1760px] sm:grid-cols-2 lg:grid-cols-4">
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
                className={`group relative flex flex-col justify-between items-center sm:items-stretch gap-8 px-6 py-12 transition-all duration-300 hover:bg-white/[0.04] md:px-8 text-center sm:text-left ${
                  i > 0 ? "border-t border-white/10 sm:border-t-0 lg:border-l" : ""
                } ${i === 1 ? "sm:border-l" : ""} ${i === 2 ? "sm:border-t lg:border-t-0" : ""} ${
                  i === 3 ? "sm:border-l sm:border-t lg:border-t-0" : ""
                }`}
              >
                <span aria-hidden className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-x-red/0 to-transparent transition-all duration-300 group-hover:via-x-red" />
                
                {/* Significantly Enlarged, High-Clarity Red Icon */}
                <div className="flex items-center justify-center sm:justify-end w-full">
                  <EventIconFrame
                    size="lg"
                    className="h-16 w-16 sm:h-20 sm:w-20 text-x-red transition-transform duration-300 group-hover:scale-110 [&_svg]:size-14 sm:[&_svg]:size-16"
                  >
                    <Icon />
                  </EventIconFrame>
                </div>

                {/* 2-Line Title: Line 1 RED, Line 2 WHITE */}
                <h3 className="font-display text-[clamp(1.3rem,2.2vw,1.75rem)] font-black uppercase leading-[1.05] tracking-[0.05em] text-center sm:text-left">
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
