import { Hero } from "@/components/home/Hero";
import { WhyWeExist } from "@/components/home/WhyWeExist";
import { ProjectJourney } from "@/components/home/ProjectJourney";
import { EvidenceStrip } from "@/components/home/EvidenceStrip";
import { ProofCase } from "@/components/home/ProofCase";
import { PeopleGlimpse } from "@/components/home/PeopleGlimpse";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formxMethod } from "@/data/method";
import { Container } from "@/components/ui/Container";

/**
 * FORMX identity home — argument, not section parade:
 * Who we are → Why → Before Issue → Evidence → One proof → People → Talk
 */
export default function Home() {
  return (
    <>
      <Hero />
      <WhyWeExist />
      <ProjectJourney />
      <EvidenceStrip />
      <ProofCase />
      <PeopleGlimpse />

      <section className="border-t border-line bg-white py-20 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
              {formxMethod.code}
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
              Let&apos;s read your facility before we issue anything
            </h2>
            <p className="mt-4 text-[15px] leading-[1.85] text-ink-muted">
              {formxMethod.promise} Share facility type, location and timeline — we start with
              constraints and interfaces, not a drawing checklist.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                transitionTypes={["nav-forward"]}
                className="inline-flex items-center gap-3 bg-x-red px-8 py-4 font-display text-[12px] font-bold uppercase tracking-[0.18em] text-white hover:bg-x-red-hover"
              >
                Start the conversation
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/about"
                transitionTypes={["nav-forward"]}
                className="inline-flex items-center gap-2 border border-line px-8 py-4 font-display text-[12px] font-bold uppercase tracking-[0.18em] text-ink hover:border-x-red"
              >
                How Hiren reviews work
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
