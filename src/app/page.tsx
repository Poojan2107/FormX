import { EventLanding } from "@/components/event/EventLanding";
import { BrochureHero } from "@/components/home/BrochureHero";
import { BrochureAbout } from "@/components/home/BrochureAbout";
import { BrochurePillars } from "@/components/home/BrochurePillars";
import { BrochureServices } from "@/components/home/BrochureServices";
import { BrochureProjects } from "@/components/home/BrochureProjects";
import { BrochureSpecialized } from "@/components/home/BrochureSpecialized";
import { BrochureUpcoming } from "@/components/home/BrochureUpcoming";
import { BrochurePartners } from "@/components/home/BrochurePartners";
import { BrochureContact } from "@/components/home/BrochureContact";
import { isEventMode } from "@/config/siteMode";

/**
 * Homepage = FORMX.pdf spine (full site)
 * OR event one-pager when SITE_MODE = "event"
 */
export default function Home() {
  if (isEventMode()) {
    return <EventLanding />;
  }

  return (
    <>
      <BrochureHero />
      <BrochureAbout />
      <BrochurePillars />
      <BrochureServices />
      <BrochureProjects />
      <BrochureSpecialized />
      <BrochureUpcoming />
      <BrochurePartners />
      <BrochureContact />
    </>
  );
}
