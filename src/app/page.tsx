import { Hero } from "@/components/home/Hero";
import { ClientLogoWall } from "@/components/shared/ClientLogoWall";
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
      <Hero />
      <ClientLogoWall />
      <About />
      <Services />
      <Projects />
      <LeadStrip
        title="Ready to brief FORMX on your next industrial or commercial facility?"
        subtitle="Our engineering leads engage early to optimize structural grids, site zoning, and clash-free MEP corridors."
      />
      <Sectors />
      <Stats />
      <Testimonials />
      <CtaBand
        eyebrow="Start A Project Conversation"
        title="Brief FORMX on your next facility mandate"
        description="Architecture, Structure, Civil & MEP — coordinated GFC packages delivered from concept to construction."
        secondary={{ label: "Explore 10 disciplines", href: "/services" }}
      />
    </>
  );
}
