"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

/** Sticky enquire strip for offering / case pages — VMS conversion micro-pattern */
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
        "fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 backdrop-blur-md transition-transform duration-300 md:hidden",
        show ? "translate-y-0" : "translate-y-full",
      )}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <p className="text-[13px] font-semibold text-ink">{label}</p>
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 bg-x-red px-4 py-2.5 text-[12px] font-bold uppercase tracking-[0.12em] text-white"
        >
          Enquire
          <ArrowRight className="size-3.5" />
        </Link>
      </div>
    </div>
  );
}
