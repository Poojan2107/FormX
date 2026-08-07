"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { formxMethod } from "@/data/method";

/** Philosophy chapter — unique project photography, no excessive scroll height. */
export function AboutManifesto() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgScale = useTransform(scrollYProgress, [0.05, 0.55], [1.08, 1]);

  return (
    <section ref={ref} className="bg-[#0a0a0a] text-white">
      <div className="mx-auto grid max-w-[1480px] lg:grid-cols-2">
        <div className="relative min-h-[42svh] overflow-hidden sm:min-h-[50svh] lg:sticky lg:top-0 lg:h-dvh lg:min-h-0">
          <motion.div
            style={reduce ? undefined : { scale: imgScale }}
            className="absolute inset-0 will-change-transform"
          >
            <Image
              src="/assets/projects/peb-warehouse.jpg"
              alt="PEB warehouse — built FormX work"
              fill
              unoptimized
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/30" />
          <span aria-hidden className="absolute left-0 top-0 z-10 h-[3px] w-32 bg-x-red" />

          <div className="absolute bottom-10 left-8 z-10 md:bottom-14 md:left-12">
            <p className="font-label text-[10px] tracking-[0.32em] text-x-red">{formxMethod.code}</p>
            <p
              className="mt-3 font-display font-black tracking-[-0.04em]"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.55rem)" }}
            >
              Before <span className="text-x-red">×</span> Issue
            </p>
          </div>
        </div>

        <div className="relative flex flex-col justify-center px-6 py-16 md:px-14 md:py-20 lg:px-16 xl:px-20">
          <Reveal>
            <p className="font-label text-[10.5px] uppercase tracking-[0.34em] text-x-red">
              Philosophy
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <blockquote
              className="mt-8 font-display font-black leading-[1.02] tracking-[-0.045em] md:mt-10"
              style={{ fontSize: "clamp(2.1rem, 4.4vw, 3.55rem)" }}
            >
              Every unresolved
              <br />
              coordination issue
              <br />
              appears on site.
            </blockquote>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-9 max-w-[32ch] text-[16px] leading-[1.85] text-white/70 md:mt-11">
              Disciplines answer each other first. Details are tested for buildability. Issue is a
              commitment — not a milestone.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-10 flex items-center gap-3.5 md:mt-12">
              <span className="h-[2px] w-10 bg-x-red" />
              <p className="font-display text-xl font-extrabold tracking-tight text-x-red md:text-2xl">
                {formxMethod.stamp}
              </p>
            </div>
          </Reveal>

          <div className="relative z-10 mt-14 space-y-0 border-t border-white/10 pt-2 lg:mt-16">
            {formxMethod.disciplines.map((d, i) => (
              <Reveal key={d} delay={0.05 * i}>
                <div className="group flex items-baseline gap-6 border-b border-white/[0.08] py-6 transition-colors hover:border-x-red/45">
                  <span className="font-label text-[10px] tracking-[0.22em] text-x-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="font-display font-extrabold tracking-[-0.03em] transition-transform duration-300 group-hover:translate-x-1.5"
                    style={{ fontSize: "clamp(1.55rem, 2.6vw, 2.35rem)" }}
                  >
                    {d}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
