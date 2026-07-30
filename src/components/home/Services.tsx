import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
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
  "architectural-design": "text-blue-600 bg-blue-50 border-blue-200",
  "site-infrastructure": "text-blue-600 bg-blue-50 border-blue-200",
  "sustainable-design": "text-blue-600 bg-blue-50 border-blue-200",
  "structural-engineering": "text-amber-600 bg-amber-50 border-amber-200",
  "civil-engineering": "text-amber-600 bg-amber-50 border-amber-200",
  "mechanical-utility-engineering": "text-emerald-600 bg-emerald-50 border-emerald-200",
  "hvac-engineering": "text-emerald-600 bg-emerald-50 border-emerald-200",
  "electrical-engineering": "text-emerald-600 bg-emerald-50 border-emerald-200",
  "fire-protection-engineering": "text-emerald-600 bg-emerald-50 border-emerald-200",
  "project-management": "text-purple-600 bg-purple-50 border-purple-200",
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

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={0.04 * (i % 3)} className="h-full">
              <div className={`group relative flex h-full flex-col overflow-hidden border border-line border-t-4 bg-white transition-all duration-300 hover:border-x-red/40 hover:shadow-[0_16px_40px_rgba(222,48,36,0.08)] ${categoryBorders[service.slug] ?? "border-t-line"}`}>
                <Link
                  href={`/services/${service.slug}`}
                  className="flex flex-1 flex-col"
                >
                  <div className="relative overflow-hidden">
                    <AssetImage
                      alt={service.title}
                      slot={service.asset}
                      kind="service"
                      aspect="landscape"
                      className="w-full transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3.5 flex items-start justify-between gap-4">
                      <span
                        className={`inline-block border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] ${categoryBadgeColors[service.slug] ?? ""}`}
                      >
                        {categoryLabels[service.slug]}
                      </span>
                      <ArrowUpRight className="size-4 shrink-0 text-ink/25 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-x-red" />
                    </div>
                    <h3 className="font-display text-base font-bold leading-snug tracking-tight text-ink md:text-lg">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-[13px] leading-[1.7] text-ink-muted">
                      {service.short}
                    </p>
                    <span className="mt-auto pt-6 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-x-red opacity-0 transition-opacity group-hover:opacity-100">
                      View service →
                    </span>
                  </div>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
