"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { hero } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";

const heroImages = [
  { slot: "about/studio-cover.jpg", alt: "FORMX engineering coordination" },
  { slot: "projects/pdf_p1_1.jpeg", alt: "Completed FORMX facility" },
  { slot: "projects/pdf_p4_1.jpeg", alt: "Industrial construction site" },
];

export function Hero() {
  const reduce = useReducedMotion();
  const [imageIndex, setImageIndex] = useState(0);
  const [logoReady, setLogoReady] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setLogoReady(true), reduce ? 0 : 200);
    return () => window.clearTimeout(t);
  }, [reduce]);

  // Founder: photography comes after first paint / on scroll — not on open
  useEffect(() => {
    const reveal = () => setShowPhoto(true);
    if (reduce) {
      const t = window.setTimeout(reveal, 0);
      return () => window.clearTimeout(t);
    }
    const onScroll = () => {
      if (window.scrollY > 40) reveal();
    };
    const delayed = window.setTimeout(reveal, 2200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(delayed);
      window.removeEventListener("scroll", onScroll);
    };
  }, [reduce]);

  useEffect(() => {
    if (reduce || !showPhoto) return;
    const id = window.setInterval(() => {
      setImageIndex((i) => (i + 1) % heroImages.length);
    }, 8000);
    return () => window.clearInterval(id);
  }, [reduce, showPhoto]);

  const current = heroImages[imageIndex];

  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden bg-[#0a0a0a] text-white">
      {/* Photo plane — fades in after open / on scroll */}
      <div
        className="absolute inset-0 z-0 transition-opacity duration-[1600ms] ease-out"
        style={{ opacity: showPhoto ? 1 : 0 }}
      >
        {heroImages.map((img, i) => (
          <div
            key={img.slot}
            className="absolute inset-0 transition-opacity duration-[1400ms] ease-out"
            style={{ opacity: i === imageIndex ? 1 : 0 }}
          >
            <AssetImage
              alt={img.alt}
              slot={img.slot}
              kind="facility"
              aspect="auto"
              fit="cover"
              objectPosition="center"
              priority={i === 0}
              className="absolute inset-0 h-full w-full"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/55 to-[#0a0a0a]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/40" />
      </div>

      {/* Quiet brand grid until photography arrives */}
      <div
        className="pointer-events-none absolute inset-0 z-0 pattern-grid-dark transition-opacity duration-1000"
        style={{ opacity: showPhoto ? 0.15 : 0.35 }}
        aria-hidden
      />

      <Container className="relative z-10 flex min-h-[92vh] flex-col justify-center pb-20 pt-28 md:pb-24 md:pt-32">
        <div className="max-w-4xl">
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="overflow-hidden">
              <motion.h1
                className="font-display font-black uppercase leading-none tracking-[-0.04em] text-white"
                style={{ fontSize: "clamp(3.5rem, 12vw, 8.5rem)" }}
                aria-label="FormX Consultants"
              >
                {"FORM".split("").map((char, i) => (
                  <motion.span
                    key={`f-${i}`}
                    initial={reduce ? false : { y: "110%", opacity: 0 }}
                    animate={logoReady ? { y: 0, opacity: 1 } : undefined}
                    transition={{ duration: 0.55, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
                <motion.span
                  initial={reduce ? false : { scale: 0.4, opacity: 0 }}
                  animate={logoReady ? { scale: 1, opacity: 1 } : undefined}
                  transition={{ duration: 0.5, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block text-x-red"
                >
                  ×
                </motion.span>
              </motion.h1>
            </div>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={logoReady ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="mt-3 font-display text-[12px] font-bold uppercase tracking-[0.32em] text-white/70 md:text-[13px]"
            >
              Consultants · Design | Engineering
            </motion.p>
          </motion.div>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={logoReady ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-6 font-display text-xl font-medium tracking-wide text-white/90 md:text-2xl lg:text-3xl"
          >
            Where Vision Takes Form
          </motion.p>

          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={logoReady ? { opacity: 1 } : undefined}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mb-10 max-w-xl text-[15px] leading-[1.85] text-white/70 md:text-[16px]"
          >
            {hero.body}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={logoReady ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href={hero.primaryCta.href}
              transitionTypes={["nav-forward"]}
              className="group inline-flex items-center gap-3 bg-x-red px-8 py-4 font-display text-[12px] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-x-red-hover"
            >
              {hero.primaryCta.label}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={hero.secondaryCta.href}
              transitionTypes={["nav-forward"]}
              className="inline-flex items-center gap-2.5 border border-white/25 px-8 py-4 font-display text-[12px] font-bold uppercase tracking-[0.18em] text-white/90 transition-colors hover:border-white hover:text-white"
            >
              {hero.secondaryCta.label}
              <ArrowUpRight className="size-4" />
            </Link>
          </motion.div>
        </div>

        {showPhoto ? (
          <p className="absolute bottom-8 right-0 hidden font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white/35 lg:block">
            {current.alt}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
