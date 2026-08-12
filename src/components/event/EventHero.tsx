"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

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
            "radial-gradient(ellipse 60% 50% at 75% 35%, rgba(224,49,40,0.09), transparent 65%), radial-gradient(ellipse 40% 50% at 15% 80%, rgba(224,49,40,0.04), transparent 55%)",
        }}
      />

      {/* Main hero composition */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="grid items-center gap-8 md:grid-cols-12 md:gap-8 lg:gap-16">
          {/* Big and bold typography */}
          <div className="md:col-span-7 lg:col-span-7 flex flex-col justify-center">
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease }}
              className="font-display text-[clamp(2.2rem,6.8vw,6.5rem)] font-black uppercase leading-[0.9] tracking-[-0.04em] text-ink select-none flex flex-col"
            >
              <span>WHERE</span>
              <span className="pl-4 sm:pl-16 md:pl-20">VISION</span>
              <span>TAKES</span>
              <span className="pl-4 sm:pl-16 md:pl-20 text-x-red">FORM</span>
            </motion.h1>
          </div>

          {/* Big ass FormX logo - 100% transparent vector logo without background */}
          <div className="flex items-center justify-center md:col-span-5 lg:col-span-5 md:justify-end">
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.8, ease }}
              className="w-full max-w-[440px] lg:max-w-[520px]"
            >
              <Image
                src="/formx-logo-nav.png"
                alt="FormX Consultants Logo"
                width={640}
                height={280}
                priority
                className="h-auto w-full object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

