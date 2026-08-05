import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { ProjectJourney } from "@/components/home/ProjectJourney";
import { ProofCase } from "@/components/home/ProofCase";
import { Projects } from "@/components/home/Projects";
import { ServiceTypologies } from "@/components/home/ServiceTypologies";
import { PeopleGlimpse } from "@/components/home/PeopleGlimpse";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

/**
 * Authored HQ journey — FormX soul, Hiren constraints.
 * Hero (no photo) → About → Before × Issue → Proof → Work → Practice → Founder → CTA
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

      <section className="fx-grain border-t border-black bg-[#0a0a09] py-24 text-white md:py-32">
        <Container>
          <p className="font-label text-[11px] text-x-red">Next facility</p>
          <h2
            className="mt-5 max-w-[16ch] font-display font-extrabold uppercase leading-[0.92] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
          >
            Brief FORM<span className="text-x-red">×</span>
          </h2>
          <p className="mt-6 measure-studio text-[18px] leading-[1.75] text-white/50">
            Tell us the facility type, the plot, the timeline. We start with what the site will
            fight — not with pretty elevations.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              transitionTypes={["nav-forward"]}
              className="inline-flex items-center justify-center gap-3 bg-x-red px-9 py-4 font-label text-[11px] text-white hover:bg-x-red-hover"
            >
              Talk to the studio
              <ArrowRight className="size-4" />
            </Link>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 border border-white/20 px-7 py-4 font-label text-[11px] text-white/70 hover:border-white hover:text-white"
            >
              <Phone className="size-3.5 text-x-red" />
              {site.phone}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
