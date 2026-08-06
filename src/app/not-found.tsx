import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="fx-grain flex min-h-[70vh] items-center border-b border-black bg-[#0a0a09] py-24 text-white">
      <Container>
        <p className="eyebrow text-x-red">404</p>
        <h1
          className="mt-5 max-w-[14ch] font-display font-black leading-[0.96] tracking-tight"
          style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
        >
          This sheet wasn&apos;t issued
        </h1>
        <p className="mt-5 max-w-[42ch] text-[15.5px] leading-[1.9] text-white/50">
          The link may be outdated or the page has moved. Return to the studio record.
        </p>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-8">
          {[
            { href: "/", label: "Home" },
            { href: "/projects", label: "Projects" },
            { href: "/services", label: "Services" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              transitionTypes={["nav-forward"]}
              className="group inline-flex items-center gap-2 font-label text-[10px] tracking-[0.18em] text-white/45 transition-colors hover:text-x-red"
            >
              {link.label}
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
