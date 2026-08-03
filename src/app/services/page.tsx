import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/site";
import { getServiceStory } from "@/data/serviceStories";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Engineering Disciplines | FORMX Consultants",
  description:
    "Architecture, structure, civil, MEP, fire and delivery—coordinated as construction-ready packages under one accountable practice.",
};

const groups = [
  {
    title: "Architecture & Planning",
    slugs: ["architectural-design", "site-infrastructure", "sustainable-design"],
  },
  {
    title: "Structure & Civil",
    slugs: ["structural-engineering", "civil-engineering"],
  },
  {
    title: "MEP & Fire",
    slugs: [
      "mechanical-utility-engineering",
      "hvac-engineering",
      "electrical-engineering",
      "fire-protection-engineering",
    ],
  },
  {
    title: "Delivery",
    slugs: ["project-management"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line bg-white pt-24 pb-16 md:pt-32 md:pb-20">
        <Container>
          <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
            Practice disciplines
          </p>
          <h1
            className="mt-4 max-w-3xl font-display font-black uppercase leading-[1.05] tracking-tight text-ink"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
          >
            How FORMX engineers a facility
          </h1>
          <p className="mt-6 max-w-2xl text-[16px] leading-[1.9] text-ink-muted">
            Ten disciplines—each with its own engineering language—coordinated into one
            construction-ready package. Architecture does not read like structure. Fire does not
            read like electrical.
          </p>
        </Container>
      </section>

      {groups.map((group) => (
        <section key={group.title} className="border-b border-line py-14 md:py-16">
          <Container>
            <Reveal>
              <h2 className="font-display text-xl font-extrabold uppercase tracking-tight text-ink md:text-2xl">
                {group.title}
              </h2>
            </Reveal>
            <div className="mt-8 divide-y divide-line">
              {group.slugs.map((slug) => {
                const service = services.find((s) => s.slug === slug);
                if (!service) return null;
                const story = getServiceStory(service);
                return (
                  <Reveal key={slug}>
                    <Link
                      href={`/services/${slug}`}
                      transitionTypes={["nav-forward"]}
                      className="group grid gap-3 py-6 transition-colors hover:bg-[#fafafa] md:grid-cols-12 md:gap-6 md:py-8"
                    >
                      <div className="md:col-span-4">
                        <h3 className="font-display text-lg font-extrabold uppercase text-ink group-hover:text-x-red">
                          {service.title}
                        </h3>
                        <p className="mt-1 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-ink/35">
                          {story.motif}
                        </p>
                      </div>
                      <p className="text-[14px] leading-[1.8] text-ink-muted md:col-span-7">
                        {story.lead}
                      </p>
                      <div className="flex items-start justify-end md:col-span-1">
                        <ArrowUpRight className="size-5 text-x-red opacity-60 transition-opacity group-hover:opacity-100" />
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>
      ))}

      <section className="bg-[#0d0d0d] py-16 text-white">
        <Container>
          <p className="max-w-xl text-[15px] leading-[1.85] text-white/65">
            Need a coordinated multidisciplinary package? Brief our leads on facility type,
            location and timeline.
          </p>
          <Link
            href="/contact"
            transitionTypes={["nav-forward"]}
            className="mt-6 inline-flex bg-x-red px-7 py-3.5 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-white"
          >
            Discuss project scope
          </Link>
        </Container>
      </section>
    </>
  );
}
