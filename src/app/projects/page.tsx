import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
      <section className="fx-grain border-b border-black bg-[#0a0a09] text-white">
        <Container className="pb-14 pt-28 md:pb-20 md:pt-36">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-14">
            <div>
              <p className="eyebrow text-x-red">Engineering evidence</p>
              <h1
                className="mt-5 max-w-[14ch] font-display font-black leading-[0.96] tracking-tight"
                style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
              >
                Completed facilities
              </h1>
            </div>
            <div className="lg:pb-1">
              <p className="text-[15.5px] leading-[1.9] text-white/55 md:text-[16.5px]">
                Each dossier records a real decision: what the site fought, what FormX refused, and
                what left the studio only after coordination was resolved.
              </p>
              <Link
                href="/projects/vapi-g2-industrial"
                transitionTypes={["nav-forward"]}
                className="group mt-6 inline-flex items-center gap-2 font-label text-[10px] tracking-[0.2em] text-x-red transition-colors hover:text-white"
              >
                Before × Issue case study · Vapi G+2
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <dl className="mt-12 grid gap-5 border-t border-white/10 pt-7 sm:grid-cols-3">
            <div>
              <dt className="font-label text-[9px] tracking-[0.2em] text-white/35">Record</dt>
              <dd className="mt-2 text-[14px] text-white/75">
                {brochureProjects.length} brochure facilities
              </dd>
            </div>
            <div>
              <dt className="font-label text-[9px] tracking-[0.2em] text-white/35">Disciplines</dt>
              <dd className="mt-2 text-[14px] text-white/75">
                Architecture · Structure · Infrastructure
              </dd>
            </div>
            <div>
              <dt className="font-label text-[9px] tracking-[0.2em] text-white/35">Source</dt>
              <dd className="mt-2 text-[14px] text-white/75">FORMX.pdf · built proof</dd>
            </div>
          </dl>
        </Container>
      </section>

      <section className="bg-white py-14 md:py-20">
        <Container>
          <ProjectsExplorer projects={brochureProjects} initialSector={initialSector} />
        </Container>
      </section>

      <section className="fx-grain border-t border-black bg-[#0a0a09] py-16 text-white md:py-20">
        <Container>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="eyebrow text-x-red">Continue</p>
              <p className="mt-4 text-[16px] leading-[1.9] text-white/58">
                Planning a similar facility? Bring the constraints, the operations, and the site
                reality. That is where FormX begins.
              </p>
            </div>
            <Link
              href="/contact"
              transitionTypes={["nav-forward"]}
              className="fx-btn-primary shrink-0"
            >
              Discuss your facility
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
