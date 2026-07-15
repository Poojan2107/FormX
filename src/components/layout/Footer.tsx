import Link from "next/link";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { NewsletterForm } from "@/components/shared/NewsletterForm";

const links = [
  { label: "About Us", href: "/about" },
  { label: "Our Projects", href: "/projects" },
  { label: "Our Clients", href: "/clients" },
  { label: "Our Sectors", href: "/sectors" },
  { label: "Career", href: "/career" },
  { label: "Vendor Registration", href: "/vendor-registration" },
];

export function Footer() {
  return (
    <footer
      className="border-t border-white/10 bg-[#0a0a0a] text-white"
      style={{
        clipPath:
          "polygon(0 18px, 18px 0, 100% 0, 100% 100%, 0 100%)",
      }}
    >
      <Container className="grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Logo invert variant="full" />
          <p className="mt-6 max-w-md text-[14px] leading-[1.7] text-white/55">
            Integrated design and engineering for manufacturing facilities —
            coordinated disciplines, partner-led delivery.
          </p>
          <div className="mt-8 max-w-md">
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-white">
              Newsletter
            </p>
            <p className="mt-2 mb-4 text-sm text-white/45">
              Occasional notes on industrial planning.
            </p>
            <NewsletterForm invert />
          </div>
        </div>

        <div>
          <h3 className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-white">
            Explore
          </h3>
          <ul className="mt-5 space-y-3">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[14px] text-white/55 transition-colors hover:text-x-red"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-white">
            Connect
          </h3>
          <ul className="mt-5 space-y-3 text-[14px] text-white/55">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="transition-colors hover:text-x-red"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="transition-colors hover:text-x-red"
              >
                {site.phone}
              </a>
            </li>
            <li className="max-w-xs leading-relaxed">{site.addressDetail}</li>
            <li>
              <a
                href={site.brochurePath}
                className="transition-colors hover:text-x-red"
              >
                Download brochure
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-[11px] text-white/35 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} FormX Consultants. All rights reserved.
          </p>
          <p>Design | Engineering</p>
        </Container>
      </div>
      <div className="h-2 w-full pattern-stripe-red" aria-hidden />
    </footer>
  );
}
