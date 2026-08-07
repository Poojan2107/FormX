import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

const base =
  "formx-cut-sm inline-flex items-center justify-center gap-2 rounded-none px-6 py-3.5 font-label text-[11px] tracking-[0.18em] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-x-red";

const variants = {
  primary:
    "border-[1.5px] border-x-red bg-x-red text-white shadow-none hover:-translate-y-0.5 hover:bg-white hover:text-x-red hover:shadow-[0_12px_36px_-16px_rgba(224,49,40,0.35)]",
  secondary:
    "border-[1.5px] border-[#0a0a0a] bg-[#0a0a0a] text-white shadow-none hover:-translate-y-0.5 hover:border-x-red hover:bg-white hover:text-x-red hover:shadow-[0_12px_36px_-16px_rgba(224,49,40,0.28)]",
  outline:
    "border-[1.5px] border-black/20 bg-transparent text-ink hover:-translate-y-0.5 hover:border-x-red hover:bg-white hover:text-x-red",
  ghost:
    "border-[1.5px] border-black/15 bg-transparent text-ink hover:-translate-y-0.5 hover:border-x-red hover:bg-white hover:text-x-red",
  "ghost-light":
    "border-[1.5px] border-white/35 bg-transparent text-white hover:-translate-y-0.5 hover:border-x-red hover:bg-white hover:text-x-red",
} as const;

type Variant = keyof typeof variants;

type Common = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  transitionTypes?: string[];
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
    const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement>;
    const isInternal = href.startsWith("/") && !href.startsWith("//");

    if (isInternal) {
      return (
        <Link href={href} className={classes} {...anchorProps}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} className={classes} {...anchorProps}>
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
