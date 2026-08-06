"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { brochureSpecialized } from "@/data/brochureHome";

/**
 * SPECIALISED — Equal plates with index chrome and red brand accents.
 */
export function BrochureSpecialized() {
  return (
    <section
      id="specialized"
      className="scroll-mt-28 border-y border-ink/[0.06] bg-[#f4f3f0] py-20 md:py-28"
    >
      <Container>
        <div className="grid gap-5 border-b border-ink/[0.08] pb-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-end lg:gap-12">
          <Reveal>
            <p className="font-label text-[10px] uppercase tracking-[0.32em] text-x-red sm:text-[10.5px]">
              Specialised
            </p>
            <h2
              className="mt-4 max-w-[14ch] font-display font-black leading-[1.05] tracking-[-0.04em] text-ink"
              style={{ fontSize: "clamp(1.85rem, 3vw, 2.75rem)" }}
            >
              Specialised projects
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="max-w-[44ch] text-[15px] leading-[1.85] text-ink/58 md:text-[15.5px] lg:pb-1">
              Beyond standard typologies — technical depth for renovation, retrofit and specialist
              structure engineering.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-2 md:gap-5">
          {brochureSpecialized.map((block, i) => (
            <Reveal key={block.title} delay={0.05 * i} from="fade" className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden border border-ink/[0.08] bg-white transition-colors hover:border-x-red/35">
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-x-red transition-transform duration-500 group-hover:scale-y-100"
                />

                <div className="relative flex flex-1 flex-col p-6 sm:p-7 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="font-label text-[10px] tracking-[0.24em] text-x-red">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-2.5 max-w-[16ch] font-display text-lg font-extrabold tracking-tight text-ink md:text-xl">
                        {block.title}
                      </h3>
                    </div>
                    <span
                      aria-hidden
                      className="select-none font-display text-[3.25rem] font-black leading-none text-ink/[0.05] transition-colors group-hover:text-x-red/15 md:text-[3.75rem]"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <ul className="mt-6 flex flex-1 flex-col gap-3.5 border-t border-ink/[0.08] pt-6">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[14px] leading-[1.7] text-ink/62"
                      >
                        <span
                          aria-hidden
                          className="mt-[0.55em] size-1.5 shrink-0 rotate-45 bg-x-red"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.14}>
          <div className="mt-10 flex flex-col gap-4 border-t border-ink/[0.08] pt-8 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <p className="font-label text-[9.5px] uppercase tracking-[0.24em] text-ink/35">
              Form
              <span className="text-x-red">X</span>
              {" · "}Specialist scopes
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <Link
                href="/contact"
                transitionTypes={["nav-forward"]}
                className="fx-btn-primary group inline-flex w-fit"
              >
                Discuss specialised scope
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/projects"
                transitionTypes={["nav-forward"]}
                className="group inline-flex items-center gap-2 font-label text-[10.5px] tracking-[0.2em] text-ink/50 transition-colors hover:text-x-red"
              >
                See relevant projects
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
