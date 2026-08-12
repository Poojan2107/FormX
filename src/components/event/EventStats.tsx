"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { eventStats } from "@/data/eventLanding";

function parseStat(value: string): { prefix: string; num: number; suffix: string } {
  const match = value.match(/^([^\d]*)(\d+)(.*)$/);
  if (!match) return { prefix: "", num: 0, suffix: value };
  return { prefix: match[1], num: Number(match[2]), suffix: match[3] };
}

function StatBlock({
  value,
  label,
  index,
}: {
  value: string;
  label: string;
  index: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const { prefix, num, suffix } = parseStat(value);
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 55, damping: 18 });
  const [display, setDisplay] = useState(0);
  const activeDisplay = reduce ? num : display;

  useEffect(() => {
    if (!inView || reduce) return;
    const t = window.setTimeout(() => motionVal.set(num), index * 140);
    return () => window.clearTimeout(t);
  }, [inView, reduce, num, motionVal, index]);

  useEffect(() => {
    if (reduce) return;
    return spring.on("change", (v) => setDisplay(Math.round(v)));
  }, [spring, reduce]);

  return (
    <motion.div
      ref={ref}
      initial={reduce ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={reduce ? undefined : { y: -4 }}
      className="group relative flex min-h-[220px] flex-col justify-between items-center sm:items-start text-center sm:text-left overflow-hidden border border-white/10 bg-[#121211] p-7 md:p-8 transition-all duration-300 hover:border-x-red/50 hover:bg-[#181817] hover:shadow-[0_12px_32px_-12px_rgba(224,49,40,0.2)]"
    >
      <span aria-hidden className="pointer-events-none absolute left-3 top-3 font-label text-[10px] text-x-red/50 select-none">+</span>
      <span aria-hidden className="pointer-events-none absolute right-3 top-3 font-label text-[10px] text-x-red/50 select-none">+</span>
      
      {/* Background Watermark Number — safely positioned to avoid cut-off */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-4 top-4 font-display text-4xl font-black text-white/[0.05] transition-colors group-hover:text-white/[0.1]"
      >
        0{index + 1}
      </span>

      <div className="flex flex-col items-center sm:items-start">
        <p className="relative font-display text-[clamp(2.5rem,4.5vw,4.25rem)] font-black leading-none tracking-tight text-white tabular-nums">
          {prefix}
          <span className="text-x-red drop-shadow-[0_0_24px_rgba(224,49,40,0.4)]">{activeDisplay}</span>
          <span className="text-white ml-1 text-[0.7em] font-extrabold">{suffix}</span>
        </p>
        <span className="relative mt-4 block h-[3px] w-10 bg-x-red transition-all duration-300 group-hover:w-16" aria-hidden />
      </div>

      <p className="relative mt-6 font-label text-[11.5px] font-black uppercase tracking-[0.26em] text-white/60 transition-colors group-hover:text-white md:text-[12.5px] text-center sm:text-left">
        {label}
      </p>
    </motion.div>
  );
}

export function EventStats() {
  return (
    <section id="stats" className="scroll-mt-[5.75rem] bg-[#0a0a09] py-12 md:py-16">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 sm:px-6 md:px-8">
        {eventStats.map((stat, i) => (
          <StatBlock key={stat.label} value={stat.value} label={stat.label} index={i} />
        ))}
      </div>
    </section>
  );
}
