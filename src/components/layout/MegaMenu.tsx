"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  nav,
  serviceNavGroups,
  brochureProjects,
  services,
  site,
} from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AssetImage } from "@/components/ui/AssetImage";
import { cn } from "@/lib/cn";

type Panel = "Services" | "Projects" | null;

export function DesktopNav({ onDark = false }: { onDark?: boolean }) {
  const [panel, setPanel] = useState<Panel>(null);
  const [mounted] = useState(() => typeof document !== "undefined");
  const closeTimer = useRef<number | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const panelId = useId();
  const pathname = usePathname();

  const open = (next: Panel) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setPanel(next);
  };

  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setPanel(null), 160);
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
            className="fixed inset-x-0 bottom-0 z-[45] bg-black/30 backdrop-blur-[1px]"
            style={{ top: "var(--header-offset, 4.5rem)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPanel(null)}
          />
          <motion.div
            key={`${panelId}-${panel}`}
            role="region"
            aria-label={`${panel} menu`}
            className="fixed inset-x-0 z-[46] border-b border-line bg-white shadow-[0_28px_70px_rgba(0,0,0,0.12)]"
            style={{
              top: "var(--header-offset, 4.5rem)",
              clipPath:
                "polygon(0 0, 100% 0, 100% calc(100% - 28px), calc(100% - 28px) 100%, 0 100%)",
            }}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            <div className="h-[3px] bg-gradient-to-r from-x-red via-x-red to-transparent" />
            <Container className="py-7 md:py-8">
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
        ref={navRef}
        className="flex max-w-full items-center justify-center"
        aria-label="Primary"
        onMouseLeave={scheduleClose}
        onMouseEnter={cancelClose}
      >
        {nav.map((item) => {
          const expandable =
            item.label === "Services" || item.label === "Projects";
          const panelOpen = panel === item.label;
          const routeActive =
            item.label === "Insights"
              ? pathname.startsWith("/knowledge-center") ||
                pathname.startsWith("/news")
              : pathname === item.href || pathname.startsWith(item.href + "/");
          const highlighted = panelOpen || routeActive;

          return (
            <div key={item.label} className="relative flex items-center">
              {expandable ? (
                <button
                  type="button"
                  className={cn(
                    "relative inline-flex items-center gap-1.5 px-2.5 py-2 font-label text-[10px] tracking-[0.16em] transition-colors lg:px-3",
                    highlighted
                      ? onDark
                        ? "text-white after:absolute after:inset-x-3 after:bottom-0.5 after:h-[2px] after:bg-x-red"
                        : "text-ink after:absolute after:inset-x-3 after:bottom-0.5 after:h-[2px] after:bg-x-red"
                      : onDark
                        ? "text-white/60 hover:text-white"
                        : "text-ink/65 hover:text-ink",
                  )}
                  aria-expanded={panelOpen}
                  aria-haspopup="true"
                  aria-current={routeActive ? "page" : undefined}
                  onMouseEnter={() => open(item.label as Panel)}
                  onFocus={() => open(item.label as Panel)}
                  onClick={() =>
                    open(panelOpen ? null : (item.label as Panel))
                  }
                >
                  {item.label}
                  {routeActive ? (
                    <span
                      aria-hidden
                      className="absolute bottom-0 left-1/2 size-1 -translate-x-1/2 translate-y-[3px] rotate-45 bg-x-red"
                    />
                  ) : null}
                  <ChevronDown
                    className={cn(
                      "size-3 opacity-40 transition-transform duration-200",
                      panelOpen && "rotate-180 text-x-red opacity-100",
                    )}
                  />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "relative inline-flex items-center gap-0.5 px-2.5 py-2 font-label text-[10px] tracking-[0.16em] transition-colors lg:px-3",
                    routeActive
                      ? onDark
                        ? "text-white after:absolute after:inset-x-3 after:bottom-0.5 after:h-[2px] after:bg-x-red"
                        : "text-ink after:absolute after:inset-x-3 after:bottom-0.5 after:h-[2px] after:bg-x-red"
                      : onDark
                        ? "text-white/60 hover:text-white"
                        : "text-ink/65 hover:text-ink",
                  )}
                  aria-current={routeActive ? "page" : undefined}
                  onMouseEnter={() => setPanel(null)}
                >
                  {item.label}
                  {routeActive ? (
                    <span
                      aria-hidden
                      className="absolute bottom-0 left-1/2 size-1 -translate-x-1/2 translate-y-[3px] rotate-45 bg-x-red"
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
  const featured = services[0];
  return (
    <div className="grid items-stretch gap-5 lg:grid-cols-[minmax(0,1fr)_280px]">
      <div className="grid min-w-0 grid-cols-2 gap-x-5 gap-y-5 md:grid-cols-4 md:gap-x-6">
        {serviceNavGroups.map((group) => (
          <div key={group.title} className="min-w-0">
            <p className="mb-2.5 border-b border-line pb-2 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-x-red">
              {group.title}
            </p>
            <ul className="space-y-0.5">
              {group.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    transitionTypes={["nav-forward"]}
                    className="group/link flex items-start justify-between gap-2 py-1.5 text-[13px] leading-snug text-ink/65 transition-colors hover:text-ink"
                  >
                    <span className="min-w-0">{item.label}</span>
                    <span className="mt-0.5 shrink-0 font-display text-x-red opacity-0 transition-opacity group-hover/link:opacity-100">
                      ×
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <aside className="relative min-h-[220px] overflow-hidden bg-[#111] text-white">
        <AssetImage
          alt={featured.title}
          slot={featured.asset}
          kind="service"
          fit="cover"
          tone="dark"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        <div className="relative z-10 flex h-full flex-col justify-end p-5">
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-x-red">
            Single window
          </p>
          <p className="mt-2 font-display text-lg font-bold leading-snug tracking-tight">
            Architecture · Structure · Infrastructure
          </p>
          <p className="mt-2 text-[12px] leading-relaxed text-white/60">
            Coordinated industrial design under one accountable practice.
          </p>
          <Button
            href="/services"
            variant="primary"
            className="mt-4 w-full"
            onClick={onNavigate}
            transitionTypes={["nav-forward"]}
          >
            All services
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </aside>
    </div>
  );
}

function ProjectsMega({ onNavigate }: { onNavigate: () => void }) {
  const featured = brochureProjects.slice(0, 3);
  return (
    <div>
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-x-red">
            Recent work
          </p>
          <p className="mt-1 font-display text-lg font-bold text-ink">
            Featured projects
          </p>
        </div>
        <Link
          href="/projects"
          onClick={onNavigate}
          transitionTypes={["nav-forward"]}
          className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-ink/50 transition-colors hover:text-x-red"
        >
          View all
          <ArrowRight className="size-3.5" />
        </Link>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {featured.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            onClick={onNavigate}
            transitionTypes={["nav-forward"]}
            className="formx-cut-x formx-edge formx-edge-x x-hover-rail group relative flex flex-col overflow-hidden border border-line bg-white transition-all duration-300 hover:border-x-red/35"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[#111]">
              <AssetImage
                alt={p.client}
                slot={p.assets.cover}
                kind="facility"
                fit="cover"
                tone="dark"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <p className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-[0.14em] text-x-red">
                {p.sector}
              </p>
            </div>
            <div className="flex flex-1 flex-col p-3.5">
              <p className="font-display text-[14px] font-bold text-ink transition-colors duration-300 group-hover:text-x-red">
                {p.client}
              </p>
              <p className="mt-1 line-clamp-2 text-[12px] leading-snug text-ink-muted">
                {p.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
