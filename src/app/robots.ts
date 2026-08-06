import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/estimator",
          "/news",
          "/news/",
          "/sectors",
          "/sectors/",
          "/vendor-registration",
        ],
      },
    ],
    sitemap: "https://formxconsultants.com/sitemap.xml",
  };
}
