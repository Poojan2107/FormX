import type { MetadataRoute } from "next";
import { isEventMode } from "@/config/siteMode";
import { eventSitemap, fullSitemap } from "@/lib/sitemapEntries";

/**
 * Event mode must not import brochure/project data — that module throws if a
 * featured slug is missing, which 500s /sitemap.xml while the one-pager still
 * renders. Full-site URLs are loaded only when SITE_MODE is "full".
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (isEventMode()) return eventSitemap();

  const { brochureProjects, services, blogs } = await import("@/data/site");
  return fullSitemap(services, brochureProjects, blogs);
}
