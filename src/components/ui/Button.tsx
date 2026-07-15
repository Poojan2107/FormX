import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

const base =
  "formx-cut-sm formx-edge formx-edge-sm inline-flex items-center justify-center gap-2 rounded-none px-6 py-3.5 text-[13px] font-semibold tracking-[0.04em] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-x-red";

const variants = {
  primary: "bg-x-red text-white hover:bg-x-red-hover",
  secondary: "bg-[#1a1a1a] text-white hover:bg-[#2a2a2a]",
  outline:
    "border border-black/20 bg-transparent text-ink hover:border-x-red hover:text-x-red",
  ghost:
    "bg-transparent text-ink border border-black/15 hover:border-x-red hover:text-x-red",
  "ghost-light":
    "bg-transparent text-white border border-white/35 hover:border-x-red hover:text-x-red",
} as const;

type Variant = keyof typeof variants;

type Common = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type AsButton = Common &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type AsLink = Common &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button({
  children,
  variant = "primary",
  className,
  href,
  ...props
}: AsButton | AsLink) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <a href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
