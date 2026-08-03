import type { MetadataRoute } from "next";
import { projects, services, blogs, news } from "@/data/site";

const BASE_URL = "https://formxconsultants.com";

const PRIMARY_SERVICE_SLUGS = [
  "architectural-design",
  "sustainable-design",
  "structural-engineering",
  "civil-engineering",
  "site-infrastructure",
  "project-management",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/services",
    "/projects",
    "/clients",
    "/knowledge-center",
    "/career",
    "/contact",
    "/vendor-registration",
    "/estimator",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services
    .filter((s) => PRIMARY_SERVICE_SLUGS.includes(s.slug))
    .map((s) => ({
      url: `${BASE_URL}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE_URL}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogs.map((b) => ({
    url: `${BASE_URL}/knowledge-center/${b.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const newsRoutes: MetadataRoute.Sitemap = news.map((n) => ({
    url: `${BASE_URL}/news/${n.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...blogRoutes, ...newsRoutes];
}
