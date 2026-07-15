"use client";

import { useState } from "react";
import Image from "next/image";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { cn } from "@/lib/cn";

type Kind =
  | "facility"
  | "service"
  | "sector"
  | "article"
  | "studio"
  | "generic"
  | "team"
  | "client";

/**
 * Handover-ready media slot.
 * Drop file at /public/assets/{slot} — it loads automatically.
 * Until then, a content-aware placeholder is shown.
 */
export function AssetImage({
  src,
  alt,
  slot,
  label,
  caption,
  kind = "generic",
  aspect = "landscape",
  tone = "dark",
  className,
  priority = false,
}: {
  src?: string | null;
  alt: string;
  /** e.g. "projects/solar-module-cover.jpg" under /public/assets/ */
  slot?: string;
  label?: string;
  caption?: string;
  kind?: Kind;
  aspect?: "landscape" | "portrait" | "square" | "wide";
  tone?: "light" | "dark";
  className?: string;
  priority?: boolean;
}) {
  const resolved = src ?? (slot ? `/assets/${slot}` : null);
  const [failed, setFailed] = useState(false);

  const aspects: Record<string, string> = {
    landscape: "aspect-[16/10]",
    portrait: "aspect-[4/5]",
    square: "aspect-square",
    wide: "aspect-[21/9]",
  };

  if (resolved && !failed) {
    return (
      <div
        className={cn(
          "relative overflow-hidden bg-bg-muted",
          aspects[aspect],
          className,
        )}
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)",
        }}
      >
        <Image
          src={resolved}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          onError={() => setFailed(true)}
        />
        {label ? (
          <span className="absolute left-4 top-4 bg-black/70 px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-white">
            {label}
          </span>
        ) : null}
      </div>
    );
  }

  return (
    <PlaceholderMedia
      label={label}
      caption={caption ?? (slot ? `Drop file → assets/${slot}` : undefined)}
      kind={kind === "team" || kind === "client" ? "studio" : kind}
      aspect={aspect}
      tone={tone}
      className={className}
    />
  );
}
