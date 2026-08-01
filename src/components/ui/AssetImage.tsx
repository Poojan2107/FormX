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

export function AssetImage({
  src,
  alt,
  slot,
  label,
  caption,
  kind = "generic",
  aspect = "landscape",
  tone = "light",
  className,
  priority = false,
  fit = "cover",
  objectPosition = "center",
  sizes = "(max-width: 768px) 100vw, (max-width: 1280px) 70vw, 1200px",
  zoomOnHover = false,
}: {
  src?: string | null;
  alt: string;
  slot?: string;
  label?: string;
  caption?: string;
  kind?: Kind;
  aspect?: "landscape" | "portrait" | "square" | "wide" | "auto";
  tone?: "light" | "dark";
  className?: string;
  priority?: boolean;
  fit?: "cover" | "contain";
  objectPosition?: string;
  sizes?: string;
  zoomOnHover?: boolean;
}) {
  const resolved = src ?? (slot ? `/assets/${slot}` : null);
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const aspects: Record<string, string> = {
    landscape: "aspect-[16/10]",
    portrait: "aspect-[4/5]",
    square: "aspect-square",
    wide: "aspect-[21/9]",
    auto: "",
  };

  // Fill parents (absolute inset-0) must not also force an aspect box — that crops/blurs.
  const isFill =
    typeof className === "string" &&
    className.includes("absolute") &&
    className.includes("inset-0");

  if (resolved && !failed) {
    return (
      <div
        className={cn(
          "relative overflow-hidden",
          !isFill && "h-full w-full",
          tone === "dark" ? "bg-[#111111]" : "bg-white",
          !isFill && aspects[aspect],
          className,
        )}
      >
        {!loaded ? (
          <div
            aria-hidden
            className="x-shimmer absolute inset-0"
            style={{
              background:
                tone === "dark"
                  ? "linear-gradient(100deg,#151515 40%,#262626 50%,#151515 60%)"
                  : "linear-gradient(100deg,#f0f0f0 40%,#fafafa 50%,#f0f0f0 60%)",
              backgroundSize: "200% 100%",
            }}
          />
        ) : null}
        <Image
          src={resolved}
          alt={alt}
          fill
          priority={priority}
          unoptimized
          onLoad={() => setLoaded(true)}
          sizes={sizes}
          className={cn(
            "h-full w-full transition-opacity duration-500",
            fit === "contain" ? "object-contain" : "object-cover",
            zoomOnHover &&
              "transition-[opacity,transform] duration-700 ease-out group-hover:scale-[1.03]",
            loaded ? "opacity-100" : "opacity-0",
          )}
          style={{ objectPosition }}
          onError={() => setFailed(true)}
        />
        {label ? (
          <span className="absolute left-3 top-3 z-10 border border-white/20 bg-black/80 px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-white">
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
