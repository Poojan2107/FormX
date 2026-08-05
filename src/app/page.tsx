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

      <section className="relative overflow-hidden bg-black py-28 text-white md:py-36">
        <div className="pointer-events-none absolute inset-0 fx-grid-dark opacity-25" aria-hidden />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[80vmax] w-[80vmax] -translate-x-1/2 -translate-y-1/2 opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(224,49,40,0.25), transparent 60%)",
          }}
          aria-hidden
        />
        <Container className="relative z-10 text-center">
          <p className="font-label text-[11px] tracking-[0.32em] text-x-red">Begin here</p>
          <h2
            className="mx-auto mt-6 max-w-[14ch] font-display font-black uppercase leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(2.75rem, 8vw, 6rem)" }}
          >
            Bring us your next facility
          </h2>
          <p className="mx-auto mt-8 max-w-[36ch] text-[17px] font-medium leading-[1.75] text-white/50">
            Share the facility type, location and timeline. We begin with constraints — then we
            coordinate, then we issue.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              transitionTypes={["nav-forward"]}
              className="inline-flex items-center justify-center gap-3 bg-x-red px-10 py-4 font-label text-[11px] tracking-[0.2em] text-white hover:bg-x-red-hover"
            >
              Talk to the studio
              <ArrowRight className="size-4" />
            </Link>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 border border-white/25 px-8 py-4 font-label text-[11px] tracking-[0.16em] text-white/70 hover:border-white hover:text-white"
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
