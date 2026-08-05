"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { brochureServices, brochureServicesNote } from "@/data/brochureHome";

/** Service typologies — white editorial, alternating rhythm, not icon cards */
export function BrochureServices() {
  return (
    <section id="services" className="scroll-mt-28 bg-[#f7f7f5] py-20 md:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-4">
            <p className="font-label text-[10px] tracking-[0.28em] text-x-red">Services</p>
            <h2
              className="mt-4 font-display font-extrabold uppercase leading-[0.95] tracking-tight text-ink"
              style={{ fontSize: "clamp(1.85rem, 4vw, 3rem)" }}
            >
              What we take on
            </h2>
            <p className="mt-5 max-w-[34ch] text-[15px] leading-[1.7] text-ink/55">
              {brochureServicesNote}
            </p>
            <Link
              href="/services"
              transitionTypes={["nav-forward"]}
              className="mt-8 inline-flex items-center gap-2 font-label text-[10px] tracking-[0.2em] text-ink/70 transition-colors hover:text-x-red"
            >
              All services
              <ArrowUpRight className="size-3.5" />
            </Link>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {brochureServices.map((service, i) => (
              <Reveal key={service.title} delay={0.08 * i}>
                <Link
                  href={service.href}
                  transitionTypes={["nav-forward"]}
                  className={`group flex h-full flex-col justify-between border p-7 transition-all duration-300 md:p-8 ${
                    service.tone === "dark"
                      ? "border-transparent bg-black text-white hover:bg-[#111]"
                      : "border-line bg-white text-ink hover:border-ink/25"
                  }`}
                >
                  <div>
                    <span
                      className={`font-label text-[10px] tracking-[0.28em] ${
                        service.tone === "dark" ? "text-x-red" : "text-x-red"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold uppercase leading-tight tracking-tight md:text-xl">
                      {service.title}
                    </h3>
                    <p
                      className={`mt-4 text-[14px] leading-[1.7] md:text-[15px] ${
                        service.tone === "dark" ? "text-white/50" : "text-ink/55"
                      }`}
                    >
                      {service.body}
                    </p>
                  </div>
                  <span
                    className={`mt-8 inline-flex items-center gap-1.5 font-label text-[9px] tracking-[0.2em] transition-colors ${
                      service.tone === "dark"
                        ? "text-white/40 group-hover:text-x-red"
                        : "text-ink/35 group-hover:text-x-red"
                    }`}
                  >
                    Explore
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
