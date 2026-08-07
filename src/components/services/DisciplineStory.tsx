import type { Service } from "@/data/services";
import { getServiceStory } from "@/data/serviceStories";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

/** Images as evidence frames — not full-bleed lifestyle heroes */
export function DisciplineStory({ service }: { service: Service }) {
  const story = getServiceStory(service);

  return (
    <>
      {/* High-Contrast Interactive Dark "Engineering Judgment" Section */}
      <section className="border-b border-line bg-[#111110] py-20 text-white md:py-28">
        <Container>
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-x-red animate-pulse" />
            <p className="font-label text-[11px] font-bold uppercase tracking-[0.22em] text-x-red">
              [FORMX.METHOD] · ENGINEERING JUDGMENT
            </p>
          </div>

          <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-white md:text-5xl">
            How this discipline thinks
          </h2>

          {/* Interactive Statement CAD Plates — 100% Equal Height */}
          <div className="mt-12 grid items-stretch gap-6 sm:grid-cols-2 lg:gap-8">
            {story.thinking.map((item, i) => (
              <Reveal key={item} delay={0.06 * i} className="h-full">
                <div className="group relative flex h-full min-h-[190px] flex-col justify-between overflow-hidden formx-cut-sm border border-white/10 bg-white/5 p-7 md:p-8 transition-all duration-400 hover:border-x-red/50 hover:bg-white/10 hover:-translate-y-1.5 hover:shadow-2xl">
                  {/* Subtle Geometric CAD Corner Bracket */}
                  <div className="absolute top-0 right-0 size-7 border-t-2 border-r-2 border-x-red/30 transition-colors duration-300 group-hover:border-x-red" />
                  <div className="absolute bottom-0 left-0 size-7 border-b-2 border-l-2 border-white/10 transition-colors duration-300 group-hover:border-white/30" />

                  <div className="flex items-center justify-between">
                    <span className="font-display text-4xl font-black text-x-red transition-all duration-300 group-hover:scale-105 group-hover:text-white md:text-5xl">
                      0{i + 1}
                    </span>
                    <span className="font-label text-[9.5px] font-bold uppercase tracking-[0.18em] text-white/30 group-hover:text-x-red transition-colors">
                      PRINCIPLE 0{i + 1}
                    </span>
                  </div>
                  
                  <p className="mt-4 font-display text-lg font-bold leading-snug text-white/90 group-hover:text-white md:text-xl transition-colors">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Interactive Blueprint Specification Matrix for Deliverables & Artifacts */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="grid items-start gap-10 md:grid-cols-2 lg:gap-14">
            {/* Left: Artifacts */}
            <div className="formx-card formx-cut-sm border border-line bg-surface-muted/30 p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-x-red animate-pulse" />
                <p className="font-label text-[10.5px] font-bold uppercase tracking-[0.22em] text-x-red">
                  [PRODUCED ARTIFACTS & BIM]
                </p>
              </div>

              <h3 className="mt-3 font-display text-2xl font-black text-ink md:text-3xl">
                Artifacts & Models
              </h3>

              <div className="mt-8 space-y-2.5 border-t border-line/80 pt-4">
                {story.artifacts.map((a, idx) => (
                  <div
                    key={a}
                    className="group flex min-h-[58px] items-center justify-between rounded border border-transparent bg-white p-3.5 shadow-sm transition-all duration-300 hover:border-x-red/40 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-3 min-w-0 pr-3">
                      <div className="flex size-6 shrink-0 items-center justify-center rounded bg-x-red/10 text-x-red transition-colors group-hover:bg-x-red group-hover:text-white">
                        <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                      <span className="font-display text-[15px] font-bold text-ink transition-colors group-hover:text-x-red leading-snug">
                        {a}
                      </span>
                    </div>
                    <span className="shrink-0 whitespace-nowrap rounded border border-x-red/20 bg-x-red/5 px-2.5 py-1 font-label text-[10.5px] font-bold text-x-red">
                      0{idx + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: GFC Deliverables */}
            <div className="formx-card formx-cut-sm border border-line bg-surface-muted/30 p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-x-red animate-pulse" />
                <p className="font-label text-[10.5px] font-bold uppercase tracking-[0.22em] text-x-red">
                  [GOOD FOR CONSTRUCTION]
                </p>
              </div>

              <h3 className="mt-3 font-display text-2xl font-black text-ink md:text-3xl">
                Construction Packages
              </h3>

              <div className="mt-8 space-y-2.5 border-t border-line/80 pt-4">
                {service.deliverables.map((d, idx) => (
                  <div
                    key={d}
                    className="group flex min-h-[58px] items-center justify-between rounded border border-transparent bg-white p-3.5 shadow-sm transition-all duration-300 hover:border-x-red/40 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-3 min-w-0 pr-3">
                      <div className="flex size-6 shrink-0 items-center justify-center rounded bg-ink/5 text-ink/40 transition-colors group-hover:bg-x-red group-hover:text-white">
                        <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                      <span className="font-display text-[15px] font-bold text-ink transition-colors group-hover:text-x-red leading-snug">
                        {d}
                      </span>
                    </div>
                    <span className="shrink-0 whitespace-nowrap rounded border border-ink/15 bg-ink/5 px-2.5 py-1 font-label text-[10.5px] font-bold text-ink/70 group-hover:border-x-red/30 group-hover:bg-x-red/10 group-hover:text-x-red transition-colors">
                      GFC-0{idx + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Interactive Workflow Process Pipeline — 100% Equal Height Cards */}
      {service.process && service.process.length ? (
        <section className="border-t border-line bg-surface-muted/50 py-20 md:py-28">
          <Container>
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-x-red" />
              <p className="font-label text-[10.5px] font-bold uppercase tracking-[0.22em] text-x-red">
                [WORKFLOW PROCESS]
              </p>
            </div>
            <h2 className="mt-3 font-display text-3xl font-black text-ink md:text-5xl">
              From Concept to Site Execution
            </h2>

            <div className="mt-12 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {service.process.map((step, idx) => (
                <Reveal key={step} delay={0.05 * idx} className="h-full">
                  <div className="group relative flex h-full min-h-[170px] flex-col justify-between border-t-2 border-x-red/40 bg-white/60 p-5 transition-all duration-300 hover:border-x-red hover:bg-white hover:-translate-y-1 hover:shadow-md">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-3xl font-black text-x-red transition-transform duration-300 group-hover:scale-110">
                        0{idx + 1}
                      </span>
                      <span className="font-label text-[9px] uppercase tracking-[0.14em] text-ink/40 group-hover:text-x-red transition-colors">
                        PHASE 0{idx + 1}
                      </span>
                    </div>
                    <p className="mt-4 font-display text-[15px] font-bold leading-snug text-ink transition-colors group-hover:text-ink">
                      {step}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {/* High-Impact Site Reality & Accountability Banner */}
      <section className="bg-[#111110] py-20 text-white md:py-28">
        <Container className="max-w-4xl">
          <Reveal>
            <div className="group relative border-l-4 border-x-red pl-6 md:pl-10">
              <p className="font-label text-[11px] font-bold uppercase tracking-[0.22em] text-x-red">
                [ACCOUNTABILITY ON SITE]
              </p>
              
              <h2 className="mt-3 font-display text-3xl font-black leading-tight text-white md:text-5xl">
                Coordinated before drawings leave the studio.
              </h2>
              
              <p className="mt-6 text-lg leading-relaxed text-white/80">
                {story.siteReality}
              </p>

              <div className="mt-10">
                <Button href="/contact" variant="primary" className="gap-2 shadow-lg">
                  Discuss your facility with our engineering team
                  <ArrowUpRight className="size-4" />
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
