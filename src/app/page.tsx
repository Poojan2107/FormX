import { Hero } from "@/components/home/Hero";
import { ClientsRibbon } from "@/components/home/ClientsRibbon";
import { About } from "@/components/home/About";
import { Services } from "@/components/home/Services";
import { Projects } from "@/components/home/Projects";
import { Sectors } from "@/components/home/Sectors";
import { Stats } from "@/components/home/Stats";
import { Testimonials } from "@/components/home/Testimonials";
import { CtaBand } from "@/components/shared/CtaBlocks";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientsRibbon />
      <About />
      <Services />
      <Projects />
      <Sectors />
      <Stats />
      <Testimonials />
      <CtaBand
        title="Ready to brief FORMX on your next facility?"
        description="Architecture, Structure, Civil &amp; MEP — coordinated packages from concept to GFC."
        secondary={{ label: "Explore services", href: "/services" }}
      />
    </>
  );
}
