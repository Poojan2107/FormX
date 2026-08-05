"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { brochureSpecialized } from "@/data/brochureHome";
import { brochureVisuals } from "@/data/projects";

/** Image-led specialised chapter */
export function BrochureSpecialized() {
  return (
    <section id="specialized" className="scroll-mt-28 overflow-hidden bg-white">
      <div className="grid lg:grid-cols-12">
        <Reveal from="left" className="relative min-h-[360px] bg-[#111] lg:col-span-7 lg:min-h-[560px]">
          <AssetImage
            slot={brochureVisuals.specializedBanner}
            alt="FormX specialised engineering"
            fit="contain"
            aspect="auto"
            tone="dark"
            className="absolute inset-0"
            sizes="(max-width: 1024px) 100vw, 58vw"
          />
        </Reveal>

        <div className="flex flex-col justify-center px-6 py-16 sm:px-10 md:px-12 lg:col-span-5 lg:py-20">
          <Reveal>
            <p className="font-label text-[10px] tracking-[0.28em] text-x-red">Specialised</p>
            <h2
              className="mt-4 font-display font-bold leading-[1.05] tracking-tight text-ink"
              style={{ fontSize: "clamp(1.85rem, 3.5vw, 2.75rem)" }}
            >
              Specialised projects
            </h2>
          </Reveal>

          <div className="mt-10 space-y-9">
            {brochureSpecialized.map((block, i) => (
              <Reveal key={block.title} delay={0.08 * i} from="fade">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-display text-lg font-bold text-x-red">×</span>
                    <h3 className="font-display text-base font-bold tracking-tight text-ink md:text-lg">
                      {block.title}
                    </h3>
                  </div>
                  <ul className="mt-3 space-y-1.5 pl-7">
                    {block.items.map((item) => (
                      <li key={item} className="text-[13px] leading-[1.55] text-ink/50 md:text-[14px]">
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
