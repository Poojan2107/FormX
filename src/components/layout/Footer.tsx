"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { nav, site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

/**
 * Footer — institutional close. Mega FORM× owns the brand mark;
 * no grid wallpaper or cut-button action stack.
 */
export function Footer() {
  const practiceLinks = [
    ...nav.map((item) => ({ label: item.label, href: item.href })),
    { label: "Career", href: "/career" },
  ];

  const actionLinks = [
    { href: "/contact", label: "Discuss your facility", external: false },
    { href: site.brochurePath, label: "Download brochure", external: true },
    { href: site.linkedinCompany, label: "LinkedIn", external: true },
  ];

  const legalLinks = [
    { label: "Terms of Use", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ];

  return (
    <footer
      className="fx-grain relative isolate overflow-hidden border-t border-black bg-[#0a0a09] text-white"
      style={{ viewTransitionName: "site-footer" }}
    >
      <Container className="relative z-10">
        <div className="grid gap-14 py-16 md:py-20 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Logo invert variant="full" />
            <p className="mt-6 max-w-[38ch] text-[14px] leading-[1.85] text-white/45">
              Architecture, Structure and Infrastructure — coordinated before drawings leave the
              studio.
            </p>
            <dl className="mt-10 space-y-6 border-t border-white/10 pt-8">
              <div>
                <dt className="font-label text-[9px] tracking-[0.2em] text-white/30">Studio</dt>
                <dd className="mt-2 text-[14px] leading-[1.75] text-white/55">{site.addressDetail}</dd>
              </div>
              <div>
                <dt className="font-label text-[9px] tracking-[0.2em] text-white/30">Inquiries</dt>
                <dd className="mt-2 space-y-2">
                  <a
                    href={`mailto:${site.email}`}
                    className="block text-[14px] text-white/55 transition-colors hover:text-x-red"
                  >
                    {site.email}
                  </a>
                  <a
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                    className="block text-[14px] text-white/55 transition-colors hover:text-x-red"
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-3">
            <p className="mb-5 font-label text-[10px] tracking-[0.22em] text-x-red">Navigate</p>
            <ul className="space-y-3.5">
              {practiceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    transitionTypes={["nav-forward"]}
                    className="text-[15px] text-white/45 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="mb-5 font-label text-[10px] tracking-[0.22em] text-x-red">Continue</p>
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {actionLinks.map((a) => {
                const inner = (
                  <>
                    <span className="font-label text-[10px] tracking-[0.16em] text-white/55 group-hover:text-white">
                      {a.label}
                    </span>
                    <ArrowUpRight className="size-3.5 text-white/25 transition-colors group-hover:text-x-red" />
                  </>
                );
                return (
                  <li key={a.label}>
                    {a.external ? (
                      <a
                        href={a.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between py-4"
                      >
                        {inner}
                      </a>
                    ) : (
                      <Link
                        href={a.href}
                        transitionTypes={["nav-forward"]}
                        className="group flex items-center justify-between py-4"
                      >
                        {inner}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="overflow-hidden border-t border-white/10 pb-10 pt-16">
          <span
            className="block select-none font-display font-black uppercase leading-[0.78] tracking-tighter text-white/[0.07]"
            style={{ fontSize: "clamp(4.5rem, 20vw, 16rem)" }}
            aria-hidden
          >
            FORM<span className="text-x-red/35">×</span>
          </span>
          <p className="mt-4 font-label text-[10px] tracking-[0.22em] text-white/25">
            Architecture · Structure · Infrastructure
          </p>
        </div>
      </Container>

      <div className="border-t border-white/[0.06] py-4">
        <Container className="flex flex-col gap-3 text-[12px] text-white/28 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} FormX Consultants LLP</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
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
          </div>
        </Container>
      </div>
    </footer>
  );
}
