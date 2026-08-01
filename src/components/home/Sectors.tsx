"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { industriesServed } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";
import { cn } from "@/lib/cn";

export function Sectors() {
  return (
    <section id="sectors" className="scroll-mt-32 border-y border-line bg-white section-y">
      <Container>
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-2.5 flex items-center gap-3">
              <span className="h-px w-8 bg-x-red" />
              <span className="font-display text-[11px] font-bold uppercase tracking-[0.26em] text-x-red">
                Industries Served
              </span>
            </div>
            <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl lg:text-5xl">
              Specialized Engineering Across Key Sectors
            </h2>
            <p className="mt-2 max-w-[60ch] text-[14px] leading-relaxed text-ink-muted">
              Domain expertise for process plants, heavy engineering, cleanrooms, and logistics hubs.
            </p>
          </div>

          <Link
            href="/sectors"
            transitionTypes={["nav-forward"]}
            className="inline-flex shrink-0 items-center gap-2 font-display text-[12px] font-bold uppercase tracking-[0.16em] text-x-red transition-all hover:translate-x-1"
          >
            Explore All Sectors <ArrowRight className="size-4" />
          </Link>
        </Reveal>

        {/* 3 + 4 image mosaic — no orphan gap */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-12">
          {industriesServed.map((item, i) => {
            const topRow = i < 3;
            return (
              <Reveal
                key={item.id}
                delay={0.03 * i}
                className={cn("h-full", topRow ? "lg:col-span-4" : "lg:col-span-3")}
              >
                <Link
                  href={`/sectors/${item.slug}`}
                  transitionTypes={["nav-forward"]}
                  className="group relative block aspect-[5/4] overflow-hidden bg-[#111] lg:aspect-[4/3]"
                >
                  <AssetImage
                    alt={item.title}
                    slot={item.asset}
                    kind="sector"
                    aspect="landscape"
                    fit="cover"
                    tone="dark"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity group-hover:from-black/90" />

                  <span className="absolute left-3 top-3 bg-x-red px-2 py-1 font-display text-[9px] font-bold uppercase tracking-[0.16em] text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                    <h3 className="font-display text-base font-extrabold uppercase tracking-tight text-white transition-colors group-hover:text-x-red md:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-1 line-clamp-1 text-[12px] text-white/60">{item.description}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 font-display text-[10px] font-bold uppercase tracking-[0.14em] text-x-red">
                      View Practice Scope
                      <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
