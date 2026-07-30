import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Calendar, Building2, Ruler, ArrowLeft, Check } from "lucide-react";
import { getProject, projects } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand, RelatedLinks } from "@/components/shared/CtaBlocks";
import { StickyEnquire } from "@/components/shared/StickyEnquire";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.client, description: project.title };
}

const metaIcons = {
  Location: MapPin,
  Year: Calendar,
  Sector: Building2,
  Scale: Ruler,
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = projects
    .filter((p) => p.slug !== slug && p.sector === project.sector)
    .slice(0, 3)
    .map((p) => ({
      href: `/projects/${p.slug}`,
      title: p.client,
      meta: p.sector,
    }));

  const relatedFallback =
    related.length > 0
      ? related
      : projects
          .filter((p) => p.slug !== slug)
          .slice(0, 3)
          .map((p) => ({
            href: `/projects/${p.slug}`,
            title: p.client,
            meta: p.sector,
          }));

  const metas: [keyof typeof metaIcons, string][] = [
    ["Location", project.location],
    ["Year", project.year],
    ["Sector", project.sector],
    ["Scale", project.area ?? "Industrial facility"],
  ];

  return (
    <>
      {/* Page hero */}
      <section className="border-b border-line bg-white">
        <div className="mx-auto w-full max-w-[1180px] px-4 pt-10 pb-0 sm:px-5 sm:pt-12 md:px-8 md:pt-16">
          {/* Breadcrumb */}
          <nav className="mb-5 flex flex-wrap items-center gap-2 text-[12px] text-ink-muted">
            <Link href="/" className="transition-colors hover:text-x-red">Home</Link>
            <span className="text-line">/</span>
            <Link href="/projects" className="transition-colors hover:text-x-red">Projects</Link>
            <span className="text-line">/</span>
            <span className="text-ink">{project.client}</span>
          </nav>

          <p className="mb-3 flex items-center gap-3 font-display text-[11px] font-bold uppercase tracking-[0.22em] text-x-red">
            <span className="inline-block h-px w-8 bg-x-red" aria-hidden />
            {project.sector}
          </p>
          <h1 className="max-w-3xl text-display text-ink">{project.client}</h1>
          <p className="mt-4 max-w-2xl text-lead text-ink-muted">{project.title}</p>
        </div>
      </section>

      {/* Cover image */}
      <section className="bg-white pt-10 md:pt-14">
        <Container>
          <Reveal>
            <AssetImage
              alt={project.title}
              slot={project.assets.cover}
              kind="facility"
              tone="dark"
              label={project.sector}
              caption={project.client}
              aspect="wide"
              priority
            />
          </Reveal>

          {/* Meta grid */}
          <div className="mt-6 grid grid-cols-2 border border-line md:grid-cols-4">
            {metas.map(([key, value]) => {
              const Icon = metaIcons[key];
              return (
                <div
                  key={key}
                  className="flex flex-col gap-2 border-b border-r border-line p-5 last:border-r-0 md:border-b-0 [&:nth-child(2)]:border-r-0 [&:nth-child(2)]:md:border-r [&:nth-child(n+3)]:md:border-b-0 [&:nth-child(4)]:border-r-0"
                >
                  <div className="flex items-center gap-2">
                    <Icon className="size-3.5 text-x-red" />
                    <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-x-red">
                      {key}
                    </p>
                  </div>
                  <p className="font-display text-sm font-bold text-ink md:text-base">{value}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Challenge / Approach / Outcome */}
      <section className="bg-white py-14 md:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8 items-stretch">
            {/* Challenge */}
            <Reveal className="h-full">
              <div className="flex h-full flex-col border border-line border-t-4 border-t-x-red bg-white p-6 md:p-8">
                <p className="mb-3 font-display text-[10px] font-bold uppercase tracking-[0.22em] text-x-red">
                  01 — Challenge
                </p>
                <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink">
                  The problem
                </h2>
                <p className="mt-4 text-[14px] leading-[1.8] text-ink-muted">
                  {project.challenge}
                </p>
              </div>
            </Reveal>

            {/* Approach */}
            <Reveal delay={0.06} className="h-full">
              <div className="flex h-full flex-col border border-line border-t-4 border-t-x-red bg-[#1a1a1a] p-6 text-white md:p-8">
                <p className="mb-3 font-display text-[10px] font-bold uppercase tracking-[0.22em] text-x-red">
                  02 — Approach
                </p>
                <h2 className="font-display text-xl font-bold uppercase tracking-tight text-white">
                  Our response
                </h2>
                <p className="mt-4 text-[14px] leading-[1.8] text-white/65">
                  {project.approach}
                </p>
              </div>
            </Reveal>

            {/* Outcome */}
            <Reveal delay={0.12} className="h-full">
              <div className="flex h-full flex-col border border-line border-t-4 border-t-x-red bg-white p-6 md:p-8">
                <p className="mb-3 font-display text-[10px] font-bold uppercase tracking-[0.22em] text-x-red">
                  03 — Outcome
                </p>
                <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink">
                  Results delivered
                </h2>
                <p className="mt-4 text-[14px] leading-[1.8] text-ink-muted">
                  {project.outcome}
                </p>
                <ul className="mt-5 space-y-2.5 border-t border-line/60 pt-4">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 size-3.5 shrink-0 text-x-red" />
                      <span className="text-[13px] text-ink-muted">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Services delivered */}
      <section className="border-y border-line bg-[#fafafa] py-10 md:py-12">
        <Container>
          <Reveal>
            <p className="mb-5 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-ink/40">
              Services delivered
            </p>
            <div className="flex flex-wrap gap-2">
              {project.services.map((s) => (
                <span
                  key={s}
                  className="formx-cut-sm border border-line bg-white px-4 py-2 text-[12px] font-semibold text-ink"
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Project gallery */}
      {project.assets.gallery && project.assets.gallery.length > 0 ? (
        <section className="bg-white py-14 md:py-20">
          <Container>
            <Reveal>
              <h2 className="mb-8 font-display text-xl font-bold uppercase tracking-tight text-ink">
                Project gallery
              </h2>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {project.assets.gallery.map((slot, i) => (
                <Reveal key={slot} delay={0.04 * (i % 3)}>
                  <AssetImage
                    alt={`${project.client} — view ${i + 1}`}
                    slot={slot}
                    kind="facility"
                    tone={i % 2 === 0 ? "dark" : "light"}
                    label={`View ${String(i + 1).padStart(2, "0")}`}
                    caption={project.title}
                    aspect="landscape"
                  />
                </Reveal>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-4">
              <Button href="/contact" variant="primary">
                Enquire about similar work
              </Button>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-ink-muted transition-colors hover:text-x-red"
              >
                <ArrowLeft className="size-4" />
                All projects
              </Link>
            </div>
          </Container>
        </section>
      ) : null}

      <RelatedLinks title="Related projects" items={relatedFallback} />
      <CtaBand title="Plan your next facility with FormX" />
      <StickyEnquire label="Enquire about this project type" />
    </>
  );
}
