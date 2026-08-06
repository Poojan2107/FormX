"use client";

import { cn } from "@/lib/cn";

export function FormxTransparentLogo({
  className,
  size = "md",
  dark = false,
}: {
  className?: string;
  size?: "sm" | "md" | "lg" | "hero";
  dark?: boolean;
}) {
  const textColor = dark ? "text-white" : "text-[#0d0d0d]";
  const subColor = dark ? "text-white/60" : "text-ink/60";
  const labelColor = dark ? "text-white/40" : "text-ink/40";

  const sizeClasses = {
    sm: {
      title: "text-2xl",
      x: "text-2xl",
      sub: "text-[9px] tracking-[0.28em]",
      tag: "text-[7.5px] tracking-[0.24em]",
    },
    md: {
      title: "text-3xl md:text-4xl",
      x: "text-3xl md:text-4xl",
      sub: "text-[10px] tracking-[0.32em]",
      tag: "text-[8.5px] tracking-[0.26em]",
    },
    lg: {
      title: "text-4xl md:text-5xl",
      x: "text-4xl md:text-5xl",
      sub: "text-[11px] tracking-[0.35em]",
      tag: "text-[9.5px] tracking-[0.28em]",
    },
    hero: {
      title: "text-5xl md:text-6xl lg:text-7xl",
      x: "text-5xl md:text-6xl lg:text-7xl",
      sub: "text-[12px] md:text-[14px] tracking-[0.38em]",
      tag: "text-[9.5px] md:text-[11px] tracking-[0.3em]",
    },
  }[size];

  return (
    <div className={cn("inline-flex flex-col items-start select-none", className)}>
      {/* Brand wordmark: Form + X */}
      <div className={cn("font-display font-black leading-none tracking-[-0.04em]", textColor, sizeClasses.title)}>
        Form<span className={cn("text-x-red inline-block font-black", sizeClasses.x)}>X</span>
      </div>

      {/* CONSULTANTS */}
      <div
        className={cn(
          "mt-2 font-display font-extrabold uppercase leading-none tracking-[0.36em]",
          subColor,
          sizeClasses.sub,
        )}
      >
        CONSULTANTS
      </div>

      {/* DESIGN | ENGINEERING */}
      <div
        className={cn(
          "mt-1.5 font-label font-bold uppercase leading-none tracking-[0.28em]",
          labelColor,
          sizeClasses.tag,
        )}
      >
        DESIGN <span className="text-x-red/70 mx-1">|</span> ENGINEERING
      </div>
    </div>
  );
}
