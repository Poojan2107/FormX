"use client";

import { motion, useReducedMotion } from "framer-motion";
import { eventPartners } from "@/data/eventLanding";
import { EventIconFrame, partnerIcons } from "@/components/event/EventIcons";

export function EventPartners() {
  const reduce = useReducedMotion();

  return (
    <section id="partners" className="scroll-mt-[5.75rem] relative overflow-hidden bg-[#f4f2ec] py-16 md:py-24 text-ink border-t border-b border-ink/10">
      {/* Structural background grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8">
        
        {/* Header Strip — Centered WHO WE PARTNER WITH with Red Horizontal Lines */}
        <div className="relative mb-14 flex items-center justify-center">
          <div className="h-[2px] w-full flex-1 bg-gradient-to-r from-transparent via-x-red/40 to-x-red" />
          <h2 className="px-6 sm:px-10 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-black uppercase tracking-[0.14em] text-ink text-center">
            Who We Partner With
          </h2>
          <div className="h-[2px] w-full flex-1 bg-gradient-to-l from-transparent via-x-red/40 to-x-red" />
        </div>

        {/* Beautifully Composited 2-Tier Architectural White Card Grid (4 Cards Top, 3 Cards Bottom) */}
        <div className="space-y-6">
          {/* Top Row: 4 Cards */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
            {eventPartners.slice(0, 4).map((partner, i) => {
              const Icon = partnerIcons[partner.id];

              return (
                <motion.div
                  key={partner.id}
                  initial={reduce ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  className="group relative flex flex-col items-center justify-center border-2 border-ink/15 bg-white p-7 sm:p-9 text-center transition-all duration-300 hover:border-x-red hover:shadow-[0_16px_36px_-12px_rgba(224,49,40,0.2)] hover:-translate-y-1"
                >
                  {/* Vector Icon in Black */}
                  <div className="flex h-20 w-20 sm:h-22 sm:w-22 items-center justify-center rounded-xl border border-ink/10 bg-[#f8f6f0] text-ink transition-all duration-300 group-hover:border-x-red group-hover:bg-x-red/10 group-hover:scale-110">
                    <EventIconFrame size="lg" className="text-ink [&_svg]:size-12 sm:[&_svg]:size-14">
                      <Icon className="text-ink" />
                    </EventIconFrame>
                  </div>

                  {/* Partner Title in Bold Black */}
                  <h3 className="mt-5 font-display text-[15.5px] sm:text-[17px] font-black uppercase leading-snug tracking-[0.05em] text-ink transition-colors duration-300 group-hover:text-x-red">
                    {partner.label}
                  </h3>

                  {/* Subtle Red Accent Line */}
                  <span className="mt-3 h-[2px] w-6 bg-ink/20 transition-all duration-300 group-hover:w-12 group-hover:bg-x-red" />
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Row: 3 Centered Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6 max-w-5xl mx-auto">
            {eventPartners.slice(4, 7).map((partner, i) => {
              const Icon = partnerIcons[partner.id];

              return (
                <motion.div
                  key={partner.id}
                  initial={reduce ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i + 4) * 0.06, duration: 0.5 }}
                  className="group relative flex flex-col items-center justify-center border-2 border-ink/15 bg-white p-7 sm:p-9 text-center transition-all duration-300 hover:border-x-red hover:shadow-[0_16px_36px_-12px_rgba(224,49,40,0.2)] hover:-translate-y-1"
                >
                  {/* Vector Icon in Black */}
                  <div className="flex h-20 w-20 sm:h-22 sm:w-22 items-center justify-center rounded-xl border border-ink/10 bg-[#f8f6f0] text-ink transition-all duration-300 group-hover:border-x-red group-hover:bg-x-red/10 group-hover:scale-110">
                    <EventIconFrame size="lg" className="text-ink [&_svg]:size-12 sm:[&_svg]:size-14">
                      <Icon className="text-ink" />
                    </EventIconFrame>
                  </div>

                  {/* Partner Title in Bold Black */}
                  <h3 className="mt-5 font-display text-[15.5px] sm:text-[17px] font-black uppercase leading-snug tracking-[0.05em] text-ink transition-colors duration-300 group-hover:text-x-red">
                    {partner.label}
                  </h3>

                  {/* Subtle Red Accent Line */}
                  <span className="mt-3 h-[2px] w-6 bg-ink/20 transition-all duration-300 group-hover:w-12 group-hover:bg-x-red" />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}


