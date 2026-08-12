"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export function EventHero() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative flex flex-col justify-center items-center overflow-hidden bg-[#f4f2ec] text-ink py-8 sm:py-12 md:py-16 min-h-[calc(100dvh-7.25rem)] lg:h-[calc(100vh-7.25rem)] lg:min-h-[640px] lg:max-h-[1080px]"
      aria-label="FormX Consultants — Where Vision Takes Form"
    >
      {/* Background structural grid & subtle ambient lighting */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 opacity-30 ${reduce ? "" : "event-grid-drift"}`}
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 20% 35%, rgba(224,49,40,0.08), transparent 65%), radial-gradient(ellipse 45% 55% at 85% 75%, rgba(224,49,40,0.04), transparent 55%)",
        }}
      />

      {/* DEAD CENTER (50%) RED VERTICAL DIVIDER LINE (Desktop Only) */}
      <div
        aria-hidden
        className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[80%] max-h-[460px] w-8 flex-col items-center justify-center z-20 pointer-events-none"
      >
        <motion.div
          initial={reduce ? false : { opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ delay: 0.2, duration: 0.9, ease }}
          className="relative flex flex-col items-center justify-center h-full w-full"
        >
          <div className="w-[2.5px] flex-1 bg-gradient-to-b from-transparent via-x-red to-x-red" />
          <span className="my-3 font-display font-black text-x-red text-2xl select-none drop-shadow-[0_0_12px_rgba(224,49,40,0.4)]">
            ×
          </span>
          <div className="w-[2.5px] flex-1 bg-gradient-to-t from-transparent via-x-red to-x-red" />
        </motion.div>
      </div>

      {/* Main hero composition: 50% Left (Logo) | 50% Right (Tagline) */}
      <div className="relative z-10 mx-auto w-full max-w-[1560px] px-4 sm:px-6 md:px-10 lg:px-12">
        <div className="grid items-center gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
          
          {/* LEFT 50%: FormX Logo Artwork (Right-aligned toward center divider line) */}
          <div className="flex items-center justify-center md:justify-end md:pr-6 lg:pr-10">
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.8, ease }}
              className="w-full max-w-[500px] sm:max-w-[580px] lg:max-w-[660px] xl:max-w-[720px]"
            >
              <Image
                src="/formx-logo-hd.png"
                alt="FormX Consultants Logo"
                width={2800}
                height={1244}
                className="h-auto w-full object-contain filter drop-shadow-xs"
                priority
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 720px"
              />
            </motion.div>
          </div>

          {/* Mobile Center Horizontal Divider Line */}
          <div className="flex md:hidden items-center justify-center gap-3 my-6 w-full">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-x-red" />
            <span className="font-display font-black text-x-red text-xl">×</span>
            <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-x-red" />
          </div>

          {/* RIGHT 50%: Tagline WHERE VISION TAKES FORM (Centered on mobile, staggered on desktop) */}
          <div className="flex flex-col justify-center items-center md:items-start md:pl-4 lg:pl-8 w-full mt-2 md:mt-0">
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8, ease }}
              className="font-display text-[clamp(3.6rem,13.5vw,7.6rem)] xl:text-[8.4rem] 2xl:text-[9.2rem] font-black uppercase leading-[0.82] tracking-[-0.03em] text-ink select-none flex flex-col text-center md:text-left w-full items-center md:items-start"
            >
              <span className="block whitespace-nowrap">WHERE</span>
              <span className="block whitespace-nowrap md:pl-[1.2ch]">VISION</span>
              <span className="block whitespace-nowrap">TAKES</span>
              <span className="block whitespace-nowrap md:pl-[1.2ch] text-x-red">FORM</span>
            </motion.h1>
          </div>

        </div>
      </div>
    </section>
  );
}



