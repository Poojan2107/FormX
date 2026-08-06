"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { brochureBrand } from "@/data/brochureHome";

const smoothEase = [0.16, 1, 0.3, 1] as const;

export function BrochureHero() {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(!!reduce);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const sheetOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const sheetY = useTransform(scrollYProgress, [0, 0.35], [0, reduce ? 0 : 28]);

  useEffect(() => {
    if (reduce) {
      setReady(true);
      return;
    }
    const t = window.setTimeout(() => setReady(true), 60);
    return () => window.clearTimeout(t);
  }, [reduce]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[calc(100svh-4.25rem)] flex-col overflow-hidden bg-[#fafaf8] sm:min-h-[calc(100svh-4.75rem)]"
      aria-label="FormX Consultants — Where Vision Takes Form"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "180px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-0 w-[46%] bg-gradient-to-l from-[#f2f0ea] to-transparent"
      />
      <motion.span
        aria-hidden
        initial={reduce ? false : { opacity: 0, scale: 0.82 }}
        animate={ready ? { opacity: 0.055, scale: 1 } : undefined}
        transition={{ duration: 2, delay: 0.25, ease: smoothEase }}
        className="pointer-events-none absolute -right-[6%] top-[8%] z-0 select-none font-display font-black leading-none text-x-red"
        style={{ fontSize: "clamp(18rem, 42vw, 34rem)" }}
      >
        ×
      </motion.span>

      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden>
        <span className="absolute left-6 top-6 block h-9 w-9 border-l border-t border-ink/[0.14] md:left-10 md:top-10" />
        <span className="absolute right-6 top-6 block h-9 w-9 border-r border-t border-ink/[0.14] md:right-10 md:top-10" />
        <span className="absolute bottom-8 left-6 block h-9 w-9 border-b border-l border-ink/[0.12] md:bottom-10 md:left-10" />
        <span className="absolute bottom-8 right-6 block h-9 w-9 border-b border-r border-x-red/50 md:bottom-10 md:right-10" />
      </div>

      <motion.div
        style={reduce ? undefined : { opacity: sheetOpacity, y: sheetY }}
        className="relative z-10 flex flex-1 flex-col justify-center"
      >
        <div className="mx-auto grid w-full max-w-[1240px] flex-1 items-center gap-14 px-6 py-16 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-16 lg:py-20 xl:px-20">
          <div className="flex flex-col justify-center">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={ready ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.7, delay: 0.12, ease: smoothEase }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-10 bg-x-red md:w-14" />
              <p className="font-label text-[10px] font-bold tracking-[0.3em] text-x-red">
                Ahmedabad Practice
              </p>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={ready ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.95, delay: 0.28, ease: smoothEase }}
              className="mt-8"
            >
              <Image
                src="/formx-logo-solid.png"
                alt="FormX Consultants"
                width={420}
                height={180}
                priority
                className="h-auto w-[min(72vw,360px)] object-contain md:w-[390px]"
              />
            </motion.div>
          </div>

          <div className="flex flex-col justify-center lg:pl-6">
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 22 }}
              animate={ready ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 1.05, delay: 0.42, ease: smoothEase }}
              className="max-w-[10ch] font-display font-black leading-[0.98] tracking-[-0.04em] text-ink"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5.4rem)" }}
            >
              Where Vision
              <br />
              Takes Form<span className="text-x-red">.</span>
            </motion.h1>

            <motion.div
              initial={reduce ? false : { opacity: 0, scaleX: 0 }}
              animate={ready ? { opacity: 1, scaleX: 1 } : undefined}
              transition={{ duration: 0.85, delay: 0.78, ease: smoothEase }}
              className="mt-8 flex origin-left items-center gap-3"
              aria-hidden
            >
              <span className="h-[2px] w-12 bg-x-red" />
              <span className="font-display text-sm font-black text-x-red">×</span>
              <span className="h-px w-14 bg-ink/[0.14]" />
            </motion.div>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={ready ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.85, delay: 0.92, ease: smoothEase }}
              className="mt-6 max-w-[38ch] text-[15px] font-medium leading-[1.8] text-ink/72 md:text-[16.5px]"
            >
              Architecture, Structure and Infrastructure held together before drawings leave the
              studio.
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={ready ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.8, delay: 1.05, ease: smoothEase }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Link
                href="/contact"
                transitionTypes={["nav-forward"]}
                className="inline-flex w-fit items-center gap-3 bg-x-red px-8 py-4 font-label text-[10px] font-bold tracking-[0.22em] text-white transition-colors hover:bg-x-red-hover"
              >
                Discuss your facility
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#projects"
                className="inline-flex w-fit items-center gap-2 font-label text-[10px] font-bold tracking-[0.22em] text-ink/45 transition-colors hover:text-x-red"
              >
                View projects
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
