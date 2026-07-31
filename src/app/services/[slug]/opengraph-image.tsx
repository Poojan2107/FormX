import { ImageResponse } from "next/og";
import { getService } from "@/data/site";
import { FormXOgCard } from "@/components/og/og-card";

export const alt = "FormX Consultants — Service";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  return new ImageResponse(
    <FormXOgCard
      eyebrow="FormX Services"
      title={service?.title ?? "FormX Services"}
      subtitle={
        service?.short ?? "Precise, coordinated, construction-ready design"
      }
    />,
    { ...size },
  );
}
