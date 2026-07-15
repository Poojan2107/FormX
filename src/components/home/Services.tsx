import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";

export function Services() {
  return (
    <section id="services" className="scroll-mt-32 bg-white section-y">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Complete solutions in engineering & architecture"
            description="End-to-end in-house capabilities supporting factory planning, design coordination, and execution clarity."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 9).map((service, i) => (
            <Reveal key={service.slug} delay={0.04 * (i % 3)}>
              <TiltCard intensity={6} className="formx-cut-x formx-edge formx-edge-x h-full border border-line bg-white transition-shadow duration-300 hover:shadow-[0_12px_36px_rgba(222,48,36,0.06)]">
                <Link
                  href={`/services/${service.slug}`}
                  className="x-hover-rail group relative flex h-full flex-col p-7 md:p-8"
                >
                  <div className="mb-8 flex items-start justify-between gap-4">
                    <span className="font-display text-[11px] font-bold tracking-[0.14em] text-x-red">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <ArrowUpRight className="size-4 text-ink/25 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-x-red" />
                  </div>
                  <h3 className="font-display text-lg font-bold tracking-tight text-ink md:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.7] text-ink-muted">
                    {service.short}
                  </p>
                  <span className="mt-auto h-px w-0 bg-x-red pt-8 transition-all duration-300 group-hover:w-10" />
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
