"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { about } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Logo } from "@/components/ui/Logo";

export function About() {
  return (
    <section id="about" className="scroll-mt-32 border-b border-line bg-white py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-center">
          <Reveal className="lg:col-span-4">
            <Logo variant="full" className="scale-125 origin-left" />
            <p className="mt-8 font-display text-[11px] font-bold uppercase tracking-[0.28em] text-x-red">
              Shaping form · Defining futures
            </p>
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-8">
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              About Us
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[1.08] tracking-tight text-ink md:text-4xl lg:text-[2.75rem]">
              {about.title}
            </h2>
            <p className="mt-6 max-w-2xl text-[16px] leading-[1.9] text-ink-muted">
              {about.paragraphs[0]}
            </p>
            <Link
              href={about.cta.href}
              transitionTypes={["nav-forward"]}
              className="mt-8 inline-flex items-center gap-2 font-display text-[12px] font-bold uppercase tracking-[0.16em] text-x-red transition-colors hover:text-ink"
            >
              {about.cta.label}
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
