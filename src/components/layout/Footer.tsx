"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight, Download } from "lucide-react";
import { nav, site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-[#0a0a0a] text-white">
      {/* Background grid texture */}
      <div className="pointer-events-none absolute inset-0 pattern-grid-dark opacity-30" aria-hidden />

      {/* Red top bar */}
      <div className="relative h-[3px] w-full bg-gradient-to-r from-transparent via-x-red to-transparent" />

      <Container className="relative z-10">
        {/* Main 3-column grid */}
        <div className="grid gap-12 py-16 md:py-20 lg:grid-cols-[1.8fr_1fr_1fr] lg:gap-16">

          {/* COL 1: Brand */}
          <div>
            <Logo invert variant="full" />
            <p className="mt-5 max-w-sm text-[14px] leading-[1.8] text-white/50">
              Multidisciplinary design & engineering consultancy delivering coordinated, construction-ready packages across Architecture, Structure, Civil, and MEP.
            </p>

            {/* Contact cards */}
            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 group"
              >
                <div className="flex size-8 shrink-0 items-center justify-center border border-white/10 bg-white/5 text-x-red transition-colors group-hover:border-x-red/50 group-hover:bg-x-red/10">
                  <Mail className="size-3.5" />
                </div>
                <span className="text-[13px] text-white/60 transition-colors group-hover:text-white">
                  {site.email}
                </span>
              </a>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 group"
              >
                <div className="flex size-8 shrink-0 items-center justify-center border border-white/10 bg-white/5 text-x-red transition-colors group-hover:border-x-red/50 group-hover:bg-x-red/10">
                  <Phone className="size-3.5" />
                </div>
                <span className="text-[13px] text-white/60 transition-colors group-hover:text-white">
                  {site.phone}
                </span>
              </a>
              <div className="flex items-center gap-3">
                <div className="flex size-8 shrink-0 items-center justify-center border border-white/10 bg-white/5 text-x-red">
                  <MapPin className="size-3.5" />
                </div>
                <span className="text-[13px] text-white/40">{site.addressDetail}</span>
              </div>
            </div>
          </div>

          {/* COL 2: Navigation */}
          <div>
            <p className="mb-5 font-display text-[10px] font-bold uppercase tracking-[0.28em] text-x-red">
              Navigate
            </p>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-[13px] text-white/50 transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-x-red transition-all duration-300 group-hover:w-4" />
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/career" className="group flex items-center gap-2 text-[13px] text-white/50 transition-colors hover:text-white">
                  <span className="h-px w-0 bg-x-red transition-all duration-300 group-hover:w-4" />
                  Career
                </Link>
              </li>
            </ul>
          </div>

          {/* COL 3: Quick actions */}
          <div>
            <p className="mb-5 font-display text-[10px] font-bold uppercase tracking-[0.28em] text-x-red">
              Quick Actions
            </p>
            <div className="space-y-3">
              <Link
                href="/contact"
                className="group flex w-full items-center justify-between border border-white/15 bg-white/[0.04] px-4 py-3.5 transition-all hover:border-x-red/60 hover:bg-x-red/10"
              >
                <span className="font-display text-[12px] font-bold uppercase tracking-[0.14em] text-white/80 group-hover:text-white">
                  Book Consultation
                </span>
                <ArrowUpRight className="size-4 text-x-red transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a
                href={site.brochurePath}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-between border border-white/15 bg-white/[0.04] px-4 py-3.5 transition-all hover:border-x-red/60 hover:bg-x-red/10"
              >
                <span className="font-display text-[12px] font-bold uppercase tracking-[0.14em] text-white/80 group-hover:text-white">
                  Download Brochure
                </span>
                <Download className="size-4 text-x-red" />
              </a>
              <a
                href={site.linkedinCompany}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-between border border-white/15 bg-white/[0.04] px-4 py-3.5 transition-all hover:border-x-red/60 hover:bg-x-red/10"
              >
                <span className="font-display text-[12px] font-bold uppercase tracking-[0.14em] text-white/80 group-hover:text-white">
                  LinkedIn
                </span>
                <svg className="size-4 fill-current text-x-red" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Monumental brand typography */}
        <div className="relative border-t border-white/10 pb-6 pt-10 overflow-hidden">
          <div className="flex flex-col items-start md:flex-row md:items-baseline md:justify-between gap-4">
            <div className="group cursor-default select-none">
              <span
                className="block font-display font-black uppercase leading-none tracking-tighter text-white/10 transition-colors duration-700 group-hover:text-white/15"
                style={{ fontSize: "clamp(3.5rem, 11vw, 10rem)" }}
              >
                FORM<span className="text-x-red/60 transition-colors group-hover:text-x-red">×</span>
              </span>
              <p className="mt-1 font-display text-[10px] font-semibold uppercase tracking-[0.3em] text-white/20">
                23°01'N 72°35'E · Ahmedabad, Gujarat, India
              </p>
            </div>
            <span className="border border-x-red/30 bg-x-red/10 px-3 py-1.5 font-display text-[11px] font-bold uppercase tracking-[0.28em] text-x-red/80 self-center">
              Design | Engineering
            </span>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06] bg-black/30 py-4">
        <Container className="flex flex-col items-start gap-2 text-[11px] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} FormX Consultants LLP. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href={site.hirenLinkedin} target="_blank" rel="noopener noreferrer" className="hover:text-x-red transition-colors">
              Hiren J. Shah
            </a>
            <Link href="/contact" className="hover:text-x-red transition-colors">Contact</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
