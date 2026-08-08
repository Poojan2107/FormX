"use client";

import { motion, useReducedMotion } from "framer-motion";
import { eventPartners } from "@/data/eventLanding";
import { EventIconFrame, partnerIcons } from "@/components/event/EventIcons";

export function EventPartners() {
  const reduce = useReducedMotion();

  return (
    <section id="partners" className="scroll-mt-[5.75rem] overflow-hidden bg-[#f4f2ec] py-16 md:py-24 text-ink">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8">
        
        {/* Centered Header Strip — Red Accent Lines framing WHO WE PARTNER WITH */}
        <div className="relative mb-14 flex items-center justify-center">
          <div className="h-[1.5px] w-full flex-1 bg-x-red/40" />
          <h2 className="px-6 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-black uppercase tracking-[0.14em] text-ink text-center">
            Who We Partner With
          </h2>
          <div className="h-[1.5px] w-full flex-1 bg-x-red/40" />
        </div>

        {/* Spacious Partner Card Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 sm:gap-5">
          {eventPartners.map((partner, i) => {
            const Icon = partnerIcons[partner.id];

            return (
              <motion.div
                key={partner.id}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="group flex flex-col items-center justify-center border border-ink/12 bg-white/70 px-4 py-8 text-center transition-all duration-300 hover:border-x-red hover:bg-white hover:shadow-[0_10px_28px_-10px_rgba(224,49,40,0.15)]"
              >
                {/* Vector Icon */}
                <div className="flex h-14 w-14 items-center justify-center text-ink transition-transform duration-300 group-hover:scale-110">
                  <EventIconFrame size="lg">
                    <Icon className="text-ink" />
                  </EventIconFrame>
                </div>

                {/* Red Partner Title */}
                <h3 className="mt-4 font-display text-[13px] sm:text-[14px] font-black uppercase leading-snug tracking-[0.04em] text-x-red">
                  {partner.label}
                </h3>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


