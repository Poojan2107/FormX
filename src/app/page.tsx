import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Stats } from "@/components/home/Stats";
import { Process } from "@/components/home/Process";
import { Services } from "@/components/home/Services";
import { WhyFormx } from "@/components/home/WhyFormx";
import { Projects } from "@/components/home/Projects";
import { Sectors } from "@/components/home/Sectors";
import { Faqs } from "@/components/home/Faqs";
import { Contact } from "@/components/home/Contact";
import { CtaBand } from "@/components/shared/CtaBlocks";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Services />
      <Process />
      <WhyFormx />
      <Projects />
      <Sectors />
      <Faqs />
      <Contact />
      <CtaBand
        title="Ready to brief FORMX on your next facility?"
        description="Architecture, structure, civil, and MEP — coordinated packages from concept to GFC."
        secondary={{ label: "Explore services", href: "/services" }}
      />
    </>
  );
}
