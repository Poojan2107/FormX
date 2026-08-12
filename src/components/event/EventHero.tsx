"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export function EventHero() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative flex min-h-[calc(100dvh-5.25rem)] items-center justify-center overflow-hidden bg-[#f4f2ec] text-ink py-12 sm:py-16 md:py-20 lg:py-24"
      aria-label="FormX Consultants — Where Vision Takes Form"
    >
      {/* Background structural grid & subtle ambient lighting */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 opacity-40 ${reduce ? "" : "event-grid-drift"}`}
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
            "radial-gradient(ellipse 60% 50% at 20% 35%, rgba(224,49,40,0.09), transparent 65%), radial-gradient(ellipse 40% 50% at 85% 80%, rgba(224,49,40,0.04), transparent 55%)",
        }}
      />

      {/* Main hero composition: Logo (Left) | Red Divider Line (Center) | Tagline (Right) */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="grid items-center gap-8 md:grid-cols-12 md:gap-6 lg:gap-10">
          
          {/* LEFT: Official Original FormX Logo Artwork (Pure artwork, no sub-line badges) */}
          <div className="flex items-center justify-center md:col-span-5 md:justify-start">
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.8, ease }}
              className="w-full max-w-[480px] lg:max-w-[560px]"
            >
              <Image
                src="/formx-logo-nav.png"
                alt="FormX Consultants Logo"
                width={840}
                height={360}
                className="h-auto w-full object-contain filter drop-shadow-xs"
                priority
                unoptimized
              />
            </motion.div>
          </div>

          {/* CENTER: Creative FormX Red Divider Line (Desktop Vertical, Mobile Horizontal) */}
          <div className="hidden md:flex md:col-span-1 items-center justify-center h-full py-2">
            <motion.div
              initial={reduce ? false : { opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ delay: 0.2, duration: 0.9, ease }}
              className="relative flex flex-col items-center justify-center h-full min-h-[300px] w-full"
            >
              <div className="w-[2.5px] flex-1 bg-gradient-to-b from-transparent via-x-red to-x-red" />
              <span className="my-4 font-display font-black text-x-red text-2xl select-none drop-shadow-[0_0_14px_rgba(224,49,40,0.45)]">
                ×
              </span>
              <div className="w-[2.5px] flex-1 bg-gradient-to-t from-transparent via-x-red to-x-red" />
            </motion.div>
          </div>

          {/* Mobile Center Horizontal Divider Line */}
          <div className="flex md:hidden items-center justify-center gap-3 my-6 w-full">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-x-red" />
            <span className="font-display font-black text-x-red text-xl">×</span>
            <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-x-red" />
          </div>

          {/* RIGHT: Tagline WHERE VISION TAKES FORM + Supporting Sub-caption */}
          <div className="md:col-span-6 flex flex-col justify-center">
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8, ease }}
              className="font-display text-[clamp(2.6rem,6.4vw,6rem)] font-black uppercase leading-[0.88] tracking-[-0.045em] text-ink select-none flex flex-col"
            >
              <span>WHERE</span>
              <span className="pl-4 sm:pl-10 md:pl-14">VISION</span>
              <span>TAKES</span>
              <span className="pl-4 sm:pl-10 md:pl-14 text-x-red">FORM</span>
            </motion.h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease }}
              className="mt-6 font-body text-[15px] sm:text-[17px] font-medium leading-relaxed text-ink/80 max-w-xl"
            >
              Practical engineering and coordinated design for industrial, residential, and commercial facilities across India and abroad.
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
}

