"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Download, ArrowUpRight, ShieldCheck, Send } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-[#070707] text-white">
      {/* Background Architectural Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 pattern-grid-dark opacity-35" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1000px 600px at 50% 100%, rgba(222,48,36,0.12), transparent 75%)",
        }}
        aria-hidden
      />

      {/* Red Accent Top Indicator Bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-x-red via-red-500 to-x-red" />

      {/* Top CTA Banner Strip — High-Impact Entry */}
      <div className="border-b border-white/10 bg-white/[0.02] py-8">
        <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-x-red">
              Start Your Project
            </span>
            <h3 className="mt-1 font-display text-xl font-bold uppercase tracking-tight text-white md:text-2xl">
              Ready to engineer your next facility?
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 border border-x-red bg-x-red px-6 py-3 font-display text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_6px_20px_rgba(222,48,36,0.35)] transition-all hover:bg-white hover:text-ink"
            >
              Book a Consultation
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href={site.brochurePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 bg-white/5 px-5 py-3 font-display text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-all hover:border-white hover:bg-white/10"
            >
              <Download className="size-4 text-x-red" />
              Download Brochure PDF
            </a>
          </div>
        </Container>
      </div>

      <Container className="relative z-10">
        {/* Middle Information Section — Zero Duplicate Nav Links */}
        <div className="grid gap-10 py-14 lg:grid-cols-[1.4fr_1fr]">
          {/* Brand & Direct Contacts */}
          <div>
            <Logo invert variant="full" />
            <p className="mt-4 max-w-lg text-[14px] leading-[1.8] text-white/65">
              Multidisciplinary design & engineering consultancy — delivering precise, coordinated, construction-ready packages across Architecture, Structure, Civil, and MEP for industrial and infrastructure clients.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <a
                href={`mailto:${site.email}`}
                className="group flex flex-col border border-white/10 bg-white/[0.03] p-4 transition-all hover:border-x-red/50 hover:bg-white/[0.06]"
              >
                <div className="flex items-center gap-2 text-x-red">
                  <Mail className="size-4" />
                  <span className="font-display text-[10px] font-bold uppercase tracking-wider text-white/50">Email Us</span>
                </div>
                <span className="mt-2 text-[13px] font-medium text-white group-hover:text-x-red transition-colors">
                  {site.email}
                </span>
              </a>

              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="group flex flex-col border border-white/10 bg-white/[0.03] p-4 transition-all hover:border-x-red/50 hover:bg-white/[0.06]"
              >
                <div className="flex items-center gap-2 text-x-red">
                  <Phone className="size-4" />
                  <span className="font-display text-[10px] font-bold uppercase tracking-wider text-white/50">Call Us</span>
                </div>
                <span className="mt-2 text-[13px] font-medium text-white group-hover:text-x-red transition-colors">
                  {site.phone}
                </span>
              </a>

              <div className="flex flex-col border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center gap-2 text-x-red">
                  <MapPin className="size-4" />
                  <span className="font-display text-[10px] font-bold uppercase tracking-wider text-white/50">Headquarters</span>
                </div>
                <span className="mt-2 text-[13px] font-medium text-white/80">
                  {site.addressDetail}
                </span>
              </div>
            </div>
          </div>

          {/* Practice Assurance Card */}
          <div className="flex flex-col justify-between border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <div>
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.24em] text-x-red">
                Engineering Standard
              </span>
              <h4 className="mt-2 font-display text-lg font-bold uppercase text-white">
                Coordinated GFC Packages
              </h4>
              <p className="mt-2 text-[13px] text-white/60 leading-relaxed">
                Zero-clash architectural, structural, and MEP documentation engineered for constructability and site efficiency.
              </p>
              <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
                <li className="flex items-center gap-2 text-[12px] text-white/80">
                  <ShieldCheck className="size-4 text-x-red shrink-0" />
                  100% Construction-Ready GFC Drawings
                </li>
                <li className="flex items-center gap-2 text-[12px] text-white/80">
                  <ShieldCheck className="size-4 text-x-red shrink-0" />
                  IS 13920 & IS 1893 Seismic Detailing
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Jacobs Creative Monumental Brand Typography Banner */}
        <div className="relative border-t border-white/10 py-12 md:py-16 overflow-hidden">
          <div className="flex flex-col md:flex-row items-baseline justify-between gap-6">
            <div className="relative group cursor-default">
              <span className="font-display text-[clamp(4rem,13vw,12rem)] font-black uppercase tracking-tighter leading-none text-white transition-all duration-500 group-hover:text-white/90">
                FORMX<span className="text-x-red inline-block transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">×</span>
              </span>
              <p className="mt-2 font-display text-[11px] font-semibold uppercase tracking-[0.3em] text-white/40">
                23°01'N 72°35'E · AHMEDABAD, GUJARAT, INDIA
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end">
              <span className="border border-x-red/40 bg-x-red/10 px-3.5 py-1.5 font-display text-[12px] font-bold uppercase tracking-[0.28em] text-x-red">
                Design | Engineering
              </span>
              <p className="mt-3 max-w-xs text-left md:text-right text-[12px] text-white/45 leading-relaxed">
                Multidisciplinary consultancy — architecture, structural engineering, civil infrastructure, and MEP delivery.
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Creative Sub-Footer Bar with Socials */}
      <div className="border-t border-white/10 bg-black py-5">
        <Container className="flex flex-col gap-4 text-[12px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} FormX Consultants LLP. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href={site.linkedinCompany}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/70 transition-colors hover:text-x-red"
            >
              <svg className="size-4 fill-current text-x-red" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              FormX LinkedIn
            </a>
            <a
              href={site.hirenLinkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/70 transition-colors hover:text-x-red"
            >
              Hiren J. Shah LinkedIn
            </a>
            <Link href="/contact" className="text-x-red font-semibold hover:underline">
              Enquire / Contact
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
