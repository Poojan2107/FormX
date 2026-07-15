"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Newspaper, BookOpen } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  nav,
  serviceNavGroups,
  projects,
  sectors,
  site,
} from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type Panel = "Services" | "Projects" | "Sectors" | "Insights" | null;

export function DesktopNav() {
  const [panel, setPanel] = useState<Panel>(null);
  const closeTimer = useRef<number | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const open = (next: Panel) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setPanel(next);
  };

  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setPanel(null), 140);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPanel(null);
    };
    const onClick = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setPanel(null);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    };
  }, []);

  const items = nav.map((item, i) => {
    const expandable =
      item.label === "Services" ||
      item.label === "Projects" ||
      item.label === "Sectors" ||
      item.label === "Insights";
    const active = panel === item.label;

    return (
      <div key={item.label} className="relative flex items-center">
        {i > 0 ? <span className="mx-0.5 h-3 w-px bg-ink/10" aria-hidden /> : null}
        {expandable ? (
          <button
            type="button"
            className={cn(
              "relative inline-flex items-center gap-1 px-3 py-2 font-display text-[12px] font-semibold uppercase tracking-[0.12em] transition-colors",
              active ? "text-ink" : "text-ink/55 hover:text-ink",
            )}
            aria-expanded={active}
            aria-haspopup="true"
            onMouseEnter={() => open(item.label as Panel)}
            onFocus={() => open(item.label as Panel)}
            onClick={() => open(active ? null : (item.label as Panel))}
          >
            <span className="mr-0.5 text-[10px] font-bold text-x-red/70">
              {String(i + 1).padStart(2, "0")}
            </span>
            {item.label}
            <ChevronDown
              className={cn(
                "size-3 opacity-40 transition-transform duration-200",
                active && "rotate-180 text-x-red opacity-100",
              )}
            />
            <span
              className={cn(
                "absolute inset-x-3 bottom-1 h-[2px] origin-left bg-x-red transition-transform duration-300",
                active ? "scale-x-100" : "scale-x-0",
              )}
            />
          </button>
        ) : (
          <Link
            href={item.href}
            className="relative inline-flex items-center gap-1 px-3 py-2 font-display text-[12px] font-semibold uppercase tracking-[0.12em] text-ink/55 transition-colors hover:text-ink"
            onMouseEnter={scheduleClose}
          >
            <span className="mr-0.5 text-[10px] font-bold text-x-red/70">
              {String(i + 1).padStart(2, "0")}
            </span>
            {item.label}
            <span className="absolute inset-x-3 bottom-1 h-[2px] origin-left scale-x-0 bg-x-red transition-transform duration-300 hover:scale-x-100" />
          </Link>
        )}
      </div>
    );
  });

  return (
    <div
      ref={rootRef}
      className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 xl:block"
      onMouseLeave={scheduleClose}
      onMouseEnter={() => {
        if (closeTimer.current) window.clearTimeout(closeTimer.current);
      }}
    >
      <nav className="flex items-center" aria-label="Primary">
        {items}
      </nav>

      <AnimatePresence>
        {panel ? (
          <motion.div
            key={panel}
            className="fixed inset-x-0 z-40 border-b border-line bg-white shadow-[0_24px_60px_rgba(0,0,0,0.1)]"
            style={{ top: "var(--header-offset, 7.5rem)" }}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => {
              if (closeTimer.current) window.clearTimeout(closeTimer.current);
            }}
          >
            {/* Red brand rail */}
            <div className="h-[3px] w-full bg-gradient-to-r from-x-red via-x-red to-transparent" />

            <Container className="py-8">
              {panel === "Services" ? <ServicesMega onNavigate={() => setPanel(null)} /> : null}
              {panel === "Projects" ? <ProjectsMega onNavigate={() => setPanel(null)} /> : null}
              {panel === "Sectors" ? <SectorsMega onNavigate={() => setPanel(null)} /> : null}
              {panel === "Insights" ? <InsightsMega onNavigate={() => setPanel(null)} /> : null}
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Dim backdrop */}
      <AnimatePresence>
        {panel ? (
          <motion.button
            type="button"
            aria-label="Close menu"
            className="fixed inset-x-0 bottom-0 z-30 bg-black/25"
            style={{ top: "var(--header-offset, 7.5rem)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPanel(null)}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function ServicesMega({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_240px]">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {serviceNavGroups.map((group) => (
          <div key={group.title}>
            <p className="mb-3 flex items-center gap-2 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-x-red">
              <span className="h-px w-4 bg-x-red" aria-hidden />
              {group.title}
            </p>
            <ul className="space-y-1">
              {group.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    className="group/link flex items-center justify-between border-b border-transparent py-2 text-[13px] text-ink/65 transition-colors hover:border-line hover:text-ink"
                  >
                    {item.label}
                    <span className="font-display text-x-red opacity-0 transition-opacity group-hover/link:opacity-100">
                      ×
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <aside className="flex flex-col justify-between bg-black p-6 text-white">
        <div>
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-x-red">
            Single window
          </p>
          <p className="mt-3 font-display text-xl font-bold tracking-tight">
            Architecture · Structure · MEPF
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/55">
            Coordinated industrial design under one accountable practice.
          </p>
        </div>
        <Button
          href="/services"
          variant="primary"
          className="mt-6 w-full"
          onClick={onNavigate}
        >
          All services
          <ArrowRight className="size-4" />
        </Button>
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
            className="group border border-line p-4 transition-colors hover:border-x-red/40 hover:bg-black/[0.015]"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-x-red">
              {p.sector}
            </p>
            <p className="mt-2 font-display text-[15px] font-bold text-ink transition-colors group-hover:text-x-red">
              {p.client}
            </p>
            <p className="mt-1 line-clamp-2 text-[13px] leading-snug text-ink-muted">
              {p.title}
            </p>
            <p className="mt-3 text-[11px] text-ink/40">
              {p.location} · {p.year}
            </p>
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
          className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-ink/50 transition-colors hover:text-x-red"
        >
          All sectors
          <ArrowRight className="size-3.5" />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
        {sectors.map((s) => (
          <Link
            key={s.slug}
            href={`/sectors/${s.slug}`}
            onClick={onNavigate}
            className="group flex items-center justify-between border border-line px-3 py-3 text-[13px] font-medium text-ink/70 transition-colors hover:border-black hover:bg-black hover:text-white"
          >
            <span className="pr-2 leading-snug">{s.title}</span>
            <span className="font-display text-x-red opacity-0 transition-opacity group-hover:opacity-100">
              ×
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function InsightsMega({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="grid gap-4 md:grid-cols-[1.2fr_1fr_0.9fr]">
      <Link
        href="/knowledge-center"
        onClick={onNavigate}
        className="group border border-line p-6 transition-colors hover:border-x-red/35"
      >
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
        className="group border border-line p-6 transition-colors hover:border-x-red/35"
      >
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

      <div className="flex flex-col justify-between bg-black p-6 text-white">
        <div>
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-x-red">
            Talk to FormX
          </p>
          <p className="mt-3 font-display text-lg font-bold tracking-tight">
            Brief a senior lead
          </p>
          <p className="mt-2 text-sm text-white/50">{site.phone}</p>
        </div>
        <Button href="/contact" variant="primary" className="mt-6 w-full" onClick={onNavigate}>
          Enquire
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}
