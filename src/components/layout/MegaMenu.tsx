"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  ChevronDown,
  Newspaper,
  BookOpen,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  nav,
  serviceNavGroups,
  projects,
  sectors,
  services,
  site,
} from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AssetImage } from "@/components/ui/AssetImage";
import { cn } from "@/lib/cn";

type Panel = "Services" | "Projects" | "Sectors" | "Insights" | null;

export function DesktopNav() {
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
            style={{ top: "var(--header-offset, 7.5rem)" }}
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
              top: "var(--header-offset, 7.5rem)",
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
              {panel === "Sectors" ? (
                <SectorsMega onNavigate={() => setPanel(null)} />
              ) : null}
              {panel === "Insights" ? (
                <InsightsMega onNavigate={() => setPanel(null)} />
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
        className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center xl:flex"
        aria-label="Primary"
        onMouseLeave={scheduleClose}
        onMouseEnter={cancelClose}
      >
        {nav.map((item, i) => {
          const expandable =
            item.label === "Services" ||
            item.label === "Projects" ||
            item.label === "Sectors" ||
            item.label === "Insights";
          const panelOpen = panel === item.label;
          const routeActive =
            item.label === "Insights"
              ? pathname.startsWith("/knowledge-center") ||
                pathname.startsWith("/news")
              : pathname === item.href || pathname.startsWith(item.href + "/");
          const highlighted = panelOpen || routeActive;

          return (
            <div key={item.label} className="relative flex items-center">
              {i > 0 ? (
                <span className="mx-0.5 h-3 w-px bg-ink/10" aria-hidden />
              ) : null}
              {expandable ? (
                <button
                  type="button"
                  className={cn(
                    "formx-cut-sm relative inline-flex items-center gap-1 px-3 py-2 font-display text-[12px] font-semibold uppercase tracking-[0.12em] transition-colors",
                    highlighted
                      ? "bg-[#fafafa] text-ink shadow-[inset_0_-2px_0_0_var(--x-red)]"
                      : "text-ink/55 hover:bg-[#fafafa] hover:text-ink",
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
                  <span className="mr-0.5 text-[10px] font-bold text-x-red/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.label}
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
                    "relative inline-flex items-center gap-1 px-3 py-2 font-display text-[12px] font-semibold uppercase tracking-[0.12em] transition-colors",
                    routeActive
                      ? "text-ink shadow-[inset_0_-2px_0_0_var(--x-red)]"
                      : "text-ink/55 hover:bg-[#fafafa] hover:text-ink",
                  )}
                  aria-current={routeActive ? "page" : undefined}
                  onMouseEnter={() => setPanel(null)}
                >
                  <span className="mr-0.5 text-[10px] font-bold text-x-red/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.label}
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
            Architecture · Structure · Civil · MEP
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
  const featured = projects.slice(0, 3);
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

function SectorsMega({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div>
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-x-red">
            Industries
          </p>
          <p className="mt-1 font-display text-lg font-bold text-ink">
            Sectors we design for
          </p>
        </div>
        <Link
          href="/sectors"
          onClick={onNavigate}
          transitionTypes={["nav-forward"]}
          className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-ink/50 transition-colors hover:text-x-red"
        >
          All sectors
          <ArrowRight className="size-3.5" />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {sectors.slice(0, 8).map((s, i) => (
          <Link
            key={s.slug}
            href={`/sectors/${s.slug}`}
            onClick={onNavigate}
            transitionTypes={["nav-forward"]}
            className="group relative aspect-[16/10] overflow-hidden bg-[#111]"
          >
            <AssetImage
              alt={s.title}
              slot={s.asset}
              kind="sector"
              fit="cover"
              tone="dark"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <span className="absolute left-2.5 top-2.5 font-display text-[9px] font-bold text-x-red">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="absolute bottom-2.5 left-2.5 right-2.5 font-display text-[12px] font-bold uppercase leading-snug tracking-tight text-white transition-colors group-hover:text-x-red">
              {s.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function InsightsMega({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="grid gap-4 md:grid-cols-[1.15fr_1fr_0.95fr]">
      <Link
        href="/knowledge-center"
        onClick={onNavigate}
        transitionTypes={["nav-forward"]}
        className="formx-cut-x formx-edge formx-edge-x group relative overflow-hidden border border-line p-6 transition-colors hover:border-x-red/40"
      >
        <span className="absolute left-0 top-0 h-full w-[3px] scale-y-0 bg-x-red transition-transform group-hover:scale-y-100" />
        <BookOpen className="size-5 text-x-red" />
        <p className="mt-4 font-display text-xl font-bold text-ink group-hover:text-x-red">
          Knowledge Center
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          Notes on industrial facility planning, utilities, and delivery.
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-semibold text-ink">
          Read articles
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </Link>

      <Link
        href="/news"
        onClick={onNavigate}
        transitionTypes={["nav-forward"]}
        className="formx-cut-x formx-edge formx-edge-x group relative overflow-hidden border border-line p-6 transition-colors hover:border-x-red/40"
      >
        <span className="absolute left-0 top-0 h-full w-[3px] scale-y-0 bg-x-red transition-transform group-hover:scale-y-100" />
        <Newspaper className="size-5 text-x-red" />
        <p className="mt-4 font-display text-xl font-bold text-ink group-hover:text-x-red">
          News
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          Practice updates, openings, and delivery notes.
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-semibold text-ink">
          Latest updates
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </Link>

      <div className="formx-cut-x formx-edge formx-edge-x flex flex-col justify-between bg-[#1a1a1a] p-6 text-white">
        <div>
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-x-red">
            Talk to FormX
          </p>
          <p className="mt-3 font-display text-lg font-bold tracking-tight">
            Brief a senior lead
          </p>
          <p className="mt-2 text-sm text-white/50">{site.phone}</p>
        </div>
        <Button
          href="/contact"
          variant="primary"
          className="mt-6 w-full"
          onClick={onNavigate}
          transitionTypes={["nav-forward"]}
        >
          Enquire
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}
