import type { Service } from "@/data/services";
import { getServiceStory } from "@/data/serviceStories";
import { Container } from "@/components/ui/Container";
import { VisualFrame } from "@/components/ui/VisualFrame";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/** Discipline narrative — open dossier, not service-template tiles */
export function DisciplineStory({ service }: { service: Service }) {
  const story = getServiceStory(service);

  return (
    <>
      <section className="border-b border-ink/[0.08] bg-white py-16 md:py-24">
        <Container className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="formx-cut-lg overflow-hidden border border-ink/[0.08] bg-[#111] p-3">
              <VisualFrame
                slot={service.asset}
                alt={service.title}
                fit="contain"
                aspect="square"
                tone="dark"
              />
            </div>
            <p className="mt-4 font-label text-[10px] tracking-[0.2em] text-ink/35">
              {story.family} · coordinated before issue
            </p>
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-7">
            <p className="eyebrow text-x-red">How this discipline thinks</p>
            <p className="fx-read-wide mt-5 text-[16.5px] text-ink/62">{story.lead}</p>
            <ol className="mt-10 divide-y divide-ink/[0.08] border-y border-ink/[0.08]">
              {story.thinking.map((item, i) => (
                <li
                  key={item}
                  className="grid gap-3 py-6 sm:grid-cols-[3.25rem_1fr] sm:items-start"
                >
                  <span className="font-label text-[10px] tracking-[0.2em] text-x-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-body text-[15px] leading-[1.85] text-ink/70">{item}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-ink/[0.08] bg-[#fafaf8] py-16 md:py-20">
        <Container>
          <div className="mb-10 grid gap-6 border-b border-ink/[0.08] pb-10 lg:grid-cols-2 lg:items-end lg:gap-14">
            <div>
              <p className="eyebrow text-x-red">Issue packages</p>
              <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
                What leaves the studio
              </h2>
            </div>
            <p className="fx-read text-[15px] text-ink/50">
              Artifacts and GFC deliverables — coordinated against Architecture, Structure and
              Infrastructure before release.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="font-label text-[10px] tracking-[0.2em] text-x-red">Artifacts</p>
              <ul className="mt-6 space-y-4">
                {story.artifacts.map((a) => (
                  <li
                    key={a}
                    className="flex items-start gap-3 border-b border-ink/[0.06] pb-4 font-body text-[14.5px] leading-[1.75] text-ink/70 last:border-0"
                  >
                    <span className="mt-0.5 shrink-0 font-display text-sm font-black text-x-red">
                      ×
                    </span>
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="font-label text-[10px] tracking-[0.2em] text-x-red">GFC deliverables</p>
              <ul className="mt-6 space-y-4">
                {service.deliverables.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-3 border-b border-ink/[0.06] pb-4 font-body text-[14.5px] leading-[1.75] text-ink/70 last:border-0"
                  >
                    <span className="mt-0.5 shrink-0 font-display text-sm font-black text-x-red">
                      ×
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="grid gap-8 border-y border-ink/[0.08] py-10 md:grid-cols-[1.2fr_0.8fr] md:items-end md:gap-14 md:py-12">
            <div>
              <p className="eyebrow text-x-red">On site</p>
              <p className="fx-read-wide mt-4 text-[16px] text-ink/62">{story.siteReality}</p>
              <p className="fx-read-wide mt-5 text-[15px] text-ink/48">{service.summary}</p>
            </div>
            <Link
              href="/contact"
              transitionTypes={["nav-forward"]}
              className="fx-btn-primary group inline-flex w-fit"
            >
              Discuss this discipline
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
