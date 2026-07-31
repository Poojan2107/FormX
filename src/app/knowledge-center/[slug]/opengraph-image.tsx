import { ImageResponse } from "next/og";
import { getBlog } from "@/data/site";
import { FormXOgCard } from "@/components/og/og-card";

export const alt = "FormX Consultants — Knowledge Center";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlog(slug);

  return new ImageResponse(
    <FormXOgCard
      eyebrow="Knowledge Center"
      title={post?.title ?? "Knowledge Center"}
      subtitle={
        post?.excerpt ?? "Insights from FormX Consultants"
      }
    />,
    { ...size },
  );
}
