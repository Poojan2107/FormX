"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Download, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { NewsletterForm } from "@/components/shared/NewsletterForm";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#080808] text-white">
      {/* Red accent top bar */}
      <div className="h-1 w-full bg-x-red" />

      <Container>
        {/* Main Grid — Clean & Non-Repetitive */}
        <div className="grid gap-10 py-14 md:py-16 lg:grid-cols-[1.5fr_1fr]">
          {/* Company Information & Direct Contact */}
          <div>
            <Logo invert variant="full" />
            <p className="mt-4 max-w-md text-[14px] leading-[1.8] text-white/65">
              Multidisciplinary architectural and structural engineering consultancy — delivering precise, coordinated, and construction-ready packages from concept stage to site execution.
            </p>

            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:gap-8">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2.5 text-[13px] text-white/70 transition-colors hover:text-x-red"
              >
                <Mail className="size-4 shrink-0 text-x-red" />
                {site.email}
              </a>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2.5 text-[13px] text-white/70 transition-colors hover:text-x-red"
              >
                <Phone className="size-4 shrink-0 text-x-red" />
                {site.phone}
              </a>
              <div className="flex items-center gap-2.5 text-[13px] text-white/60">
                <MapPin className="size-4 shrink-0 text-x-red" />
                <span>{site.addressDetail}</span>
              </div>
            </div>
          </div>

          {/* Brochure & Newsletter Block */}
          <div className="flex flex-col justify-between rounded-sm border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <div>
              <p className="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-x-red">
                Company Presentation
              </p>
              <p className="mt-2 text-[13px] text-white/70 leading-relaxed">
                Download the official FormX Consultants capability presentation PDF.
              </p>
              <a
                href={site.brochurePath}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2.5 border border-x-red/40 bg-x-red px-5 py-3.5 font-display text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_6px_20px_rgba(222,48,36,0.3)] transition-all hover:bg-white hover:text-ink"
              >
                <Download className="size-4" />
                Download Brochure PDF
              </a>
            </div>

            <div className="mt-8 border-t border-white/10 pt-5">
              <p className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">
                Subscribe to Technical Insights
              </p>
              <div className="mt-3">
                <NewsletterForm invert />
              </div>
            </div>
          </div>
        </div>

        {/* Eye-Catching Jacobs Monumental Brand Banner */}
        <div className="relative border-t border-white/10 py-10 md:py-14 overflow-hidden">
          <div className="flex flex-col md:flex-row items-baseline justify-between gap-6">
            <div className="relative">
              <span className="font-display text-[clamp(3.5rem,12vw,11rem)] font-black uppercase tracking-tighter leading-none text-white select-none drop-shadow-lg">
                FORMX<span className="text-x-red animate-pulse">×</span>
              </span>
            </div>

            <div className="flex flex-col items-start md:items-end">
              <span className="font-display text-[13px] font-bold uppercase tracking-[0.28em] text-x-red">
                Design | Engineering
              </span>
              <span className="mt-1 text-[12px] text-white/50">
                Ahmedabad · Gujarat · India
              </span>
            </div>
          </div>
        </div>
      </Container>

      {/* Sub-Footer Bar */}
      <div className="border-t border-white/10 bg-black py-5">
        <Container className="flex flex-col gap-4 text-[12px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} FormX Consultants LLP. All rights reserved.</p>

          <div className="flex items-center gap-6">
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
            <Link href="/contact" className="hover:text-x-red">
              Enquire / Contact
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
