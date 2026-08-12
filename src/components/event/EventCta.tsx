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

        {/* Giant Horizontal Official FormX Logo Display Banner (Image Asset Only, No Top Border Lines) */}
        <div className="relative overflow-hidden pt-8 pb-4 mt-8">
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-full max-w-5xl select-none py-4 flex justify-center">
              <Image
                src="/formx-logo-nav-on-dark.png"
                alt="FormX Consultants"
                width={1000}
                height={320}
                className="h-28 sm:h-36 md:h-48 lg:h-56 w-auto object-contain object-center mx-auto filter drop-shadow-md"
                priority
                unoptimized
              />
            </div>

            <div className="mt-4 flex w-full flex-wrap items-center justify-between gap-4 pt-3">
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




