"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { brochureSpecialized } from "@/data/brochureHome";

/**
 * SPECIALISED — Two equal bordered plates, identical chrome.
 */
export function BrochureSpecialized() {
  return (
    <section
      id="specialized"
      className="scroll-mt-28 border-y border-ink/[0.06] bg-[#fafaf8] py-20 md:py-28"
    >
      <Container>
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-end lg:gap-12">
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
            <p className="max-w-[44ch] text-[15px] leading-[1.85] text-ink/58 md:text-[15.5px]">
              Beyond standard typologies — technical depth for renovation, retrofit and specialist
              structure engineering.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-2 md:gap-5">
          {brochureSpecialized.map((block, i) => (
            <Reveal key={block.title} delay={0.05 * i} from="fade" className="h-full">
              <article className="flex h-full flex-col border border-ink/[0.08] bg-white p-6 sm:p-7">
                <div className="flex items-baseline gap-3">
                  <span className="w-7 shrink-0 font-label text-[10px] tracking-[0.24em] text-x-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg font-extrabold tracking-tight text-ink md:text-xl">
                    {block.title}
                  </h3>
                </div>
                <ul className="mt-5 flex flex-1 flex-col gap-3 border-t border-ink/[0.08] pt-5">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[14px] leading-[1.7] text-ink/60"
                    >
                      <span
                        aria-hidden
                        className="mt-[0.55em] size-1.5 shrink-0 rotate-45 bg-x-red"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.14}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
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
        </Reveal>
      </Container>
    </section>
  );
}
