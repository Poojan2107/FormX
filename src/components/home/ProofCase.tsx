import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { vapiCaseStudy } from "@/data/method";
import { getProject } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { VisualFrame } from "@/components/ui/VisualFrame";

/** Home proof — one investigated facility, not a gallery parade */
export function ProofCase() {
  const project = getProject(vapiCaseStudy.slug);
  if (!project) return null;

  return (
    <section className="border-b border-line bg-[#f7f7f7] py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14 lg:items-start">
          <Reveal className="lg:col-span-6">
            <VisualFrame
              slot={project.assets.cover}
              alt={project.title}
              fit={project.assets.frame ?? "contain"}
              aspect="landscape"
              tone="dark"
              className="border border-line"
            />
            <p className="mt-3 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-ink/40">
              {project.location} · {project.area} · {project.floors}
            </p>
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-6">
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              Proof · Before Issue
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
              {project.title}
            </h2>
            <p className="mt-2 text-[13px] text-ink/50">
              {project.client} · Plastic manufacturing · Vapi
            </p>
            <p className="mt-6 text-[15px] leading-[1.85] text-ink-muted">{vapiCaseStudy.risk}</p>
            <div className="mt-8 border-l-2 border-x-red pl-5">
              <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-x-red">
                What we refused
              </p>
              <p className="mt-2 text-[14px] leading-[1.8] text-ink-muted">{vapiCaseStudy.rejected}</p>
            </div>
            <ul className="mt-8 space-y-4">
              {vapiCaseStudy.decisions.slice(0, 2).map((d) => (
                <li key={d.title}>
                  <p className="font-display text-[11px] font-bold uppercase tracking-[0.14em] text-ink">
                    {d.title}
                  </p>
                  <p className="mt-1 text-[13px] leading-[1.75] text-ink-muted">{d.body}</p>
                </li>
              ))}
            </ul>
            <Link
              href={`/projects/${project.slug}`}
              transitionTypes={["nav-forward"]}
              className="mt-10 inline-flex items-center gap-2 bg-x-red px-7 py-3.5 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-white hover:bg-x-red-hover"
            >
              Full engineering case study
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
