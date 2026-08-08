/**
 * Event showcase one-pager vs full multi-page site.
 *
 * AFTER THE FOUNDER EVENT: set SITE_MODE to "full" to restore nav, routes,
 * sitemap, and the original homepage. No page files were deleted.
 */
export const SITE_MODE: "event" | "full" = "event";

export function isEventMode(): boolean {
  return SITE_MODE === "event";
}
