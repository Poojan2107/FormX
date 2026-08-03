import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProject, projects, services as allServices } from "@/data/site";
import { getProjectNarrative } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { ProjectGalleryViewer } from "@/components/projects/ProjectGalleryViewer";
import { Reveal } from "@/components/ui/Reveal";
import { RelatedLinks } from "@/components/shared/CtaBlocks";
import { StickyEnquire } from "@/components/shared/StickyEnquire";
import { AssetImage } from "@/components/ui/AssetImage";

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

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const narrative = getProjectNarrative(project);

  const sameSector = projects.filter((p) => p.slug !== slug && p.sector === project.sector);
  const otherProjects = projects.filter((p) => p.slug !== slug && p.sector !== project.sector);
  const relatedItems = [...sameSector, ...otherProjects].slice(0, 3).map((p) => ({
    href: `/projects/${p.slug}`,
    title: p.client,
    meta: `${p.sector} · ${p.location}`,
  }));

  const relatedServiceLinks = narrative.relatedSystems
    .map((label) => {
      const match = allServices.find(
        (s) =>
          s.title.toLowerCase() === label.toLowerCase() ||
          label.toLowerCase().includes(s.title.toLowerCase().split(" ")[0] ?? ""),
      );
      return match
        ? { href: `/services/${match.slug}`, title: match.title }
        : null;
    })
    .filter(Boolean) as { href: string; title: string }[];

  const beats = [
    { key: "Client Need", body: narrative.clientNeed },
    { key: "Engineering Thinking", body: narrative.engineeringThinking },
    { key: "Coordination", body: narrative.coordination },
    { key: "Execution", body: narrative.execution },
    { key: "Completed Facility", body: narrative.completedFacility },
    { key: "Lessons Learned", body: narrative.lessonsLearned },
  ];

  return (
    <>
      {/* Editorial case header — not PageHero clone */}
      <section className="relative isolate overflow-hidden bg-[#0a0a0a] text-white">
        <div className="absolute inset-0">
          <AssetImage
            alt={project.client}
            slot={project.assets.cover}
            kind="facility"
            fit="cover"
            aspect="auto"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/50" />
        </div>
        <Container className="relative z-10 pb-16 pt-28 md:pb-20 md:pt-32">
          <Link
            href="/projects"
            transitionTypes={["nav-back"]}
            className="inline-flex items-center gap-2 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-white/50 hover:text-white"
          >
            <ArrowLeft className="size-3.5" />
            Project record
          </Link>
          <p className="mt-6 font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
            {project.sector} · {project.year}
          </p>
          <h1
            className="mt-3 max-w-3xl font-display font-black uppercase leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
          >
            {project.client}
          </h1>
          <p className="mt-3 text-[14px] text-white/55">
            {project.location}
            {project.area ? ` · ${project.area}` : ""}
          </p>
          <p className="mt-5 max-w-xl text-[15px] leading-[1.85] text-white/70">{project.title}</p>
        </Container>
      </section>

      {/* Design → built */}
      <section className="bg-[#0c0c0c] py-12 md:py-16">
        <Container>
          <Reveal>
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.22em] text-x-red">
              Design to delivery
            </p>
            <h2 className="mt-1 font-display text-2xl font-extrabold uppercase tracking-tight text-white md:text-3xl">
              Intent → executed facility
            </h2>
          </Reveal>
          <Reveal delay={0.06} className="mt-6">
            <BeforeAfterSlider
              beforeSlot={
                project.assets.gallery.find((g) => g !== project.assets.cover) ??
                project.assets.cover
              }
              afterSlot={project.assets.cover}
              beforeLabel="Engineering / documentation view"
              afterLabel="Completed facility"
              alt={project.client}
            />
          </Reveal>
        </Container>
      </section>

      {/* Vertical engineering narrative */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-14">
            {beats.map((beat, i) => (
              <Reveal key={beat.key} delay={0.03 * i}>
                <article>
                  <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.24em] text-x-red">
                    {String(i + 1).padStart(2, "0")} · {beat.key}
                  </p>
                  <p className="mt-4 text-[16px] leading-[1.9] text-ink-muted">{beat.body}</p>
                </article>
              </Reveal>
            ))}
          </div>

          {project.highlights.length ? (
            <Reveal className="mx-auto mt-16 max-w-3xl border-t border-line pt-10">
              <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.24em] text-x-red">
                Technical highlights
              </p>
              <ul className="mt-5 space-y-3">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-[14px] text-ink">
                    <span className="mt-1.5 size-1.5 shrink-0 rotate-45 bg-x-red" />
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>
          ) : null}
        </Container>
      </section>

      {/* Related systems */}
      <section className="border-y border-line bg-[#f7f7f7] py-14">
        <Container>
          <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.24em] text-x-red">
            Related systems
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {relatedServiceLinks.length
              ? relatedServiceLinks.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    transitionTypes={["nav-forward"]}
                    className="inline-flex items-center gap-2 border border-line bg-white px-4 py-2.5 font-display text-[11px] font-bold uppercase tracking-wider text-ink transition-colors hover:border-x-red hover:text-x-red"
                  >
                    {s.title}
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                ))
              : narrative.relatedSystems.map((s) => (
                  <span
                    key={s}
                    className="border border-line bg-white px-4 py-2.5 font-display text-[11px] font-bold uppercase tracking-wider text-ink"
                  >
                    {s}
                  </span>
                ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container>
          <Reveal>
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-x-red">
              Facility record
            </p>
            <h2 className="mt-1 font-display text-2xl font-extrabold uppercase tracking-tight text-ink md:text-3xl">
              Visual documentation
            </h2>
          </Reveal>
          <div className="mt-8">
            <ProjectGalleryViewer
              cover={project.assets.cover}
              gallery={project.assets.gallery}
              title={project.client}
            />
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-line pt-6">
            <Link
              href="/contact"
              transitionTypes={["nav-forward"]}
              className="inline-flex bg-x-red px-7 py-3.5 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-white"
            >
              Discuss a similar facility
            </Link>
            <Link
              href="/projects"
              transitionTypes={["nav-back"]}
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-ink-muted hover:text-x-red"
            >
              <ArrowLeft className="size-4" />
              All projects
            </Link>
          </div>
        </Container>
      </section>

      <RelatedLinks title="Related projects" items={relatedItems} />
      <StickyEnquire label="Enquire about this project type" />
    </>
  );
}
