import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";
import { Reveal } from "@/components/ui/Reveal";

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
      <section className="fx-grain border-b border-line bg-bg pt-28 pb-20 md:pt-36 md:pb-28">
        <Container>
          <Reveal>
            <p className="eyebrow text-x-red">Engineering evidence</p>
            <h1
              className="editorial-title mt-5 max-w-[11ch] text-ink"
              style={{ fontSize: "clamp(2.75rem, 7vw, 5rem)" }}
            >
              Completed facilities
            </h1>
            <p className="editorial-deck mt-8 measure-essay">
              Each dossier records a real decision: what the site fought, what FormX refused, and
              what left the studio only after coordination was resolved.
            </p>
            <Link
              href="/projects/vapi-g2-industrial"
              transitionTypes={["nav-forward"]}
              className="mt-8 inline-flex items-center gap-2 font-label text-[10px] text-x-red transition-colors hover:text-ink"
            >
              Read the Before Issue case study
              <ArrowRight className="size-3.5" />
            </Link>
          </Reveal>
        </Container>
      </section>

      <section className="bg-bg py-14 md:py-20">
        <Container>
          <ProjectsExplorer projects={projects} initialSector={initialSector} />
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
            className="inline-flex items-center gap-2 bg-x-red px-7 py-3.5 font-label text-[11px] text-white hover:bg-x-red-hover"
          >
            Discuss project
            <ArrowUpRight className="size-4" />
          </Link>
        </Container>
      </section>
    </>
  );
}
