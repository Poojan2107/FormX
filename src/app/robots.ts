import type { MetadataRoute } from "next";
import { isEventMode } from "@/config/siteMode";

export default function robots(): MetadataRoute.Robots {
  if (isEventMode()) {
    return {
      rules: [
        {
          userAgent: "*",
          allow: "/",
          disallow: [
            "/api/",
            "/about",
            "/services",
            "/projects",
            "/clients",
            "/knowledge-center",
            "/career",
            "/contact",
            "/terms",
            "/privacy",
            "/estimator",
            "/sectors",
            "/news",
            "/vendor-registration",
          ],
        },
      ],
      sitemap: "https://formxconsultants.com/sitemap.xml",
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/estimator"],
      },
    ],
    sitemap: "https://formxconsultants.com/sitemap.xml",
  };
}
