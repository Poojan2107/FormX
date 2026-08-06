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
          <p className="eyebrow text-x-red">Services</p>
          <h1
            className="editorial-title mt-5 max-w-[12ch] text-ink"
            style={{ fontSize: "clamp(2.75rem, 7vw, 5rem)" }}
          >
            Three disciplines, resolved as one facility.
          </h1>
          <p className="editorial-deck mt-8 measure-essay">
            FormX does not treat Architecture, Structure, and Infrastructure as parallel silos.
            They are coordinated against the same reality before anything is issued.
          </p>
          <p className="editorial-body mt-4 measure-essay">
            {portfolioServicesNote}
          </p>
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
                  className="fx-service-row group grid gap-4 py-10 md:grid-cols-12 md:items-baseline md:gap-8 md:py-12"
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
                    <ArrowUpRight className="size-5 text-ink/20 group-hover:text-x-red" />
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
          <div className="mt-14 grid gap-12 lg:grid-cols-3">
            {groups.map((g) => (
              <div key={g.title}>
                <h3 className="font-display text-xl font-extrabold tracking-tight text-ink">
                  {g.title}
                </h3>
                <ul className="mt-6 space-y-4">
                  {g.slugs.map((slug) => {
                    const svc = services.find((s) => s.slug === slug);
                    if (!svc) return null;
                    const story = getServiceStory(svc);
                    return (
                      <li key={slug}>
                        <Link
                          href={`/services/${slug}`}
                          transitionTypes={["nav-forward"]}
                          className="group block border-t border-line pt-4 first:border-t-0 first:pt-0"
                        >
                          <span className="font-display text-base font-bold tracking-tight text-ink group-hover:text-x-red">
                            {svc.title}
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
