import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  services,
  portfolioServices,
  portfolioServicesNote,
  portfolioClosing,
} from "@/data/site";
import { getServiceStory } from "@/data/serviceStories";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Services | Architecture · Structure · Infrastructure",
  description:
    "High-rise & residential, industrial, institutional & commercial, strengthening & retrofitting — Architecture, Structure and Infrastructure.",
};

const groups = [
  {
    title: "Architecture",
    slugs: ["architectural-design", "sustainable-design"],
  },
  {
    title: "Structure",
    slugs: ["structural-engineering", "civil-engineering"],
  },
  {
    title: "Infrastructure",
    slugs: ["site-infrastructure", "project-management"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="fx-grain border-b border-line bg-white pt-28 pb-20 md:pt-36 md:pb-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-14">
            <div>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-x-red" />
                <p className="font-label text-[10.5px] font-bold uppercase tracking-[0.22em] text-x-red">
                  [FORMX.SERVICES] · PRACTICE SCOPE
                </p>
              </div>
              <h1
                className="mt-4 font-display font-black leading-[0.98] tracking-tight text-ink"
                style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.2rem)" }}
              >
                Three disciplines, resolved as one facility.
              </h1>
            </div>
            <div className="border-l-2 border-x-red/60 pl-5">
              <p className="editorial-deck text-ink-muted">
                FormX does not treat Architecture, Structure, and Infrastructure as parallel silos.
                They are coordinated against the same reality before anything is issued.
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-ink/60">{portfolioServicesNote}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-surface-muted/50 py-16 md:py-24">
        <Container>
          <div className="divide-y divide-line border-y border-line bg-white shadow-sm">
            {portfolioServices.map((item, i) => (
              <Reveal key={item.title} delay={0.04 * i}>
                <Link
                  href={item.href}
                  transitionTypes={["nav-forward"]}
                  className="fx-service-row group grid gap-4 px-6 py-10 transition-all hover:bg-surface-muted/40 md:grid-cols-12 md:items-baseline md:gap-8 md:px-8 md:py-12"
                >
                  <span className="font-label text-[11px] font-bold text-x-red md:col-span-1">
                    0{i + 1}
                  </span>
                  <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink transition-colors group-hover:text-x-red md:col-span-4 md:text-3xl">
                    {item.title}
                  </h2>
                  <p className="text-[15.5px] leading-[1.85] text-ink-muted md:col-span-6">
                    {item.body}
                  </p>
                  <span className="hidden justify-end md:col-span-1 md:flex">
                    <div className="flex size-9 items-center justify-center border border-line bg-surface-muted text-ink transition-all group-hover:border-x-red group-hover:bg-x-red group-hover:text-white">
                      <ArrowUpRight className="size-4" />
                    </div>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-[14.5px] leading-[1.8] text-ink/60">{portfolioClosing}</p>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-x-red" />
            <p className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-x-red">
              [FORMX.DISCIPLINES]
            </p>
          </div>
          <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-ink md:text-4xl">
            Architecture · Structure · Infrastructure
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-6">
            {groups.map((g, groupIdx) => (
              <div
                key={g.title}
                className="formx-card formx-cut-sm flex flex-col justify-between border border-line bg-surface-muted/50 p-6 md:p-7 shadow-sm transition-all hover:border-x-red/30 hover:bg-white"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between border-b border-line/60 pb-3">
                    <h3 className="font-display text-xl font-bold tracking-tight text-ink">
                      {g.title}
                    </h3>
                    <span className="font-label text-[9.5px] font-bold text-x-red">0{groupIdx + 1}</span>
                  </div>

                  <ul className="space-y-2">
                    {g.slugs.map((slug) => {
                      const svc = services.find((s) => s.slug === slug);
                      if (!svc) return null;
                      const story = getServiceStory(svc);
                      return (
                        <li key={slug}>
                          <Link
                            href={`/services/${slug}`}
                            transitionTypes={["nav-forward"]}
                            className="group block border border-line/60 bg-white p-4 rounded-md transition-all hover:border-x-red/40 hover:shadow-sm"
                          >
                            <span className="flex items-center justify-between gap-3">
                              <span className="font-display text-base font-bold tracking-tight text-ink transition-colors group-hover:text-x-red">
                                {svc.title}
                              </span>
                              <ArrowUpRight className="size-4 shrink-0 text-ink/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-x-red" />
                            </span>
                            {story?.lead ? (
                              <span className="mt-2 block text-[13px] leading-[1.7] text-ink/60 line-clamp-2">
                                {story.lead}
                              </span>
                            ) : null}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
