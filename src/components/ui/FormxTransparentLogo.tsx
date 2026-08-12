"use client";

import { cn } from "@/lib/cn";

export function FormxTransparentLogo({
  className,
  size = "md",
  dark = false,
  align = "left",
}: {
  className?: string;
  size?: "sm" | "md" | "lg" | "hero" | "display";
  dark?: boolean;
  align?: "left" | "center";
}) {
  const textColor = dark ? "text-white" : "text-[#0c0c0c]";
  const subColor = dark ? "text-white font-extrabold" : "text-ink font-extrabold";
  const labelColor = dark ? "text-white/80 font-bold" : "text-ink/80 font-bold";

  const sizeClasses = {
    sm: {
      title: "text-2xl",
      x: "text-2xl",
      sub: "text-[9px] tracking-[0.32em]",
      tag: "text-[7.5px] tracking-[0.26em]",
    },
    md: {
      title: "text-3xl md:text-4xl",
      x: "text-3xl md:text-4xl",
      sub: "text-[10.5px] tracking-[0.34em]",
      tag: "text-[8.5px] tracking-[0.28em]",
    },
    lg: {
      title: "text-3xl sm:text-4xl md:text-5xl",
      x: "text-3xl sm:text-4xl md:text-5xl",
      sub: "text-[11px] sm:text-[12px] tracking-[0.28em] sm:tracking-[0.36em]",
      tag: "text-[8.5px] sm:text-[9.5px] tracking-[0.24em] sm:tracking-[0.3em]",
    },
    hero: {
      title: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
      x: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
      sub: "text-[11px] sm:text-[13px] md:text-[15px] tracking-[0.3em] sm:tracking-[0.4em]",
      tag: "text-[9px] sm:text-[10px] md:text-[11.5px] tracking-[0.24em] sm:tracking-[0.32em]",
    },
    display: {
      title: "text-6xl sm:text-7xl md:text-8xl lg:text-9xl",
      x: "text-6xl sm:text-7xl md:text-8xl lg:text-9xl",
      sub: "text-[14px] sm:text-[18px] md:text-[22px] tracking-[0.35em] sm:tracking-[0.45em]",
      tag: "text-[11px] sm:text-[14px] md:text-[16px] tracking-[0.28em] sm:tracking-[0.36em]",
    },
  }[size];

  return (
    <div
      className={cn(
        "inline-flex flex-col select-none",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {/* Brand wordmark: Form + red X */}
      <div
        className={cn(
          "font-display font-black leading-none tracking-[-0.04em]",
          sizeClasses.title,
        )}
      >
        <span className={textColor}>Form</span>
        <span className={cn("ml-0.5 inline-block font-black text-x-red", sizeClasses.x)}>
          X
        </span>
      </div>

      {/* CONSULTANTS */}
      <div
        className={cn(
          "mt-2.5 font-display font-extrabold uppercase leading-none",
          subColor,
          sizeClasses.sub,
        )}
      >
        CONSULTANTS
      </div>

      {/* DESIGN | ENGINEERING */}
      <div
        className={cn(
          "mt-2 font-label font-bold uppercase leading-none",
          labelColor,
          sizeClasses.tag,
        )}
      >
        DESIGN <span className="text-x-red font-black mx-1.5">|</span> ENGINEERING
      </div>
    </div>
  );
}
