"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { nav, site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const practiceLinks = nav.map((item) => ({
    label: item.label,
    href: item.href,
  }));

  return (
    <footer
      className="relative isolate overflow-hidden border-t border-white/10 bg-[#080808] text-white"
      style={{ viewTransitionName: "site-footer" }}
    >
      <div className="pointer-events-none absolute inset-0 pattern-grid-dark opacity-25" aria-hidden />
      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-x-red to-transparent" />

      <Container className="relative z-10">
        <div className="border-b border-white/10 py-10 md:py-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-x-red">
                FORMX Headquarters
              </p>
              <h2 className="mt-3 font-display text-3xl font-black uppercase tracking-tight text-white md:text-4xl lg:text-5xl">
                Ahmedabad Practice
              </h2>
              <p className="mt-3 max-w-lg text-[15px] leading-[1.8] text-white/55">
                Before Issue — Architecture · Structure · Infrastructure coordinated before drawings
                leave the studio. Accountable through execution.
              </p>
              <p className="mt-4 font-display text-lg font-medium tracking-wide text-white/70 md:text-xl">
                {site.slogan}
              </p>
            </div>
            <div className="font-display text-[11px] font-bold uppercase tracking-[0.22em] text-white/40">
              <p>23°01′N · 72°35′E</p>
              <p className="mt-1 text-white/25">Gujarat Industrial Corridor · India</p>
            </div>
          </div>
        </div>

        <div className="grid gap-12 py-14 md:py-16 lg:grid-cols-12 lg:gap-10">
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
                  Inquiry
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

          <div className="lg:col-span-3">
            <p className="mb-5 font-display text-[10px] font-bold uppercase tracking-[0.28em] text-x-red">
              Navigate
            </p>
            <ul className="space-y-3">
              {practiceLinks.map((item) => (
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
              <li>
                <Link
                  href="/career"
                  transitionTypes={["nav-forward"]}
                  className="text-[13px] text-white/55 transition-colors hover:text-white"
                >
                  Career
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="mb-5 font-display text-[10px] font-bold uppercase tracking-[0.28em] text-x-red">
              Quick actions
            </p>
            <div className="space-y-3">
              <Link
                href="/contact"
                transitionTypes={["nav-forward"]}
                className="group flex w-full items-center justify-between border border-white/15 bg-white/[0.04] px-4 py-3.5 transition-all hover:border-x-red/60 hover:bg-x-red/10"
              >
                <span className="font-display text-[12px] font-bold uppercase tracking-[0.14em] text-white/80 group-hover:text-white">
                  Book Consultation
                </span>
                <ArrowUpRight className="size-4 text-x-red" />
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
                <ArrowUpRight className="size-4 text-x-red" />
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
                <ArrowUpRight className="size-4 text-x-red" />
              </a>
            </div>
          </div>
        </div>

        {/* Jacobs-scale monumental wordmark */}
        <div className="overflow-hidden border-t border-white/10 pb-4 pt-8 md:pt-10">
          <span
            className="block font-display font-black uppercase leading-[0.85] tracking-tighter text-white/[0.07] select-none"
            style={{ fontSize: "clamp(5rem, 22vw, 18rem)" }}
            aria-hidden
          >
            FORM<span className="text-x-red/40">×</span>
          </span>
          <p className="mt-2 font-display text-[10px] font-semibold uppercase tracking-[0.28em] text-white/25 md:-mt-2">
            Design | Engineering · {site.slogan}
          </p>
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
