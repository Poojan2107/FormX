"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { brochureOngoing } from "@/data/brochureHome";

/**
 * UPCOMING — "Live Pipeline"
 * Deepest dark (#080808) — creates dramatic contrast after white specialised.
 * Pipeline list: numbered with ×, title + detail, status dot.
 * Hover: subtle left indent + background lift.
 */
export function BrochureUpcoming() {
  return (
    <section id="upcoming" className="scroll-mt-28 bg-[#080808] py-20 text-white md:py-28">
      <Container>

        {/* ── Header ─────────────────────────────────────────── */}
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-label text-[10px] tracking-[0.3em] text-x-red">
                In Progress
              </p>
              <h2
                className="mt-4 font-display font-extrabold leading-[1.03] tracking-tight text-white"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
              >
                Live Pipeline
              </h2>
            </div>
            <div className="flex items-center gap-3 md:flex-col md:items-end md:gap-1">
              <span className="flex items-center gap-2">
                <span className="size-1.5 animate-pulse rounded-full bg-x-red" />
                <span className="font-label text-[9px] tracking-[0.24em] text-white/30">Active</span>
              </span>
              <p className="text-[12px] text-white/25 md:text-right">
                Currently in studio, Ahmedabad.
              </p>
            </div>
          </div>
        </Reveal>

        {/* ── Pipeline list ───────────────────────────────────── */}
        <ol className="mt-12">
          {brochureOngoing.map((item, i) => (
            <Reveal key={item.title} delay={0.06 * i} from="fade">
              <li className="fx-pipeline-row group grid gap-3 py-8 md:grid-cols-12 md:items-baseline md:gap-6 md:py-9">

                {/* Index + × marker */}
                <div className="flex items-center gap-3 md:col-span-2">
                  <span className="font-display text-sm font-black text-x-red/70 group-hover:text-x-red">
                    ×
                  </span>
                  <span className="font-label text-[10px] tracking-[0.26em] text-white/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="font-display font-bold tracking-tight text-white transition-colors group-hover:text-x-red md:col-span-4"
                  style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" }}
                >
                  {item.title}
                </h3>

                {/* Detail */}
                <p className="text-[13px] leading-[1.7] text-white/35 transition-colors group-hover:text-white/50 md:col-span-5 md:text-[14px]">
                  {item.detail}
                </p>

                {/* Status dot */}
                <div className="hidden items-center justify-end md:col-span-1 md:flex">
                  <span className="size-1.5 rounded-full bg-x-red/40 group-hover:bg-x-red/70 transition-colors" />
                </div>

              </li>
            </Reveal>
          ))}
        </ol>

        {/* ── Footer tag ─────────────────────────────────────── */}
        <Reveal delay={0.35} from="fade">
          <div className="mt-10 flex items-center gap-4 border-t border-white/[0.06] pt-8">
            <span className="font-display text-lg font-black text-x-red/25">×</span>
            <span className="font-label text-[9px] tracking-[0.26em] text-white/18">
              FormX Studio · Ahmedabad, Gujarat
            </span>
          </div>
        </Reveal>

      </Container>
    </section>
  );
}
