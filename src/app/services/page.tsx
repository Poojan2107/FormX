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
      <section className="fx-grain border-b border-line bg-bg pt-28 pb-20 md:pt-36 md:pb-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-14">
            <div>
              <p className="eyebrow text-x-red">Services</p>
              <h1
                className="editorial-title mt-5 max-w-[18ch] text-ink"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
              >
                Three disciplines, resolved as one facility.
              </h1>
            </div>
            <div>
              <p className="editorial-deck measure-essay">
                FormX does not treat Architecture, Structure, and Infrastructure as parallel silos.
                They are coordinated against the same reality before anything is issued.
              </p>
              <p className="editorial-body mt-4 measure-essay">{portfolioServicesNote}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-bg section-y">
        <Container>
          <div className="divide-y divide-line border-y border-line">
            {portfolioServices.map((item, i) => (
              <Reveal key={item.title} delay={0.04 * i}>
                <Link
                  href={item.href}
                  transitionTypes={["nav-forward"]}
                  className="fx-service-row group grid gap-4 px-4 py-10 md:grid-cols-12 md:items-baseline md:gap-8 md:px-5 md:py-12"
                >
                  <span className="editorial-meta text-x-red md:col-span-1">
                    0{i + 1}
                  </span>
                  <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink transition-colors group-hover:text-x-red md:col-span-4 md:text-3xl">
                    {item.title}
                  </h2>
                  <p className="text-[16px] leading-[1.85] text-ink-muted md:col-span-6">
                    {item.body}
                  </p>
                  <span className="hidden justify-end md:col-span-1 md:flex">
                    <ArrowUpRight className="size-5 text-ink/20 transition-colors group-hover:text-x-red" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-[15px] leading-[1.8] text-ink/50">{portfolioClosing}</p>
        </Container>
      </section>

      <section className="bg-bg-muted section-y">
        <Container>
          <p className="eyebrow text-x-red">Disciplines</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            Architecture · Structure · Infrastructure
          </h2>
          <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-5">
            {groups.map((g) => (
              <div
                key={g.title}
                className="border border-line bg-white p-6 md:p-7"
              >
                <h3 className="font-display text-xl font-extrabold tracking-tight text-ink">
                  {g.title}
                </h3>
                <ul className="mt-6 space-y-1">
                  {g.slugs.map((slug) => {
                    const svc = services.find((s) => s.slug === slug);
                    if (!svc) return null;
                    const story = getServiceStory(svc);
                    return (
                      <li key={slug}>
                        <Link
                          href={`/services/${slug}`}
                          transitionTypes={["nav-forward"]}
                          className="group block border-t border-line px-3 py-4 transition-colors first:border-t-0 hover:bg-[#faf9f5]"
                        >
                          <span className="flex items-center justify-between gap-3">
                            <span className="font-display text-base font-bold tracking-tight text-ink transition-colors group-hover:text-x-red">
                              {svc.title}
                            </span>
                            <ArrowUpRight className="size-3.5 shrink-0 text-ink/20 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-x-red" />
                          </span>
                          {story?.lead ? (
                            <span className="mt-1.5 block text-[13px] leading-[1.7] text-ink/50 line-clamp-2">
                              {story.lead}
                            </span>
                          ) : null}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
