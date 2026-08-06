import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getProject, projects } from "@/data/site";
import { formxMethod, vapiCaseStudy } from "@/data/method";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { VisualFrame } from "@/components/ui/VisualFrame";
import { RelatedLinks } from "@/components/shared/CtaBlocks";
import { StickyEnquire } from "@/components/shared/StickyEnquire";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
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

  const isVapi = slug === vapiCaseStudy.slug;

  const relatedItems = projects
    .filter((p) => p.slug !== slug)
    .slice(0, 3)
    .map((p) => ({
      href: `/projects/${p.slug}`,
      title: p.title,
      meta: `${p.location}${p.area ? ` · ${p.area}` : ""}`,
    }));

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
            <p className="mt-6 font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              {formxMethod.code} · Case study
            </p>
            <h1
              className="mt-3 max-w-3xl font-display font-black uppercase leading-[1.05] tracking-tight"
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
              <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.24em] text-x-red">
                What was at risk
              </p>
              <p className="mt-5 text-[16px] leading-[1.9] text-ink-muted">{vapiCaseStudy.risk}</p>
            </Reveal>

            <Reveal className="mt-14 border-t border-line pt-10">
              <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.24em] text-x-red">
                What we refused
              </p>
              <p className="mt-5 text-[16px] leading-[1.9] text-ink-muted">{vapiCaseStudy.rejected}</p>
            </Reveal>

            <Reveal className="mt-14 border-t border-line pt-10">
              <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.24em] text-x-red">
                Brochure record
              </p>
              <p className="mt-5 text-[15px] leading-[1.9] text-ink-muted">{project.description}</p>
            </Reveal>

            <Reveal className="mt-14 border-t border-line pt-10">
              <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.24em] text-x-red">
                Decisions mapped to Before Issue
              </p>
              <div className="mt-8 space-y-10">
                {vapiCaseStudy.decisions.map((d) => (
                  <div key={d.title} className="border-l-2 border-x-red pl-5">
                    <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-x-red">
                      Stage · {d.stage}
                    </p>
                    <h2 className="mt-2 font-display text-xl font-extrabold uppercase tracking-tight text-ink">
                      {d.title}
                    </h2>
                    <p className="mt-3 text-[14px] leading-[1.85] text-ink-muted">{d.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-14 border-t border-line pt-10">
              <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.24em] text-x-red">
                Lesson
              </p>
              <p className="mt-5 text-[16px] leading-[1.9] text-ink-muted">{vapiCaseStudy.lesson}</p>
            </Reveal>
          </Container>
        </section>

        <section className="bg-[#f7f7f7] py-16 md:py-20">
          <Container>
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.24em] text-x-red">
              Visual evidence · FORMX.pdf
            </p>
            <h2 className="mt-2 font-display text-2xl font-extrabold uppercase text-ink md:text-3xl">
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
              <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.2em] text-x-red">
                Continue
              </p>
              <p className="mt-3 text-[14px] leading-[1.8] text-ink-muted">
                Let&apos;s read the constraints on your facility the same way — before anyone talks
                sheet count.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  transitionTypes={["nav-forward"]}
                  className="inline-flex items-center gap-2 bg-x-red px-7 py-3.5 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-white"
                >
                  Discuss your facility
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/#before-issue"
                  transitionTypes={["nav-forward"]}
                  className="inline-flex items-center gap-2 text-[13px] font-semibold text-ink-muted hover:text-x-red"
                >
                  Before Issue method
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <RelatedLinks title="More facilities from the brochure" items={relatedItems} />
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

  const brochureVisuals = project.assets.gallery.length ? project.assets.gallery : [project.assets.cover];

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
          <p className="mt-6 font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
            {project.sector} · Brochure record
          </p>
          <h1
            className="mt-3 max-w-3xl font-display font-black uppercase leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
          >
            {project.title}
          </h1>
          <p className="mt-3 text-[14px] text-white/55">
            {project.client} · {project.location}
          </p>
          <Reveal className="mt-10">
            <VisualFrame
              slot={project.assets.cover}
              alt={project.title}
              fit={project.assets.frame ?? "contain"}
              aspect="cinema"
              tone="dark"
              priority
              className="border border-white/10"
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container className="mx-auto max-w-3xl">
          <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.24em] text-x-red">
            What was delivered
          </p>
          <p className="mt-5 text-[16px] leading-[1.9] text-ink-muted">{project.description}</p>
          {project.risk ? (
            <div className="mt-10 border-l-2 border-x-red pl-5">
              <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-x-red">
                The risk Before × Issue
              </p>
              <p className="mt-2 text-[14px] leading-[1.8] text-ink-muted">{project.risk}</p>
              {project.refused ? (
                <>
                  <p className="mt-5 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-ink/40">
                    What we refused
                  </p>
                  <p className="mt-2 text-[14px] leading-[1.8] text-ink-muted">{project.refused}</p>
                </>
              ) : null}
            </div>
          ) : null}
          <div className="mt-12 grid gap-6 border-t border-line pt-10 sm:grid-cols-2">
            {scale.map((f) => (
              <div key={f.label}>
                <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-x-red">
                  {f.label}
                </p>
                <p className="mt-2 text-[14px] text-ink">{f.value}</p>
              </div>
            ))}
          </div>
          {project.highlights.length ? (
            <div className="mt-12 border-t border-line pt-10">
              <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.24em] text-x-red">
                Engineering notes
              </p>
              <ul className="mt-5 space-y-3">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-[14px] text-ink">
                    <span className="mt-0.5 shrink-0 font-display text-[12px] font-black text-x-red">
                      ×
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <div className="mt-12 border-t border-line pt-10">
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.24em] text-x-red">
              Project visuals
            </p>
            <p className="mt-3 max-w-[40ch] text-[14px] leading-[1.8] text-ink-muted">
              Brochure and PDF-origin images for this facility, as shared in FormX material.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {brochureVisuals.map((slot, i) => (
                <Reveal key={slot} delay={0.05 * i}>
                  <VisualFrame
                    slot={slot}
                    alt={`${project.title} visual ${i + 1}`}
                    fit="contain"
                    aspect={i === 0 ? "wide" : "landscape"}
                    tone="light"
                    className="border border-line"
                  />
                </Reveal>
              ))}
            </div>
          </div>
          <p className="mt-12 text-[14px] leading-[1.85] text-ink-muted">
            For the full Before Issue investigation, see the{" "}
            <Link href="/projects/vapi-g2-industrial" className="font-semibold text-x-red underline">
              Vapi G+2 case study
            </Link>
            .
          </p>
          <Link
            href="/contact"
            transitionTypes={["nav-forward"]}
            className="mt-8 inline-flex bg-x-red px-7 py-3.5 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-white"
          >
            Discuss a similar facility
          </Link>
        </Container>
      </section>

      <RelatedLinks title="Related facilities" items={relatedItems} />
      <StickyEnquire label="Discuss this project type" />
    </>
  );
}
