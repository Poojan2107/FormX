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
    <section className="relative overflow-hidden bg-[#f3f3f3]">
      <Container className="py-20 md:py-28 lg:py-32">
        <div className="grid gap-0 lg:grid-cols-12">
          <Reveal className="relative lg:col-span-7">
            <div className="relative aspect-[16/11] overflow-hidden bg-[#111] md:aspect-[16/10]">
              <AssetImage
                alt={project.title}
                slot={project.assets.cover}
                kind="facility"
                fit="cover"
                aspect="auto"
                objectPosition="center"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
              <span className="absolute left-6 top-6 h-7 w-7 border-l-2 border-t-2 border-x-red" aria-hidden />
            </div>
          </Reveal>

          <Reveal delay={0.08} className="flex flex-col justify-center bg-white p-8 md:p-12 lg:col-span-5 lg:p-14">
            <p className="font-label text-[10px] tracking-[0.28em] text-x-red">Flagship case</p>
            <h2
              className="mt-4 font-display font-black uppercase leading-[0.95] tracking-tight text-ink"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              {project.title}
            </h2>
            <p className="mt-3 font-label text-[9px] tracking-[0.16em] text-ink/40">
              {project.client} · {project.location} · {project.area}
            </p>
            <p className="mt-8 text-[16px] font-medium leading-[1.8] text-ink-muted">
              {vapiCaseStudy.risk}
            </p>
            <div className="mt-8 bg-ink px-5 py-5 text-white">
              <p className="font-label text-[9px] tracking-[0.2em] text-x-red">What we would not draw</p>
              <p className="mt-2 text-[14px] leading-[1.75] text-white/75">{vapiCaseStudy.rejected}</p>
            </div>
            <Link
              href={`/projects/${project.slug}`}
              transitionTypes={["nav-forward"]}
              className="mt-10 inline-flex w-fit items-center gap-2 bg-x-red px-7 py-3.5 font-label text-[10px] tracking-[0.18em] text-white hover:bg-x-red-hover"
            >
              Read the full case
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
