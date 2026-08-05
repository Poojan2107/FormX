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
    <section className="fx-grain border-b border-black bg-[#0a0a09] py-20 text-white md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden bg-[#1a1a18] formx-cut-lg">
              <AssetImage
                alt={founder.name}
                slot={founder.asset}
                kind="team"
                fit="cover"
                aspect="auto"
                objectPosition="center top"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col justify-center lg:col-span-7">
            <p className="font-label text-[11px] text-x-red">Founder</p>
            <h2
              className="mt-4 font-display font-extrabold uppercase leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)" }}
            >
              {founder.name}
            </h2>
            <p className="mt-3 font-label text-[11px] text-white/40">
              {founder.role} · Grade 1 (AMC / BMC)
            </p>
            <p className="mt-8 measure-essay text-[17px] leading-[1.8] text-white/65">{founder.bio}</p>
            <dl className="mt-10 space-y-6 border-t border-white/10 pt-8">
              <div>
                <dt className="font-label text-[10px] text-x-red">Reviews</dt>
                <dd className="mt-2 text-[15px] leading-[1.7] text-white/50">{hirenJudgement.reviews}</dd>
              </div>
              <div>
                <dt className="font-label text-[10px] text-x-red">Refuses</dt>
                <dd className="mt-2 text-[15px] leading-[1.7] text-white/50">{hirenJudgement.refuses}</dd>
              </div>
            </dl>
            <Link
              href="/about"
              transitionTypes={["nav-forward"]}
              className="mt-10 inline-flex items-center gap-2 font-label text-[11px] text-x-red hover:text-white"
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
