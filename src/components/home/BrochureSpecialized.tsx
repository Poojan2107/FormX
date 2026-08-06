"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { brochureSpecialized } from "@/data/brochureHome";

/**
 * SPECIALIZED — "Technical Depth"
 * Left: dark panel with real image + SPECIALISED watermark
 * Right: white panel with discipline list
 */
export function BrochureSpecialized() {
  return (
    <section id="specialized" className="scroll-mt-28 overflow-hidden bg-white">
      <div className="grid lg:grid-cols-2">

        {/* ── Left: Dark image panel ────────────────────────── */}
        <div className="relative min-h-[420px] overflow-hidden bg-[#0a0a0a] lg:min-h-[580px]">
          <Image
            src="/assets/projects/brochure/brochure_p5_1.png"
            alt="FormX specialised engineering"
            fill
            unoptimized
            className="object-cover object-center opacity-50 transition-transform duration-[2s] hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* Gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent" />

          {/* Rotating watermark */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
          >
            <span
              className="rotate-[-10deg] font-display font-black uppercase tracking-[0.2em] text-white/[0.055]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Specialised
            </span>
          </div>

          {/* Bottom brand */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
            <span className="font-display text-5xl font-black leading-none text-x-red/70">×</span>
            <p className="mt-2 font-label text-[9px] tracking-[0.28em] text-white/35">
              FormX · Engineering Depth
            </p>
          </div>

          {/* Red top accent */}
          <div className="absolute left-0 top-0 h-[3px] w-16 bg-x-red" aria-hidden />
        </div>

        {/* ── Right: White content ──────────────────────────── */}
        <div className="flex flex-col justify-center px-8 py-20 sm:px-12 md:px-14 lg:py-24 xl:px-16">
          <Reveal>
            <p className="font-label text-[10px] tracking-[0.35em] text-x-red">
              Specialised
            </p>
            <h2
              className="mt-5 font-display font-black leading-[1.02] tracking-[-0.03em] text-ink"
              style={{ fontSize: "clamp(2rem, 3.5vw, 2.85rem)" }}
            >
              Specialised projects
            </h2>
            <p className="mt-5 max-w-[40ch] text-[15px] leading-[1.8] text-ink/48">
              Beyond standard typologies — technical depth for renovation,
              retrofit and specialist structure engineering.
            </p>
          </Reveal>

          <div className="mt-12 space-y-8">
            {brochureSpecialized.map((block, i) => (
              <Reveal key={block.title} delay={0.08 * i} from="fade">
                <div className="group cursor-default border-l-2 border-ink/[0.09] pl-6 transition-all hover:border-x-red/70">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-2xl font-black leading-none text-x-red transition-transform duration-300 group-hover:scale-110">×</span>
                    <h3 className="font-display font-bold tracking-tight text-ink md:text-[1.05rem]">
                      {block.title}
                    </h3>
                  </div>
                  <ul className="mt-4 space-y-2.5 pl-9">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-[13px] leading-[1.7] text-ink/45 md:text-[14px]"
                      >
                        <span className="mt-[0.45em] size-1 shrink-0 rounded-full bg-x-red/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
