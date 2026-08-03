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
  { value: "15 Lakh+", label: "Sq.Ft Designed" },
  { value: "15+", label: "Industrial Clients" },
];

const credentials = [
  "Single-Window Multidisciplinary Accountability",
  "Construction-Ready GFC Precision & Statutory Compliance",
  "Continuous On-Site Support & Technical RFI Resolution",
];

export function About() {
  return (
    <section id="about" className="scroll-mt-32 border-b border-line bg-white py-16 md:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 lg:items-center">
          {/* Left Media Stage with Glass Frame Badge & Red Border */}
          <Reveal from="left" className="relative lg:col-span-7">
            <div className="formx-cut-x formx-edge formx-edge-x relative aspect-[4/3] overflow-hidden border border-line bg-[#111] shadow-2xl md:aspect-[16/11] lg:aspect-auto lg:min-h-[580px]">
              <AssetImage
                alt="FormX practice — coordinated multidisciplinary engineering"
                slot="about/home-about.jpg"
                kind="studio"
                tone="dark"
                aspect="auto"
                fit="cover"
                objectPosition="center 30%"
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute left-0 top-0 h-full w-1.5 bg-x-red" />
              
              {/* Bottom Card Overlay */}
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <span className="inline-block border border-x-red/40 bg-x-red px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.22em] text-white">
                  Practice Studio · Ahmedabad
                </span>
                <p className="mt-2.5 max-w-md font-display text-xl font-extrabold uppercase leading-snug tracking-tight text-white md:text-2xl">
                  Bridging Design Intent With On-Site Execution
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right Copy Content */}
          <Reveal delay={0.08} className="flex flex-col justify-center lg:col-span-5">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-x-red" />
              <span className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
                {about.eyebrow}
              </span>
            </div>

            <h2 className="font-display text-3xl font-extrabold uppercase leading-[1.08] tracking-tight text-ink md:text-4xl lg:text-5xl">
              {about.title}
            </h2>

            <p className="mt-5 prose-measure text-[15px] leading-[1.8] text-ink-muted">
              {about.paragraphs[0]}
            </p>

            {/* Core Technical Credentials */}
            <ul className="mt-7 space-y-3 border-y border-line/80 py-5">
              {credentials.map((cred) => (
                <li key={cred} className="flex items-start gap-3 text-[13px] font-semibold text-ink">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-x-red" />
                  <span>{cred}</span>
                </li>
              ))}
            </ul>

            {/* Inline Stats Numeric Grid */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              {inlineStats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.06 * i, duration: 0.35 }}
                >
                  <p className="font-display text-2xl font-black text-ink md:text-3xl">{s.value}</p>
                  <p className="mt-0.5 font-display text-[9px] font-bold uppercase tracking-[0.14em] text-ink/40">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href={about.cta.href}
                transitionTypes={["nav-forward"]}
                className="formx-cut-sm group inline-flex items-center gap-2.5 bg-x-red px-7 py-3.5 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-md transition-all hover:bg-x-red-hover hover:shadow-lg"
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
