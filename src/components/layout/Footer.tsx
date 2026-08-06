"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { nav, site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

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
      className="fx-grain relative isolate overflow-hidden border-t border-white/10 bg-[#0a0a09] text-white"
      style={{ viewTransitionName: "site-footer" }}
    >
      <div className="pointer-events-none absolute inset-0 fx-grid-dark opacity-40" aria-hidden />

      <Container className="relative z-10">
        <div className="grid gap-10 py-12 md:py-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Logo invert variant="full" />
            <p className="mt-4 max-w-[36ch] text-[14px] leading-[1.8] text-white/48">
              Architecture, structure, and infrastructure — coordinated before drawings leave the
              studio.
            </p>
            <p className="mt-3 font-label text-[10px] tracking-[0.2em] text-white/28">
              Where vision takes form
            </p>
            <dl className="mt-7 space-y-4">
              <div>
                <dt className="font-label text-[9px] tracking-[0.2em] text-x-red">Studio Address</dt>
                <dd className="mt-2 flex items-start gap-2 text-[14px] leading-[1.7] text-white/58">
                  <MapPin className="mt-0.5 size-3.5 shrink-0 text-x-red" />
                  {site.addressDetail}
                </dd>
              </div>
              <div>
                <dt className="font-label text-[9px] tracking-[0.2em] text-x-red">Inquiries</dt>
                <dd className="mt-2 space-y-2.5">
                  <a
                    href={`mailto:${site.email}`}
                    className="flex items-center gap-2 text-[14px] text-white/58 transition-colors hover:text-white"
                  >
                    <Mail className="size-3.5 text-x-red" />
                    {site.email}
                  </a>
                  <a
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-[14px] text-white/58 transition-colors hover:text-white"
                  >
                    <Phone className="size-3.5 text-x-red" />
                    {site.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-3">
            <p className="mb-4 font-label text-[10px] tracking-[0.25em] text-x-red">Navigate</p>
            <ul className="space-y-3">
              {practiceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    transitionTypes={["nav-forward"]}
                    className="text-[15px] text-white/50 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="mb-4 font-label text-[10px] tracking-[0.25em] text-x-red">Quick actions</p>
            <div className="space-y-2.5">
              {[
                { href: "/contact", label: "Book Consultation", external: false },
                { href: site.brochurePath, label: "Download Brochure", external: true },
                { href: site.linkedinCompany, label: "LinkedIn", external: true },
              ].map((a) =>
                a.external ? (
                  <a
                    key={a.label}
                    href={a.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-full items-center justify-between border border-white/15 px-4 py-3.5 transition-colors hover:border-x-red/60"
                  >
                    <span className="font-label text-[11px] tracking-[0.16em] text-white/70 group-hover:text-white">
                      {a.label}
                    </span>
                    <ArrowUpRight className="size-4 text-x-red" />
                  </a>
                ) : (
                  <Link
                    key={a.label}
                    href={a.href}
                    transitionTypes={["nav-forward"]}
                    className="group flex w-full items-center justify-between border border-white/15 px-4 py-3.5 transition-colors hover:border-x-red/60"
                  >
                    <span className="font-label text-[11px] tracking-[0.16em] text-white/70 group-hover:text-white">
                      {a.label}
                    </span>
                    <ArrowUpRight className="size-4 text-x-red" />
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="overflow-hidden border-t border-white/10 pb-8 pt-14 md:pt-18">
          <span
            className="block select-none font-display font-extrabold uppercase leading-[0.8] tracking-tighter text-white/[0.08]"
            style={{ fontSize: "clamp(5rem, 22vw, 18rem)" }}
            aria-hidden
          >
            FORM<span className="text-x-red/40">×</span>
          </span>
          <p className="mt-3 font-label text-[10px] tracking-[0.22em] text-white/25">
            Architecture · Structure · Infrastructure
          </p>
        </div>
      </Container>

      <div className="border-t border-white/[0.06] bg-black/40 py-4">
        <Container className="flex flex-col gap-3 text-[12px] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} FormX Consultants LLP. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                transitionTypes={["nav-forward"]}
                className="hover:text-x-red"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={site.hirenLinkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-x-red"
            >
              Hiren J. Shah
            </a>
            <Link href="/contact" transitionTypes={["nav-forward"]} className="hover:text-x-red">
              Contact
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
