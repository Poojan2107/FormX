import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getProject, projects } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { ProjectGalleryViewer } from "@/components/projects/ProjectGalleryViewer";
import { Reveal } from "@/components/ui/Reveal";
import { RelatedLinks } from "@/components/shared/CtaBlocks";
import { StickyEnquire } from "@/components/shared/StickyEnquire";
import { VisualFrame } from "@/components/ui/VisualFrame";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | ${project.location} | FORMX`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const sameSector = projects.filter((p) => p.slug !== slug && p.sector === project.sector);
  const otherProjects = projects.filter((p) => p.slug !== slug && p.sector !== project.sector);
  const relatedItems = [...sameSector, ...otherProjects].slice(0, 3).map((p) => ({
    href: `/projects/${p.slug}`,
    title: p.title,
    meta: `${p.location}${p.area ? ` · ${p.area}` : ""}`,
  }));

  const facts = [
    { label: "Location", value: project.location },
    { label: "Area", value: project.area },
    { label: "Floors / scope", value: project.floors },
    { label: "Services", value: project.services.join(", ") },
  ].filter((f) => f.value);

  return (
    <>
      <section className="border-b border-line bg-[#0a0a0a] text-white">
        <Container className="pb-12 pt-28 md:pb-16 md:pt-32">
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
            {project.title}
          </h1>
          <p className="mt-3 text-[14px] text-white/55">
            {project.client} · {project.location}
            {project.area ? ` · ${project.area}` : ""}
          </p>

          <Reveal className="mt-10">
            <VisualFrame
              slot={project.assets.cover}
              alt={project.title}
              fit={project.assets.frame ?? "contain"}
              aspect="wide"
              tone="dark"
              priority
              sizes="100vw"
              className="border border-white/10"
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.24em] text-x-red">
                Project description
              </p>
              <p className="mt-5 text-[16px] leading-[1.9] text-ink-muted">{project.description}</p>
            </Reveal>

            <Reveal delay={0.06} className="mt-12 grid gap-6 border-t border-line pt-10 sm:grid-cols-2">
              {facts.map((f) => (
                <div key={f.label}>
                  <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-x-red">
                    {f.label}
                  </p>
                  <p className="mt-2 text-[14px] leading-[1.7] text-ink">{f.value}</p>
                </div>
              ))}
            </Reveal>

            {project.highlights.length ? (
              <Reveal className="mt-12 border-t border-line pt-10">
                <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.24em] text-x-red">
                  Highlights
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
          </div>
        </Container>
      </section>

      <section className="bg-[#f7f7f7] py-16 md:py-20">
        <Container>
          <Reveal>
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-x-red">
              Facility record
            </p>
            <h2 className="mt-1 font-display text-2xl font-extrabold uppercase tracking-tight text-ink md:text-3xl">
              Visual documentation
            </h2>
            <p className="mt-3 max-w-xl text-[14px] text-ink-muted">
              Brochure and practice visuals — shown complete in frame, tap to enlarge.
            </p>
          </Reveal>
          <div className="mt-8">
            <ProjectGalleryViewer
              cover={project.assets.cover}
              gallery={project.assets.gallery}
              title={project.title}
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
