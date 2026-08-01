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
      {/* 01. Hero — Establish identity, scale & ambition */}
      <Hero />

      {/* 02. Engineering Trust Matrix — Immediate empirical proof (numbers, codes, clients) */}
      <EngineeringTrustMatrix />

      {/* 03. Signature Construction Sequence — 6-stage interactive building engineering lifecycle */}
      <ConstructionSequence />

      {/* 04. About FORMX — Practice identity & multidisciplinary execution */}
      <About />

      {/* 05. Engineering Disciplines — 10 coordinated services interactive explorer */}
      <Services />

      {/* 06. Featured Projects — Real industrial case studies & proof */}
      <Projects />

      {/* 07. Mid-Page Lead Strip — Direct engagement for facility briefing */}
      <LeadStrip
        title="Ready to brief FORMX on your next industrial or commercial facility?"
        subtitle="Our engineering leads engage early to optimize structural grids, site zoning, and clash-free MEP corridors."
      />

      {/* 08. Industries Served — Specialized industrial sector ecosystem */}
      <Sectors />

      {/* 09. Empirical Metrics & Verified Achievements */}
      <Stats />

      {/* 10. Client & Promoter Testimonials */}
      <Testimonials />

      {/* 11. High-Authority Project Consultation CTA */}
      <CtaBand
        eyebrow="Start A Project Conversation"
        title="Brief FORMX on your next facility mandate"
        description="Architecture, Structure, Civil & MEP — coordinated GFC packages delivered from concept to construction."
        secondary={{ label: "Explore 10 disciplines", href: "/services" }}
      />
    </>
  );
}
