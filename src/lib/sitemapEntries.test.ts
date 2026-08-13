// @vitest-environment node
import { describe, expect, it } from "vitest";
import { eventSitemap, fullSitemap, SITE_URL } from "./sitemapEntries";

const NOW = new Date("2026-08-13T00:00:00.000Z");

describe("eventSitemap", () => {
  it("lists only the homepage", () => {
    const entries = eventSitemap(NOW);
    expect(entries).toEqual([
      {
        url: SITE_URL,
        lastModified: NOW,
        changeFrequency: "weekly",
        priority: 1,
      },
    ]);
  });
});

describe("fullSitemap", () => {
  it("includes core routes, filtered services, projects, and blogs", () => {
    const entries = fullSitemap(
      [
        { slug: "architectural-design" },
        { slug: "mechanical-utility-engineering" },
      ],
      [{ slug: "vapi-g2-industrial" }],
      [{ slug: "sample-insight" }],
      NOW,
    );

    const urls = entries.map((e) => e.url);
    expect(urls).toContain(SITE_URL);
    expect(urls).toContain(`${SITE_URL}/about`);
    expect(urls).toContain(`${SITE_URL}/services/architectural-design`);
    expect(urls).not.toContain(`${SITE_URL}/services/mechanical-utility-engineering`);
    expect(urls).toContain(`${SITE_URL}/projects/vapi-g2-industrial`);
    expect(urls).toContain(`${SITE_URL}/knowledge-center/sample-insight`);
  });
});
