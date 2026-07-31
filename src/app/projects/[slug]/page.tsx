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
  ShieldCheck,
  Cpu,
  Layers,
} from "lucide-react";
import { getProject, projects } from "@/data/site";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
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
      {/* Sleek Dark Architectural Page Hero */}
      <PageHero
        eyebrow={project.sector}
        title={project.client}
        description={project.title}
        crumbs={[
          { label: "Projects", href: "/projects" },
          { label: project.client },
        ]}
      />

      {/* Cover Comparison Slider */}
      <section className="bg-white pt-10 md:pt-14">
        <Container>
          <Reveal>
            <BeforeAfterSlider
              beforeSlot={
                project.assets.gallery && project.assets.gallery[0]
                  ? project.assets.gallery[0]
                  : project.assets.cover
              }
              afterSlot={project.assets.cover}
              beforeLabel="Raw Structural GFC Model / CAD"
              afterLabel="Completed Executed Facility"
              alt={project.client}
            />
          </Reveal>

          {/* Key Specs Grid */}
          <div className="mt-6 grid grid-cols-2 border border-line md:grid-cols-4 bg-[#fafafa]">
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

      {/* Engineering Blueprint Specs Ribbon */}
      <div className="mt-10 border-y border-white/10 bg-[#0d0d0d] py-6 text-white">
        <Container className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="size-5 text-x-red" />
            <span className="font-display text-xs font-bold uppercase tracking-wider">
              IS 1893 / IS 13920 Code Compliant
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Cpu className="size-5 text-x-red" />
            <span className="font-display text-xs font-bold uppercase tracking-wider">
              Zero-Clash BIM Package
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Layers className="size-5 text-x-red" />
            <span className="font-display text-xs font-bold uppercase tracking-wider">
              100% On-Site Constructability
            </span>
          </div>
        </Container>
      </div>

      {/* Visual Case Study Cards — Challenge / Approach / Outcome */}
      <section className="bg-white py-14 md:py-20">
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
      <section className="border-y border-line bg-[#fafafa] py-10 md:py-12">
        <Container>
          <Reveal>
            <p className="mb-5 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-ink/40">
              Integrated FormX Services
            </p>
            <div className="flex flex-wrap gap-2.5">
              {project.services.map((s) => (
                <span
                  key={s}
                  className="border border-line bg-white px-4 py-2 font-display text-[12px] font-bold uppercase tracking-wider text-ink shadow-sm"
                >
                  ✓ {s}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Project Gallery */}
      {project.assets.gallery && project.assets.gallery.length > 0 ? (
        <section className="bg-white py-14 md:py-20">
          <Container>
            <Reveal>
              <h2 className="mb-8 font-display text-xl font-bold uppercase tracking-tight text-ink">
                Project Gallery Showcase
              </h2>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {project.assets.gallery.map((slot, i) => (
                <Reveal key={slot} delay={0.04 * (i % 3)}>
                  <div className="group overflow-hidden border border-line bg-[#141414]">
                    <AssetImage
                      alt={`${project.client} — view ${i + 1}`}
                      slot={slot}
                      kind="facility"
                      aspect="landscape"
                      fit="cover"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
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
      ) : null}

      <RelatedLinks title="Related projects" items={relatedFallback} />
      <CtaBand title="Plan your next facility with FormX" />
      <StickyEnquire label="Enquire about this project type" />
    </>
  );
}
