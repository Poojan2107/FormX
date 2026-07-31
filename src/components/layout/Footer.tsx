"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Download, ArrowUpRight } from "lucide-react";
import { site, services } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { NewsletterForm } from "@/components/shared/NewsletterForm";

const exploreLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Projects", href: "/projects" },
  { label: "Our Clients", href: "/clients" },
  { label: "Our Sectors", href: "/sectors" },
  { label: "Knowledge Center", href: "/knowledge-center" },
  { label: "Career", href: "/career" },
  { label: "Vendor Registration", href: "/vendor-registration" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#0a0a0a] text-white">
      {/* Red accent top indicator line */}
      <div className="h-1 w-full bg-gradient-to-r from-x-red via-red-500 to-x-red" />

      <Container>
        {/* Main Grid */}
        <div className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand & Contact Column */}
          <div>
            <Logo invert variant="full" />
            <p className="mt-5 max-w-sm text-[13px] leading-[1.8] text-white/60">
              Multidisciplinary design & engineering consultancy — delivering precise, coordinated, construction-ready packages across Architecture, Structure, Civil, and MEP.
            </p>

            <ul className="mt-7 space-y-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2.5 text-[13px] text-white/60 transition-colors hover:text-x-red"
                >
                  <Mail className="size-4 shrink-0 text-x-red" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2.5 text-[13px] text-white/60 transition-colors hover:text-x-red"
                >
                  <Phone className="size-4 shrink-0 text-x-red" />
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-[13px] text-white/50">
                <MapPin className="mt-0.5 size-4 shrink-0 text-x-red" />
                <span className="leading-relaxed">{site.addressDetail}</span>
              </li>
            </ul>
          </div>

          {/* Explore Column */}
          <div>
            <h3 className="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-x-red">
              Explore
            </h3>
            <ul className="mt-5 space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-[13px] text-white/55 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-x-red">
              Practices & Services
            </h3>
            <ul className="mt-5 space-y-2.5">
              {services.slice(0, 7).map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="inline-flex items-center gap-1.5 text-[13px] text-white/55 transition-colors hover:text-white"
                  >
                    {svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brochure & Newsletter Column */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-x-red">
                Company Brochure
              </h3>
              <p className="mt-2 text-[12px] text-white/50">
                Download the official FormX Consultants capability presentation PDF.
              </p>
              <a
                href={site.brochurePath}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 border border-x-red/40 bg-x-red/10 px-4 py-3 font-display text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-all hover:bg-x-red hover:text-white shadow-lg"
              >
                <Download className="size-4" />
                Download Brochure PDF
              </a>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
                Stay Updated
              </p>
              <p className="mb-3 mt-1 text-[12px] text-white/40">
                Technical notes & design insights.
              </p>
              <NewsletterForm invert />
            </div>
          </div>
        </div>

        {/* Jacobs-Style Monumental Brand Typography Banner */}
        <div className="relative border-t border-white/10 py-10 md:py-14 overflow-hidden">
          <div className="flex flex-col md:flex-row items-baseline justify-between gap-4">
            <span className="font-display text-[clamp(3.2rem,11vw,10.5rem)] font-black uppercase tracking-tighter leading-none text-white/95 select-none transition-colors hover:text-white">
              FORMX<span className="text-x-red">×</span>
            </span>
            <div className="flex flex-col items-start md:items-end">
              <span className="font-display text-[12px] font-bold uppercase tracking-[0.28em] text-white/70">
                Design | Engineering
              </span>
              <span className="mt-1 text-[12px] text-white/40">
                Ahmedabad · Gujarat · India
              </span>
            </div>
          </div>
        </div>
      </Container>

      {/* Sub-Footer Bar */}
      <div className="border-t border-white/10 bg-black py-6">
        <Container className="flex flex-col gap-4 text-[12px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} FormX Consultants LLP. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a
              href={site.linkedinCompany}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/60 transition-colors hover:text-x-red"
            >
              <svg className="size-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              FormX LinkedIn
            </a>
            <a
              href={site.hirenLinkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/60 transition-colors hover:text-x-red"
            >
              Hiren J. Shah LinkedIn
            </a>
            <Link href="/contact" className="hover:text-x-red">
              Contact Support
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
