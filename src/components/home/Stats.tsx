"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const capabilities = [
  {
    num: "01",
    title: "Single window",
    hint: "Architecture, structure, and MEPF under one accountable practice.",
    featured: true,
  },
  {
    num: "02",
    title: "Partner-led",
    hint: "Senior ownership stays close to critical design decisions.",
  },
  {
    num: "03",
    title: "Model-led",
    hint: "Clash-checked coordination before drawings hit the site.",
  },
  {
    num: "04",
    title: "Process-first",
    hint: "Layouts honour production flow, capacity, and expansion.",
  },
  {
    num: "05",
    title: "Buildable packs",
    hint: "Tender and GFC packages contractors can execute from.",
  },
  {
    num: "06",
    title: "Site support",
    hint: "Clarifications that keep construction aligned to intent.",
  },
];

export function Stats() {
  return (
    <section className="border-y border-line bg-white section-y">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Delivery"
            title="How FormX delivers"
            description="Capabilities that reduce delivery risk — verified project metrics land when your data is ready."
          />
        </Reveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, i) => (
            <Reveal key={item.num} delay={0.04 * (i % 3)}>
              <article
                className={cn(
                  "formx-cut x-hover-rail group relative flex h-full min-h-[168px] flex-col justify-between overflow-hidden border border-line p-5 transition-all duration-300 sm:min-h-[180px] sm:p-6",
                  item.featured
                    ? "border-transparent bg-[#1a1a1a] text-white sm:col-span-2 lg:col-span-1"
                    : "bg-white hover:border-x-red/35 hover:shadow-[0_12px_32px_rgba(222,48,36,0.06)]",
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <span
                    className={cn(
                      "font-display text-[11px] font-bold tracking-[0.16em]",
                      item.featured ? "text-x-red" : "text-ink/25 group-hover:text-x-red",
                    )}
                  >
                    {item.num}
                  </span>
                  {item.featured ? (
                    <span className="font-display text-2xl font-bold leading-none text-x-red">
                      X
                    </span>
                  ) : (
                    <span className="size-1.5 rotate-45 bg-x-red/0 transition-all duration-300 group-hover:bg-x-red" />
                  )}
                </div>

                <div className="mt-8">
                  <h3
                    className={cn(
                      "font-display text-lg font-bold tracking-tight sm:text-xl",
                      item.featured ? "text-white" : "text-ink",
                    )}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 text-[13px] leading-relaxed sm:text-[14px]",
                      item.featured ? "text-white/55" : "text-ink-muted",
                    )}
                  >
                    {item.hint}
                  </p>
                  <span
                    className={cn(
                      "mt-4 block h-[2px] w-0 bg-x-red transition-all duration-350 group-hover:w-10",
                      item.featured && "w-8",
                    )}
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
