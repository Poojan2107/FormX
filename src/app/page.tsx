import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { ProjectJourney } from "@/components/home/ProjectJourney";
import { ProofCase } from "@/components/home/ProofCase";
import { Projects } from "@/components/home/Projects";
import { ServiceTypologies } from "@/components/home/ServiceTypologies";
import { PeopleGlimpse } from "@/components/home/PeopleGlimpse";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { formxMethod, site } from "@/data/site";
import { Container } from "@/components/ui/Container";

/**
 * Craft Pass 2 — compressed HQ journey
 * Hero → About(+numbers) → Before × Issue → Proof → Projects → Services → People → CTA
 */
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProjectJourney />
      <ProofCase />
      <Projects />
      <ServiceTypologies />
      <PeopleGlimpse />

      <section className="border-t border-line bg-[#0a0a0a] py-20 text-white md:py-24">
        <Container>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red">
                {formxMethod.code}
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
                Brief FORM<span className="text-x-red">×</span> on your next facility
              </h2>
              <p className="mt-4 measure-tight text-[15px] leading-[1.85] text-white/55">
                Share facility type, location and timeline. Architecture, Structure and
                Infrastructure — we start with constraints before drawings.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 border border-white/25 px-7 py-4 font-display text-[12px] font-bold uppercase tracking-[0.16em] text-white hover:border-white"
              >
                <Phone className="size-3.5 text-x-red" />
                {site.phone}
              </a>
              <Link
                href="/contact"
                transitionTypes={["nav-forward"]}
                className="inline-flex items-center justify-center gap-3 bg-x-red px-8 py-4 font-display text-[12px] font-bold uppercase tracking-[0.18em] text-white hover:bg-x-red-hover"
              >
                Talk to our team
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
