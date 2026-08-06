import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getProject, brochureProjects } from "@/data/site";
import { formxMethod, vapiCaseStudy } from "@/data/method";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { VisualFrame } from "@/components/ui/VisualFrame";
import { RelatedFacilities } from "@/components/projects/RelatedFacilities";
import { StickyEnquire } from "@/components/shared/StickyEnquire";
import { Button } from "@/components/ui/Button";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return brochureProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  if (slug === vapiCaseStudy.slug) {
    return {
      title: `${project.title} · Before Issue Case Study | FORMX`,
      description: vapiCaseStudy.risk,
    };
  }
  return {
    title: `${project.title} | ${project.location} | FORMX`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  if (!brochureProjects.some((p) => p.slug === slug)) notFound();

  const isVapi = slug === vapiCaseStudy.slug;
  const factRows = [
    { label: "Client", value: project.client },
    { label: "Location", value: project.location },
    { label: "Scope", value: project.services.join(" · ") },
    { label: "Status", value: project.year },
  ].filter((item) => item.value);

  const relatedProjects = brochureProjects.filter((p) => p.slug !== slug).slice(0, 3);

  if (isVapi) {
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
              Engineering evidence
            </Link>
            <p className="mt-6 eyebrow text-x-red">
              {formxMethod.code} · Case study
            </p>
            <h1
              className="mt-4 max-w-3xl font-display font-black leading-[0.98] tracking-tight"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
            >
              {project.title}
            </h1>
            <p className="mt-3 text-[14px] text-white/55">
              {project.client} · {project.location} · {project.area} · {project.floors}
            </p>
            <Reveal className="mt-10">
              <VisualFrame
                slot={vapiCaseStudy.evidence[0].slot}
                alt={project.title}
                fit="contain"
                aspect="wide"
                tone="dark"
                priority
                className="border border-white/10"
              />
            </Reveal>
          </Container>
        </section>

        <section className="bg-white py-16 md:py-24">
          <Container className="mx-auto max-w-3xl">
            <Reveal>
              <p className="eyebrow text-x-red">
                What was at risk
              </p>
              <p className="mt-5 text-[16px] leading-[1.9] text-ink-muted">{vapiCaseStudy.risk}</p>
            </Reveal>

            <Reveal className="mt-14 border-t border-line pt-10">
              <p className="eyebrow text-x-red">
                What we refused
              </p>
              <p className="mt-5 text-[16px] leading-[1.9] text-ink-muted">{vapiCaseStudy.rejected}</p>
            </Reveal>

            <Reveal className="mt-14 border-t border-line pt-10">
              <p className="eyebrow text-x-red">
                Brochure record
              </p>
              <p className="mt-5 text-[15px] leading-[1.9] text-ink-muted">{project.description}</p>
            </Reveal>

            <Reveal className="mt-14 border-t border-line pt-10">
              <p className="eyebrow text-x-red">
                Decisions mapped to Before Issue
              </p>
              <div className="mt-8 space-y-10">
                {vapiCaseStudy.decisions.map((d) => (
                  <div key={d.title} className="border-l-2 border-x-red pl-5">
                    <p className="editorial-meta text-x-red">
                      Stage · {d.stage}
                    </p>
                    <h2 className="mt-2 font-display text-xl font-extrabold tracking-tight text-ink">
                      {d.title}
                    </h2>
                    <p className="mt-3 text-[14px] leading-[1.85] text-ink-muted">{d.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-14 border-t border-line pt-10">
              <p className="eyebrow text-x-red">
                Lesson
              </p>
              <p className="mt-5 text-[16px] leading-[1.9] text-ink-muted">{vapiCaseStudy.lesson}</p>
            </Reveal>
          </Container>
        </section>

        <section className="bg-[#f7f7f7] py-16 md:py-20">
          <Container>
            <p className="eyebrow text-x-red">
              Visual evidence · FORMX.pdf
            </p>
            <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
              Brochure + built documentation
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {vapiCaseStudy.evidence.map((ev, i) => (
                <Reveal key={ev.slot} delay={0.04 * i}>
                  <VisualFrame
                    slot={ev.slot}
                    alt={ev.caption}
                    fit={ev.fit}
                    aspect="landscape"
                    tone="dark"
                    className="border border-line"
                  />
                  <p className="mt-3 text-[13px] leading-[1.7] text-ink-muted">{ev.caption}</p>
                </Reveal>
              ))}
            </div>
            <div className="mt-12 max-w-xl">
              <p className="eyebrow text-x-red">
                Continue
              </p>
              <p className="mt-3 text-[14px] leading-[1.8] text-ink-muted">
                Let&apos;s read the constraints on your facility the same way — before anyone talks
                sheet count.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button href="/contact" variant="primary">
                  Discuss your facility
                  <ArrowRight className="size-4" />
                </Button>
                <Link
                  href="/#before-issue"
                  transitionTypes={["nav-forward"]}
                  className="inline-flex items-center gap-2 text-[13px] font-semibold text-ink-muted transition-colors hover:text-x-red"
                >
                  Before Issue method
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <RelatedFacilities
          title="More facilities from the brochure"
          projects={relatedProjects}
        />
        <StickyEnquire label="Discuss a similar facility" />
      </>
    );
  }

  // Standard brochure project (still decision-forward, lighter than Vapi)
  const scale = [
    { label: "Location", value: project.location },
    { label: "Area", value: project.area },
    { label: "Floors / scope", value: project.floors },
    { label: "Sector", value: project.sector },
  ].filter((f) => f.value);

  const brochureVisuals = project.assets.gallery.length
    ? project.assets.gallery
    : [project.assets.cover];

  const landscape = project.assets.orientation === "landscape";
  const portrait = project.assets.orientation === "portrait";
  const heroAspect = landscape ? "cinema" : portrait ? "portrait" : "cinema";
  const heroFit =
    portrait ? "cover" : (project.assets.frame ?? "contain");

  return (
    <>
      <section className="fx-grain border-b border-black bg-[#0a0a09] text-white">
        <Container className="pb-12 pt-28 md:pb-16 md:pt-36">
          <Link
            href="/projects"
            transitionTypes={["nav-back"]}
            className="inline-flex items-center gap-2 font-label text-[10px] tracking-[0.2em] text-white/45 transition-colors hover:text-white"
          >
            <ArrowLeft className="size-3.5" />
            Engineering evidence
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-14">
            <div>
              <p className="eyebrow text-x-red">{project.sector}</p>
              <h1
                className="mt-4 max-w-[16ch] font-display font-black leading-[0.96] tracking-tight"
                style={{ fontSize: "clamp(2.15rem, 5vw, 3.75rem)" }}
              >
                {project.title}
              </h1>
              <p className="mt-4 text-[14px] text-white/50">
                {project.client} · {project.location}
              </p>
            </div>
            <p className="text-[15px] leading-[1.9] text-white/55 lg:pb-1">
              Brochure record — coordinated Architecture, Structure and Infrastructure before
              issue.
            </p>
          </div>
          <Reveal className="mt-10">
            <div className="formx-cut-lg overflow-hidden border border-white/10 bg-[#111] p-3">
              <VisualFrame
                slot={project.assets.cover}
                alt={project.title}
                fit={heroFit}
                aspect={heroAspect}
                tone="dark"
                priority
              />
            </div>
          </Reveal>
          <dl className="mt-8 grid gap-5 border-t border-white/10 pt-7 sm:grid-cols-2 lg:grid-cols-4">
            {factRows.map((item) => (
              <div key={item.label}>
                <dt className="font-label text-[9px] tracking-[0.2em] text-white/35">{item.label}</dt>
                <dd className="mt-2 text-[14px] leading-[1.7] text-white/75">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
            <div>
              <p className="eyebrow text-x-red">What was delivered</p>
              <p className="mt-5 text-[16.5px] leading-[1.9] text-ink/62">{project.description}</p>

              {project.risk || project.refused ? (
                <div className="mt-12 space-y-0 divide-y divide-ink/[0.08] border-y border-ink/[0.08]">
                  {project.risk ? (
                    <div className="py-8">
                      <p className="eyebrow text-x-red">The risk Before × Issue</p>
                      <p className="mt-4 text-[15px] leading-[1.9] text-ink/58">{project.risk}</p>
                    </div>
                  ) : null}
                  {project.refused ? (
                    <div className="py-8">
                      <p className="eyebrow text-x-red">What we refused</p>
                      <p className="mt-4 text-[15px] leading-[1.9] text-ink/58">{project.refused}</p>
                    </div>
                  ) : null}
                </div>
              ) : null}

              {project.highlights.length ? (
                <div className="mt-12">
                  <p className="eyebrow text-x-red">Engineering notes</p>
                  <ul className="mt-6 space-y-4">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-[15px] leading-[1.75] text-ink">
                        <span className="mt-0.5 shrink-0 font-display text-sm font-black text-x-red">
                          ×
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="border border-ink/[0.08] bg-[#fafaf8] p-6 md:p-7">
                <p className="eyebrow text-x-red">Scale</p>
                <dl className="mt-6 space-y-5">
                  {scale.map((f) => (
                    <div key={f.label} className="border-b border-ink/[0.08] pb-4 last:border-0 last:pb-0">
                      <dt className="font-label text-[9px] tracking-[0.18em] text-ink/40">{f.label}</dt>
                      <dd className="mt-1.5 text-[14px] font-medium text-ink">{f.value}</dd>
                    </div>
                  ))}
                </dl>
                <Link
                  href="/contact"
                  transitionTypes={["nav-forward"]}
                  className="fx-btn-primary mt-8 inline-flex w-full justify-center"
                >
                  Discuss similar facility
                </Link>
                <p className="mt-5 text-[13px] leading-[1.75] text-ink/45">
                  Full Before × Issue investigation:{" "}
                  <Link
                    href="/projects/vapi-g2-industrial"
                    className="font-semibold text-x-red hover:text-ink"
                  >
                    Vapi G+2 case study
                  </Link>
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-[#f7f6f2] py-16 md:py-20">
        <Container>
          <p className="eyebrow text-x-red">Visual evidence · FORMX.pdf</p>
          <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
            Brochure documentation
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {brochureVisuals.map((slot, i) => (
              <Reveal key={slot} delay={0.05 * i}>
                <div className="formx-cut overflow-hidden border border-ink/[0.08] bg-white p-3">
                  <VisualFrame
                    slot={slot}
                    alt={`${project.title} visual ${i + 1}`}
                    fit="contain"
                    aspect={i === 0 ? "wide" : "landscape"}
                    tone="light"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <RelatedFacilities title="Related facilities" projects={relatedProjects} />
      <StickyEnquire label="Discuss this project type" />
    </>
  );
}

