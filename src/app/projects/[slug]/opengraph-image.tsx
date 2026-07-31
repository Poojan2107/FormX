import { ImageResponse } from "next/og";
import { getProject } from "@/data/site";
import { FormXOgCard } from "@/components/og/og-card";

export const alt = "FormX Consultants — Project";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  return new ImageResponse(
    <FormXOgCard
      eyebrow={project ? `FormX Projects · ${project.sector}` : "FormX Projects"}
      title={project?.title ?? "FormX Projects"}
      subtitle={
        project
          ? `${project.client} — ${project.location}, ${project.year}`
          : "Construction-ready industrial design"
      }
    />,
    { ...size },
  );
}
