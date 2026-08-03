import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  portfolioServices,
  portfolioServicesNote,
  portfolioClosing,
  portfolioSpecialized,
  portfolioOngoing,
  brochureVisuals,
  projects,
} from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { VisualFrame } from "@/components/ui/VisualFrame";
import { NewsletterForm } from "@/components/shared/NewsletterForm";

export const metadata: Metadata = {
  title: "Insights | FORMX Practice Notes & Portfolio",
  description:
    "FORMX insights — specialized structural work, ongoing projects, and practice resources from the Ahmedabad studio.",
};

export default function KnowledgeCenterPage() {
  return (
    <>
      <section className="border-b border-line bg-[#0d0d0d] pt-24 pb-14 text-white md:pt-32 md:pb-16">
        <Container>
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.32em] text-x-red">
            Insights
          </p>
          <h1
            className="mt-4 max-w-3xl font-display font-black uppercase leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
          >
            Practice notes from FORMX
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-[1.85] text-white/60">
            Specialized engineering, live mandates and service typologies from the brochure — written
            for project discussions, not marketing drip.
          </p>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container>
          <Reveal className="mb-10">
            <VisualFrame
              slot={brochureVisuals.specializedBanner}
              alt="Structural steel — specialized projects"
              fit="contain"
              aspect="cinema"
              tone="dark"
            />
          </Reveal>

          <Reveal>
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              Specialized projects
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
              Renovation, strengthening &amp; solar
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {portfolioSpecialized.map((block, i) => (
              <Reveal key={block.title} delay={0.04 * i}>
                <article className="border border-line bg-[#fafafa] p-7 md:p-8">
                  <h3 className="font-display text-xl font-extrabold uppercase tracking-tight text-ink">
                    {block.title}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[14px] text-ink-muted">
                        <span className="mt-1.5 size-1.5 shrink-0 rotate-45 bg-x-red" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-[#f7f7f7] py-16 md:py-20">
        <Container>
          <Reveal>
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              Ongoing
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
              Work in the studio now
            </h2>
          </Reveal>
          <div className="mt-10 divide-y divide-line border-y border-line bg-white">
            {portfolioOngoing.map((item, i) => (
              <Reveal key={item.title} delay={0.03 * i}>
                <div className="px-5 py-6 md:px-8 md:py-7">
                  <h3 className="font-display text-sm font-extrabold uppercase tracking-tight text-ink md:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-3xl text-[14px] leading-[1.8] text-ink-muted">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container>
          <Reveal>
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              Our services
            </p>
            <h2 className="mt-2 max-w-2xl font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
              Design solutions in engineering &amp; architecture
            </h2>
            <p className="mt-4 max-w-xl text-[14px] leading-[1.85] text-ink-muted">
              {portfolioServicesNote}
            </p>
          </Reveal>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {portfolioServices.map((item, i) => (
              <Reveal key={item.title} delay={0.04 * i}>
                <Link
                  href={item.href}
                  transitionTypes={["nav-forward"]}
                  className={`group flex h-full flex-col justify-between p-7 transition-colors md:p-8 ${
                    item.tone === "dark"
                      ? "bg-x-red text-white hover:bg-x-red-hover"
                      : "bg-[#f3e8e6] text-ink hover:bg-[#edd9d5]"
                  }`}
                >
                  <div>
                    <h3 className="font-display text-xl font-extrabold uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <p
                      className={`mt-4 text-[14px] leading-[1.8] ${
                        item.tone === "dark" ? "text-white/85" : "text-ink-muted"
                      }`}
                    >
                      {item.body}
                    </p>
                  </div>
                  <span
                    className={`mt-6 inline-flex items-center gap-2 font-display text-[11px] font-bold uppercase tracking-[0.16em] ${
                      item.tone === "dark" ? "text-white" : "text-x-red"
                    }`}
                  >
                    Explore
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-[14px] leading-[1.85] text-ink-muted">
            {portfolioClosing}
          </p>
        </Container>
      </section>

      <section className="border-t border-line bg-[#0d0d0d] py-16 text-white md:py-20">
        <Container>
          <Reveal className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
                Completed work
              </p>
              <h2 className="mt-2 font-display text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
                From the project record
              </h2>
            </div>
            <Link
              href="/projects"
              transitionTypes={["nav-forward"]}
              className="inline-flex items-center gap-2 font-display text-[12px] font-bold uppercase tracking-[0.16em] text-x-red"
            >
              All projects
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {projects.slice(0, 4).map((project, i) => (
              <Reveal key={project.slug} delay={0.03 * i}>
                <Link
                  href={`/projects/${project.slug}`}
                  transitionTypes={["nav-forward"]}
                  className="group block"
                >
                  <VisualFrame
                    slot={project.assets.cover}
                    alt={project.title}
                    fit="contain"
                    aspect="landscape"
                    tone="dark"
                    zoomOnHover
                  />
                  <h3 className="mt-3 font-display text-sm font-extrabold uppercase tracking-tight text-white group-hover:text-x-red">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-[12px] text-white/45">{project.location}</p>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid gap-8 border border-white/10 bg-white/[0.04] p-8 md:grid-cols-2 md:p-10">
            <div>
              <p className="font-display text-[10px] font-extrabold uppercase tracking-[0.22em] text-x-red">
                Stay in touch
              </p>
              <h3 className="mt-2 font-display text-2xl font-extrabold uppercase text-white">
                Receive practice updates
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                Occasional notes when published — no marketing drip.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </Container>
      </section>
    </>
  );
}
