"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { brochureServices, brochureServicesNote } from "@/data/brochureHome";

/** Stacked typology rows — not a 2×2 card grid */
export function BrochureServices() {
  return (
    <section id="services" className="scroll-mt-28 bg-white py-20 md:py-28">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="font-label text-[10px] tracking-[0.28em] text-x-red">Services</p>
            <h2
              className="mt-4 max-w-[12ch] font-display font-bold leading-[1.05] tracking-tight text-ink"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              What we take on
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-[36ch] text-[14px] leading-[1.7] text-ink/50 md:text-right">
              {brochureServicesNote}
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 border-t border-ink">
          {brochureServices.map((service, i) => (
            <Reveal key={service.title} delay={0.05 * i} from="fade">
              <li>
                <Link
                  href={service.href}
                  transitionTypes={["nav-forward"]}
                  className="group grid gap-4 border-b border-line py-8 transition-colors hover:bg-[#fafafa] md:grid-cols-12 md:items-center md:gap-8 md:py-10 md:pl-2 md:pr-4"
                >
                  <span className="font-label text-[10px] tracking-[0.28em] text-x-red md:col-span-1">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-xl font-bold tracking-tight text-ink transition-colors group-hover:text-x-red md:col-span-4 md:text-2xl lg:text-[1.65rem]">
                    {service.title}
                  </h3>
                  <p className="max-w-[46ch] text-[14px] leading-[1.65] text-ink/50 md:col-span-6 md:text-[15px]">
                    {service.body}
                  </p>
                  <span className="flex md:col-span-1 md:justify-end">
                    <ArrowUpRight className="size-5 text-ink/20 transition-all group-hover:translate-x-0.5 group-hover:text-x-red" />
                  </span>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.15}>
          <div className="mt-10 flex justify-end">
            <Link
              href="/services"
              transitionTypes={["nav-forward"]}
              className="inline-flex items-center gap-2 font-label text-[10px] tracking-[0.2em] text-ink/50 transition-colors hover:text-x-red"
            >
              All services
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
