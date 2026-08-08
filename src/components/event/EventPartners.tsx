"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { eventPartners } from "@/data/eventLanding";
import { EventIconFrame, partnerIcons } from "@/components/event/EventIcons";
import { Container } from "@/components/ui/Container";

export function EventPartners() {
  const reduce = useReducedMotion();
  const [activeHighlight, setActiveHighlight] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scan pulse for projected presentation mode (cycles every 3 seconds)
  useEffect(() => {
    if (reduce || isPaused) return;
    const timer = setInterval(() => {
      setActiveHighlight((prev) => (prev + 1) % eventPartners.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [reduce, isPaused]);

  return (
    <section id="partners" className="scroll-mt-[5.75rem] overflow-hidden bg-[#f4f2ec] py-20 md:py-28">
      <Container>
        {/* Header Block */}
        <div className="flex flex-col gap-6 border-b border-ink/15 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-label text-[11px] font-bold uppercase tracking-[0.32em] text-x-red">
              PARTNER NETWORK
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,4rem)] font-black uppercase leading-[0.95] tracking-[-0.03em] text-ink">
              Who We <span className="text-x-red">Partner With</span>
            </h2>
          </div>
          <p className="max-w-md font-display text-[15px] leading-relaxed text-ink/60 md:text-right">
            Collaborating across seven key AEC industry sectors to deliver high-performance structural & architectural solutions.
          </p>
        </div>

        {/* Light Architectural CAD Drawing Spec Index */}
        <div
          className="mt-10 divide-y divide-ink/15 border-b border-ink/15"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {eventPartners.map((partner, i) => {
            const Icon = partnerIcons[partner.id];
            const isHighlighted = activeHighlight === i;

            return (
              <motion.div
                key={partner.id}
                initial={reduce ? false : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                onMouseEnter={() => setActiveHighlight(i)}
                className={`group relative flex flex-col justify-between gap-4 py-6 transition-all duration-300 md:flex-row md:items-center ${
                  isHighlighted
                    ? "border-l-4 border-l-x-red bg-white px-5 shadow-xs md:px-7"
                    : "border-l-4 border-l-transparent px-3 hover:bg-white/70 hover:px-5 md:px-4 md:hover:px-7"
                }`}
              >
                {/* Index + Vector Icon + Title */}
                <div className="flex items-center gap-4 md:gap-7">
                  <span
                    className={`font-label text-[11px] font-bold tracking-[0.24em] transition-colors ${
                      isHighlighted ? "text-x-red" : "text-ink/40 group-hover:text-x-red"
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <div
                    className={`transition-transform duration-300 ${
                      isHighlighted ? "scale-105 text-ink" : "text-ink/70 group-hover:scale-105 group-hover:text-ink"
                    }`}
                  >
                    <EventIconFrame size="sm">
                      <Icon />
                    </EventIconFrame>
                  </div>
                  <h3
                    className={`font-display text-[clamp(1.2rem,2.6vw,2.15rem)] font-bold uppercase tracking-[-0.01em] transition-colors ${
                      isHighlighted ? "text-x-red" : "text-ink group-hover:text-x-red"
                    }`}
                  >
                    {partner.label}
                  </h3>
                </div>

                {/* Dotted CAD Leader Line on Desktop */}
                <div className="hidden h-px flex-1 border-b border-dashed border-ink/20 md:mx-6 md:block" />

                {/* Role Description + Spec Badge */}
                <div className="flex items-center justify-between gap-6 md:justify-end">
                  <p className="text-[13.5px] font-medium leading-relaxed text-ink/70 md:text-[15px]">
                    {partner.role}
                  </p>
                  <span
                    className={`hidden font-label text-[10px] font-bold tracking-[0.22em] transition-colors md:block ${
                      isHighlighted ? "text-x-red" : "text-ink/30 group-hover:text-x-red/80"
                    }`}
                  >
                    SECTOR 0{i + 1}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
