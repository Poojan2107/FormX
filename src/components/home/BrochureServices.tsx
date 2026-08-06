"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { brochureServices, brochureServicesNote } from "@/data/brochureHome";

/**
 * SERVICES — "Capability Grid"
 * Visual DNA: 2×2 tile grid. Each tile has a huge ghost number, title,
 * short description, and formx-cut corner on hover.
 * Warm cream background — completely distinct from Pillars (dark editorial bands)
 * and Pipeline (vertical timeline).
 */
export function BrochureServices() {
  return (
    <section id="services" className="scroll-mt-28 bg-[#f7f6f2] py-24 md:py-32">
      <Container>

        {/* Header */}
        <div className="mb-14 grid gap-8 md:grid-cols-2 md:items-end">
          <Reveal>
            <p className="font-label text-[10px] tracking-[0.35em] text-x-red">Services</p>
            <h2
              className="mt-5 font-display font-black leading-[1.0] tracking-[-0.04em] text-ink"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
            >
              What we<br />take on
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-[36ch] text-[14px] leading-[1.82] text-ink/40 md:text-right md:text-[15px]">
              {brochureServicesNote}
            </p>
          </Reveal>
        </div>

        {/* 2×2 TILE GRID — completely different from text rows */}
        <div className="grid gap-px bg-ink/[0.08] sm:grid-cols-2 lg:grid-cols-2">
          {brochureServices.map((service, i) => (
            <Reveal key={service.title} delay={0.07 * i} from="fade">
              <Link
                href={service.href}
                transitionTypes={["nav-forward"]}
                className="group relative block overflow-hidden bg-[#f7f6f2] p-8 transition-colors hover:bg-white md:p-10 lg:p-12"
              >
                {/* FormX-cut corner — top right on hover */}
                <span
                  aria-hidden
                  className="absolute right-0 top-0 block h-10 w-10 origin-top-right scale-0 bg-x-red transition-transform duration-300 group-hover:scale-100"
                  style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                />

                {/* Ghost number — absolute large behind content */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-4 -top-3 select-none font-display font-black leading-none text-ink/[0.05] transition-opacity duration-300 group-hover:text-ink/[0.09]"
                  style={{ fontSize: "clamp(6rem, 12vw, 11rem)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Content */}
                <div className="relative z-10">
                  <span className="font-label text-[10px] tracking-[0.3em] text-x-red/60">
                    0{i + 1}
                  </span>

                  <h3
                    className="mt-4 font-display font-bold tracking-[-0.02em] text-ink transition-colors group-hover:text-x-red"
                    style={{ fontSize: "clamp(1.15rem, 2vw, 1.5rem)" }}
                  >
                    {service.title}
                  </h3>

                  <p className="mt-4 text-[13px] leading-[1.8] text-ink/40 md:text-[14px]">
                    {service.body}
                  </p>

                  {/* Arrow */}
                  <div className="mt-7 flex items-center gap-2 font-label text-[10px] tracking-[0.2em] text-x-red/0 transition-all duration-300 group-hover:text-x-red">
                    <span>Explore</span>
                    <ArrowUpRight className="size-3.5" />
                  </div>
                </div>

                {/* Bottom red border — slides up on hover */}
                <span
                  aria-hidden
                  className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-x-red transition-transform duration-500 group-hover:scale-x-100"
                />
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Footer */}
        <Reveal delay={0.25} from="fade">
          <div className="mt-10 flex items-center justify-between">
            <p className="font-label text-[9px] tracking-[0.24em] text-ink/22">
              Architecture · Structure · Infrastructure
            </p>
            <Link
              href="/services"
              transitionTypes={["nav-forward"]}
              className="group inline-flex items-center gap-2 font-label text-[10px] tracking-[0.22em] text-ink/40 transition-colors hover:text-x-red"
            >
              All Services
              <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>

      </Container>
    </section>
  );
}
