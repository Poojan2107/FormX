"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { brochurePillars } from "@/data/brochureHome";
import { PillarsGraphic } from "@/components/home/PillarsGraphic";

/**
 * PILLARS — Editorial manifesto bands with giant ghost numbers.
 */
export function BrochurePillars() {
  return (
    <section
      id="pillars"
      className="relative scroll-mt-28 overflow-hidden bg-[#0a0a0a] py-24 text-white md:py-32"
    >
      <Container className="relative z-10">
        <div className="grid gap-6 border-b border-white/[0.08] pb-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-14">
          <Reveal>
            <div className="flex items-center justify-between">
              <p className="font-label text-[10.5px] tracking-[0.32em] uppercase text-x-red">
                The FormX Way
              </p>
              <span className="font-label text-[9.5px] font-bold tracking-[0.24em] text-white/35">
                [FORMX.03]
              </span>
            </div>
            <h2
              className="mt-4 font-display font-black uppercase leading-[1.02] tracking-[-0.045em] text-white"
              style={{ fontSize: "clamp(2.1rem, 4.4vw, 3.6rem)" }}
            >
              WHERE VISION TAKES FORM
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-[14.5px] leading-[1.85] text-white/70 md:text-[15.5px] lg:pb-1">
              A dynamic team of enthusiastic structural engineers and designers, dedicated to crafting spaces that are not only robust and functional but also inspire creativity and innovation. We seamlessly merge technical proficiency with practical wisdom to create structures that prioritize safety, efficiency, and alignment with architectural vision and user requirements.
            </p>
          </Reveal>
        </div>

        {/* 4 Structural Pillars Graphic Banner */}
        <PillarsGraphic />
      </Container>


      <Reveal delay={0.28} from="fade">
        <Container className="relative z-10">
          <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
            <p className="font-label text-[9.5px] tracking-[0.28em] uppercase text-white/28">
              Form
              <span className="text-x-red/70">X</span>
              {" "}Consultants · Design | Engineering
            </p>
            <Link
              href="/contact"
              transitionTypes={["nav-forward"]}
              className="group inline-flex items-center gap-2 font-label text-[10.5px] tracking-[0.2em] text-x-red transition-colors hover:text-white"
            >
              Discuss your facility
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
