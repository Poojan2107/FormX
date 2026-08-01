"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { about } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";

const inlineStats = [
  { value: "25+", label: "Projects Delivered" },
  { value: "15 L+", label: "Sq.Ft Designed" },
  { value: "15+", label: "Industrial Clients" },
];

const credentials = [
  "IS & NBC Code Compliant Structural Engineering",
  "Single-Window 3D BIM Clash-Free Coordination",
  "Statutory Approval & GFC Precision Deliverables",
];

export function About() {
  return (
    <section id="about" className="scroll-mt-32 border-b border-line bg-white section-y">
      <Container>
        <div className="grid items-stretch gap-0 lg:grid-cols-[1.15fr_0.85fr]">
          {/* LEFT — Full-bleed media owns the frame */}
          <Reveal from="left" className="relative min-h-[420px] lg:min-h-[560px]">
            <div className="absolute inset-0 overflow-hidden bg-[#111]">
              <AssetImage
                alt="FormX industrial design practice studio"
                slot="about/home-about.jpg"
                kind="studio"
                tone="dark"
                aspect="landscape"
                fit="cover"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-x-red via-x-red/50 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
                <p className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-x-red">
                  Practice studio
                </p>
                <p className="mt-1.5 max-w-md font-display text-sm font-bold uppercase tracking-tight text-white md:text-base">
                  Coordinated multidisciplinary engineering
                </p>
              </div>
            </div>
          </Reveal>

          {/* RIGHT — Content flush to media */}
          <Reveal delay={0.08} className="flex flex-col justify-center border border-line border-t-0 bg-white px-6 py-10 sm:px-8 lg:border-l-0 lg:border-t lg:px-10 lg:py-12">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-x-red" />
              <span className="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-x-red">
                {about.eyebrow}
              </span>
            </div>

            <h2 className="font-display text-3xl font-extrabold uppercase leading-[1.1] tracking-tight text-ink md:text-4xl">
              {about.title}
            </h2>

            <p className="mt-4 max-w-[60ch] text-[14px] leading-[1.75] text-ink-muted md:text-[15px]">
              {about.paragraphs[0]}
            </p>

            <div className="mt-6 space-y-2.5 border-t border-line pt-5">
              {credentials.map((cred) => (
                <div key={cred} className="flex items-start gap-2.5 text-[13px] font-semibold text-ink">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-x-red" />
                  <span>{cred}</span>
                </div>
              ))}
            </div>

            <div className="mt-7 grid grid-cols-3 gap-3 border-t border-line pt-6">
              {inlineStats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * i, duration: 0.4 }}
                >
                  <p className="font-display text-xl font-black text-ink md:text-2xl">{s.value}</p>
                  <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-ink/40">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-7">
              <Link
                href={about.cta.href}
                transitionTypes={["nav-forward"]}
                className="formx-cut-sm formx-edge formx-edge-sm group inline-flex items-center gap-2.5 bg-x-red px-6 py-3.5 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-x-red-hover"
              >
                {about.cta.label}
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
