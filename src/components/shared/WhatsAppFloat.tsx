"use client";

import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { site } from "@/data/site";

function messageForPath(path: string) {
  if (path.startsWith("/services/")) {
    const slug = path.split("/")[2]?.replace(/-/g, " ") || "a service";
    return `Hello FormX — I'm enquiring about ${slug}.`;
  }
  if (path.startsWith("/projects/")) {
    return `Hello FormX — I'd like to discuss a project similar to this case study.`;
  }
  if (path.startsWith("/sectors/")) {
    const slug = path.split("/")[2]?.replace(/-/g, " ") || "this sector";
    return `Hello FormX — I'm planning a facility in ${slug}.`;
  }
  if (path.startsWith("/career")) {
    return `Hello FormX — I'm interested in career opportunities.`;
  }
  if (path.startsWith("/contact") || path === "/") {
    return `Hello FormX — I'd like to discuss a facility project.`;
  }
  return `Hello FormX — I would like to discuss a project.`;
}

export function WhatsAppFloat() {
  const pathname = usePathname() || "/";
  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    messageForPath(pathname),
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-transform hover:scale-[1.03] md:bottom-8 md:right-8"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
