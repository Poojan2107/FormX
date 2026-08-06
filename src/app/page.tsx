import { BrochureHero } from "@/components/home/BrochureHero";
import { BrochureAbout } from "@/components/home/BrochureAbout";
import { BrochurePillars } from "@/components/home/BrochurePillars";
import { BrochureBeforeIssue } from "@/components/home/BrochureBeforeIssue";
import { BrochureServices } from "@/components/home/BrochureServices";
import { BrochureProjects } from "@/components/home/BrochureProjects";
import { BrochureSpecialized } from "@/components/home/BrochureSpecialized";
import { BrochureUpcoming } from "@/components/home/BrochureUpcoming";
import { BrochurePartners } from "@/components/home/BrochurePartners";
import { BrochureContact } from "@/components/home/BrochureContact";

/**
 * Homepage = FORMX.pdf spine + Before × Issue signature stop
 * Hero → About → Pillars → Before × Issue → Services → Projects → Specialised → Upcoming → Partners → Contact/FAQ
 */
export default function Home() {
  return (
    <>
      <BrochureHero />
      <BrochureAbout />
      <BrochurePillars />
      <BrochureBeforeIssue />
      <BrochureServices />
      <BrochureProjects />
      <BrochureSpecialized />
      <BrochureUpcoming />
      <BrochurePartners />
      <BrochureContact />
    </>
  );
}
