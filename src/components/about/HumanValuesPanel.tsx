"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Users2 } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { aboutPage } from "@/data/site";

/** Why clients choose FormX — accordion + collaboration photo. */
export function HumanValuesPanel() {
  const [open, setOpen] = useState(0);
  const reduce = useReducedMotion();

  return (
    <section id="why-formx" className="scroll-mt-28 border-b border-ink/[0.08] bg-[#fafaf8]">
      <Container className="py-16 md:py-20 lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-6">
            <p className="font-label text-[10px] font-bold uppercase tracking-[0.3em] text-x-red">
              Why FormX
            </p>
            <h2
              className="mt-3 max-w-xl font-display font-black tracking-[-0.045em] text-ink"
              style={{ fontSize: "clamp(2rem, 3.8vw, 3rem)" }}
            >
              Why clients choose FormX
            </h2>
            <p className="mt-4 max-w-[44ch] text-[15.5px] leading-[1.8] text-ink/70 md:text-[16px]">
              Human values held in every review, meeting, and issued package — focusing on core human values and collaborative approach rather than generic direct design selling.
            </p>

            <div className="mt-9 border-t border-ink/10">
              {aboutPage.humanValues.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={item.title}
                    className={`border-b border-ink/10 transition-all duration-300 ${
                      isOpen ? "bg-white pl-4 border-l-2 border-l-x-red shadow-xs" : "hover:bg-white/60"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 py-5 text-left md:gap-5 md:py-6"
                      aria-expanded={isOpen}
                    >
                      <span className="font-label text-[11px] font-bold tracking-[0.2em] text-x-red">
                        0{i + 1}
                      </span>
                      <span
                        className={`text-[16px] font-bold leading-[1.35] tracking-tight transition-colors md:text-[17.5px] ${
                          isOpen ? "text-ink" : "text-ink/80 group-hover:text-ink"
                        }`}
                      >
                        {item.title}
                      </span>
                      <span
                        className={`flex size-8 shrink-0 items-center justify-center rounded transition-colors ${
                          isOpen
                            ? "bg-x-red text-white"
                            : "border border-ink/15 bg-white text-x-red group-hover:border-x-red"
                        }`}
                      >
                        <ChevronDown
                          className={`size-4 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          initial={reduce ? false : { height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 pl-9 pr-8 text-[14.5px] leading-[1.8] text-ink/75 md:pl-10 md:text-[15.5px]">
                            {item.body}
                          </p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* Right Column: High Quality Framed Team Photo */}
          <Reveal from="right" delay={0.08} className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="formx-cut-lg group relative aspect-[4/5] overflow-hidden border border-ink/10 bg-[#111] shadow-[0_30px_70px_-25px_rgba(0,0,0,0.3)] sm:aspect-[5/6] lg:aspect-[4/5]">
              <Image
                src="/assets/about/team-meeting.jpg"
                alt="FormX team collaboration — partner-led discussion with cross-collaboration"
                fill
                unoptimized
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <span aria-hidden className="absolute left-0 top-0 z-10 h-[3px] w-20 bg-x-red" />

              <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded border border-white/20 bg-black/60 backdrop-blur-md px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                <Users2 className="size-3.5 text-x-red" />
                <span>FormX Studio Team</span>
              </div>

              <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-8">
                <p className="font-label text-[10px] font-bold uppercase tracking-[0.26em] text-x-red">
                  Collaborative Practice
                </p>
                <p className="mt-2 max-w-[26ch] font-display text-xl font-extrabold leading-snug text-white md:text-2xl">
                  Partner-led discussion with cross-collaboration.
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-white/70">
                  Disciplines answer each other in one room before drawings reach site.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export function StudioEvidence() {
  return <HumanValuesPanel />;
}

