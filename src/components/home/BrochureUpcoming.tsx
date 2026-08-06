"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { brochureOngoing } from "@/data/brochureHome";

/**
 * UPCOMING — Live pipeline as a vertical timeline.
 */
export function BrochureUpcoming() {
  return (
    <section
      id="upcoming"
      className="relative scroll-mt-28 overflow-hidden border-t border-white/[0.06] bg-[#111110] py-24 text-white md:py-32"
    >
      <span aria-hidden className="absolute left-0 top-0 h-[3px] w-24 bg-x-red/75" />

      <Container>
        <div className="grid gap-6 border-b border-white/[0.09] pb-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-end lg:gap-14">
          <Reveal>
            <p className="font-label text-[10.5px] tracking-[0.32em] uppercase text-x-red">
              Currently Active
            </p>
            <h2
              className="mt-4 font-display font-black leading-[1.02] tracking-[-0.045em] text-white"
              style={{ fontSize: "clamp(2.1rem, 4.2vw, 3.5rem)" }}
            >
              Live Pipeline
            </h2>
          </Reveal>
          <Reveal delay={0.07}>
            <p className="text-[15px] leading-[1.9] text-white/55 md:text-[16px] lg:pb-1">
              Currently in active engineering — from design through site support.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-14 pl-6 md:mt-16 md:pl-10">
          <Reveal from="fade">
            <div
              aria-hidden
              className="absolute left-0 top-0 w-[2px] bg-gradient-to-b from-x-red via-x-red/55 to-transparent"
              style={{ height: "calc(100% - 2.5rem)" }}
            />
          </Reveal>

          <div>
            {brochureOngoing.map((project, i) => (
              <Reveal key={project.title} delay={0.07 * i} from="fade">
                <div className="group relative cursor-default py-8 pl-8 md:grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] md:items-center md:gap-12 md:py-10 md:pl-12">
                  <div
                    aria-hidden
                    className="absolute -left-[5px] top-1/2 -translate-y-1/2"
                  >
                    <div className="size-3 rotate-45 border-2 border-x-red/55 bg-[#111110] transition-all duration-300 group-hover:scale-125 group-hover:border-x-red" />
                    {i === 0 ? (
                      <div className="absolute inset-[6px] rotate-45 bg-x-red animate-pulse" />
                    ) : null}
                  </div>

                  <div
                    aria-hidden
                    className="absolute left-0 top-1/2 h-px w-10 -translate-y-1/2 bg-gradient-to-r from-x-red/40 to-transparent md:w-14"
                  />

                  <div>
                    <span className="font-label text-[10.5px] font-bold tracking-[0.28em] text-x-red">
                      ×{String(i + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className="mt-2.5 font-display font-bold tracking-[-0.02em] text-white transition-colors group-hover:text-x-red"
                      style={{ fontSize: "clamp(1.1rem, 1.85vw, 1.45rem)" }}
                    >
                      {project.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-[14.5px] leading-[1.85] text-white/65 transition-colors group-hover:text-white/88 md:mt-0 md:text-[15.5px]">
                    {project.detail}
                  </p>

                  <div
                    aria-hidden
                    className="absolute bottom-0 right-0 h-px w-full bg-white/[0.07]"
                  />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.32} from="fade">
            <div className="relative mt-3 pl-8 md:pl-12">
              <div
                aria-hidden
                className="absolute -left-[4px] top-1/2 size-2 -translate-y-1/2 rounded-full bg-white/22"
              />
              <p className="font-label text-[9.5px] tracking-[0.28em] uppercase text-white/32">
                More projects in progress · Not listed until construction start
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
