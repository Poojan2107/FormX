"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { AssetImage } from "@/components/ui/AssetImage";
import { cn } from "@/lib/cn";

export function BeforeAfterSlider({
  beforeSlot,
  afterSlot,
  beforeLabel = "Design / GFC intent",
  afterLabel = "Built facility",
  alt = "FormX Engineering Comparison",
  className,
}: {
  beforeSlot: string;
  afterSlot: string;
  beforeLabel?: string;
  afterLabel?: string;
  alt?: string;
  className?: string;
}) {
  const [sliderPosition, setSliderPosition] = useState(42);
  const [isDragging, setIsDragging] = useState(false);
  const [hinted, setHinted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const reduce = useReducedMotion();

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.min(100, Math.max(0, (x / rect.width) * 100));

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setSliderPosition(pct);
    });
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setHinted(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setHinted(true);
      setSliderPosition((p) => Math.max(0, p - 4));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setHinted(true);
      setSliderPosition((p) => Math.min(100, p + 4));
    } else if (e.key === "Home") {
      e.preventDefault();
      setSliderPosition(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setSliderPosition(100);
    }
  };

  // Subtle intro sweep so visitors discover the interaction
  useEffect(() => {
    if (reduce || hinted) return;
    let cancelled = false;
    const timers: number[] = [];
    timers.push(
      window.setTimeout(() => {
        if (cancelled) return;
        setSliderPosition(58);
      }, 600),
    );
    timers.push(
      window.setTimeout(() => {
        if (cancelled) return;
        setSliderPosition(38);
      }, 1200),
    );
    timers.push(
      window.setTimeout(() => {
        if (cancelled) return;
        setSliderPosition(48);
        setHinted(true);
      }, 1800),
    );
    return () => {
      cancelled = true;
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [reduce, hinted]);

  return (
    <div
      ref={containerRef}
      role="slider"
      tabIndex={0}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(sliderPosition)}
      aria-label="Drag to compare design intent and completed facility"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onKeyDown={onKeyDown}
      className={cn(
        "group relative aspect-[16/9] w-full cursor-ew-resize touch-none select-none overflow-hidden bg-[#0c0c0c] outline-none focus-visible:ring-2 focus-visible:ring-x-red focus-visible:ring-offset-2 [&_img]:transform-none [&_img]:transition-none",
        className,
      )}
    >
      {/* After — completed facility (full frame) */}
      <div className="pointer-events-none absolute inset-0">
        <AssetImage
          alt={`${alt} — ${afterLabel}`}
          slot={afterSlot}
          kind="facility"
          aspect="landscape"
          fit="cover"
          priority
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black/35 to-transparent" />
        <span className="absolute right-4 top-4 z-10 bg-black/75 px-3 py-1.5 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
          {afterLabel}
        </span>
      </div>

      {/* Before — design / GFC (clipped) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          transition: isDragging || reduce ? undefined : "clip-path 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <AssetImage
          alt={`${alt} — ${beforeLabel}`}
          slot={beforeSlot}
          kind="facility"
          aspect="landscape"
          fit="cover"
          className="absolute inset-0 h-full w-full object-cover brightness-[0.92] contrast-110"
        />
        <div className="absolute inset-0 bg-[#0c0c0c]/15 mix-blend-multiply" />
        <span className="absolute left-4 top-4 z-10 bg-x-red px-3 py-1.5 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-white">
          {beforeLabel}
        </span>
      </div>

      {/* Divider + handle */}
      <div
        className="pointer-events-none absolute inset-y-0 z-20"
        style={{
          left: `${sliderPosition}%`,
          transition: isDragging || reduce ? undefined : "left 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <div className="absolute inset-y-0 -left-px w-0.5 bg-x-red shadow-[0_0_18px_rgba(222,48,36,0.85)]" />
        <motion.div
          className="absolute top-1/2 -left-6 flex size-12 -translate-y-1/2 items-center justify-center border border-x-red/70 bg-[#0c0c0c] text-x-red shadow-[0_8px_28px_rgba(0,0,0,0.5)]"
          animate={isDragging ? { scale: 1.08 } : { scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
        >
          <span className="font-display text-2xl font-black leading-none" aria-hidden>
            ×
          </span>
        </motion.div>
      </div>

      <p className="pointer-events-none absolute bottom-4 left-1/2 z-10 -translate-x-1/2 bg-black/60 px-3 py-1 font-display text-[9px] font-bold uppercase tracking-[0.18em] text-white/70 backdrop-blur-sm opacity-100 transition-opacity group-hover:opacity-0 md:opacity-90">
        Drag to compare · ← → keys
      </p>
    </div>
  );
}
