"use client";

import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { Logo } from "@/components/ui/Logo";

export function EventCta() {
  return (
    <footer id="contact" className="scroll-mt-[5.75rem] border-t border-white/10 bg-[#090908] py-16 text-white md:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 md:px-12">
        {/* 3-Column Balanced Footer Grid (NAVIGATE column removed as requested) */}
        <div className="grid gap-10 border-b border-white/10 pb-16 lg:grid-cols-12 lg:gap-12">
          
          {/* Column 1: Brand Logo & Tagline */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            <Logo variant="full" invert className="h-11 sm:h-13 w-auto" />

            <div className="max-w-md space-y-3">
              <p className="font-body text-[15px] sm:text-[16px] leading-relaxed text-white/80">
                Architecture, structure, and infrastructure — coordinated before drawings leave the studio.
              </p>
              <p className="font-label text-[11.5px] font-extrabold uppercase tracking-[0.24em] text-white/50">
                WHERE VISION TAKES FORM
              </p>
            </div>
          </div>

          {/* Column 2: Studio Address & Inquiries */}
          <div className="flex flex-col gap-6 lg:col-span-4">
            {/* Studio Address */}
            <div className="space-y-2">
              <p className="font-label text-[11px] font-black uppercase tracking-[0.28em] text-x-red">
                STUDIO ADDRESS
              </p>
              <div className="flex items-start gap-2.5 text-[14.5px] sm:text-[15.5px] font-medium text-white/90">
                <MapPin className="mt-0.5 size-4 shrink-0 text-x-red" />
                <span>{site.addressDetail}</span>
              </div>
            </div>

            {/* Inquiries */}
            <div className="space-y-2">
              <p className="font-label text-[11px] font-black uppercase tracking-[0.28em] text-x-red">
                INQUIRIES
              </p>
              <div className="space-y-2 text-[14.5px] sm:text-[15.5px] font-medium">
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2.5 text-white/90 transition-colors hover:text-x-red"
                >
                  <Mail className="size-4 shrink-0 text-x-red" />
                  <span>{site.email}</span>
                </a>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2.5 text-white/90 transition-colors hover:text-x-red"
                >
                  <Phone className="size-4 shrink-0 text-x-red" />
                  <span>{site.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Quick Actions */}
          <div className="flex flex-col gap-5 lg:col-span-3">
            <p className="font-label text-[11px] font-black uppercase tracking-[0.28em] text-x-red">
              QUICK ACTIONS
            </p>

            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${site.email}?subject=Consultation%20Inquiry`}
                className="group flex items-center justify-between border border-white/20 bg-white/[0.03] px-5 py-4 font-label text-[12px] sm:text-[13px] font-black uppercase tracking-[0.18em] text-white transition-all hover:border-x-red hover:bg-x-red/10"
              >
                <span>BOOK CONSULTATION</span>
                <ArrowUpRight className="size-4 text-x-red transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={site.brochurePath}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border border-white/20 bg-white/[0.03] px-5 py-4 font-label text-[12px] sm:text-[13px] font-black uppercase tracking-[0.18em] text-white transition-all hover:border-x-red hover:bg-x-red/10"
              >
                <span>DOWNLOAD BROCHURE</span>
                <ArrowUpRight className="size-4 text-x-red transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={site.linkedinCompany}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border border-white/20 bg-white/[0.03] px-5 py-4 font-label text-[12px] sm:text-[13px] font-black uppercase tracking-[0.18em] text-white transition-all hover:border-x-red hover:bg-x-red/10"
              >
                <span>LINKEDIN</span>
                <ArrowUpRight className="size-4 text-x-red transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

        </div>

        {/* GIANT Master Architectural Vector FormX Logo Display Banner (Razor-Sharp Vector, Zero White Border on X) */}
        <div className="relative overflow-hidden pt-12 pb-8 mt-10">
          <div className="flex flex-col items-center justify-center">
            
            {/* GIANT Architectural Vector Logo Lockup */}
            <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center select-none py-6">
              {/* Line 1: Form + Architectural Cut Red X */}
              <div className="flex items-center justify-center tracking-[-0.045em]">
                <span className="font-display text-[clamp(4.5rem,13vw,11.5rem)] font-black text-white leading-none">
                  Form
                </span>
                <svg
                  viewBox="0 0 100 100"
                  className="h-[clamp(4.2rem,12vw,10.5rem)] w-auto text-[#e03128] inline-block ml-1 -mb-1 filter drop-shadow-[0_0_24px_rgba(224,49,40,0.3)]"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Main diagonal stroke (Top-Left to Bottom-Right) */}
                  <polygon points="12,12 30,12 88,88 70,88" />
                  
                  {/* Secondary diagonal stroke (Bottom-Left to center) */}
                  <polygon points="12,88 30,88 47,62 30,62" />
                  
                  {/* Secondary diagonal stroke (Center to Top-Right with architectural diagonal cut gap) */}
                  <polygon points="56,48 73,48 88,25 71,25" />
                </svg>
              </div>

              {/* Line 2: CONSULTANTS */}
              <div className="mt-1 sm:mt-2 font-display text-[clamp(1.7rem,4.6vw,4rem)] font-black uppercase tracking-[0.32em] text-white leading-none">
                CONSULTANTS
              </div>

              {/* Line 3: DESIGN | ENGINEERING */}
              <div className="mt-3 sm:mt-4 flex items-center justify-center gap-4 sm:gap-6 font-label text-[clamp(1rem,2.6vw,2.3rem)] font-black uppercase tracking-[0.42em] text-white/90">
                <span>DESIGN</span>
                <span className="text-[#e03128] font-black">|</span>
                <span>ENGINEERING</span>
              </div>
            </div>

            <div className="mt-8 flex w-full flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                <span className="size-2.5 rounded-full bg-x-red animate-pulse" />
                <p className="font-label text-[12px] sm:text-[13px] font-extrabold uppercase tracking-[0.32em] text-x-red">
                  Architecture · Structure · Infrastructure
                </p>
              </div>
              <span className="font-label text-[11px] font-bold tracking-[0.22em] text-white/40 uppercase">
                EST. AHMEDABAD
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between font-label text-[12px] text-white/50 uppercase tracking-widest font-semibold">
          <p>© {new Date().getFullYear()} FormX Consultants LLP. All rights reserved.</p>
          <p>Ahmedabad, Gujarat, India</p>
        </div>
      </div>
    </footer>
  );
}




