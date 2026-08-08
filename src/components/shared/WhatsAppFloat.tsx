"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";
import { isEventMode } from "@/config/siteMode";
import { cn } from "@/lib/cn";

function messageForPath(path: string) {
  if (isEventMode()) {
    return `Hello FormX — I'd like to know more about FormX Consultants.`;
  }
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

export function WhatsAppFloat({ menuOpen = false }: { menuOpen?: boolean }) {
  const pathname = usePathname() || "/";
  const eventMode = isEventMode();
  const [visible, setVisible] = useState(false);
  const isVisible = eventMode || visible;
  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    messageForPath(pathname),
  )}`;
  const lift = !eventMode && hasStickyEnquire(pathname);

  useEffect(() => {
    if (eventMode) return;
    const onScroll = () => setVisible(window.scrollY > 280);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [eventMode]);

  if (menuOpen || !isVisible) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={cn(
        "group fixed right-4 z-50 flex size-12 items-center justify-center rounded-full bg-x-red text-white shadow-[0_12px_32px_rgba(222,48,36,0.5)] transition-all duration-300 hover:scale-110 hover:shadow-[0_16px_40px_rgba(222,48,36,0.65)] md:right-8 md:size-14",
        lift ? "bottom-[5.25rem] md:bottom-8" : "bottom-5 md:bottom-8",
      )}
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      <span aria-hidden className="absolute inset-0 -z-10 animate-ping rounded-full bg-x-red/40 opacity-75" />
      <svg
        viewBox="0 0 24 24"
        className="size-6 text-white transition-transform duration-300 group-hover:scale-110 md:size-7"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}
