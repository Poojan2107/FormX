import { Hero } from "@/components/home/Hero";
import { Ticker } from "@/components/home/Ticker";
import { About } from "@/components/home/About";
import { Stats } from "@/components/home/Stats";
import { Process } from "@/components/home/Process";
import { Services } from "@/components/home/Services";
import { WhyFormx } from "@/components/home/WhyFormx";
import { Philosophy } from "@/components/home/Philosophy";
import { Projects } from "@/components/home/Projects";
import { Clients } from "@/components/home/Clients";
import { Sectors } from "@/components/home/Sectors";
import { Testimonials } from "@/components/home/Testimonials";
import { Faqs } from "@/components/home/Faqs";
import { Contact } from "@/components/home/Contact";
import { Resources } from "@/components/home/Resources";
import { BrochureCta, CtaBand } from "@/components/shared/CtaBlocks";
import { Container } from "@/components/ui/Container";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <About />
      <Stats />
      <Process />
      <Services />
      <WhyFormx />
      <Philosophy />
      <section className="bg-white pb-16">
        <Container>
          <BrochureCta />
        </Container>
      </section>
      <Projects />
      <Clients />
      <Sectors />
      <Testimonials />
      <Faqs />
      <Contact />
      <Resources />
      <CtaBand
        title="Ready to brief FormX on your next plant?"
        description="Architecture, structure, and MEPF — one accountable window from concept to site."
        secondary={{ label: "Explore sectors", href: "/sectors" }}
      />
    </>
  );
}
