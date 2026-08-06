import { ImageResponse } from "next/og";
import { getNews } from "@/data/site";
import { FormXOgCard } from "@/components/og/og-card";

export const alt = "FormX Consultants — News";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getNews(slug);

  return new ImageResponse(
    <FormXOgCard
      eyebrow={item ? `FormX News · ${item.date}` : "FormX News"}
      title={item?.title ?? "FormX News"}
      subtitle={item?.excerpt ?? "News from FormX Consultants"}
    />,
    { ...size },
  );
}
