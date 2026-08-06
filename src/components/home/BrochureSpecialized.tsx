"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { brochureSpecialized } from "@/data/brochureHome";

/**
 * SPECIALIZED — Split: depth image + plain discipline lists (no mini cards).
 */
export function BrochureSpecialized() {
  return (
    <section id="specialized" className="scroll-mt-28 overflow-hidden bg-white">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[400px] overflow-hidden bg-[#0a0a09] lg:min-h-full">
          <Image
            src="/assets/projects/brochure/brochure_p7_1.png"
            alt="FormX specialised engineering"
            fill
            unoptimized
            className="object-cover object-center opacity-65"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
            <p className="font-label text-[10px] tracking-[0.24em] text-x-red">
              Engineering depth
            </p>
            <p className="mt-2 max-w-[18ch] font-display text-xl font-extrabold tracking-tight text-white">
              Beyond standard typologies
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center px-8 py-16 sm:px-12 md:px-14 lg:py-24 xl:px-16">
          <Reveal>
            <p className="eyebrow text-x-red">Specialised</p>
            <h2
              className="mt-4 max-w-[14ch] font-display font-black leading-[1.02] tracking-tight text-ink"
              style={{ fontSize: "clamp(1.85rem, 3vw, 2.75rem)" }}
            >
              Specialised projects
            </h2>
            <p className="mt-5 max-w-[44ch] text-[15.5px] leading-[1.9] text-ink/58">
              Technical depth for renovation, retrofit and specialist structure engineering.
            </p>
          </Reveal>

          <div className="mt-12 space-y-10">
            {brochureSpecialized.map((block, i) => (
              <Reveal key={block.title} delay={0.05 * i}>
                <div className="border-t border-ink/[0.08] pt-8">
                  <p className="font-label text-[10px] tracking-[0.2em] text-x-red">
                    {String(i + 1).padStart(2, "0")} · {block.title}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[14.5px] leading-[1.75] text-ink/60"
                      >
                        <span className="mt-1 shrink-0 font-display text-xs font-black text-x-red">
                          ×
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16}>
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <Link
                href="/contact"
                transitionTypes={["nav-forward"]}
                className="fx-btn-primary group"
              >
                Discuss specialised scope
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/projects"
                transitionTypes={["nav-forward"]}
                className="group inline-flex items-center gap-2 font-label text-[10px] tracking-[0.18em] text-ink/45 transition-colors hover:text-x-red"
              >
                Relevant projects
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
