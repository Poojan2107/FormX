"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { eventServices } from "@/data/eventLanding";
import { EventIconFrame, serviceIcons } from "@/components/event/EventIcons";
import { Container } from "@/components/ui/Container";

export function EventWhatWeDo() {
  const reduce = useReducedMotion();
  const [activeHighlight, setActiveHighlight] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scan highlight for projected presentation mode (cycles every 3.5 seconds)
  useEffect(() => {
    if (reduce || isPaused) return;
    const timer = setInterval(() => {
      setActiveHighlight((prev) => (prev + 1) % eventServices.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [reduce, isPaused]);

  return (
    <section id="services" className="scroll-mt-[5.75rem] bg-[#f4f2ec] py-20 md:py-28">
      <Container>
        {/* Header Block */}
        <div className="flex flex-col gap-4 border-b border-ink/15 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-label text-[11px] font-bold uppercase tracking-[0.32em] text-x-red">
              CORE CAPABILITIES
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-black uppercase leading-[0.95] tracking-[-0.03em] text-ink">
              What We <span className="text-x-red">Do</span>
            </h2>
          </div>
          <p className="max-w-md font-display text-[15px] leading-relaxed text-ink/60 md:text-right">
            Eight coordinated engineering & design capabilities. Complete practice scope.
          </p>
        </div>

        {/* 8-Card Visual CAD Practice Matrix */}
        <div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {eventServices.map((service, i) => {
            const Icon = serviceIcons[service.id];
            const isHighlighted = activeHighlight === i;

            return (
              <motion.div
                key={service.id}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                whileHover={reduce ? undefined : { y: -6 }}
                onMouseEnter={() => setActiveHighlight(i)}
                className={`group relative flex flex-col justify-between border bg-white p-7 shadow-xs transition-all duration-300 ${
                  isHighlighted
                    ? "border-x-red shadow-[0_16px_36px_-10px_rgba(224,49,40,0.22)] ring-1 ring-x-red/30"
                    : "border-ink/15 hover:border-x-red/60 hover:shadow-[0_16px_36px_-10px_rgba(224,49,40,0.15)]"
                }`}
              >
                {/* CAD Corner Brackets */}
                <span aria-hidden className="absolute left-2.5 top-2.5 size-2.5 border-l-2 border-t-2 border-x-red/80" />
                <span aria-hidden className="absolute right-2.5 top-2.5 size-2.5 border-r-2 border-t-2 border-x-red/80" />
                <span aria-hidden className="absolute bottom-2.5 left-2.5 size-2.5 border-b-2 border-l-2 border-x-red/80" />
                <span aria-hidden className="absolute bottom-2.5 right-2.5 size-2.5 border-b-2 border-r-2 border-x-red/80" />

                {/* Top Badge */}
                <div>
                  <div className="flex items-center justify-between font-label text-[10px] font-bold tracking-[0.24em] text-x-red">
                    <span>SERVICE 0{i + 1}</span>
                    <span
                      className={`size-2 rounded-full transition-colors ${
                        isHighlighted ? "bg-x-red animate-pulse" : "bg-x-red/30 group-hover:bg-x-red"
                      }`}
                    />
                  </div>

                  {/* Red line vector — FormX mannerism: ink body + red accents */}
                  <div className="mt-6 text-ink transition-transform duration-300 group-hover:scale-105">
                    <EventIconFrame size="lg">
                      <Icon />
                    </EventIconFrame>
                  </div>

                  {/* Service Title */}
                  <h3 className="mt-6 font-display text-[15px] font-bold uppercase leading-snug tracking-[0.04em] text-ink transition-colors group-hover:text-x-red">
                    {service.title}
                  </h3>

                  {/* Full Scope Description */}
                  <p className="mt-3 text-[13.5px] leading-relaxed text-ink/70">
                    {service.description}
                  </p>
                </div>

                {/* Bottom spec bar */}
                <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-4 font-label text-[9px] uppercase tracking-[0.2em] text-ink/40">
                  <span>FormX Capability</span>
                  <span className="text-x-red font-bold">0{i + 1} / 08</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
