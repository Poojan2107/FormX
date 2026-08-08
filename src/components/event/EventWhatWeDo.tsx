"use client";

import { motion, useReducedMotion } from "framer-motion";
import { eventServices } from "@/data/eventLanding";
import { EventIconFrame, serviceIcons } from "@/components/event/EventIcons";

export function EventWhatWeDo() {
  const reduce = useReducedMotion();

  return (
    <section id="services" className="scroll-mt-[5.75rem] bg-[#f4f2ec] py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8">
        
        {/* Header Strip — Centered WHAT WE DO with Red Horizontal Lines */}
        <div className="relative mb-14 flex items-center justify-center">
          <div className="h-[1.5px] w-full flex-1 bg-x-red/40" />
          <h2 className="px-6 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-black uppercase tracking-[0.14em] text-ink text-center">
            What We Do
          </h2>
          <div className="h-[1.5px] w-full flex-1 bg-x-red/40" />
        </div>

        {/* Spacious 4-Column Architectural Card Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {eventServices.map((service, i) => {
            const Icon = serviceIcons[service.id];

            return (
              <motion.div
                key={service.id}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="group flex flex-col justify-between border border-ink/12 bg-white/70 p-7 text-left transition-all duration-300 hover:border-x-red hover:bg-white hover:shadow-[0_12px_32px_-12px_rgba(224,49,40,0.18)]"
              >
                <div>
                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center text-ink transition-transform duration-300 group-hover:scale-110">
                    <EventIconFrame size="lg">
                      <Icon />
                    </EventIconFrame>
                  </div>

                  {/* Red Title */}
                  <h3 className="mt-5 font-display text-[14px] sm:text-[15px] font-black uppercase leading-tight tracking-[0.04em] text-x-red">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="mt-4 font-body text-[13px] font-medium leading-relaxed text-ink/75">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

