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
      initial={reduce ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={reduce ? undefined : { y: -4 }}
      className={`group relative flex min-h-[220px] flex-col justify-end overflow-hidden border-b border-white/10 bg-white/[0.02] px-6 py-10 transition-all duration-300 hover:border-x-red/40 hover:bg-white/[0.04] md:min-h-[280px] md:border-b-0 md:px-10 ${
        index > 0 ? "border-t border-white/10 md:border-t-0 md:border-l" : ""
      }`}
    >
      <span aria-hidden className="pointer-events-none absolute left-3 top-3 font-label text-[10px] text-x-red/60 select-none">+</span>
      <span aria-hidden className="pointer-events-none absolute right-3 top-3 font-label text-[10px] text-x-red/60 select-none">+</span>
      <span aria-hidden className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-x-red/0 to-transparent transition-all duration-300 group-hover:via-x-red" />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-2 -top-6 font-display text-[clamp(5rem,12vw,9rem)] font-black leading-none text-white/[0.04] transition-colors group-hover:text-white/[0.08]"
      >
        0{index + 1}
      </span>
      <p className="relative font-display text-[clamp(3.5rem,8vw,6rem)] font-black leading-none tracking-tight text-white tabular-nums">
        {prefix}
        <span className="text-x-red drop-shadow-[0_0_20px_rgba(224,49,40,0.35)]">{activeDisplay}</span>
        {suffix}
      </p>
      <span className="relative mt-5 h-[3px] w-12 bg-x-red transition-all duration-300 group-hover:w-20" aria-hidden />
      <p className="relative mt-4 font-label text-[12px] font-bold uppercase tracking-[0.28em] text-white/50 transition-colors group-hover:text-white/80 md:text-[13px]">
        {label}
      </p>
    </motion.div>
  );
}

export function EventStats() {
  return (
    <section id="stats" className="scroll-mt-[5.75rem] bg-[#0a0a09]">
      <div className="border-b border-white/10 px-6 py-5 md:px-10">
        <p className="font-label text-[11px] font-bold uppercase tracking-[0.32em] text-x-red">
          Spec 02 · Evidence
        </p>
      </div>
      <div className="mx-auto grid max-w-[1400px] md:grid-cols-3">
        {eventStats.map((stat, i) => (
          <StatBlock key={stat.label} value={stat.value} label={stat.label} index={i} />
        ))}
      </div>
    </section>
  );
}
