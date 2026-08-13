import type { MetadataRoute } from "next";

export const SITE_URL = "https://formxconsultants.com";

const PRIMARY_SERVICE_SLUGS = [
  "architectural-design",
  "sustainable-design",
  "structural-engineering",
  "civil-engineering",
  "site-infrastructure",
  "project-management",
];

type SlugItem = { slug: string };

export function eventSitemap(now = new Date()): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}

export function fullSitemap(
  services: SlugItem[],
  projects: SlugItem[],
  blogs: SlugItem[],
  now = new Date(),
): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/services",
    "/projects",
    "/clients",
    "/knowledge-center",
    "/career",
    "/contact",
    "/terms",
    "/privacy",
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services
    .filter((s) => PRIMARY_SERVICE_SLUGS.includes(s.slug))
    .map((s) => ({
      url: `${SITE_URL}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${SITE_URL}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogs.map((b) => ({
    url: `${SITE_URL}/knowledge-center/${b.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...blogRoutes];
}
