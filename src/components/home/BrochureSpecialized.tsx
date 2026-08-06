"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { brochureSpecialized } from "@/data/brochureHome";

/**
 * SPECIALIZED — Split panel: image depth + equal-height discipline columns.
 */
export function BrochureSpecialized() {
  return (
    <section id="specialized" className="scroll-mt-28 overflow-hidden bg-white">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[440px] overflow-hidden bg-[#0a0a0a] lg:min-h-full">
          <Image
            src="/assets/projects/brochure/brochure_p7_1.png"
            alt="FormX specialised engineering"
            fill
            unoptimized
            className="object-cover object-center opacity-70 transition-transform duration-[2.2s] hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/75 via-black/35 to-transparent" />

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
          >
            <span
              className="rotate-[-8deg] font-display font-black uppercase tracking-[0.18em] text-white/[0.05]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Specialised
            </span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
            <span className="font-display text-5xl font-black leading-none text-x-red/75">×</span>
            <p className="mt-2.5 font-label text-[9.5px] tracking-[0.28em] text-white/40">
              FormX · Engineering Depth
            </p>
          </div>

          <div className="absolute left-0 top-0 h-[3px] w-20 bg-x-red" aria-hidden />
        </div>

        <div className="flex flex-col justify-center px-8 py-16 sm:px-12 md:px-14 lg:py-24 xl:px-16">
          <Reveal>
            <p className="font-label text-[10.5px] tracking-[0.32em] uppercase text-x-red">
              Specialised
            </p>
            <h2
              className="mt-4 max-w-[16ch] font-display font-black leading-[1.05] tracking-[-0.04em] text-ink"
              style={{ fontSize: "clamp(1.95rem, 3.3vw, 2.9rem)" }}
            >
              Specialised projects
            </h2>
            <p className="mt-5 max-w-[48ch] text-[16px] font-medium leading-[1.9] text-ink/62">
              Beyond standard typologies — technical depth for renovation, retrofit and specialist
              structure engineering.
            </p>
          </Reveal>

          <div className="mt-11 grid gap-4 sm:grid-cols-2 sm:items-stretch">
            {brochureSpecialized.map((block, i) => (
              <Reveal key={block.title} delay={0.07 * i} from="fade" className="h-full">
                <div className="flex h-full flex-col border border-ink/[0.08] border-l-[3px] border-l-x-red/70 bg-[#faf9f5] px-5 py-6 transition-colors hover:border-ink/[0.12] hover:border-l-x-red hover:bg-white md:px-6">
                  <div className="flex items-center gap-2.5">
                    <span className="font-label text-[10px] font-bold tracking-[0.24em] text-x-red">
                      0{i + 1}
                    </span>
                    <h3 className="font-display text-[1.02rem] font-bold leading-tight tracking-tight text-ink md:text-[1.08rem]">
                      {block.title}
                    </h3>
                  </div>
                  <ul className="mt-5 flex flex-1 flex-col gap-3">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-[13px] leading-[1.7] text-ink/58 md:text-[13.5px]"
                      >
                        <span className="mt-[0.45em] size-1.5 shrink-0 rotate-45 bg-x-red/55" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                href="/contact"
                transitionTypes={["nav-forward"]}
                className="fx-btn-primary group inline-flex"
              >
                Discuss specialised scope
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/projects"
                transitionTypes={["nav-forward"]}
                className="group inline-flex items-center gap-2 font-label text-[10.5px] tracking-[0.2em] text-ink/55 transition-colors hover:text-x-red"
              >
                See relevant projects
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
