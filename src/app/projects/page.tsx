import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Projects | Engineering Evidence | FORMX Consultants",
  description:
    "FORMX project portfolio — industrial facilities, PEB warehouses, residential towers, corporate and institutional structures across Gujarat and India.",
};

/** Engineering evidence index — dossier list, brochure-true */
export default function ProjectsPage() {
  return (
    <>
      <section className="border-b border-line bg-white pt-24 pb-16 md:pt-32 md:pb-20">
        <Container>
          <Reveal>
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              Engineering evidence
            </p>
            <h1
              className="mt-4 max-w-[14ch] font-display font-black uppercase leading-[1.05] tracking-tight text-ink"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
            >
              Completed facilities
            </h1>
            <p className="mt-6 max-w-[42ch] text-[16px] leading-[1.9] text-ink-muted">
              Industrial plants, PEB warehouses, residential towers and institutional buildings —
              each dossier records what had to be locked Before × Issue.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-14 md:py-20">
        <Container>
          <ProjectsExplorer projects={projects} />
        </Container>
      </section>

      <section className="border-t border-line bg-[#0d0d0d] py-14 text-white">
        <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-[36ch] text-[15px] leading-[1.85] text-white/65">
            Planning a similar facility? Share location, type and timeline with the FORM× studio.
          </p>
          <Link
            href="/contact"
            transitionTypes={["nav-forward"]}
            className="inline-flex items-center gap-2 bg-x-red px-7 py-3.5 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-white"
          >
            Discuss project
            <ArrowUpRight className="size-4" />
          </Link>
        </Container>
      </section>
    </>
  );
}
