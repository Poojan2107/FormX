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
