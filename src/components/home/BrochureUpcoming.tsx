"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { brochureOngoing } from "@/data/brochureHome";

/** Upcoming — compact rail with red × markers */
export function BrochureUpcoming() {
  return (
    <section id="upcoming" className="scroll-mt-28 bg-[#0a0a0a] py-20 text-white md:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-label text-[10px] tracking-[0.28em] text-x-red">In progress</p>
              <h2
                className="mt-4 font-display font-bold leading-[1.05] tracking-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3.15rem)" }}
              >
                Upcoming projects
              </h2>
            </div>
            <p className="max-w-[32ch] text-[13px] leading-[1.6] text-white/35 md:text-right">
              Currently moving through the Ahmedabad studio.
            </p>
          </div>
        </Reveal>

        <ol className="mt-14">
          {brochureOngoing.map((item, i) => (
            <Reveal key={item.title} delay={0.05 * i} from="fade">
              <li className="group grid gap-3 border-t border-white/[0.08] py-7 transition-colors hover:bg-white/[0.02] md:grid-cols-12 md:items-baseline md:gap-6 md:py-8">
                <span className="flex items-center gap-3 font-label text-[10px] tracking-[0.24em] text-white/25 md:col-span-1">
                  <span className="text-x-red">×</span>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-base font-bold tracking-tight text-white transition-colors group-hover:text-x-red md:col-span-4 md:text-lg">
                  {item.title}
                </h3>
                <p className="text-[14px] leading-[1.65] text-white/40 md:col-span-7 md:text-[15px]">
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
