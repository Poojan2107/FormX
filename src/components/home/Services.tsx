import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { AssetImage } from "@/components/ui/AssetImage";

const categoryBorders: Record<string, string> = {
  "architectural-design": "border-t-blue-500",
  "site-infrastructure": "border-t-blue-500",
  "sustainable-design": "border-t-blue-500",
  "structural-engineering": "border-t-amber-500",
  "civil-engineering": "border-t-amber-500",
  "mechanical-utility-engineering": "border-t-emerald-500",
  "hvac-engineering": "border-t-emerald-500",
  "electrical-engineering": "border-t-emerald-500",
  "fire-protection-engineering": "border-t-emerald-500",
  "project-management": "border-t-purple-500",
};

const categoryLabels: Record<string, string> = {
  "architectural-design": "Architecture",
  "site-infrastructure": "Architecture",
  "sustainable-design": "Architecture",
  "structural-engineering": "Structure",
  "civil-engineering": "Structure",
  "mechanical-utility-engineering": "MEP",
  "hvac-engineering": "MEP",
  "electrical-engineering": "MEP",
  "fire-protection-engineering": "MEP",
  "project-management": "Delivery",
};

const categoryBadgeColors: Record<string, string> = {
  "architectural-design": "text-blue-600 bg-blue-50",
  "site-infrastructure": "text-blue-600 bg-blue-50",
  "sustainable-design": "text-blue-600 bg-blue-50",
  "structural-engineering": "text-amber-600 bg-amber-50",
  "civil-engineering": "text-amber-600 bg-amber-50",
  "mechanical-utility-engineering": "text-emerald-600 bg-emerald-50",
  "hvac-engineering": "text-emerald-600 bg-emerald-50",
  "electrical-engineering": "text-emerald-600 bg-emerald-50",
  "fire-protection-engineering": "text-emerald-600 bg-emerald-50",
  "project-management": "text-purple-600 bg-purple-50",
};

export function Services() {
  return (
    <section id="services" className="scroll-mt-32 bg-white section-y">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Complete solutions in engineering & architecture"
            description="In-house multidisciplinary design — Architectural Drawings, Site Infrastructure, Structural & Civil, MEP, Fire Protection, and Project Management — coordinated for construction-ready packages."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={0.04 * (i % 3)}>
              <TiltCard
                intensity={5}
                className={`formx-cut-x formx-edge formx-edge-x h-full overflow-hidden border border-line border-t-2 bg-white transition-shadow duration-300 hover:shadow-[0_12px_36px_rgba(222,48,36,0.06)] ${categoryBorders[service.slug] ?? "border-t-line"}`}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="x-hover-rail group relative flex h-full flex-col"
                >
                  <AssetImage
                    alt={service.title}
                    slot={service.asset}
                    kind="service"
                    aspect="landscape"
                    className="w-full"
                  />
                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    <div className="mb-3.5 flex items-start justify-between gap-4">
                      <span
                        className={`inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] ${categoryBadgeColors[service.slug] ?? ""}`}
                      >
                        {categoryLabels[service.slug]}
                      </span>
                      <ArrowUpRight className="size-4 shrink-0 text-ink/20 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-x-red" />
                    </div>
                    <h3 className="font-display text-base font-bold leading-snug tracking-tight text-ink md:text-lg">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-[1.7] text-ink-muted">
                      {service.short}
                    </p>
                    <span className="mt-auto pt-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-x-red opacity-0 transition-opacity group-hover:opacity-100">
                      View service →
                    </span>
                  </div>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
