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
    <section id="work" className="scroll-mt-28 border-b border-line bg-bg section-y">
      <Container>
        <Reveal className="mb-14 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <p className="font-label text-[11px] text-x-red">Selected work</p>
            <h2
              className="mt-3 max-w-[14ch] font-display font-extrabold uppercase leading-[0.95] tracking-tight text-ink"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
            >
              Facilities that had to be decided
            </h2>
          </div>
          <Link
            href="/projects"
            transitionTypes={["nav-forward"]}
            className="inline-flex items-center gap-2 font-label text-[11px] text-ink/50 hover:text-x-red"
          >
            Full evidence
            <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>

        <div className="divide-y divide-line border-y border-line">
          {list.map((project, i) => {
            if (!project) return null;
            const reverse = i % 2 === 1;
            return (
              <Reveal key={project.slug} delay={0.04 * i}>
                <Link
                  href={`/projects/${project.slug}`}
                  transitionTypes={["nav-forward"]}
                  className="group grid gap-8 py-10 md:grid-cols-12 md:items-center md:gap-12 md:py-14"
                >
                  <div
                    className={`x-corner relative aspect-[16/10] overflow-hidden bg-[#111] md:col-span-6 ${
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
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className={`md:col-span-6 ${reverse ? "md:order-1" : ""}`}>
                    <p className="font-label text-[10px] text-x-red">
                      {String(i + 1).padStart(2, "0")} · {project.sector}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-extrabold uppercase leading-tight tracking-tight text-ink md:text-3xl lg:text-4xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 font-label text-[10px] text-ink/40">
                      {project.location}
                      {project.area ? ` · ${project.area}` : ""}
                    </p>
                    <p className="mt-6 measure-essay text-[17px] leading-[1.75] text-ink-muted">
                      {project.risk ?? project.description}
                    </p>
                    <span className="mt-8 inline-flex items-center gap-2 font-label text-[11px] text-x-red">
                      Open the dossier
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
