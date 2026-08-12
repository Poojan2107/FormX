"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FormxTransparentLogo } from "@/components/ui/FormxTransparentLogo";

const ease = [0.16, 1, 0.3, 1] as const;

export function EventHero() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative flex min-h-[calc(100dvh-5.25rem)] items-center justify-center overflow-hidden bg-[#f4f2ec] text-ink py-10 sm:py-14 md:py-16 lg:py-20"
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
            "radial-gradient(ellipse 60% 50% at 25% 35%, rgba(224,49,40,0.09), transparent 65%), radial-gradient(ellipse 40% 50% at 85% 80%, rgba(224,49,40,0.04), transparent 55%)",
        }}
      />

      {/* Main hero composition: Logo (Left) | Red Divider Line (Center) | Tagline (Right) */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="grid items-center gap-6 md:grid-cols-12 md:gap-4 lg:gap-8">
          
          {/* LEFT: FormX Logo (Crisp transparent vector lockup) */}
          <div className="flex items-center justify-center md:col-span-5 md:justify-start">
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.8, ease }}
              className="w-full max-w-[420px] lg:max-w-[480px]"
            >
              <FormxTransparentLogo size="hero" align="left" />
            </motion.div>
          </div>

          {/* CENTER: Creative FormX Red Divider Line (Desktop Vertical, Mobile Horizontal) */}
          <div className="hidden md:flex md:col-span-1 items-center justify-center h-full py-4">
            <motion.div
              initial={reduce ? false : { opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ delay: 0.2, duration: 0.9, ease }}
              className="relative flex flex-col items-center justify-center h-full min-h-[280px] w-full"
            >
              <div className="w-[2px] flex-1 bg-gradient-to-b from-transparent via-x-red to-x-red/50" />
              <span className="my-4 font-display font-black text-x-red text-2xl select-none drop-shadow-[0_0_12px_rgba(224,49,40,0.4)]">
                ×
              </span>
              <div className="w-[2px] flex-1 bg-gradient-to-t from-transparent via-x-red to-x-red/50" />
            </motion.div>
          </div>

          {/* Mobile Center Horizontal Divider Line */}
          <div className="flex md:hidden items-center justify-center gap-3 my-4 w-full">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-x-red" />
            <span className="font-display font-black text-x-red text-xl">×</span>
            <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-x-red" />
          </div>

          {/* RIGHT: Tagline WHERE VISION TAKES FORM */}
          <div className="md:col-span-6 flex flex-col justify-center">
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8, ease }}
              className="font-display text-[clamp(2.3rem,5.6vw,5.5rem)] font-black uppercase leading-[0.9] tracking-[-0.04em] text-ink select-none flex flex-col"
            >
              <span>WHERE</span>
              <span className="pl-4 sm:pl-12 md:pl-16">VISION</span>
              <span>TAKES</span>
              <span className="pl-4 sm:pl-12 md:pl-16 text-x-red">FORM</span>
            </motion.h1>
          </div>

        </div>
      </div>
    </section>
  );
}

