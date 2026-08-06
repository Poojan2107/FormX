import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { getService, services, brochureProjects } from "@/data/site";
import { getServiceStory } from "@/data/serviceStories";
import { Container } from "@/components/ui/Container";
import { DisciplineStory } from "@/components/services/DisciplineStory";
import { StickyEnquire } from "@/components/shared/StickyEnquire";
import { ServiceJsonLd } from "@/components/shared/JsonLd";

type Props = { params: Promise<{ slug: string }> };

const PRIMARY_SERVICE_SLUGS = [
  "architectural-design",
  "sustainable-design",
  "structural-engineering",
  "civil-engineering",
  "site-infrastructure",
  "project-management",
] as const;

export async function generateStaticParams() {
  return PRIMARY_SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service || !PRIMARY_SERVICE_SLUGS.includes(slug as (typeof PRIMARY_SERVICE_SLUGS)[number])) {
    return {};
  }
  return {
    title: `${service.title} | FORMX Consultants`,
    description: service.short,
  };
}

const categoryLabels: Record<string, string> = {
  "architectural-design": "Architecture",
  "site-infrastructure": "Infrastructure",
  "sustainable-design": "Architecture",
  "structural-engineering": "Structure",
  "civil-engineering": "Structure",
  "project-management": "Infrastructure",
};

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  if (!PRIMARY_SERVICE_SLUGS.includes(slug as (typeof PRIMARY_SERVICE_SLUGS)[number])) {
    notFound();
  }
  const service = getService(slug);
  if (!service) notFound();

  const story = getServiceStory(service);
  const cat = categoryLabels[slug] ?? "Practice";

  const others = services
    .filter(
      (s) =>
        s.slug !== slug &&
        PRIMARY_SERVICE_SLUGS.includes(s.slug as (typeof PRIMARY_SERVICE_SLUGS)[number]),
    )
    .slice(0, 4);

  const evidence = brochureProjects.slice(0, 3);

  return (
    <>
      <ServiceJsonLd
        name={service.title}
        description={service.short}
        url={`/services/${service.slug}`}
        image={`https://formxconsultants.com/assets/${service.asset}`}
      />

      <section className="fx-grain border-b border-black bg-[#0a0a09] pt-28 pb-16 text-white md:pt-36 md:pb-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end lg:gap-14">
            <div>
              <p className="eyebrow text-x-red">
                {cat} · FORM×
              </p>
              <h1
                className="mt-5 max-w-[14ch] font-display font-black leading-[0.96] tracking-tight"
                style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
              >
                {service.title}
              </h1>
              <p className="mt-4 font-label text-[10px] tracking-[0.22em] text-white/35">
                {story.motif}
              </p>
            </div>
            <p className="fx-read text-[16px] text-white/55 lg:pb-1">
              {story.lead || service.short}
            </p>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-6">
            <span className="font-label text-[9px] tracking-[0.22em] text-x-red">
              Architecture
            </span>
            <span className="text-white/20">×</span>
            <span className="font-label text-[9px] tracking-[0.22em] text-x-red">Structure</span>
            <span className="text-white/20">×</span>
            <span className="font-label text-[9px] tracking-[0.22em] text-x-red">
              Infrastructure
            </span>
          </div>
        </Container>
      </section>

      <DisciplineStory service={service} />

      <section className="border-b border-line bg-white py-16 md:py-20">
        <Container>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-x-red">Evidence</p>
              <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
                Facilities from the brochure
              </h2>
            </div>
            <Link
              href="/projects"
              transitionTypes={["nav-forward"]}
              className="font-label text-[10px] tracking-[0.18em] text-x-red hover:text-ink"
            >
              All projects →
            </Link>
          </div>
          <ul className="divide-y divide-ink/[0.08] border-y border-ink/[0.08]">
            {evidence.map((p, i) => (
              <li key={p.slug}>
                <Link
                  href={`/projects/${p.slug}`}
                  transitionTypes={["nav-forward"]}
                  className="group grid gap-2 py-5 sm:grid-cols-[3rem_1fr_auto] sm:items-baseline sm:gap-6"
                >
                  <span className="font-label text-[10px] tracking-[0.16em] text-x-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-lg font-bold tracking-tight text-ink transition-colors group-hover:text-x-red">
                    {p.title}
                  </span>
                  <span className="text-[13px] text-ink/45">{p.location}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-b border-ink/[0.08] bg-white py-14 md:py-16">
        <Container>
          <p className="eyebrow text-x-red">Related disciplines</p>
          <div className="mt-6 divide-y divide-ink/[0.08] border-y border-ink/[0.08]">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                transitionTypes={["nav-forward"]}
                className="group flex items-center justify-between gap-4 py-5"
              >
                <span className="font-display text-[15px] font-bold tracking-tight text-ink transition-colors group-hover:text-x-red">
                  {s.title}
                </span>
                <span className="inline-flex items-center gap-1 font-label text-[9px] tracking-[0.16em] text-ink/30 group-hover:text-x-red">
                  Open <ArrowRight className="size-3" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="fx-grain bg-[#0a0a09] py-16 text-white md:py-20">
        <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow text-x-red">Before issue</p>
            <h2 className="mt-3 max-w-[22ch] font-display text-2xl font-extrabold tracking-tight md:text-3xl">
              Discuss {service.title.toLowerCase()} against your facility constraints.
            </h2>
          </div>
          <Link
            href="/contact"
            transitionTypes={["nav-forward"]}
            className="fx-btn-primary inline-flex shrink-0"
          >
            Enquire Now
            <ArrowRight className="size-4" />
          </Link>
        </Container>
      </section>

      <StickyEnquire label={`Discuss ${service.title}`} />
    </>
  );
}
