"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getProject } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AssetImage } from "@/components/ui/AssetImage";

const FEATURED = [
  "vapi-g2-industrial",
  "kheda-peb-warehouse",
  "aarti-chemical-storage",
  "senegal-office-building",
];

export function Projects() {
  const list = FEATURED.map((s) => getProject(s)).filter(Boolean);

  return (
    <section id="work" className="scroll-mt-28 bg-white py-20 md:py-28 lg:py-32">
      <Container>
        <Reveal className="mb-16 flex flex-col justify-between gap-6 border-b border-line pb-10 md:mb-20 md:flex-row md:items-end">
          <div>
            <p className="font-label text-[11px] tracking-[0.28em] text-x-red">Selected work</p>
            <h2
              className="mt-4 max-w-[14ch] font-display font-black uppercase leading-[0.92] tracking-tight text-ink"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              Work that had to be decided
            </h2>
          </div>
          <Link
            href="/projects"
            transitionTypes={["nav-forward"]}
            className="inline-flex items-center gap-2 font-label text-[11px] tracking-[0.18em] text-ink/40 hover:text-x-red"
          >
            All evidence
            <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>

        <div className="space-y-16 md:space-y-24">
          {list.map((project, i) => {
            if (!project) return null;
            const reverse = i % 2 === 1;
            return (
              <Reveal key={project.slug} delay={0.04 * i}>
                <Link
                  href={`/projects/${project.slug}`}
                  transitionTypes={["nav-forward"]}
                  className="group grid items-center gap-8 md:grid-cols-12 md:gap-12"
                >
                  <div
                    className={`relative aspect-[16/10] overflow-hidden bg-[#111] md:col-span-7 ${
                      reverse ? "md:order-2" : ""
                    }`}
                  >
                    <AssetImage
                      alt={project.title}
                      slot={project.assets.cover}
                      kind="facility"
                      fit={project.assets.frame ?? "cover"}
                      aspect="auto"
                      objectPosition="center"
                      sizes="(max-width: 768px) 100vw, 58vw"
                      className="absolute inset-0 h-full w-full transition-transform duration-[1.1s] ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
                    <span className="absolute left-5 top-5 h-5 w-5 border-l-2 border-t-2 border-x-red opacity-80" />
                  </div>
                  <div className={`md:col-span-5 ${reverse ? "md:order-1" : ""}`}>
                    <p className="font-label text-[10px] tracking-[0.24em] text-x-red">
                      {String(i + 1).padStart(2, "0")} · {project.sector}
                    </p>
                    <h3
                      className="mt-4 font-display font-black uppercase leading-[0.95] tracking-tight text-ink transition-colors group-hover:text-x-red"
                      style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}
                    >
                      {project.title}
                    </h3>
                    <p className="mt-3 font-label text-[9px] tracking-[0.16em] text-ink/40">
                      {project.location}
                      {project.area ? ` · ${project.area}` : ""}
                    </p>
                    <p className="mt-6 max-w-[36ch] text-[16px] font-medium leading-[1.75] text-ink-muted">
                      {project.risk ?? project.description}
                    </p>
                    <span className="mt-8 inline-flex items-center gap-2 font-label text-[11px] tracking-[0.18em] text-x-red">
                      Open dossier
                      <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
