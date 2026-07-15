import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/site";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/shared/CtaBlocks";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Explore FormX industrial and infrastructure project experience across sectors.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Explore our projects"
        description="Integrated architecture and engineering for manufacturing plants, process facilities, logistics hubs, and industrial campuses."
        crumbs={[
          { label: "Our Work", href: "/projects" },
          { label: "Our Projects" },
        ]}
      />

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={0.03 * (i % 3)}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="x-border group block border border-line transition-all hover:border-transparent hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)]"
                >
                  <AssetImage
                    alt={project.title}
                    slot={project.assets.cover}
                    kind="facility"
                    tone={i % 2 === 0 ? "dark" : "light"}
                    label={project.sector}
                    caption={project.title}
                    aspect="landscape"
                  />
                  <div className="p-5 md:p-6">
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-x-red">
                      {project.location} · {project.year}
                    </p>
                    <h2 className="mt-2 font-display text-lg font-bold text-ink group-hover:text-x-red">
                      {project.client}
                    </h2>
                    <p className="mt-1.5 text-[14px] text-ink-muted">
                      {project.title}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand title="Have a similar facility brief?" />
    </>
  );
}
