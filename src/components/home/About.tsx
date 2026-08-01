"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, CheckCircle2 } from "lucide-react";
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
    <section id="about" className="scroll-mt-32 bg-white py-20 md:py-28 border-b border-line">
      <Container>
        <div className="grid items-stretch gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">

          {/* LEFT — Dominant Practice Photo Panel */}
          <Reveal from="left" className="relative">
            <div className="relative overflow-hidden shadow-2xl border border-line" style={{ minHeight: "520px" }}>
              <AssetImage
                alt="FormX industrial design practice studio"
                slot="about/home-about.jpg"
                kind="studio"
                tone="light"
                label="About FormX"
                aspect="landscape"
                fit="cover"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-x-red via-x-red/50 to-transparent" />

              {/* Floating Caption */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block border border-white/20 bg-black/60 px-3.5 py-2 font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md shadow-md">
                  Coordinated Multidisciplinary Engineering Practice
                </span>
              </div>
            </div>
          </Reveal>

          {/* RIGHT — Authoritative Content */}
          <Reveal delay={0.1} className="flex flex-col justify-center">
            <div className="pl-0 lg:pl-4">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-x-red" />
                <span className="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-x-red">
                  {about.eyebrow}
                </span>
              </div>

              <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl lg:text-5xl leading-[1.1]">
                {about.title}
              </h2>

              {/* Text with max 65ch line length limit for optimal readability */}
              <p className="mt-5 max-w-[65ch] text-[15px] leading-[1.8] text-ink-muted">
                At FORMX Consultants, we operate as an expert multi-disciplinary consultancy practice bridging complex architectural design intent with on-site construction execution across industrial, commercial, and institutional developments.
              </p>

              {/* Authority Credentials Checklist */}
              <div className="mt-6 space-y-2.5 border-t border-line pt-5">
                {credentials.map((cred) => (
                  <div key={cred} className="flex items-center gap-2.5 text-[13px] font-bold text-ink">
                    <CheckCircle2 className="size-4 text-x-red shrink-0" />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>

              {/* Inline Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-line pt-6">
                {inlineStats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                  >
                    <p className="font-display text-2xl font-black text-ink md:text-3xl">{s.value}</p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-ink/40">
                      {s.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Link
                  href={about.cta.href}
                  transitionTypes={["nav-forward"]}
                  className="group inline-flex items-center gap-2.5 border border-x-red bg-x-red px-7 py-4 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-white shadow-[0_6px_20px_rgba(222,48,36,0.3)] transition-all duration-300 hover:bg-white hover:text-ink"
                >
                  {about.cta.label}
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
