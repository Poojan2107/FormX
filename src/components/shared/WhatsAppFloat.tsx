"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

function messageForPath(path: string) {
  if (path.startsWith("/services/")) {
    const slug = path.split("/")[2]?.replace(/-/g, " ") || "a service";
    return `Hello FormX — I'm enquiring about ${slug}.`;
  }
  if (path.startsWith("/projects/")) {
    return `Hello FormX — I'd like to discuss a project similar to this case study.`;
  }
  if (path.startsWith("/career")) {
    return `Hello FormX — I'm interested in career opportunities.`;
  }
  if (path.startsWith("/contact") || path === "/") {
    return `Hello FormX — I'd like to discuss a facility project.`;
  }
  return `Hello FormX — I would like to discuss a project.`;
}

function hasStickyEnquire(path: string) {
  return /^\/(services|projects)\/[^/]+/.test(path);
}

/** Post-scroll WhatsApp — red circular, quiet shadow (founder rule) */
export function WhatsAppFloat({ menuOpen = false }: { menuOpen?: boolean }) {
  const pathname = usePathname() || "/";
  const [visible, setVisible] = useState(false);
  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    messageForPath(pathname),
  )}`;
  const lift = hasStickyEnquire(pathname);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 280);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (menuOpen || !visible) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={cn(
        "fixed right-4 z-50 flex size-11 items-center justify-center rounded-full bg-x-red text-white transition-opacity hover:opacity-90 md:right-7 md:size-12",
        "shadow-[0_8px_24px_rgba(0,0,0,0.28)]",
        lift ? "bottom-[4.75rem] md:bottom-7" : "bottom-5 md:bottom-7",
      )}
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      <span className="font-display text-[13px] font-black leading-none tracking-tight md:text-sm">
        F<span className="text-white/85">×</span>
      </span>
    </a>
  );
}
