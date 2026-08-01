import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Calendar,
  Building2,
  Ruler,
  ArrowLeft,
  Check,
  AlertOctagon,
  Compass,
  Trophy,
} from "lucide-react";
import { getProject, projects } from "@/data/site";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { ProjectGalleryViewer } from "@/components/projects/ProjectGalleryViewer";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand, RelatedLinks } from "@/components/shared/CtaBlocks";
import { StickyEnquire } from "@/components/shared/StickyEnquire";
import { ProofStrip } from "@/components/shared/ProofStrip";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.client} | ${project.sector} Project | FORMX`,
    description: project.title,
  };
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

  // Always ensure exactly 3 related items to fill grid without whitespace gaps
  const sameSector = projects.filter((p) => p.slug !== slug && p.sector === project.sector);
  const otherProjects = projects.filter((p) => p.slug !== slug && p.sector !== project.sector);
  const combinedRelated = [...sameSector, ...otherProjects].slice(0, 3);

  const relatedItems = combinedRelated.map((p) => ({
    href: `/projects/${p.slug}`,
    title: p.client,
    meta: `${p.sector} · ${p.location}`,
  }));

  const metas: [keyof typeof metaIcons, string][] = [
    ["Location", project.location],
    ["Year", project.year],
    ["Sector", project.sector],
    ["Scale", project.area ?? "Industrial facility"],
  ];

  return (
    <>
      {/* Dark Architectural Page Hero */}
      <PageHero
        eyebrow={project.sector}
        title={project.client}
        description={project.title}
        crumbs={[
          { label: "Projects", href: "/projects" },
          { label: project.client },
        ]}
      />

      <ProofStrip />

      {/* Key Specs Grid */}
      <section className="bg-white pt-8">
        <Container>
          <div className="grid grid-cols-2 border border-line md:grid-cols-4 bg-[#fafafa]">
            {metas.map(([key, value]) => {
              const Icon = metaIcons[key];
              return (
                <div
                  key={key}
                  className="flex flex-col gap-1.5 border-b border-r border-line p-5 last:border-r-0 md:border-b-0 [&:nth-child(2)]:border-r-0 [&:nth-child(2)]:md:border-r [&:nth-child(n+3)]:md:border-b-0 [&:nth-child(4)]:border-r-0"
                >
                  <div className="flex items-center gap-2">
                    <Icon className="size-4 text-x-red" />
                    <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-x-red">
                      {key}
                    </p>
                  </div>
                  <p className="font-display text-sm font-bold text-ink md:text-base">
                    {value}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Engineering Blueprint Specs Ribbon — removed in favor of ProofStrip */}

      {/* Visual Case Study Cards — Challenge / Approach / Outcome */}
      <section className="bg-white section-y">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8 items-stretch">
            {/* Challenge Card */}
            <Reveal className="h-full">
              <div className="group flex h-full flex-col border border-line border-t-4 border-t-x-red bg-white p-6 md:p-8 transition-all hover:shadow-[0_14px_30px_rgba(222,48,36,0.1)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-x-red">
                    01 — Challenge
                  </span>
                  <AlertOctagon className="size-5 text-x-red" />
                </div>
                <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink">
                  The Problem
                </h2>
                <p className="mt-4 flex-1 text-[14px] leading-[1.8] text-ink-muted">
                  {project.challenge}
                </p>
              </div>
            </Reveal>

            {/* Approach Card */}
            <Reveal delay={0.06} className="h-full">
              <div className="group flex h-full flex-col border border-line border-t-4 border-t-x-red bg-[#161616] p-6 text-white md:p-8 transition-all hover:shadow-[0_14px_30px_rgba(0,0,0,0.4)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-x-red">
                    02 — Approach
                  </span>
                  <Compass className="size-5 text-x-red" />
                </div>
                <h2 className="font-display text-xl font-bold uppercase tracking-tight text-white">
                  Our Response
                </h2>
                <p className="mt-4 flex-1 text-[14px] leading-[1.8] text-white/70">
                  {project.approach}
                </p>
              </div>
            </Reveal>

            {/* Outcome Card */}
            <Reveal delay={0.12} className="h-full">
              <div className="group flex h-full flex-col border border-line border-t-4 border-t-x-red bg-white p-6 md:p-8 transition-all hover:shadow-[0_14px_30px_rgba(222,48,36,0.1)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-x-red">
                    03 — Outcome
                  </span>
                  <Trophy className="size-5 text-x-red" />
                </div>
                <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink">
                  Results Delivered
                </h2>
                <p className="mt-4 text-[14px] leading-[1.8] text-ink-muted">
                  {project.outcome}
                </p>
                <ul className="mt-5 space-y-2.5 border-t border-line/60 pt-4">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-x-red" />
                      <span className="text-[13px] font-medium text-ink">
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Services delivered */}
      <section className="border-y border-line bg-[#fafafa] py-8 md:py-10">
        <Container>
          <Reveal>
            <p className="mb-4 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-ink/40">
              Integrated FormX Services
            </p>
            <div className="flex flex-wrap gap-2">
              {project.services.map((s) => (
                <span
                  key={s}
                  className="border border-line bg-white px-3.5 py-2 font-display text-[11px] font-bold uppercase tracking-wider text-ink"
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white section-y">
        <Container>
          <Reveal>
            <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-x-red">
                  Project Gallery
                </p>
                <h2 className="mt-1 font-display text-2xl font-extrabold uppercase tracking-tight text-ink md:text-3xl">
                  Facility visuals
                </h2>
              </div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink/40">
                Click any frame to expand
              </p>
            </div>
          </Reveal>

          <ProjectGalleryViewer
            cover={project.assets.cover}
            gallery={project.assets.gallery}
            title={project.client}
          />

          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-line pt-6">
            <Button href="/contact" variant="primary" className="px-8 py-3.5">
              Enquire About Similar Work
            </Button>
            <Link
              href="/projects"
              transitionTypes={["nav-back"]}
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-ink-muted transition-colors hover:text-x-red"
            >
              <ArrowLeft className="size-4" />
              View All Projects
            </Link>
          </div>
        </Container>
      </section>

      <RelatedLinks title="Related projects" items={relatedItems} />
      <CtaBand
        title="Plan your next facility with FORMX"
        description="Share a similar brief — our leads coordinate Architecture, Structure, Civil & MEP as one GFC package."
        secondary={{ label: "All projects", href: "/projects" }}
      />
      <StickyEnquire label="Enquire about this project type" />
    </>
  );
}
