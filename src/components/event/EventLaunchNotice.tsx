"use client";

import { motion, useReducedMotion } from "framer-motion";
import { eventLaunchNotice } from "@/data/eventLanding";

/** Website-status strip — sits low on the page, below partners */
export function EventLaunchNotice() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-label="Website status"
      className="border-y border-ink/10 bg-[#f7f6f2]"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-6 py-10 md:flex-row md:items-center md:justify-between md:gap-10 md:px-10 md:py-12">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-start gap-4"
        >
          <span
            className={`mt-1.5 size-2.5 shrink-0 rounded-full bg-x-red ${reduce ? "" : "event-status-blink"}`}
            aria-hidden
          />
          <div>
            <p className="font-display text-[clamp(1rem,2vw,1.25rem)] font-bold uppercase tracking-[0.14em] text-ink">
              {eventLaunchNotice.eyebrow}
            </p>
            <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-ink/65 md:text-[15px]">
              {eventLaunchNotice.body}
            </p>
          </div>
        </motion.div>

        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-label text-[10px] font-bold uppercase tracking-[0.28em] text-x-red md:text-right"
        >
          FormX Digital HQ · Drawing in progress
        </motion.p>
      </div>
    </section>
  );
}
