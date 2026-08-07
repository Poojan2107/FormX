import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getProject, brochureProjects } from "@/data/site";
import { vapiCaseStudy } from "@/data/method";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { Reveal } from "@/components/ui/Reveal";
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
        {/* White Hero Section with Centered Titles & Tight Navbar Gap */}
        <section className="border-b border-line bg-white text-ink">
          <Container className="max-w-4xl pb-12 pt-8 text-center md:pb-14 md:pt-12">
            <div className="mx-auto flex flex-col items-center">
              <Link
                href="/projects"
                transitionTypes={["nav-back"]}
                className="inline-flex items-center gap-2 font-label text-[11px] font-bold uppercase tracking-[0.18em] text-ink/50 hover:text-x-red transition-colors"
              >
                <ArrowLeft className="size-3.5" />
                Back to Project Portfolio
              </Link>
              
              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="size-2 rounded-full bg-x-red animate-pulse" />
                <p className="font-label text-[10.5px] font-bold uppercase tracking-[0.24em] text-x-red">
                  [FORMX.CASESTUDY] · ENGINEERING DOSSIER
                </p>
              </div>

              <h1
                className="mt-3 max-w-3xl font-display font-black leading-[0.98] tracking-tight text-ink"
                style={{ fontSize: "clamp(2.3rem, 5vw, 4rem)" }}
              >
                {project.title}
              </h1>
              <p className="mt-3.5 font-label text-[11.5px] font-bold uppercase tracking-[0.18em] text-ink/60">
                {project.client} · {project.location} · {project.area} · {project.floors}
              </p>
            </div>

            {/* Centered High-Impact Sleek Hero Visual Frame */}
            <Reveal className="mt-8 mx-auto max-w-4xl">
              <div className="formx-card formx-cut-md overflow-hidden border border-line bg-white shadow-xl hover:shadow-2xl transition-shadow duration-500">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <AssetImage
                    slot={vapiCaseStudy.evidence[0].slot}
                    alt={project.title}
                    fit="cover"
                    aspect="auto"
                    tone="light"
                    priority
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between border-t border-line bg-surface-muted/80 px-4 py-2.5 font-label text-[10px] font-bold uppercase tracking-[0.16em] text-ink/65">
                  <span className="text-x-red">[CASE STUDY · FORMX.PDF]</span>
                  <span>VAPI, GUJARAT</span>
                </div>
              </div>
            </Reveal>

            {/* Light CAD Metadata Fact Grid */}
            <div className="mt-8 grid gap-3.5 border-t border-line pt-6 text-left sm:grid-cols-2 lg:grid-cols-4">
              {factRows.map((item, idx) => (
                <div key={item.label} className="formx-cut-sm border border-line/80 bg-surface-muted/40 p-4 shadow-sm transition-all hover:bg-white hover:border-x-red/30 hover:shadow-md">
                  <div className="flex items-center justify-between border-b border-line/50 pb-2">
                    <p className="font-label text-[9.5px] font-bold uppercase tracking-[0.18em] text-x-red">
                      {item.label}
                    </p>
                    <span className="font-label text-[9px] font-bold text-ink/35">0{idx + 1}</span>
                  </div>
                  <p className="mt-2 font-display text-[14px] font-bold leading-snug text-ink">{item.value}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Clean Light Section with Subtle Accents */}
        <section className="border-b border-line bg-white py-16 text-ink md:py-24">
          <Container className="mx-auto max-w-4xl">
            <Reveal>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-x-red animate-pulse" />
                <p className="font-label text-[10.5px] font-bold uppercase tracking-[0.22em] text-x-red">
                  [BEFORE × ISSUE ANALYSIS] · ENGINEERING JUDGMENT
                </p>
              </div>
              <h2 className="mt-3 font-display text-2xl font-black tracking-tight text-ink md:text-3xl">
                What was at risk on site
              </h2>
              <div className="mt-4 formx-card formx-cut-sm border border-line bg-white p-6 md:p-8 shadow-sm">
                <p className="font-display text-[16px] font-bold leading-[1.8] text-ink/85">{vapiCaseStudy.risk}</p>
              </div>
            </Reveal>

            <Reveal className="mt-10">
              <div className="formx-cut-sm border border-x-red/30 bg-x-red/5 p-6 md:p-7">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-x-red" />
                  <p className="font-label text-[10.5px] font-bold uppercase tracking-[0.22em] text-x-red">
                    [ENGINEERING CONSTRAINTS · FORMX REFUSED]
                  </p>
                </div>
                <h3 className="mt-2.5 font-display text-lg font-extrabold text-ink">
                  What we refused to build
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-[1.8] text-ink/80">{vapiCaseStudy.rejected}</p>
              </div>
            </Reveal>

            <Reveal className="mt-12 border-t border-line pt-8">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-x-red animate-pulse" />
                <p className="font-label text-[10.5px] font-bold uppercase tracking-[0.22em] text-x-red">
                  [ENGINEERING DECISIONS]
                </p>
              </div>
              <h2 className="mt-3 font-display text-2xl font-black tracking-tight text-ink md:text-3xl">
                Decisions mapped to Before Issue
              </h2>
              <div className="mt-8 space-y-5">
                {vapiCaseStudy.decisions.map((d, i) => (
                  <div key={d.title} className="group relative flex flex-col justify-between overflow-hidden border-l-4 border-x-red formx-cut-sm border border-line/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-x-red hover:shadow-xl hover:-translate-y-1">
                    <div className="flex items-center justify-between">
                      <p className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-x-red">
                        STAGE · {d.stage}
                      </p>
                      <span className="font-label text-[10px] font-bold text-ink/35 group-hover:text-x-red transition-colors">DECISION 0{i + 1}</span>
                    </div>
                    <h3 className="mt-2.5 font-display text-lg font-bold text-ink group-hover:text-x-red transition-colors">
                      {d.title}
                    </h3>
                    <p className="mt-2.5 text-[14.5px] leading-[1.8] text-ink/75">{d.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>

        {/* 100% Full-Bleed Built Documentation Gallery Grid */}
        <section className="bg-[#f8f7f3] border-t border-line py-16 md:py-24">
          <Container>
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-x-red" />
              <p className="font-label text-[10.5px] font-bold uppercase tracking-[0.22em] text-x-red">
                [VISUAL EVIDENCE · FORMX.PDF]
              </p>
            </div>
            <h2 className="mt-3 font-display text-2xl font-black text-ink md:text-4xl">
              Brochure + built documentation
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {vapiCaseStudy.evidence.map((ev, i) => {
                const isLastOdd = vapiCaseStudy.evidence.length % 2 !== 0 && i === vapiCaseStudy.evidence.length - 1;
                return (
                  <Reveal key={ev.slot} delay={0.04 * i} className={isLastOdd ? "md:col-span-2" : ""}>
                    <div className="formx-card formx-cut-sm overflow-hidden border border-line bg-white shadow-sm transition-all hover:shadow-lg">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <AssetImage
                          slot={ev.slot}
                          alt={ev.caption}
                          fit="cover"
                          aspect="auto"
                          tone="light"
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      </div>
                      <div className="p-4 border-t border-line bg-white">
                        <p className="font-display text-[14px] font-bold text-ink leading-snug">{ev.caption}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
            <div className="mt-14 max-w-xl mx-auto text-center flex flex-col items-center">
              <p className="font-label text-[10.5px] font-bold uppercase tracking-[0.22em] text-x-red">
                CONTINUE
              </p>
              <p className="mt-3 text-[14.5px] leading-[1.8] text-ink/70">
                Let&apos;s read the constraints on your facility the same way — before anyone talks sheet count.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
                <Button href="/contact" variant="primary" className="gap-2 shadow-md">
                  Discuss your facility
                  <ArrowRight className="size-4" />
                </Button>
                <Link
                  href="/services"
                  transitionTypes={["nav-forward"]}
                  className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.14em] text-ink/70 transition-colors hover:text-x-red"
                >
                  What we take on
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

  // Standard brochure project
  const brochureVisuals = project.assets.gallery.length
    ? project.assets.gallery
    : [project.assets.cover];

  return (
    <>
      {/* White Hero Section with Centered Titles & Tight Navbar Gap */}
      <section className="border-b border-line bg-white text-ink">
        <Container className="max-w-4xl pb-12 pt-8 text-center md:pb-14 md:pt-12">
          <div className="mx-auto flex flex-col items-center">
            <Link
              href="/projects"
              transitionTypes={["nav-back"]}
              className="inline-flex items-center gap-2 font-label text-[11px] font-bold uppercase tracking-[0.18em] text-ink/50 hover:text-x-red transition-colors"
            >
              <ArrowLeft className="size-3.5" />
              Back to Project Portfolio
            </Link>
            
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="size-2 rounded-full bg-x-red animate-pulse" />
              <p className="font-label text-[10.5px] font-bold uppercase tracking-[0.24em] text-x-red">
                [FORMX.FACILITY] · {project.sector}
              </p>
            </div>

            <h1
              className="mt-3 max-w-3xl font-display font-black leading-[0.98] tracking-tight text-ink"
              style={{ fontSize: "clamp(2.3rem, 5vw, 4rem)" }}
            >
              {project.title}
            </h1>
            <p className="mt-3.5 font-label text-[11.5px] font-bold uppercase tracking-[0.18em] text-ink/60">
              {project.client} · {project.location}
            </p>
          </div>

          {/* Centered High-Impact Sleek Hero Visual Frame */}
          <Reveal className="mt-8 mx-auto max-w-4xl">
            <div className="formx-card formx-cut-md overflow-hidden border border-line bg-white shadow-xl hover:shadow-2xl transition-shadow duration-500">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <AssetImage
                  slot={project.assets.cover}
                  alt={project.title}
                  fit="cover"
                  aspect="auto"
                  tone="light"
                  priority
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between border-t border-line bg-surface-muted/80 px-4 py-2.5 font-label text-[10px] font-bold uppercase tracking-[0.16em] text-ink/65">
                <span className="text-x-red">[FORMX.ARTIFACT]</span>
                <span>{project.location}</span>
              </div>
            </div>
          </Reveal>

          {/* Light CAD Metadata Fact Grid */}
          <div className="mt-8 grid gap-3.5 border-t border-line pt-6 text-left sm:grid-cols-2 lg:grid-cols-4">
            {factRows.map((item, idx) => (
              <div key={item.label} className="formx-cut-sm border border-line/80 bg-surface-muted/40 p-4 shadow-sm transition-all hover:bg-white hover:border-x-red/30 hover:shadow-md">
                <div className="flex items-center justify-between border-b border-line/50 pb-2">
                  <p className="font-label text-[9.5px] font-bold uppercase tracking-[0.18em] text-x-red">
                    {item.label}
                  </p>
                  <span className="font-label text-[9px] font-bold text-ink/35">0{idx + 1}</span>
                </div>
                <p className="mt-2 font-display text-[14px] font-bold leading-snug text-ink">{item.value}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container className="mx-auto max-w-5xl">
          <div className={project.highlights.length ? "grid gap-12 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-16" : ""}>
            {/* Left column — title, description, risk/refused */}
            <div>
              <Reveal>
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-x-red" />
                  <p className="font-label text-[10.5px] font-bold uppercase tracking-[0.22em] text-x-red">
                    [FORMX.SCOPE] · ENGINEERING DELIVERABLES
                  </p>
                </div>
                <h2 className="mt-3 font-display text-2xl font-black tracking-tight text-ink md:text-3xl">
                  What was delivered
                </h2>
                <p className="mt-5 font-display text-[16px] font-bold leading-[1.9] text-ink/75">{project.description}</p>
              </Reveal>

              {project.risk || project.refused ? (
                <Reveal className="mt-8">
                  <div className="grid items-stretch gap-4 sm:grid-cols-2">
                    {project.risk ? (
                      <div className="group relative border-l-[3px] border-x-red bg-[#fdf9f9] p-5 formx-cut-sm border border-line/50 transition-all hover:border-x-red/40 hover:shadow-sm">
                        <p className="font-label text-[9.5px] font-bold uppercase tracking-[0.2em] text-x-red">
                          The risk before × issue
                        </p>
                        <p className="mt-3 font-display text-[13.5px] font-bold leading-[1.85] text-ink/80">
                          {project.risk}
                        </p>
                      </div>
                    ) : null}
                    {project.refused ? (
                      <div className="group relative border-l-[3px] border-ink/20 bg-[#f8f7f3] p-5 formx-cut-sm border border-line/50 transition-all hover:border-ink/40 hover:shadow-sm">
                        <p className="font-label text-[9.5px] font-bold uppercase tracking-[0.2em] text-ink/50">
                          What we refused to build
                        </p>
                        <p className="mt-3 font-display text-[13.5px] font-bold leading-[1.85] text-ink/80">
                          {project.refused}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </Reveal>
              ) : null}
            </div>

            {/* Right column — engineering highlights (fills the gap) */}
            {project.highlights.length ? (
              <Reveal className="lg:pt-1" delay={0.08}>
                <div className="lg:sticky lg:top-28">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-x-red" />
                    <p className="font-label text-[10.5px] font-bold uppercase tracking-[0.22em] text-x-red">
                      [ENGINEERING HIGHLIGHTS]
                    </p>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {project.highlights.map((h, idx) => (
                      <li key={h} className="flex items-start gap-3 border-b border-line/40 pb-3 last:border-0 last:pb-0">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-x-red text-white text-[9px] font-bold font-label">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-[14px] font-bold leading-[1.65] text-ink/85">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ) : null}
          </div>
        </Container>
      </section>

      {/* 100% Full-Bleed Project Visuals Gallery Grid */}
      <section className="bg-[#f8f7f3] border-t border-line py-16 md:py-24">
        <Container>
          <Reveal>
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-x-red" />
              <p className="font-label text-[10.5px] font-bold uppercase tracking-[0.22em] text-x-red">
                [FORMX.ARTIFACTS] · VISUAL DOCUMENTATION
              </p>
            </div>
            <h2 className="mt-3 font-display text-2xl font-black tracking-tight text-ink md:text-4xl">
              Project visuals
            </h2>
            <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink/55">
              Brochure and built-documentation images as executed in FormX engineering material.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {brochureVisuals.map((slot, i) => {
              const isLastOdd = brochureVisuals.length % 2 !== 0 && i === brochureVisuals.length - 1;
              return (
                <Reveal key={slot} delay={0.05 * i} className={isLastOdd ? "sm:col-span-2" : ""}>
                  <div className="formx-card formx-cut-sm overflow-hidden border border-line bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <AssetImage
                        slot={slot}
                        alt={`${project.title} visual ${i + 1}`}
                        fit="cover"
                        aspect="auto"
                        tone="light"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                    <div className="px-4 py-3 border-t border-line bg-white flex items-center justify-between">
                      <span className="font-display text-[13px] font-bold text-ink">
                        {project.title} · {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-label text-[9.5px] font-bold uppercase tracking-[0.16em] text-x-red">
                        [FORMX]
                      </span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Centered Action Buttons */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-6 text-center">
            <Button href="/contact" variant="primary" className="gap-2 shadow-md">
              Discuss a similar facility
              <ArrowRight className="size-4" />
            </Button>
            <Link
              href="/projects/vapi-g2-industrial"
              className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.14em] text-x-red hover:underline"
            >
              Read Vapi G+2 case study
            </Link>
          </div>
        </Container>
      </section>

      <RelatedFacilities title="Related facilities" projects={relatedProjects} />
      <StickyEnquire label="Discuss this project type" />
    </>
  );
}
