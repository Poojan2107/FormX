import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { vapiCaseStudy } from "@/data/method";
import { getProject } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";

export function ProofCase() {
  const project = getProject(vapiCaseStudy.slug);
  if (!project) return null;

  return (
    <section className="border-b border-line bg-bg-muted section-y">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <div className="x-corner relative aspect-[16/10] overflow-hidden bg-[#111] formx-cut-lg">
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
          </Reveal>
          <Reveal delay={0.08} className="flex flex-col justify-center lg:col-span-5">
            <p className="font-label text-[11px] text-x-red">One facility · investigated</p>
            <h2
              className="mt-4 font-display font-extrabold uppercase leading-[0.95] tracking-tight text-ink"
              style={{ fontSize: "clamp(1.85rem, 3.5vw, 2.75rem)" }}
            >
              {project.title}
            </h2>
            <p className="mt-3 font-label text-[10px] text-ink/40">
              {project.client} · {project.location} · {project.area}
            </p>
            <p className="mt-7 text-[17px] leading-[1.8] text-ink-muted">{vapiCaseStudy.risk}</p>
            <blockquote className="mt-8 border-l-2 border-x-red pl-5">
              <p className="font-label text-[10px] text-x-red">What we refused</p>
              <p className="mt-2 text-[15px] leading-[1.75] text-ink/70">{vapiCaseStudy.rejected}</p>
            </blockquote>
            <Link
              href={`/projects/${project.slug}`}
              transitionTypes={["nav-forward"]}
              className="mt-10 inline-flex w-fit items-center gap-2 bg-ink px-7 py-3.5 font-label text-[11px] text-white hover:bg-x-red"
            >
              Full case study
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
