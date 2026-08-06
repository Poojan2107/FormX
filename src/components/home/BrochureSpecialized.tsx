"use client";

import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";
import { brochureSpecialized } from "@/data/brochureHome";
import { brochureVisuals } from "@/data/projects";

/**
 * SPECIALIZED — "Technical Depth"
 * Left: dark panel with image + SPECIALISED watermark label
 * Right: white panel with discipline accordion-style list
 * Each block: × glyph + title + bullet items
 */
export function BrochureSpecialized() {
  return (
    <section id="specialized" className="scroll-mt-28 overflow-hidden bg-white">
      <div className="grid lg:grid-cols-2">

        {/* ── Left: Dark image panel ────────────────────────── */}
        <Reveal from="left" className="relative min-h-[400px] bg-[#0a0a0a] lg:min-h-[580px]">
          {/* Image fills the column */}
          <AssetImage
            slot={brochureVisuals.specializedBanner}
            alt="FormX specialised engineering projects"
            fit="cover"
            aspect="auto"
            tone="dark"
            className="absolute inset-0 size-full opacity-55"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* Dark overlay gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-transparent" />

          {/* Watermark label */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
          >
            <span
              className="rotate-[-8deg] font-display font-black uppercase tracking-widest text-white/[0.06]"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
            >
              Specialised
            </span>
          </div>

          {/* Bottom label */}
          <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
            <span className="font-display text-4xl font-black text-x-red/80">×</span>
            <p className="mt-2 font-label text-[9px] tracking-[0.26em] text-white/40">
              FormX · Engineering Depth
            </p>
          </div>
        </Reveal>

        {/* ── Right: White content panel ───────────────────── */}
        <div className="flex flex-col justify-center px-6 py-16 sm:px-10 md:px-12 lg:py-20 xl:px-14">
          <Reveal>
            <p className="font-label text-[10px] tracking-[0.3em] text-x-red">
              Specialised
            </p>
            <h2
              className="mt-4 font-display font-extrabold leading-[1.04] tracking-tight text-ink"
              style={{ fontSize: "clamp(1.85rem, 3.5vw, 2.75rem)" }}
            >
              Specialised projects
            </h2>
            <p className="mt-4 max-w-[38ch] text-[14px] leading-[1.75] text-ink/45">
              Beyond standard typologies — technical depth for renovation,
              retrofit and specialist structure engineering.
            </p>
          </Reveal>

          <div className="mt-10 space-y-8">
            {brochureSpecialized.map((block, i) => (
              <Reveal key={block.title} delay={0.08 * i} from="fade">
                <div className="border-l-2 border-x-red/30 pl-5 transition-all hover:border-x-red/70">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-xl font-black text-x-red">×</span>
                    <h3 className="font-display text-[1rem] font-bold tracking-tight text-ink md:text-[1.1rem]">
                      {block.title}
                    </h3>
                  </div>
                  <ul className="mt-3 space-y-2 pl-8">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-[13px] leading-[1.6] text-ink/48 md:text-[14px]"
                      >
                        <span className="mt-[0.4em] size-1 shrink-0 rounded-full bg-x-red/40" />
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
