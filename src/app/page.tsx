import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { TrustProof } from "@/components/home/TrustProof";
import { ProjectJourney } from "@/components/home/ProjectJourney";
import { ProofCase } from "@/components/home/ProofCase";
import { Projects } from "@/components/home/Projects";
import { ServiceTypologies } from "@/components/home/ServiceTypologies";
import { PeopleGlimpse } from "@/components/home/PeopleGlimpse";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formxMethod } from "@/data/method";
import { Container } from "@/components/ui/Container";

/**
 * Founder home order:
 * Hero (no photos) → About (VMS) → Stats (Jacobs)
 * → Before Issue → One proof case → All brochure projects
 * → Four service columns → People → CTA
 */
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TrustProof />
      <ProjectJourney />
      <ProofCase />
      <Projects />
      <ServiceTypologies />
      <PeopleGlimpse />

      <section className="border-t border-line bg-white py-20 md:py-24">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
                {formxMethod.code}
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
                Planning a facility?
              </h2>
              <p className="mt-4 text-[15px] leading-[1.85] text-ink-muted">
                Share facility type, location and timeline. Architecture, Structure and
                Infrastructure — we start with constraints before drawings.
              </p>
            </div>
            <Link
              href="/contact"
              transitionTypes={["nav-forward"]}
              className="inline-flex shrink-0 items-center gap-3 bg-x-red px-8 py-4 font-display text-[12px] font-bold uppercase tracking-[0.18em] text-white hover:bg-x-red-hover"
            >
              Talk to our engineering team
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
