"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { brochureSpecialized } from "@/data/brochureHome";

/**
 * SPECIALIZED — Split panel: image depth + discipline lists.
 */
export function BrochureSpecialized() {
  return (
    <section id="specialized" className="scroll-mt-28 overflow-hidden bg-white">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[440px] overflow-hidden bg-[#0a0a0a] lg:min-h-[680px]">
          <Image
            src="/assets/projects/brochure/brochure_p5_1.png"
            alt="FormX specialised engineering"
            fill
            unoptimized
            className="object-cover object-center opacity-55 transition-transform duration-[2.2s] hover:scale-[1.03]"
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

          <div className="mt-11 space-y-4">
            {brochureSpecialized.map((block, i) => (
              <Reveal key={block.title} delay={0.07 * i} from="fade">
                <div className="group border-l-2 border-ink/[0.08] bg-[#faf9f5] px-6 py-6 transition-all hover:border-x-red hover:bg-white">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-xl font-black leading-none text-x-red">×</span>
                    <h3 className="font-display text-[1.05rem] font-bold tracking-tight text-ink md:text-[1.1rem]">
                      {block.title}
                    </h3>
                  </div>
                  <ul className="mt-4 space-y-2.5 pl-8">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-[13.5px] leading-[1.75] text-ink/58 md:text-[14.5px]"
                      >
                        <span className="mt-[0.5em] size-1 shrink-0 rounded-full bg-x-red/50" />
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
