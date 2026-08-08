"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { nav, site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { FormxTransparentLogo } from "@/components/ui/FormxTransparentLogo";

export function Footer() {
  const practiceLinks = [
    ...nav.map((item) => ({ label: item.label, href: item.href })),
    { label: "Career", href: "/career" },
  ];

  const legalLinks = [
    { label: "Terms of Use", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ];

  return (
    <footer
      className="fx-grain relative isolate overflow-hidden border-t border-white/10 bg-[#090908] text-white"
      style={{ viewTransitionName: "site-footer" }}
    >
      <div className="pointer-events-none absolute inset-0 fx-grid-dark opacity-40" aria-hidden />

      <Container className="relative z-10">
        <div className="grid gap-10 py-14 md:py-16 lg:grid-cols-12 lg:gap-10">
          {/* Column 1 — Official FormX Logo & Address Details */}
          <div className="lg:col-span-5">
            {/* Official FormX Transparent Logo Lockup */}
            <Link href="/" className="inline-block transition-opacity hover:opacity-90">
              <FormxTransparentLogo dark size="md" />
            </Link>

            <dl className="mt-8 space-y-5 border-t border-white/10 pt-6">
              <div>
                <dt className="font-label text-[9.5px] font-bold uppercase tracking-[0.24em] text-x-red">Studio Address</dt>
                <dd className="mt-2.5 flex items-start gap-2.5 text-[14px] leading-[1.7] text-white/70 font-medium">
                  <MapPin className="mt-1 size-4 shrink-0 text-x-red" />
                  {site.addressDetail}
                </dd>
              </div>
              <div>
                <dt className="font-label text-[9.5px] font-bold uppercase tracking-[0.24em] text-x-red">Inquiries</dt>
                <dd className="mt-2.5 space-y-3">
                  <a
                    href={`mailto:${site.email}`}
                    className="flex items-center gap-2.5 text-[14px] text-white/70 font-medium transition-colors hover:text-white"
                  >
                    <Mail className="size-4 text-x-red" />
                    {site.email}
                  </a>
                  <a
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2.5 text-[14px] text-white/70 font-medium transition-colors hover:text-white"
                  >
                    <Phone className="size-4 text-x-red" />
                    {site.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {/* Column 2 — Navigation Links */}
          <div className="lg:col-span-3 lg:pl-4">
            <p className="mb-5 font-label text-[10px] font-bold uppercase tracking-[0.26em] text-x-red">
              Navigate
            </p>
            <ul className="space-y-3">
              {practiceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    transitionTypes={["nav-forward"]}
                    className="group inline-flex items-center gap-2 text-[14.5px] font-medium text-white/60 transition-colors hover:text-white"
                  >
                    <span className="size-1 rounded-full bg-x-red opacity-0 transition-opacity group-hover:opacity-100" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Quick Actions */}
          <div className="lg:col-span-4">
            <p className="mb-5 font-label text-[10px] font-bold uppercase tracking-[0.26em] text-x-red">
              Quick Actions
            </p>
            <div className="space-y-3">
              {[
                { href: "/contact", label: "Book Consultation", external: false },
                { href: site.brochurePath, label: "Download Brochure", external: true },
                { href: site.linkedinCompany, label: "LinkedIn Studio", external: true },
              ].map((a) =>
                a.external ? (
                  <a
                    key={a.label}
                    href={a.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-full items-center justify-between border border-white/15 bg-white/[0.02] px-5 py-4 transition-all hover:border-x-red/80 hover:bg-x-red/[0.05] formx-cut-sm"
                  >
                    <span className="font-label text-[11px] font-bold uppercase tracking-[0.18em] text-white/80 group-hover:text-white">
                      {a.label}
                    </span>
                    <ArrowUpRight className="size-4 text-x-red transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : (
                  <Link
                    key={a.label}
                    href={a.href}
                    transitionTypes={["nav-forward"]}
                    className="group flex w-full items-center justify-between border border-white/15 bg-white/[0.02] px-5 py-4 transition-all hover:border-x-red/80 hover:bg-x-red/[0.05] formx-cut-sm"
                  >
                    <span className="font-label text-[11px] font-bold uppercase tracking-[0.18em] text-white/80 group-hover:text-white">
                      {a.label}
                    </span>
                    <ArrowUpRight className="size-4 text-x-red transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Enhanced Giant FORMX Watermark Banner */}
        <div className="relative overflow-hidden border-t border-white/10 pb-6 pt-12 text-center md:text-left">
          <div className="flex flex-col items-center justify-center md:items-start">
            <div className="relative w-full select-none font-display font-black uppercase leading-none">
              <span
                className="block w-full whitespace-nowrap font-black tracking-[-0.05em] text-white/[0.08] transition-colors hover:text-white/[0.13]"
                style={{
                  fontSize: "clamp(5.2rem, 19.5vw, 17.5rem)",
                  lineHeight: 0.9,
                }}
                aria-hidden
              >
                FORM<span className="inline-block text-x-red drop-shadow-[0_0_40px_rgba(224,49,40,0.35)]">×</span>
              </span>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/10 pt-4 w-full">
              <span className="size-2 rounded-full bg-x-red" />
              <p className="font-label text-[10.5px] font-bold uppercase tracking-[0.32em] text-x-red">
                Architecture · Structure · Infrastructure
              </p>
              <span className="hidden font-label text-[9.5px] font-bold tracking-[0.2em] text-white/40 md:inline-block">
                · EST. AHMEDABAD
              </span>
            </div>
          </div>
        </div>
      </Container>

      {/* Sub-Footer Bar */}
      <div className="border-t border-white/[0.08] bg-black/60 py-4.5">
        <Container className="flex flex-col gap-3 text-[12px] text-white/40 sm:flex-row sm:items-center sm:justify-between font-label">
          <p>© {new Date().getFullYear()} FormX Consultants LLP. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                transitionTypes={["nav-forward"]}
                className="transition-colors hover:text-x-red"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={site.hirenLinkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-x-red"
            >
              Hiren J. Shah
            </a>
            <Link href="/contact" transitionTypes={["nav-forward"]} className="transition-colors hover:text-x-red">
              Contact
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
