import { Hero } from "@/components/home/Hero";
import { WhyWeExist } from "@/components/home/WhyWeExist";
import { About } from "@/components/home/About";
import { TrustProof } from "@/components/home/TrustProof";
import { ProjectJourney } from "@/components/home/ProjectJourney";
import { Projects } from "@/components/home/Projects";
import { PortfolioWorkbench } from "@/components/home/PortfolioWorkbench";
import { ServiceTypologies } from "@/components/home/ServiceTypologies";
import { PeopleGlimpse } from "@/components/home/PeopleGlimpse";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

/**
 * V3 homepage narrative:
 * Identity → Why we exist → Practice intro → Trust → How projects move
 * → Evidence → What we take on → Leadership → Conversation
 */
export default function Home() {
  return (
    <>
      <Hero />
      <WhyWeExist />
      <About />
      <TrustProof />
      <ProjectJourney />
      <Projects />
      <PortfolioWorkbench />
      <ServiceTypologies />
      <PeopleGlimpse />

      <section className="border-t border-line bg-white py-20 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              Begin the conversation
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
              Let&apos;s understand your facility before we discuss solutions
            </h2>
            <p className="mt-4 text-[15px] leading-[1.85] text-ink-muted">
              Share facility type, location and timeline. We look at constraints, coordination risk
              and what Architecture, Structure and Infrastructure must resolve together — then we
              talk drawings.
            </p>
            <Link
              href="/contact"
              transitionTypes={["nav-forward"]}
              className="mt-8 inline-flex items-center gap-3 bg-x-red px-8 py-4 font-display text-[12px] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-x-red-hover"
            >
              Talk with the engineering team
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
