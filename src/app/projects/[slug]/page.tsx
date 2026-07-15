import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/site";
import { PageHero } from "@/components/ui/PageHero";
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

  return (
    <>
      <PageHero
        eyebrow={project.sector}
        title={project.client}
        description={project.title}
        crumbs={[
          { label: "Projects", href: "/projects" },
          { label: project.client },
        ]}
      />

      <section className="bg-white py-16 md:py-20">
        <Container>
          <Reveal>
            <AssetImage
              alt={project.title}
              slot={project.assets.cover}
              kind="facility"
              tone="dark"
              label={project.sector}
              caption={project.title}
              aspect="wide"
              className="mb-10"
            />
          </Reveal>

          <div className="grid gap-10 border border-line lg:grid-cols-4">
            {[
              ["Location", project.location],
              ["Year", project.year],
              ["Sector", project.sector],
              ["Scale", project.area ?? "Industrial facility"],
            ].map(([k, v]) => (
              <div key={k} className="border-b border-line p-5 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-x-red">
                  {k}
                </p>
                <p className="mt-2 font-display text-base font-bold text-ink">{v}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-bold uppercase text-ink md:text-3xl">
              Challenge
            </h2>
            <p className="mt-4 text-[15px] leading-[1.75] text-ink-muted">
              {project.challenge}
            </p>
            <h2 className="mt-10 font-display text-2xl font-bold uppercase text-ink md:text-3xl">
              Approach
            </h2>
            <p className="mt-4 text-[15px] leading-[1.75] text-ink-muted">
              {project.approach}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-2xl font-bold uppercase text-ink md:text-3xl">
              Outcome
            </h2>
            <p className="mt-4 text-[15px] leading-[1.75] text-ink-muted">
              {project.outcome}
            </p>
            <ul className="mt-8 space-y-3">
              {project.highlights.map((h) => (
                <li key={h} className="border-l-2 border-x-red pl-4 text-[14px] text-ink-muted">
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink-muted">
                Services delivered
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.services.map((s) => (
                  <span
                    key={s}
                    className="border border-line bg-white px-3 py-1.5 text-[12px] font-semibold text-ink"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <Button href="/contact" variant="primary" className="mt-10">
              Enquire about similar work
            </Button>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <h3 className="font-display text-xl font-bold uppercase text-ink">
            Project gallery
          </h3>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {project.assets.gallery.map((slot, i) => (
              <AssetImage
                key={slot}
                alt={`${project.client} gallery ${i + 1}`}
                slot={slot}
                kind="facility"
                tone={i % 2 === 0 ? "dark" : "light"}
                label={`Frame 0${i + 1}`}
                aspect="landscape"
              />
            ))}
          </div>
          <p className="mt-8">
            <Link href="/projects" className="text-sm font-semibold hover:text-x-red">
              ← Back to projects
            </Link>
          </p>
        </Container>
      </section>

      <RelatedLinks title="Related projects" items={relatedFallback} />
      <CtaBand title="Plan your next facility with FormX" />
      <StickyEnquire label="Enquire about this project type" />
    </>
  );
}
