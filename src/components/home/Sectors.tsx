"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { sectors } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";

export function Sectors() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "right" ? 320 : -320,
      behavior: "smooth",
    });
  };

  return (
    <section id="sectors" className="scroll-mt-32 bg-[#0c0c0c] overflow-hidden">
      {/* Pattern overlay */}
      <div className="pointer-events-none absolute inset-0 pattern-grid-dark opacity-15" aria-hidden />

      <div className="relative py-16 md:py-24">
        <Container>
          <Reveal className="mb-10 flex items-end justify-between gap-6">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-6 bg-x-red" />
                <span className="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-x-red">
                  Our Sectors
                </span>
              </div>
              <h2
                className="font-display font-extrabold leading-[1.1] tracking-[-0.02em] text-white"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.8rem)" }}
              >
                Industries we serve
              </h2>
              <p className="mt-3 max-w-lg text-[14px] leading-relaxed text-white/45">
                Coordinated engineering across renewable manufacturing, process plants, logistics, and infrastructure campuses.
              </p>
            </div>

            {/* Scroll controls */}
            <div className="hidden items-center gap-2 md:flex">
              <button
                type="button"
                onClick={() => scrollBy("left")}
                className="flex size-10 items-center justify-center border border-white/20 text-white/60 transition-all hover:border-x-red hover:text-x-red"
                aria-label="Scroll left"
              >
                <ArrowLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollBy("right")}
                className="flex size-10 items-center justify-center border border-white/20 text-white/60 transition-all hover:border-x-red hover:text-x-red"
                aria-label="Scroll right"
              >
                <ArrowRight className="size-4" />
              </button>
              <Link
                href="/sectors"
                className="ml-2 flex items-center gap-2 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-white/40 transition-colors hover:text-x-red"
              >
                All Sectors <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </Reveal>
        </Container>

        {/* Horizontal scroll strip — full bleed */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto pb-4 pl-4 md:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] scrollbar-hide"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {sectors.map((sector, i) => (
            <Link
              key={sector.slug}
              href={`/sectors/${sector.slug}`}
              className="group relative shrink-0 overflow-hidden"
              style={{
                width: "260px",
                height: "380px",
                scrollSnapAlign: "start",
              }}
            >
              {/* Full-bleed image */}
              <div className="absolute inset-0">
                <AssetImage
                  alt={sector.title}
                  slot={sector.asset}
                  kind="sector"
                  aspect="portrait"
                  fit="cover"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/20" />

              {/* Index */}
              <div className="absolute left-4 top-4">
                <span className="font-display text-[10px] font-bold text-white/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display text-[15px] font-bold uppercase leading-snug tracking-tight text-white transition-colors group-hover:text-x-red">
                  {sector.title}
                </h3>
                <div className="mt-3 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-x-red opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Explore <ArrowUpRight className="size-3" />
                </div>
              </div>

              {/* Red left border on hover */}
              <div className="absolute left-0 top-0 h-full w-[3px] bg-x-red opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
          ))}

          {/* End spacer */}
          <div className="shrink-0 w-4" />
        </div>

        {/* Mobile CTA */}
        <Container className="mt-8 md:hidden">
          <Link
            href="/sectors"
            className="flex w-full items-center justify-center gap-2 border border-x-red px-6 py-4 font-display text-[12px] font-bold uppercase tracking-[0.16em] text-x-red"
          >
            View All Sectors <ArrowUpRight className="size-4" />
          </Link>
        </Container>
      </div>
    </section>
  );
}
