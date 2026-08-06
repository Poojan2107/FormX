"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

/** Mobile conversion bar — dark studio strip, not frosted SaaS chrome */
export function StickyEnquire({
  label = "Discuss this with FormX",
  href = "/contact",
}: {
  label?: string;
  href?: string;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#0a0a09] transition-transform duration-300 md:hidden",
        show ? "translate-y-0" : "translate-y-full",
      )}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-center justify-between gap-4 px-4 py-3.5">
        <p className="min-w-0 flex-1 truncate font-label text-[10px] tracking-[0.14em] text-white/55">
          {label}
        </p>
        <Link
          href={href}
          transitionTypes={["nav-forward"]}
          className="inline-flex shrink-0 items-center gap-1.5 bg-x-red px-4 py-2.5 font-label text-[10px] tracking-[0.16em] text-white transition-colors hover:bg-x-red-hover"
        >
          Discuss
          <ArrowRight className="size-3.5" />
        </Link>
      </div>
    </div>
  );
}
