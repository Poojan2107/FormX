import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { brochureProjects } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";

export const metadata: Metadata = {
  title: "Projects | Engineering Evidence",
  description:
    "FORM× project portfolio — industrial facilities, PEB warehouses, residential towers, corporate and institutional structures.",
};

type ProjectsPageProps = {
  searchParams?: Promise<{ sector?: string }>;
};

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const params = searchParams ? await searchParams : undefined;
  const initialSector = params?.sector;

  return (
    <>
      <section className="border-b border-line bg-white pt-12 pb-16 md:pt-16 md:pb-20">
        <Container className="max-w-4xl text-center">
          <div className="mx-auto flex flex-col items-center">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-x-red animate-pulse" />
              <p className="font-label text-[10.5px] font-bold uppercase tracking-[0.22em] text-x-red">
                [FORMX.PORTFOLIO] · ENGINEERING EVIDENCE
              </p>
            </div>
            
            <h1
              className="mt-4 font-display font-black leading-[0.94] tracking-tight text-ink"
              style={{ fontSize: "clamp(2.6rem, 6vw, 4.5rem)" }}
            >
              Completed Facilities
            </h1>
            
            <p className="mt-5 max-w-2xl font-display text-lg font-bold leading-relaxed text-ink/75 md:text-xl">
              Each dossier records a real engineering decision: what the site fought, what FormX refused, and what left the studio only after structural and utility coordination was resolved.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/projects/vapi-g2-industrial"
                transitionTypes={["nav-forward"]}
                className="inline-flex items-center gap-2 rounded border border-x-red/30 bg-x-red/5 px-5 py-2.5 font-label text-[11px] font-bold uppercase tracking-[0.16em] text-x-red transition-all hover:bg-x-red hover:text-white hover:shadow-md"
              >
                Read the Before Issue case study
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-bg py-14 md:py-20">
        <Container>
          <ProjectsExplorer projects={brochureProjects} initialSector={initialSector} />
        </Container>
      </section>

      <section className="fx-grain border-t border-black bg-[#0a0a09] py-16 text-white">
        <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="measure-studio text-[16px] leading-[1.9] text-white/58">
            Planning a similar facility? Bring the constraints, the operations, and the site
            reality. That is where FormX begins.
          </p>
          <Link
            href="/contact"
            transitionTypes={["nav-forward"]}
            className="formx-cut inline-flex items-center gap-2 border-[1.5px] border-x-red bg-x-red px-7 py-3.5 font-label text-[11px] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-x-red hover:shadow-[0_12px_36px_-16px_rgba(224,49,40,0.35)]"
          >
            Discuss project
            <ArrowUpRight className="size-4" />
          </Link>
        </Container>
      </section>
    </>
  );
}
