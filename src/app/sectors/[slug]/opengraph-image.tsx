import { ImageResponse } from "next/og";
import { getSector } from "@/data/site";
import { FormXOgCard } from "@/components/og/og-card";

export const alt = "FormX Consultants — Sector";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sector = getSector(slug);

  return new ImageResponse(
    <FormXOgCard
      eyebrow="FormX Sectors"
      title={sector?.title ?? "FormX Sectors"}
      subtitle={
        sector?.summary ??
        "Multidisciplinary design for industrial and infrastructure"
      }
    />,
    { ...size },
  );
}
