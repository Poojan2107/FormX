import { EventHero } from "@/components/event/EventHero";
import { EventAbout } from "@/components/event/EventAbout";
import { EventStats } from "@/components/event/EventStats";
import { EventWhatWeDo } from "@/components/event/EventWhatWeDo";
import { EventMission } from "@/components/event/EventMission";
import { EventPartners } from "@/components/event/EventPartners";
import { EventCta } from "@/components/event/EventCta";
import "./event-motion.css";

/**
 * Founder-event one-pager (CURRENT PLAN WEBISTE.pptx).
 * No project showcase. Logo + icons only. Restore via SITE_MODE = "full".
 */
export function EventLanding() {
  return (
    <>
      <EventHero />
      <EventAbout />
      <EventStats />
      <EventWhatWeDo />
      <EventMission />
      <EventPartners />
      <EventCta />
    </>
  );
}
