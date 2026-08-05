"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/** website comment.docx — Industries Served with simple marks (not a mega-sector grid) */
const industries = [
  "Pharmaceuticals",
  "Food Processing",
  "Chemical",
  "Textile",
  "Engineering",
  "Automobile",
  "Warehouses",
];

export function IndustriesServed() {
  return (
    <section className="border-b border-line bg-[#fafafa] py-16 md:py-20">
      <Container>
        <Reveal>
          <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
            Industries served
          </p>
          <h2 className="mt-3 max-w-xl font-display text-2xl font-extrabold uppercase tracking-tight text-ink md:text-3xl">
            Facilities across manufacturing &amp; buildings
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-px bg-line sm:grid-cols-3 lg:grid-cols-7">
          {industries.map((name, i) => (
            <Reveal key={name} delay={0.03 * i}>
              <div className="flex min-h-[110px] flex-col justify-between bg-[#fafafa] p-5 transition-colors hover:bg-white">
                <span className="font-display text-[10px] font-bold text-x-red">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display text-sm font-extrabold uppercase leading-snug tracking-tight text-ink">
                  {name}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
