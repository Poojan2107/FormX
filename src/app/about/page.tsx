import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutProofStrip } from "@/components/about/AboutProofStrip";
import { HumanValuesPanel } from "@/components/about/HumanValuesPanel";
import {
  AboutFounder,
  AboutSectorExperience,
  AboutClose,
} from "@/components/about/AboutFounder";
import { BrochureCta } from "@/components/shared/CtaBlocks";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About FORM× Consultants, Ahmedabad — Founder Hiren J. Shah. Architecture, Structure and Infrastructure coordinated Before × Issue.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutProofStrip />
      <HumanValuesPanel />
      <AboutFounder />
      <AboutSectorExperience />
      <AboutClose brochure={<BrochureCta />} />
    </>
  );
}
