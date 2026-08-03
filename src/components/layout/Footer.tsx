"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer
      className="relative isolate overflow-hidden border-t border-white/10 bg-[#080808] text-white"
      style={{ viewTransitionName: "site-footer" }}
    >
      {/* Engineering grid */}
      <div className="pointer-events-none absolute inset-0 pattern-grid-dark opacity-25" aria-hidden />
      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-x-red to-transparent" />

      <Container className="relative z-10">
        {/* Headquarters identity band */}
        <div className="border-b border-white/10 py-10 md:py-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-x-red">
                FORMX Headquarters
              </p>
              <h2 className="mt-3 font-display text-3xl font-black uppercase tracking-tight text-white md:text-4xl lg:text-5xl">
                Ahmedabad Practice
              </h2>
              <p className="mt-3 max-w-lg text-[14px] leading-[1.8] text-white/55">
                Multidisciplinary design &amp; engineering consultancy. Architecture, structure,
                civil and MEP coordinated into construction-ready documentation.
              </p>
            </div>
            <div className="font-display text-[11px] font-bold uppercase tracking-[0.22em] text-white/40">
              <p>23°01′N · 72°35′E</p>
              <p className="mt-1 text-white/25">Gujarat Industrial Corridor · India</p>
            </div>
          </div>
        </div>

        <div className="grid gap-12 py-14 md:py-16 lg:grid-cols-12 lg:gap-10">
          {/* Brand + office */}
          <div className="lg:col-span-5">
            <Logo invert variant="full" />
            <dl className="mt-8 space-y-5">
              <div>
                <dt className="font-display text-[9px] font-bold uppercase tracking-[0.24em] text-x-red">
                  Office
                </dt>
                <dd className="mt-1.5 flex items-start gap-2 text-[13px] text-white/60">
                  <MapPin className="mt-0.5 size-3.5 shrink-0 text-x-red" />
                  {site.addressDetail}
                </dd>
              </div>
              <div>
                <dt className="font-display text-[9px] font-bold uppercase tracking-[0.24em] text-x-red">
                  Contact
                </dt>
                <dd className="mt-1.5 space-y-2">
                  <a
                    href={`mailto:${site.email}`}
                    className="flex items-center gap-2 text-[13px] text-white/60 transition-colors hover:text-white"
                  >
                    <Mail className="size-3.5 text-x-red" />
                    {site.email}
                  </a>
                  <a
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-[13px] text-white/60 transition-colors hover:text-white"
                  >
                    <Phone className="size-3.5 text-x-red" />
                    {site.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {/* Practice */}
          <div className="lg:col-span-3">
            <p className="mb-5 font-display text-[10px] font-bold uppercase tracking-[0.28em] text-x-red">
              Practice
            </p>
            <ul className="space-y-3">
              {[
                { label: "Architecture", href: "/services/architectural-design" },
                { label: "Structure", href: "/services/structural-engineering" },
                { label: "Infrastructure", href: "/services/site-infrastructure" },
                { label: "MEP & Fire", href: "/services/electrical-engineering" },
                { label: "Projects", href: "/projects" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    transitionTypes={["nav-forward"]}
                    className="text-[13px] text-white/55 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Identity / discuss */}
          <div className="lg:col-span-4">
            <p className="mb-5 font-display text-[10px] font-bold uppercase tracking-[0.28em] text-x-red">
              Project Discussion
            </p>
            <p className="mb-6 text-[13px] leading-[1.75] text-white/50">
              Planning a greenfield plant or commercial asset? Senior practice leads engage early
              on grids, corridors, and construction sequencing.
            </p>
            <Link
              href="/contact"
              transitionTypes={["nav-forward"]}
              className="inline-flex items-center gap-2 bg-x-red px-6 py-3.5 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-x-red-hover"
            >
              Talk to our team
              <ArrowUpRight className="size-4" />
            </Link>
            <a
              href={site.brochurePath}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block font-display text-[11px] font-bold uppercase tracking-[0.16em] text-white/40 transition-colors hover:text-x-red"
            >
              Download practice brochure →
            </a>
          </div>
        </div>

        {/* Monumental brand */}
        <div className="border-t border-white/10 pb-8 pt-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <span
              className="font-display font-black uppercase leading-none tracking-tighter text-white/[0.08]"
              style={{ fontSize: "clamp(3.5rem, 12vw, 9rem)" }}
            >
              FORM<span className="text-x-red/50">×</span>
            </span>
            <p className="font-display text-[10px] font-semibold uppercase tracking-[0.28em] text-white/25">
              Design | Engineering · Where Vision Takes Form
            </p>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/[0.06] bg-black/40 py-4">
        <Container className="flex flex-col items-start gap-2 text-[11px] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} FormX Consultants LLP. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href={site.hirenLinkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-x-red"
            >
              Hiren J. Shah
            </a>
            <Link href="/about" transitionTypes={["nav-forward"]} className="transition-colors hover:text-x-red">
              About
            </Link>
            <Link href="/contact" transitionTypes={["nav-forward"]} className="transition-colors hover:text-x-red">
              Contact
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
