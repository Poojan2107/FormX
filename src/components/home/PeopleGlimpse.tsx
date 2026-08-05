"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { leadership } from "@/data/content";
import { hirenJudgement } from "@/data/method";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";

export function PeopleGlimpse() {
  const founder = leadership.find((p) => p.featured);
  if (!founder) return null;

  return (
    <section className="relative overflow-hidden bg-black py-20 text-white md:py-28 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background: "radial-gradient(50% 40% at 20% 50%, rgba(224,49,40,0.15), transparent 70%)",
        }}
        aria-hidden
      />
      <Container className="relative z-10">
        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden bg-[#1a1a1a]">
              <AssetImage
                alt={founder.name}
                slot={founder.asset}
                kind="team"
                fit="cover"
                aspect="auto"
                objectPosition="center top"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <span className="absolute left-5 top-5 h-6 w-6 border-l-2 border-t-2 border-x-red" />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col justify-center lg:col-span-7">
            <p className="font-label text-[11px] tracking-[0.28em] text-x-red">Founder</p>
            <h2
              className="mt-4 font-display font-black uppercase leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              {founder.name}
            </h2>
            <p className="mt-3 font-label text-[10px] tracking-[0.16em] text-white/40">
              {founder.role} · Grade 1 (AMC / BMC)
            </p>
            <p className="mt-8 max-w-[42ch] text-[17px] font-medium leading-[1.8] text-white/65">
              {founder.bio}
            </p>

            <div className="mt-12 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-2">
              <div>
                <p className="font-label text-[10px] tracking-[0.22em] text-x-red">He reviews</p>
                <p className="mt-3 text-[14px] leading-[1.75] text-white/50">{hirenJudgement.reviews}</p>
              </div>
              <div>
                <p className="font-label text-[10px] tracking-[0.22em] text-x-red">He refuses</p>
                <p className="mt-3 text-[14px] leading-[1.75] text-white/50">{hirenJudgement.refuses}</p>
              </div>
            </div>

            <Link
              href="/about"
              transitionTypes={["nav-forward"]}
              className="mt-10 inline-flex items-center gap-2 font-label text-[11px] tracking-[0.18em] text-x-red hover:text-white"
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
