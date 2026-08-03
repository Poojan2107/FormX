"use client";

import { portfolioOngoing, portfolioSpecialized } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/** FORMX.pdf — specialized + ongoing work as engineering practice proof */
export function PortfolioWorkbench() {
  return (
    <section className="border-y border-line bg-[#f7f7f7] py-16 md:py-20">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              From the practice brochure
            </p>
            <h2 className="mt-2 font-display text-2xl font-extrabold uppercase tracking-tight text-ink md:text-3xl">
              Specialized &amp; ongoing work
            </h2>
            <p className="mt-4 text-[14px] leading-[1.85] text-ink-muted">
              Beyond greenfield packages—strengthening, solar mounting vetting and live mandates
              currently moving through the Ahmedabad studio.
            </p>

            <div className="mt-8 space-y-8">
              {portfolioSpecialized.map((block) => (
                <div key={block.title}>
                  <h3 className="font-display text-sm font-extrabold uppercase tracking-tight text-ink">
                    {block.title}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-[13px] text-ink-muted"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 rotate-45 bg-x-red" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-7">
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              Ongoing
            </p>
            <div className="mt-6 divide-y divide-line border-y border-line bg-white">
              {portfolioOngoing.map((item) => (
                <div key={item.title} className="px-5 py-5 md:px-6">
                  <h3 className="font-display text-sm font-extrabold uppercase tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.75] text-ink-muted">{item.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
