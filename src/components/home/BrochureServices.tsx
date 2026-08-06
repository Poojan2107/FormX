"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { brochureServices, brochureServicesNote } from "@/data/brochureHome";

/**
 * SERVICES — "Service Manifest"
 * Warm off-white background. Number-backed rows with red left-border on hover.
 * Each row gets a large ghost number behind the title for visual depth.
 */
export function BrochureServices() {
  return (
    <section id="services" className="scroll-mt-28 bg-[#f7f6f2] py-20 md:py-28">
      <Container>

        {/* ── Header ───────────────────────────────────────────── */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="font-label text-[10px] tracking-[0.3em] text-x-red">
              Services
            </p>
            <h2
              className="mt-4 max-w-[14ch] font-display font-extrabold leading-[1.04] tracking-tight text-ink"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              What we
              <br />
              take on
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-[36ch] text-[14px] leading-[1.75] text-ink/45 md:text-right md:text-[15px]">
              {brochureServicesNote}
            </p>
          </Reveal>
        </div>

        {/* ── Service rows ─────────────────────────────────────── */}
        <div className="mt-12 border-t border-ink/[0.1]">
          {brochureServices.map((service, i) => (
            <Reveal key={service.title} delay={0.05 * i} from="fade">
              <Link
                href={service.href}
                transitionTypes={["nav-forward"]}
                className="fx-service-row group relative flex items-stretch border-b border-ink/[0.08] transition-colors hover:bg-white/70"
              >
                {/* Ghost number — depth layer */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 select-none font-display font-black leading-none text-ink/[0.04] transition-opacity duration-300 group-hover:opacity-100"
                  style={{ fontSize: "clamp(4rem, 8vw, 7rem)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative grid w-full gap-4 py-8 pl-6 pr-4 md:grid-cols-12 md:items-center md:gap-8 md:py-10 md:pl-10">
                  {/* Index */}
                  <span className="font-label text-[10px] tracking-[0.28em] text-x-red md:col-span-1">
                    0{i + 1}
                  </span>

                  {/* Title */}
                  <h3
                    className="font-display font-bold tracking-tight text-ink transition-colors group-hover:text-x-red md:col-span-4"
                    style={{ fontSize: "clamp(1.05rem, 2vw, 1.45rem)" }}
                  >
                    {service.title}
                  </h3>

                  {/* Body */}
                  <p className="max-w-[50ch] text-[14px] leading-[1.7] text-ink/45 md:col-span-6 md:text-[15px]">
                    {service.body}
                  </p>

                  {/* Arrow */}
                  <span className="flex items-center md:col-span-1 md:justify-end">
                    <ArrowUpRight className="size-5 text-ink/18 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-x-red" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* ── Footer link ───────────────────────────────────────── */}
        <Reveal delay={0.18} from="fade">
          <div className="mt-10 flex items-center justify-between">
            <p className="font-label text-[9px] tracking-[0.22em] text-ink/25">
              FormX · Architecture · Structure · Infrastructure
            </p>
            <Link
              href="/services"
              transitionTypes={["nav-forward"]}
              className="group inline-flex items-center gap-2 font-label text-[10px] tracking-[0.2em] text-ink/45 transition-colors hover:text-x-red"
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
