"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { brochureServices, brochureServicesNote } from "@/data/brochureHome";

/**
 * SERVICES — "Service Manifest"
 * Warm off-white. Number-backed rows — red left border on hover.
 */
export function BrochureServices() {
  return (
    <section id="services" className="scroll-mt-28 bg-[#f7f6f2] py-24 md:py-32">
      <Container>

        {/* Header */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="font-label text-[10px] tracking-[0.35em] text-x-red">Services</p>
            <h2
              className="mt-5 font-display font-black leading-[1.0] tracking-[-0.04em] text-ink"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
            >
              What we<br />take on
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-[36ch] text-[14px] leading-[1.8] text-ink/42 md:text-right md:text-[15px]">
              {brochureServicesNote}
            </p>
          </Reveal>
        </div>

        {/* Rows */}
        <div className="mt-14 border-t border-ink/[0.09]">
          {brochureServices.map((service, i) => (
            <Reveal key={service.title} delay={0.05 * i} from="fade">
              <Link
                href={service.href}
                transitionTypes={["nav-forward"]}
                className="fx-service-row group relative flex items-stretch border-b border-ink/[0.07] transition-colors hover:bg-white/75"
              >
                {/* Ghost number */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 select-none font-display font-black leading-none text-ink/[0.035] transition-opacity duration-300 group-hover:text-ink/[0.065]"
                  style={{ fontSize: "clamp(5rem, 10vw, 9rem)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative grid w-full gap-3 py-9 pl-7 pr-5 md:grid-cols-12 md:items-center md:gap-8 md:py-10 md:pl-12">
                  <span className="font-label text-[10px] tracking-[0.3em] text-x-red md:col-span-1">
                    0{i + 1}
                  </span>
                  <h3
                    className="font-display font-bold tracking-tight text-ink transition-colors group-hover:text-x-red md:col-span-4"
                    style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.45rem)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="max-w-[52ch] text-[13px] leading-[1.75] text-ink/42 md:col-span-6 md:text-[14px]">
                    {service.body}
                  </p>
                  <span className="flex items-center md:col-span-1 md:justify-end">
                    <ArrowUpRight className="size-5 text-ink/15 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-x-red" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Footer link */}
        <Reveal delay={0.2} from="fade">
          <div className="mt-10 flex items-center justify-between">
            <p className="font-label text-[9px] tracking-[0.24em] text-ink/22">
              FormX · Architecture · Structure · Infrastructure
            </p>
            <Link
              href="/services"
              transitionTypes={["nav-forward"]}
              className="group inline-flex items-center gap-2 font-label text-[10px] tracking-[0.2em] text-ink/40 transition-colors hover:text-x-red"
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
