"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { brochureOngoing } from "@/data/brochureHome";

/** Upcoming / ongoing — horizontal timeline energy, not cards */
export function BrochureUpcoming() {
  return (
    <section id="upcoming" className="scroll-mt-28 bg-black py-20 text-white md:py-28">
      <Container>
        <Reveal>
          <p className="font-label text-[10px] tracking-[0.28em] text-x-red">In progress</p>
          <h2
            className="mt-4 max-w-[16ch] font-display font-extrabold uppercase leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(1.85rem, 4.5vw, 3.25rem)" }}
          >
            Upcoming projects
          </h2>
          <p className="mt-5 max-w-[42ch] text-[15px] leading-[1.7] text-white/45">
            Work currently moving through the Ahmedabad studio — from brochure ongoing list.
          </p>
        </Reveal>

        <ol className="mt-14 space-y-0">
          {brochureOngoing.map((item, i) => (
            <Reveal key={item.title} delay={0.05 * i} from="fade">
              <li className="group grid gap-3 border-t border-white/10 py-8 md:grid-cols-12 md:gap-8 md:py-10">
                <span className="font-label text-[10px] tracking-[0.28em] text-white/25 md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-bold uppercase leading-snug tracking-tight text-white transition-colors group-hover:text-x-red md:col-span-4 md:text-xl">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-[1.7] text-white/45 md:col-span-7 md:text-[16px]">
                  {item.detail}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
