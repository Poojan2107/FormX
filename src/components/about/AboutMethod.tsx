"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { formxMethod } from "@/data/method";

/** Compact method timeline — no empty sticky scroll gap. */
export function AboutMethod() {
  return (
    <section className="relative border-t border-white/10 bg-[#0a0a0a] text-white">
      <Container className="py-14 md:py-16 lg:py-20">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-label text-[10.5px] uppercase tracking-[0.34em] text-x-red">
                {formxMethod.code}
              </p>
              <h2
                className="mt-4 font-display font-black leading-[0.92] tracking-[-0.05em]"
                style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
              >
                Five moves.
                <br />
                One room.
              </h2>
            </div>
            <p className="max-w-[32ch] text-[15px] leading-[1.75] text-white/50">
              Packages that can stand — from reading the site to standing with the built work.
            </p>
          </div>
        </Reveal>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-5 lg:gap-3">
          {formxMethod.stages.map((s, i) => (
            <Reveal key={s.id} delay={0.04 * i}>
              <li className="group flex h-full flex-col overflow-hidden border border-white/10 bg-[#111] transition-colors duration-300 hover:border-x-red/40">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#1a1a1a]">
                  <Image
                    src={`/assets/${s.slot}`}
                    alt={s.caption}
                    fill
                    unoptimized
                    className="object-cover object-center opacity-90 transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className="absolute left-3 top-3 font-label text-[10px] tracking-[0.2em] text-x-red">
                    {s.num}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-4 md:p-5">
                  <p className="font-display text-lg font-extrabold tracking-tight">{s.title}</p>
                  <p className="mt-1.5 text-[13px] leading-[1.6] text-white/50">{s.verb}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.15}>
          <div className="mt-12 flex justify-end border-t border-white/10 pt-8">
            <Link
              href="/#pillars"
              transitionTypes={["nav-forward"]}
              className="group inline-flex items-center gap-2 font-label text-[10.5px] tracking-[0.22em] text-x-red transition-colors hover:text-white"
            >
              See the Form<span className="text-x-red">X</span> way
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
