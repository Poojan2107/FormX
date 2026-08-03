import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FormX Consultants — Design | Engineering",
    short_name: "FormX",
    description:
      "Precise, coordinated, construction-ready architecture, structure and infrastructure design.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#de3024",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
