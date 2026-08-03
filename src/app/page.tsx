import { Hero } from "@/components/home/Hero";
import { EngineeringTrustMatrix } from "@/components/home/EngineeringTrustMatrix";
import { ConstructionSequence } from "@/components/home/ConstructionSequence";
import { About } from "@/components/home/About";
import { Services } from "@/components/home/Services";
import { Projects } from "@/components/home/Projects";
import { LeadStrip } from "@/components/shared/LeadStrip";
import { Sectors } from "@/components/home/Sectors";
import { Stats } from "@/components/home/Stats";
import { Testimonials } from "@/components/home/Testimonials";
import { CtaBand } from "@/components/shared/CtaBlocks";

export default function Home() {
  return (
    <>
      {/* 01. Hero — Confident company introduction & ambition */}
      <Hero />

      {/* 02. About FORMX — Practice identity & multidisciplinary ethos */}
      <About />

      {/* 03. Engineering Trust Matrix — Code compliance & single-window accountability */}
      <EngineeringTrustMatrix />

      {/* 04. Featured Projects — Real industrial case studies & proof of execution */}
      <Projects />

      {/* 05. Integrated Practice Areas — Coordinated engineering disciplines */}
      <Services />

      {/* 06. Construction Journey — Methodological execution lifecycle */}
      <ConstructionSequence />

      {/* 07. Sectors Served — Specialized industrial domain expertise */}
      <Sectors />

      {/* 08. Mid-Page Consultative Lead Strip */}
      <LeadStrip
        title="Planning a greenfield plant or commercial asset?"
        subtitle="Our senior practice leads engage early on structural grids, site infrastructure, and clash-free utility corridors."
      />

      {/* 09. Empirical Metrics & Promoter Proof */}
      <Stats />

      {/* 10. Promoter Verification & Testimonials */}
      <Testimonials />

      {/* 11. Consultative CTA */}
      <CtaBand
        eyebrow="Start A Project Conversation"
        title="Let's discuss your industrial facility"
        description="Share your facility type, location, and timeline—our senior engineering leads engage directly from concept through site execution."
        primary={{ label: "Talk to our engineering team", href: "/contact" }}
        secondary={{ label: "Explore practice areas", href: "/services" }}
      />
    </>
  );
}
