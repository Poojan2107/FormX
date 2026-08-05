"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { brochureSpecialized } from "@/data/brochureHome";
import { brochureVisuals } from "@/data/projects";

/** Specialised work — banner visual + two capability columns */
export function BrochureSpecialized() {
  return (
    <section id="specialized" className="scroll-mt-28 bg-[#f7f7f5] py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <p className="font-label text-[10px] tracking-[0.28em] text-x-red">Specialised</p>
            <h2
              className="mt-4 font-display font-extrabold uppercase leading-[0.95] tracking-tight text-ink"
              style={{ fontSize: "clamp(1.85rem, 4vw, 3rem)" }}
            >
              Specialised projects
            </h2>
            <p className="mt-5 max-w-[36ch] text-[15px] leading-[1.7] text-ink/55">
              Beyond new-build facilities — strengthening, renovation and mounting systems where
              existing structures must carry new loads.
            </p>

            <div className="mt-10 space-y-8">
              {brochureSpecialized.map((block, i) => (
                <Reveal key={block.title} delay={0.08 * i} from="fade">
                  <div className="border-l-2 border-x-red pl-5">
                    <h3 className="font-display text-base font-bold uppercase tracking-tight text-ink">
                      {block.title}
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {block.items.map((item) => (
                        <li key={item} className="text-[14px] leading-[1.6] text-ink/55">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-7">
            <div className="relative overflow-hidden border border-line bg-white">
              <AssetImage
                slot={brochureVisuals.specializedBanner}
                alt="FormX specialised engineering"
                fit="contain"
                aspect="landscape"
                className="min-h-[280px] md:min-h-[420px]"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
