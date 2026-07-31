"use client";

import { useState, useRef, useCallback } from "react";
import { AssetImage } from "@/components/ui/AssetImage";

export function BeforeAfterSlider({
  beforeSlot,
  afterSlot,
  beforeLabel = "Structural GFC Model / CAD",
  afterLabel = "Finished Completed Facility",
  alt = "FormX Engineering Comparison",
}: {
  beforeSlot: string;
  afterSlot: string;
  beforeLabel?: string;
  afterLabel?: string;
  alt?: string;
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.min(100, Math.max(0, (x / rect.width) * 100));
    setSliderPosition(pct);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/10] w-full overflow-hidden border border-line bg-[#0d0d0d] select-none cursor-ew-resize group"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={(e) => isDragging && handleMove(e.clientX)}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={(e) => isDragging && handleMove(e.touches[0].clientX)}
    >
      {/* After Image (Right Side / Full Backdrop) */}
      <div className="absolute inset-0 h-full w-full">
        <AssetImage
          alt={`${alt} — ${afterLabel}`}
          slot={afterSlot}
          kind="facility"
          aspect="landscape"
          fit="cover"
          className="h-full w-full object-cover"
        />
        <span className="absolute right-4 top-4 border border-black/40 bg-black/75 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
          {afterLabel}
        </span>
      </div>

      {/* Before Image (Left Side / Clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <AssetImage
          alt={`${alt} — ${beforeLabel}`}
          slot={beforeSlot}
          kind="facility"
          aspect="landscape"
          fit="cover"
          className="absolute inset-0 h-full w-full object-cover grayscale brightness-90 contrast-125"
        />
        <span className="absolute left-4 top-4 border border-x-red/40 bg-x-red px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-md">
          {beforeLabel}
        </span>
      </div>

      {/* Divider Bar & Drag Handle */}
      <div
        className="absolute top-0 bottom-0 z-20 w-0.5 bg-x-red shadow-[0_0_12px_rgba(222,48,36,0.8)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -left-5 flex size-10 -translate-y-1/2 items-center justify-center border border-x-red/60 bg-[#0d0d0d] text-x-red shadow-[0_6px_20px_rgba(0,0,0,0.45)] transition-transform duration-200 group-hover:scale-110">
          <span className="font-display text-xl font-black leading-none" aria-hidden>
            ×
          </span>
        </div>
      </div>
    </div>
  );
}
