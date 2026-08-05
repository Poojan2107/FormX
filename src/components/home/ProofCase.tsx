import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { vapiCaseStudy } from "@/data/method";
import { getProject } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";

/** One investigated facility — subordinate to Before × Issue, not a second signature */
export function ProofCase() {
  const project = getProject(vapiCaseStudy.slug);
  if (!project) return null;

  return (
    <section className="border-b border-line bg-[#f7f7f7] py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-14">
          <Reveal className="lg:col-span-6">
            <div className="x-corner relative aspect-[16/10] overflow-hidden bg-[#111]">
              <AssetImage
                alt={project.title}
                slot={project.assets.cover}
                kind="facility"
                fit="cover"
                aspect="auto"
                objectPosition="center"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <p className="mt-3 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-ink/40">
              {project.location} · {project.area} · {project.floors}
            </p>
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-6">
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              Case · Vapi G+2
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
              {project.title}
            </h2>
            <p className="mt-2 text-[13px] text-ink/50">
              {project.client} · Plastic manufacturing
            </p>
            <p className="mt-6 measure-studio text-[15px] leading-[1.85] text-ink-muted">
              {vapiCaseStudy.risk}
            </p>
            <div className="mt-8 border-l-2 border-x-red pl-5">
              <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-x-red">
                What we refused
              </p>
              <p className="mt-2 text-[14px] leading-[1.8] text-ink-muted">{vapiCaseStudy.rejected}</p>
            </div>
            <ul className="mt-8 space-y-3">
              {vapiCaseStudy.decisions.slice(0, 2).map((d) => (
                <li key={d.title}>
                  <p className="font-display text-[11px] font-bold uppercase tracking-[0.14em] text-ink">
                    {d.title}
                  </p>
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
