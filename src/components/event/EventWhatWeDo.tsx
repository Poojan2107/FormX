"use client";

import { motion, useReducedMotion } from "framer-motion";
import { eventServices } from "@/data/eventLanding";
import { EventIconFrame, serviceIcons } from "@/components/event/EventIcons";

export function EventWhatWeDo() {
  const reduce = useReducedMotion();

  return (
    <section id="services" className="scroll-mt-[5.75rem] bg-[#f4f2ec] py-16 md:py-24 relative overflow-hidden">
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
        
        {/* Header Strip — Centered WHAT WE DO with Red Horizontal Lines */}
        <div className="relative mb-14 flex items-center justify-center">
          <div className="h-[2px] w-full flex-1 bg-gradient-to-r from-transparent via-x-red/40 to-x-red" />
          <h2 className="px-6 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-black uppercase tracking-[0.14em] text-ink text-center">
            What We Do
          </h2>
          <div className="h-[2px] w-full flex-1 bg-gradient-to-l from-transparent via-x-red/40 to-x-red" />
        </div>

        {/* Clean Architectural Card Grid (No index overlays, tight gapless layout) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {eventServices.map((service, i) => {
            const Icon = serviceIcons[service.id];

            return (
              <motion.div
                key={service.id}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="group relative flex flex-col items-center sm:items-start justify-start border-2 border-ink/15 bg-white p-6 sm:p-7 text-center sm:text-left transition-all duration-300 hover:-translate-y-1 hover:border-x-red hover:shadow-[0_16px_36px_-12px_rgba(224,49,40,0.2)]"
              >
                {/* Icon Stamp Frame in Black */}
                <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-lg border border-ink/10 bg-[#f8f6f0] text-ink transition-all duration-300 group-hover:border-x-red group-hover:bg-x-red/5 group-hover:scale-105">
                  <EventIconFrame size="lg" className="[&_svg]:size-11 sm:[&_svg]:size-14 text-ink">
                    <Icon />
                  </EventIconFrame>
                </div>

                {/* FormX Red Service Title */}
                <h3 className="mt-5 font-display text-[16.5px] sm:text-[18px] font-black uppercase leading-tight tracking-tight text-x-red text-center sm:text-left">
                  {service.title}
                </h3>

                {/* Direct Description Paragraph */}
                <p className="mt-2.5 font-body text-[14.5px] sm:text-[15.5px] font-medium leading-relaxed text-ink/80 text-center sm:text-left">
                  {service.description}
                </p>

                {/* Bottom Expanding Red Accent Line */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-x-red transition-all duration-300 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

