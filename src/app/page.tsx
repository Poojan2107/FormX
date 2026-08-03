import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { TrustProof } from "@/components/home/TrustProof";
import { HowWeThink } from "@/components/home/HowWeThink";
import { ServiceTypologies } from "@/components/home/ServiceTypologies";
import { ConstructionSequence } from "@/components/home/ConstructionSequence";
import { PortfolioWorkbench } from "@/components/home/PortfolioWorkbench";
import { Projects } from "@/components/home/Projects";
import { PeopleGlimpse } from "@/components/home/PeopleGlimpse";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TrustProof />
      <HowWeThink />
      <ServiceTypologies />
      <ConstructionSequence />
      <PortfolioWorkbench />
      <Projects />
      <PeopleGlimpse />

      <section className="border-t border-line bg-white py-20 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              Project discussion
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
              Planning a facility?
            </h2>
            <p className="mt-4 text-[15px] leading-[1.85] text-ink-muted">
              Share facility type, location and timeline. Senior engineering leads engage early on
              structural grids, site infrastructure and utility corridors.
            </p>
            <Link
              href="/contact"
              transitionTypes={["nav-forward"]}
              className="mt-8 inline-flex items-center gap-3 bg-x-red px-8 py-4 font-display text-[12px] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-x-red-hover"
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
