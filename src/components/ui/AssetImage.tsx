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
 * Until then, a content-aware placeholder is shown cleanly.
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
  fit = "cover",
}: {
  src?: string | null;
  alt: string;
  /** e.g. "services/architecture.jpg" under /public/assets/ */
  slot?: string;
  label?: string;
  caption?: string;
  kind?: Kind;
  aspect?: "landscape" | "portrait" | "square" | "wide" | "auto";
  tone?: "light" | "dark";
  className?: string;
  priority?: boolean;
  fit?: "cover" | "contain";
}) {
  const resolved = src ?? (slot ? `/assets/${slot}` : null);
  const [failed, setFailed] = useState(false);

  const aspects: Record<string, string> = {
    landscape: "aspect-[16/10]",
    portrait: "aspect-[4/5]",
    square: "aspect-square",
    wide: "aspect-[21/9]",
    auto: "",
  };

  if (resolved && !failed) {
    return (
      <div
        className={cn(
          "relative overflow-hidden bg-[#111111]",
          aspects[aspect],
          className,
        )}
      >
        <Image
          src={resolved}
          alt={alt}
          fill
          priority={priority}
          unoptimized
          className={cn(
            "transition-transform duration-700 hover:scale-[1.02]",
            fit === "contain" ? "object-contain p-1" : "object-cover object-center",
          )}
          sizes="(max-width: 768px) 100vw, 50vw"
          onError={() => setFailed(true)}
        />
        {label ? (
          <span className="absolute left-3 top-3 border border-white/20 bg-black/85 px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-md">
            {label}
          </span>
        ) : null}
      </div>
    );
  }

  return (
    <PlaceholderMedia
      label={label}
      caption={caption}
      kind={kind === "team" || kind === "client" ? "studio" : kind}
      aspect={aspect === "auto" ? "landscape" : aspect}
      tone={tone}
      className={className}
    />
  );
}
