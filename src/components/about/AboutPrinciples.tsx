"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { aboutPage } from "@/data/site";

const shorts = [
  "Reduce uncertainty before site begins.",
  "Packages that answer questions before construction.",
  "Judgement, collaboration, and outcomes you can see.",
];

/** Commitments — dark 3-column manifesto (not a row list). */
export function AboutPrinciples() {
  return (
    <section className="bg-[#0a0a0a] text-white">
      <Container className="pt-12 pb-14 md:pt-16 md:pb-16">
        <Reveal>
          <p className="font-label text-[10px] uppercase tracking-[0.28em] text-x-red">
            Commitments
          </p>
          <h2
            className="mt-2.5 font-display font-black tracking-[-0.045em]"
            style={{ fontSize: "clamp(1.85rem, 3.6vw, 2.75rem)" }}
          >
            Vision. Mission. Values.
          </h2>
        </Reveal>
      </Container>

      <div className="grid border-t border-white/10 md:grid-cols-3">
        {aboutPage.principles.map((p, i) => {
          const title = p.title.replace(/^Our\s+/, "");
          return (
            <Reveal key={p.title} delay={0.06 * i}>
              <article
                className={`group relative flex min-h-[280px] flex-col justify-between border-b border-white/10 p-7 md:min-h-[320px] md:border-b-0 md:p-9 lg:p-10 ${
                  i < 2 ? "md:border-r md:border-white/10" : ""
                }`}
              >
                <div>
                  <span className="font-label text-[10px] tracking-[0.24em] text-x-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="mt-6 font-display font-black tracking-[-0.035em]"
                    style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.35rem)" }}
                  >
                    {title}
                  </h3>
                  <span
                    aria-hidden
                    className="mt-5 block h-[2px] w-8 bg-x-red transition-all duration-400 group-hover:w-14"
                  />
                </div>
                <p className="mt-8 max-w-[28ch] text-[15px] leading-[1.75] text-white/75">
                  {shorts[i]}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
