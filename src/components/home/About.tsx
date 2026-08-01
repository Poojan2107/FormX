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
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10 lg:items-center">
          {/* Editorial media — tall frame, minimal overlay */}
          <Reveal from="left" className="relative lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#111] md:aspect-[16/11] lg:aspect-auto lg:min-h-[560px]">
              <AssetImage
                alt="FormX practice — coordinated multidisciplinary engineering"
                slot="about/home-about.jpg"
                kind="studio"
                tone="dark"
                aspect="auto"
                fit="cover"
                objectPosition="center 30%"
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="absolute inset-0 h-full w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <div className="absolute left-0 top-0 h-full w-1 bg-x-red" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <p className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-x-red">
                  Practice studio
                </p>
                <p className="mt-1 max-w-sm font-display text-lg font-bold uppercase leading-snug tracking-tight text-white md:text-xl">
                  Coordinated multidisciplinary engineering
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="flex flex-col justify-center lg:col-span-5">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-x-red" />
              <span className="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-x-red">
                {about.eyebrow}
              </span>
            </div>

            <h2 className="font-display text-3xl font-extrabold uppercase leading-[1.08] tracking-tight text-ink md:text-4xl">
              {about.title}
            </h2>

            <p className="mt-5 max-w-[52ch] text-[15px] leading-[1.75] text-ink-muted">
              {about.paragraphs[0]}
            </p>

            <ul className="mt-7 space-y-3">
              {credentials.map((cred) => (
                <li key={cred} className="flex items-start gap-3 text-[13px] font-semibold text-ink">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-x-red" />
                  <span>{cred}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-3 gap-4 border-y border-line py-5">
              {inlineStats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.06 * i, duration: 0.35 }}
                >
                  <p className="font-display text-2xl font-black text-ink">{s.value}</p>
                  <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.12em] text-ink/40">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-7">
              <Link
                href={about.cta.href}
                transitionTypes={["nav-forward"]}
                className="group inline-flex items-center gap-2.5 bg-x-red px-6 py-3.5 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-x-red-hover"
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
