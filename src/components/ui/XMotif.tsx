"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

/** Hairline divider broken by a red × — FormX drafting stamp */
export function XRule({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("in-view");
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("x-rule", className)}
      data-tone={tone}
      aria-hidden
    >
      <span className="x-rule__glyph">×</span>
    </div>
  );
}

/** Red × glyph for lists / inline stamps */
export function XMark({ className }: { className?: string }) {
  return (
    <span className={cn("x-mark", className)} aria-hidden>
      ×
    </span>
  );
}

/** Section eyebrow with red rail + optional × */
export function SectionMark({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-display text-[11px] font-extrabold uppercase tracking-[0.26em] text-x-red",
        className,
      )}
    >
      <span className="inline-block h-px w-7 bg-x-red" aria-hidden />
      {children}
    </p>
  );
}

/** FormX signature cut-edge X logo emblem */
export function FormxLogoCutX({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center select-none text-x-red",
        className,
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        className="size-full text-x-red drop-shadow-[0_0_10px_rgba(224,49,40,0.5)]"
      >
        <polygon points="4,2 10,2 16,11 22,2 28,2 19,16 28,30 22,30 16,21 10,30 4,30 13,16" />
      </svg>
    </span>
  );
}
