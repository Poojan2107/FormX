"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { about } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";

const inlineStats = [
  { value: "15+", label: "Real Projects" },
  { value: "10", label: "Engineering Disciplines" },
  { value: "100%", label: "GFC Construction Ready" },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-32 bg-white section-y">
      <Container>
        <div className="grid items-stretch gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">

          {/* LEFT — Image panel (dominant) */}
          <Reveal from="left" className="relative">
            <div className="relative overflow-hidden" style={{ minHeight: "520px" }}>
              <AssetImage
                alt="FormX industrial design practice"
                slot="about/home-about.jpg"
                kind="studio"
                tone="light"
                label="About FormX"
                aspect="landscape"
                fit="cover"
                className="absolute inset-0 h-full w-full object-cover"
              />
              {/* Subtle dark vignette bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Red left accent line */}
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-x-red via-x-red/50 to-transparent" />

              {/* Floating caption */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block border border-white/20 bg-black/50 px-3 py-1.5 font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                  Coordinated Multidisciplinary Delivery
                </span>
              </div>
            </div>
          </Reveal>

          {/* RIGHT — Content */}
          <Reveal delay={0.1} className="flex flex-col justify-center">
            <div className="pl-0 lg:pl-6">
              {/* Eyebrow */}
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-6 bg-x-red" />
                <span className="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-x-red">
                  {about.eyebrow}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-display font-extrabold leading-[1.12] tracking-[-0.02em] text-ink"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.8rem)" }}>
                {about.title}
              </h2>

              {/* Single punchy paragraph */}
              <p className="mt-5 text-[15px] leading-[1.8] text-ink-muted">
                {about.paragraphs[0]}
              </p>

              {/* Inline stats */}
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-line pt-6">
                {inlineStats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                  >
                    <p className="font-display text-2xl font-extrabold text-ink md:text-3xl">{s.value}</p>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/40">
                      {s.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8">
                <a
                  href={about.cta.href}
                  className="group inline-flex items-center gap-2.5 border border-x-red bg-x-red px-6 py-3.5 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-white shadow-[0_6px_20px_rgba(222,48,36,0.28)] transition-all duration-300 hover:bg-transparent hover:text-x-red"
                >
                  {about.cta.label}
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
