import type { Service } from "@/data/services";
import { getServiceStory } from "@/data/serviceStories";
import { Container } from "@/components/ui/Container";
import { VisualFrame } from "@/components/ui/VisualFrame";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/** Discipline narrative — FormX issue language, not service-template tiles */
export function DisciplineStory({ service }: { service: Service }) {
  const story = getServiceStory(service);

  return (
    <>
      <section className="border-b border-line bg-white py-16 md:py-24">
        <Container className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
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
            <p className="mt-4 font-label text-[10px] tracking-[0.2em] text-ink/40">
              {story.family} · coordinated before issue
            </p>
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-7">
            <p className="eyebrow text-x-red">How this discipline thinks</p>
            <p className="mt-4 max-w-xl text-[16.5px] leading-[1.9] text-ink/62">{story.lead}</p>
            <ol className="mt-10 divide-y divide-ink/[0.08] border-y border-ink/[0.08]">
              {story.thinking.map((item, i) => (
                <li
                  key={item}
                  className="grid gap-3 py-5 sm:grid-cols-[3.25rem_1fr] sm:items-start"
                >
                  <span className="font-label text-[10px] tracking-[0.2em] text-x-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15px] font-medium leading-[1.8] text-ink">{item}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-line bg-[#f7f6f2] py-16 md:py-20">
        <Container>
          <div className="mb-10 grid gap-4 lg:grid-cols-2 lg:items-end lg:gap-12">
            <div>
              <p className="eyebrow text-x-red">Issue packages</p>
              <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
                What leaves the studio
              </h2>
            </div>
            <p className="text-[15px] leading-[1.85] text-ink/55">
              Artifacts and GFC deliverables for this discipline — coordinated against Architecture,
              Structure, and Infrastructure before release.
            </p>
          </div>
          <div className="grid items-stretch gap-5 md:grid-cols-2">
            <Reveal className="h-full">
              <div className="formx-cut flex h-full flex-col border border-ink/[0.08] bg-white p-7 md:p-8">
                <p className="eyebrow text-x-red">Artifacts</p>
                <ul className="mt-6 flex flex-1 flex-col gap-3.5">
                  {story.artifacts.map((a) => (
                    <li key={a} className="flex items-start gap-3 text-[14.5px] leading-[1.7] text-ink">
                      <span className="mt-1.5 size-1.5 shrink-0 rotate-45 bg-x-red" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.06} className="h-full">
              <div className="formx-cut flex h-full flex-col border border-ink/[0.08] bg-white p-7 md:p-8">
                <p className="eyebrow text-x-red">GFC deliverables</p>
                <ul className="mt-6 flex flex-1 flex-col gap-3.5">
                  {service.deliverables.map((d) => (
                    <li
                      key={d}
                      className="border-l-2 border-x-red/50 pl-4 text-[14.5px] leading-[1.75] text-ink/65"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="grid gap-10 border border-ink/[0.08] bg-[#fafaf8] p-8 md:grid-cols-[1.2fr_0.8fr] md:items-end md:p-10 lg:p-12">
            <div>
              <p className="eyebrow text-x-red">On site</p>
              <p className="mt-4 max-w-2xl text-[16px] leading-[1.9] text-ink/62">
                {story.siteReality}
              </p>
              <p className="mt-5 max-w-2xl text-[15px] leading-[1.9] text-ink/50">
                {service.summary}
              </p>
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
