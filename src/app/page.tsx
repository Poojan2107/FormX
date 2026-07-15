import { Hero } from "@/components/home/Hero";
import { Ticker } from "@/components/home/Ticker";
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
      <Ticker />
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
        title="Ready to brief FormX on your next plant?"
        description="Architecture, structure, and MEPF — one accountable window from concept to site."
        secondary={{ label: "Explore sectors", href: "/sectors" }}
      />
    </>
  );
}
