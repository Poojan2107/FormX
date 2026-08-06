"use client";

import { AssetImage } from "@/components/ui/AssetImage";
import { cn } from "@/lib/cn";

/**
 * Brochure-faithful visual frame — architecture owns the frame.
 * Default: object-contain on a matte so roofs, facades and models are never cropped.
 */
export function VisualFrame({
  slot,
  alt,
  fit = "contain",
  tone = "dark",
  aspect = "landscape",
  className,
  imgClassName,
  priority = false,
  objectPosition = "center",
  sizes,
  zoomOnHover = false,
  caption,
}: {
  slot: string;
  alt: string;
  fit?: "contain" | "cover";
  tone?: "light" | "dark";
  aspect?: "landscape" | "portrait" | "square" | "wide" | "cinema" | "auto";
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  objectPosition?: string;
  sizes?: string;
  zoomOnHover?: boolean;
  caption?: string;
}) {
  const aspects: Record<string, string> = {
    landscape: "aspect-[16/10]",
    portrait: "aspect-[3/4]",
    square: "aspect-square",
    wide: "aspect-[21/9]",
    cinema: "aspect-[2.4/1]",
    auto: "",
  };

  return (
    <figure className={cn("group relative overflow-hidden", className)}>
      <div
        className={cn(
          "relative w-full overflow-hidden",
          tone === "dark" ? "bg-[#0c0c0c]" : "bg-[#f0eeec]",
          aspects[aspect],
        )}
      >
        <AssetImage
          alt={alt}
          slot={slot}
          kind="facility"
          fit={fit}
          aspect="auto"
          tone={tone}
          objectPosition={objectPosition}
          priority={priority}
          sizes={sizes}
          zoomOnHover={zoomOnHover}
          className={cn("absolute inset-0 h-full w-full", imgClassName)}
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 editorial-meta text-ink/40">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
