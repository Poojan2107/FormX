"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  nav,
  serviceNavGroups,
  brochureProjects,
  services,
} from "@/data/site";
import { Container } from "@/components/ui/Container";
import { AssetImage } from "@/components/ui/AssetImage";
import { cn } from "@/lib/cn";

type Panel = "Services" | "Projects" | null;

const emptySubscribe = () => () => {};

export function DesktopNav({ onDark = false }: { onDark?: boolean }) {
  const [panel, setPanel] = useState<Panel>(null);
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
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
            className="fixed inset-x-0 bottom-0 top-[4.5rem] sm:top-[5.25rem] z-[998] bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPanel(null)}
          />
          <motion.div
            key={`${panelId}-${panel}`}
            role="region"
            aria-label={`${panel} menu`}
            className="fixed inset-x-0 top-[4.5rem] sm:top-[5.25rem] z-[999] border-b border-line bg-white text-ink shadow-[0_24px_80px_rgba(0,0,0,0.12)]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            <div className="h-[2px] w-full bg-gradient-to-r from-x-red via-x-red to-transparent" />
            <div className="pointer-events-none absolute inset-0 pattern-grid opacity-20" aria-hidden />
            
            <Container className="relative z-10 py-4 md:py-5">
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
    <div className="grid items-stretch gap-5 lg:grid-cols-12">
      {/* 3 Structured Practice Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-8">
        {serviceNavGroups.map((group, idx) => (
          <div
            key={group.title}
            className="formx-cut-sm flex flex-col justify-between border border-line/80 bg-surface-muted/50 p-4 transition-all hover:border-x-red/30 hover:bg-surface-muted"
          >
            <div>
              <div className="mb-3 flex items-center justify-between border-b border-line/60 pb-2">
                <div className="flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-x-red" />
                  <p className="font-display text-[11px] font-black uppercase tracking-[0.18em] text-x-red">
                    {group.title}
                  </p>
                </div>
                <span className="font-label text-[9px] font-bold text-ink/35">
                  0{idx + 1}
                </span>
              </div>

              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      transitionTypes={["nav-forward"]}
                      className="group flex items-center justify-between rounded px-2 py-1.5 text-[13px] font-semibold text-ink/80 transition-all hover:bg-white hover:text-x-red"
                    >
                      <span className="leading-snug">{item.label}</span>
                      <ArrowUpRight className="size-3.5 shrink-0 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Feature Card with 100% Fully Visible Unobstructed Image */}
      <aside className="lg:col-span-4">
        <Link
          href="/services"
          onClick={onNavigate}
          transitionTypes={["nav-forward"]}
          className="formx-cut-sm group relative flex flex-col overflow-hidden border border-line bg-white shadow-sm transition-all duration-300 hover:shadow-md"
        >
          {/* Top: 100% Fully Visible Image Box */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-muted">
            <AssetImage
              alt={featured.title}
              slot={featured.asset}
              kind="service"
              fit="cover"
              tone="light"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          {/* Bottom: Clean White Content Area Below Image */}
          <div className="flex flex-col p-4 bg-white border-t border-line/60">
            <span className="font-label text-[9.5px] font-bold uppercase tracking-[0.2em] text-x-red">
              Single Window Execution
            </span>
            <p className="mt-1 font-display text-[15px] font-bold leading-snug text-ink transition-colors group-hover:text-x-red">
              Architecture · Structure · Infrastructure
            </p>
            <p className="mt-1 text-[12px] leading-relaxed text-ink/65">
              Coordinated engineering judgment held through issue.
            </p>
            <div className="mt-3 flex items-center gap-1.5 font-label text-[10px] font-bold uppercase tracking-[0.16em] text-x-red">
              <span>View All Services</span>
              <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </Link>
      </aside>
    </div>
  );
}

function ProjectsMega({ onNavigate }: { onNavigate: () => void }) {
  const featured = brochureProjects.slice(0, 3);
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-end justify-between gap-4 border-b border-line pb-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-x-red" />
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-x-red">
              Recent Work
            </p>
          </div>
          <p className="mt-1 font-display text-2xl font-black text-ink tracking-tight">
            Featured Facilities
          </p>
        </div>
        <Link
          href="/projects"
          onClick={onNavigate}
          transitionTypes={["nav-forward"]}
          className="formx-cut-sm flex items-center gap-2 border border-line bg-surface-muted px-4 py-2 text-[12px] font-bold text-ink/75 transition-all hover:border-x-red hover:bg-x-red hover:text-white"
        >
          View all projects
          <ArrowRight className="size-3.5" />
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {featured.map((p, idx) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            onClick={onNavigate}
            transitionTypes={["nav-forward"]}
            className="formx-card formx-cut-sm group relative flex flex-col overflow-hidden border border-line bg-white shadow-sm transition-all duration-400 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-surface-muted">
              <AssetImage
                alt={p.client}
                slot={p.assets.cover}
                kind="facility"
                fit="cover"
                tone="dark"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              
              <div className="absolute left-3 top-3 flex items-center gap-1.5 border border-white/20 bg-black/50 backdrop-blur-md px-2.5 py-1 text-[9.5px] font-bold uppercase tracking-[0.16em] text-white">
                <span className="text-x-red">0{idx + 1}</span>
                <span>{p.sector}</span>
              </div>

              <div className="absolute right-3 top-3 flex size-8 items-center justify-center border border-white/20 bg-white/90 text-ink opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bg-x-red group-hover:text-white">
                <ArrowUpRight className="size-3.5" />
              </div>
            </div>

            <div className="flex flex-1 flex-col p-5 bg-white">
              <p className="font-display text-[15px] font-bold text-ink transition-colors duration-300 group-hover:text-x-red">
                {p.client}
              </p>
              <p className="mt-1.5 text-[12.5px] leading-snug text-ink/65">
                {p.title}
              </p>
              <div className="mt-4 flex items-center gap-1.5 font-label text-[10px] font-bold uppercase tracking-[0.16em] text-x-red">
                <span>View Case Study</span>
                <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
