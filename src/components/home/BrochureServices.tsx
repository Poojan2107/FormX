"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { brochureServices, brochureServicesNote } from "@/data/brochureHome";

/**
 * SERVICES — Typology dossier rows (not a 2×2 marketing tile grid).
 */
export function BrochureServices() {
  return (
    <section id="services" className="scroll-mt-28 bg-white py-24 md:py-32">
      <Container>
        <div className="mb-4 grid gap-8 border-b border-ink/[0.08] pb-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-16">
          <Reveal>
            <p className="eyebrow text-x-red">Services</p>
            <h2
              className="mt-4 font-display font-black leading-[0.98] tracking-tight text-ink"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              What we take on
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="text-[15px] leading-[1.9] text-ink/55 md:text-[16px] lg:pb-1">
              {brochureServicesNote}
            </p>
          </Reveal>
        </div>

        <div className="divide-y divide-ink/[0.08] border-b border-ink/[0.08]">
          {brochureServices.map((service, i) => (
            <Reveal key={service.title} delay={0.04 * i} from="fade">
              <Link
                href={service.href}
                transitionTypes={["nav-forward"]}
                className="group grid gap-4 py-9 md:grid-cols-12 md:items-baseline md:gap-8 md:py-10"
              >
                <span className="font-label text-[10px] tracking-[0.24em] text-x-red md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl font-extrabold tracking-tight text-ink transition-colors group-hover:text-x-red md:col-span-4 md:text-2xl">
                  {service.title}
                </h3>
                <p className="text-[15px] leading-[1.85] text-ink/58 md:col-span-6">
                  {service.body}
                </p>
                <span className="hidden justify-end md:col-span-1 md:flex">
                  <ArrowUpRight className="size-5 text-ink/15 transition-colors group-hover:text-x-red" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-5">
            <p className="font-label text-[10px] tracking-[0.18em] text-ink/35">
              Architecture · Structure · Infrastructure
            </p>
            <Link
              href="/services"
              transitionTypes={["nav-forward"]}
              className="group inline-flex items-center gap-2 font-label text-[10px] tracking-[0.18em] text-x-red transition-colors hover:text-ink"
            >
              All services
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
