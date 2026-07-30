import Link from "next/link";
import { Mail, Phone, MapPin, Download } from "lucide-react";
import { site, services } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { NewsletterForm } from "@/components/shared/NewsletterForm";

const exploreLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Projects", href: "/projects" },
  { label: "Our Clients", href: "/clients" },
  { label: "Our Sectors", href: "/sectors" },
  { label: "Insights", href: "/knowledge-center" },
  { label: "Career", href: "/career" },
  { label: "Vendor Registration", href: "/vendor-registration" },
];

export function Footer() {
  return (
    <footer
      className="border-t border-white/10 bg-[#0a0a0a] text-white"
      style={{
        clipPath: "polygon(0 18px, 18px 0, 100% 0, 100% 100%, 0 100%)",
      }}
    >
      <Container>
        {/* Main grid */}
        <div className="grid gap-10 py-14 md:py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div className="md:col-span-2 lg:col-span-1">
            <Logo invert variant="full" />
            <p className="mt-5 max-w-xs text-[13px] leading-[1.75] text-white/50">
              Precise, coordinated, construction-ready design — architecture,
              structure, civil, and MEP for industrial, commercial, and
              institutional projects.
            </p>
            <div className="mt-8">
              <p className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-white/70">
                Newsletter
              </p>
              <p className="mb-3 mt-1.5 text-[12px] text-white/35">
                Notes on coordinated design and delivery.
              </p>
              <NewsletterForm invert />
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-white/70">
              Explore
            </h3>
            <ul className="mt-5 space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/45 transition-colors hover:text-x-red"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-white/70">
              Services
            </h3>
            <ul className="mt-5 space-y-2.5">
              {services.slice(0, 7).map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="text-[13px] text-white/45 transition-colors hover:text-x-red"
                  >
                    {svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-white/70">
              Connect
            </h3>
            <ul className="mt-5 space-y-3.5">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2.5 text-[13px] text-white/45 transition-colors hover:text-x-red"
                >
                  <Mail className="size-3.5 shrink-0 text-x-red" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2.5 text-[13px] text-white/45 transition-colors hover:text-x-red"
                >
                  <Phone className="size-3.5 shrink-0 text-x-red" />
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-[13px] text-white/40">
                <MapPin className="mt-0.5 size-3.5 shrink-0 text-x-red" />
                <span className="leading-relaxed">{site.addressDetail}</span>
              </li>
              <li>
                <a
                  href={site.brochurePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[13px] text-white/45 transition-colors hover:text-x-red"
                >
                  <Download className="size-3.5 text-x-red" />
                  Download brochure
                </a>
              </li>
              <li>
                <a
                  href={site.linkedinCompany}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[13px] text-white/45 transition-colors hover:text-x-red"
                >
                  <svg className="size-3.5 fill-current text-x-red" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                  LinkedIn Page
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <Container className="flex flex-col gap-1.5 py-5 text-[11px] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} FormX Consultants. All rights reserved.</p>
          <p>Design | Engineering</p>
        </Container>
      </div>

      {/* Red stripe accent */}
      <div className="h-1.5 w-full pattern-stripe-red" aria-hidden />
    </footer>
  );
}
