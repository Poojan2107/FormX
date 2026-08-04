"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { leadership } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";

export function PeopleGlimpse() {
  const founder = leadership.find((p) => p.featured);

  if (!founder) return null;

  return (
    <section className="bg-[#0d0d0d] py-20 text-white md:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-14">
          <Reveal className="relative min-h-[380px] overflow-hidden bg-[#1a1a1a] lg:col-span-5 lg:min-h-[520px]">
            <AssetImage
              alt={founder.name}
              slot={founder.asset}
              kind="team"
              fit="cover"
              aspect="auto"
              objectPosition="center top"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 font-display text-[10px] font-bold uppercase tracking-[0.22em] text-white/70">
              Desk · Site · Review
            </p>
          </Reveal>

          <Reveal delay={0.08} className="flex flex-col justify-center lg:col-span-7">
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              People
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[1.08] tracking-tight text-white md:text-4xl">
              People close to the work
            </h2>
            <p className="mt-2 font-display text-sm font-bold uppercase tracking-[0.14em] text-white/50">
              {founder.name} · {founder.role} · Grade 1 (AMC / BMC)
            </p>
            <p className="mt-6 max-w-xl text-[15px] leading-[1.9] text-white/70">{founder.bio}</p>
            <p className="mt-5 max-w-xl text-[14px] leading-[1.85] text-white/50">
              Load paths. Interfaces. Constructability. Site walks. Decisions stay with engineers who
              own the drawings — structural designer, architecture planning and site execution.
            </p>
            <Link
              href="/about"
              transitionTypes={["nav-forward"]}
              className="mt-8 inline-flex items-center gap-2 font-display text-[12px] font-bold uppercase tracking-[0.16em] text-x-red transition-colors hover:text-white"
            >
              About the practice
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
