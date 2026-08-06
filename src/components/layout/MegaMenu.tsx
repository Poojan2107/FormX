"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  nav,
  serviceNavGroups,
  brochureProjects,
} from "@/data/site";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

type Panel = "Services" | "Projects" | null;

export function DesktopNav() {
  const [panel, setPanel] = useState<Panel>(null);
  const [mounted] = useState(() => typeof document !== "undefined");
  const closeTimer = useRef<number | null>(null);
  const panelId = useId();
  const pathname = usePathname();

  const open = (next: Panel) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setPanel(next);
  };

  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setPanel(null), 140);
  };

  const cancelClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPanel(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    };
  }, []);

  const mega = (
    <AnimatePresence>
      {panel ? (
        <>
          <motion.button
            key={`${panelId}-bg`}
            type="button"
            aria-label="Close menu"
            className="fixed inset-x-0 bottom-0 z-[45] bg-black/25"
            style={{ top: "var(--header-offset, 4.75rem)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPanel(null)}
          />
          <motion.div
            key={`${panelId}-${panel}`}
            role="region"
            aria-label={`${panel} menu`}
            className="fixed inset-x-0 z-[46] border-b border-ink/[0.08] bg-[#fafaf8]"
            style={{ top: "var(--header-offset, 4.75rem)" }}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            <div className="h-[2px] bg-x-red" />
            <Container className="py-8 md:py-9">
              {panel === "Services" ? (
                <ServicesMega onNavigate={() => setPanel(null)} />
              ) : null}
              {panel === "Projects" ? (
                <ProjectsMega onNavigate={() => setPanel(null)} />
              ) : null}
            </Container>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );

  return (
    <>
      <nav
        className="flex max-w-full items-center justify-center gap-0.5"
        aria-label="Primary"
        onMouseLeave={scheduleClose}
        onMouseEnter={cancelClose}
      >
        {nav.map((item) => {
          const expandable =
            item.label === "Services" || item.label === "Projects";
          const panelOpen = panel === item.label;
          const routeActive =
            item.label === "Practice" || item.label === "Insights"
              ? pathname.startsWith("/knowledge-center") ||
                pathname.startsWith("/news")
              : pathname === item.href || pathname.startsWith(item.href + "/");
          const highlighted = panelOpen || routeActive;

          const linkClass = cn(
            "relative inline-flex items-center gap-1.5 px-3 py-2.5 font-label text-[10px] tracking-[0.18em] uppercase transition-colors",
            highlighted ? "text-ink" : "text-ink/55 hover:text-ink",
          );

          return (
            <div key={item.label} className="relative flex items-center">
              {expandable ? (
                <button
                  type="button"
                  className={linkClass}
                  aria-expanded={panelOpen}
                  aria-haspopup="true"
                  aria-current={routeActive ? "page" : undefined}
                  onMouseEnter={() => open(item.label as Panel)}
                  onFocus={() => open(item.label as Panel)}
                  onClick={() => open(panelOpen ? null : (item.label as Panel))}
                >
                  {highlighted ? (
                    <span className="font-display text-[11px] font-black text-x-red" aria-hidden>
                      ×
                    </span>
                  ) : null}
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "size-3 opacity-35 transition-transform duration-200",
                      panelOpen && "rotate-180 text-x-red opacity-100",
                    )}
                  />
                  {highlighted ? (
                    <span
                      aria-hidden
                      className="absolute inset-x-3 bottom-0 h-[2px] bg-x-red"
                    />
                  ) : null}
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={linkClass}
                  aria-current={routeActive ? "page" : undefined}
                  onMouseEnter={() => setPanel(null)}
                >
                  {highlighted ? (
                    <span className="font-display text-[11px] font-black text-x-red" aria-hidden>
                      ×
                    </span>
                  ) : null}
                  {item.label}
                  {highlighted ? (
                    <span
                      aria-hidden
                      className="absolute inset-x-3 bottom-0 h-[2px] bg-x-red"
                    />
                  ) : null}
                </Link>
              )}
            </div>
          );
        })}
      </nav>

      {mounted ? createPortal(mega, document.body) : null}
    </>
  );
}

function ServicesMega({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div>
      <div className="mb-7 flex flex-wrap items-end justify-between gap-4 border-b border-ink/[0.08] pb-5">
        <div>
          <p className="font-label text-[10px] tracking-[0.28em] text-x-red">
            Architecture · Structure · Infrastructure
          </p>
          <p className="mt-2 font-display text-xl font-extrabold tracking-tight text-ink">
            One accountable practice
          </p>
        </div>
        <Link
          href="/services"
          onClick={onNavigate}
          transitionTypes={["nav-forward"]}
          className="group inline-flex items-center gap-2 font-label text-[10px] tracking-[0.18em] text-ink/50 transition-colors hover:text-x-red"
        >
          All services
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-3 md:gap-10">
        {serviceNavGroups.map((group) => (
          <div key={group.title}>
            <p className="flex items-center gap-2 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-x-red">
              <span aria-hidden>×</span>
              {group.title}
            </p>
            <ul className="mt-4 space-y-1 border-t border-ink/[0.08] pt-3">
              {group.items
                .filter((item) => item.href !== "/services")
                .map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      transitionTypes={["nav-forward"]}
                      className="group flex items-center justify-between gap-3 py-2.5 text-[14px] text-ink/70 transition-colors hover:text-ink"
                    >
                      <span>{item.label}</span>
                      <span className="font-display text-x-red opacity-0 transition-opacity group-hover:opacity-100">
                        ×
                      </span>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectsMega({ onNavigate }: { onNavigate: () => void }) {
  const featured = brochureProjects.slice(0, 5);
  return (
    <div>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-ink/[0.08] pb-5">
        <div>
          <p className="font-label text-[10px] tracking-[0.28em] text-x-red">
            Engineering evidence
          </p>
          <p className="mt-2 font-display text-xl font-extrabold tracking-tight text-ink">
            Brochure facilities
          </p>
        </div>
        <Link
          href="/projects"
          onClick={onNavigate}
          transitionTypes={["nav-forward"]}
          className="group inline-flex items-center gap-2 font-label text-[10px] tracking-[0.18em] text-ink/50 transition-colors hover:text-x-red"
        >
          All projects
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      <ul className="divide-y divide-ink/[0.08] border-y border-ink/[0.08]">
        {featured.map((p, i) => (
          <li key={p.slug}>
            <Link
              href={`/projects/${p.slug}`}
              onClick={onNavigate}
              transitionTypes={["nav-forward"]}
              className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-4 py-3.5 transition-colors hover:bg-white/70 md:grid-cols-[3rem_minmax(0,1.2fr)_minmax(0,1fr)_auto] md:gap-6"
            >
              <span className="font-label text-[10px] tracking-[0.16em] text-x-red">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-[15px] font-bold tracking-tight text-ink transition-colors group-hover:text-x-red">
                {p.title}
              </span>
              <span className="hidden text-[13px] text-ink/45 md:block">
                {p.location}
              </span>
              <span className="font-label text-[9px] uppercase tracking-[0.14em] text-ink/35">
                {p.sector.split(" ")[0]}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
