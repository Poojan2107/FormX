import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/site";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { BrochureCta, CtaBand } from "@/components/shared/CtaBlocks";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "End-to-end architecture, structural, and MEPF services for industrial facilities.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Complete solutions in engineering & architecture"
        description="FormX provides in-house multidisciplinary services supporting factory planning, coordinated design, and execution clarity — under one accountable window."
        crumbs={[{ label: "Our Services" }]}
      />

      <section className="bg-white section-y">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={0.03 * (i % 3)}>
                <Link
                  href={`/services/${service.slug}`}
                  className="formx-cut x-hover-rail group flex h-full flex-col border border-line p-7 transition-all hover:border-x-red/35 hover:shadow-[0_12px_40px_rgba(222,48,36,0.06)] md:p-8"
                >
                  <div className="mb-6 flex justify-between">
                    <span className="font-display text-[11px] font-bold text-x-red">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <ArrowUpRight className="size-4 text-ink/25 group-hover:text-x-red" />
                  </div>
                  <h2 className="font-display text-xl font-bold uppercase text-ink">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-[14px] leading-[1.7] text-ink-muted">
                    {service.short}
                  </p>
                  <span className="mt-auto pt-6 text-[12px] font-semibold uppercase tracking-[0.12em] text-x-red opacity-0 transition-opacity group-hover:opacity-100">
                    View service →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <BrochureCta className="mt-14" />
        </Container>
      </section>

      <CtaBand title="Need a multidisciplinary package?" />
    </>
  );
}
