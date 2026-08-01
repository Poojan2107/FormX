"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowUpRight, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, serviceNavGroups, site } from "@/data/site";
import { DesktopNav } from "@/components/layout/MegaMenu";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";

const MenuOpenCtx = createContext(false);
export function useMenuOpen() {
  return useContext(MenuOpenCtx);
}

export function MobileChrome({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <MenuOpenCtx.Provider value={open}>
      <SiteHeader open={open} setOpen={setOpen} />
      {children}
    </MenuOpenCtx.Provider>
  );
}

function SiteHeader({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean | ((p: boolean) => boolean)) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 transition-all duration-300">
        {/* Dynamic Glassmorphic Navigation Bar */}
        <div
          className={cn(
            "border-b bg-white/90 backdrop-blur-xl transition-all duration-500",
            scrolled
              ? "border-black/10 bg-white/95 py-0 shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
              : "border-line/60 bg-white/85 py-1",
          )}
        >
          <Container className="relative flex items-center justify-between gap-4 h-[64px] sm:h-[72px] md:h-[80px] transition-all duration-300">
            {/* Left: Brand Logo Lockup */}
            <Link
              href="/"
              transitionTypes={["nav-back"]}
              className="group relative z-10 flex shrink-0 items-center py-2 transition-transform duration-300 hover:scale-[1.02]"
              aria-label="FormX home"
              onClick={() => setOpen(false)}
            >
              <Logo variant="lockup" />
            </Link>

            {/* Middle: Desktop Dynamic Mega Menu Nav */}
            <DesktopNav />

            {/* Right: Action Controls & Status */}
            <div className="relative z-10 hidden items-center gap-4 self-center xl:flex">
              {/* Practice Availability Pill */}
              <div className="flex items-center gap-2 border border-line bg-gray-50 px-3 py-1.5 font-display text-[10px] font-bold uppercase tracking-[0.14em] text-ink/60 shadow-xs">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Greenfield Ready</span>
              </div>

              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-ink/60 transition-colors hover:text-x-red"
              >
                <Phone className="size-3.5 text-x-red" />
                <span className="hidden lg:inline">{site.phone}</span>
              </a>

              <div className="h-4 w-px bg-line" />

              <Link
                href="/contact"
                transitionTypes={["nav-forward"]}
                className="formx-cut-sm formx-edge formx-edge-sm relative inline-flex items-center gap-2 bg-x-red px-5 py-2.5 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-white shadow-[0_6px_20px_rgba(222,48,36,0.35)] transition-all duration-300 hover:bg-x-red-hover hover:shadow-[0_10px_28px_rgba(222,48,36,0.5)] hover:-translate-y-0.5"
              >
                Enquire
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              className="formx-cut-sm formx-edge formx-edge-sm relative z-[60] inline-flex size-10 shrink-0 items-center justify-center border border-line bg-white text-ink transition-colors hover:border-x-red hover:text-x-red xl:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={open ? "x" : "menu"}
                  initial={{ opacity: 0, rotate: open ? -45 : 45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {open ? <X className="size-5" /> : <Menu className="size-5" />}
                </motion.div>
              </AnimatePresence>
            </button>
          </Container>

          {/* Glowing Red Top Border Line */}
          <div className="h-[2px] w-full bg-gradient-to-r from-x-red/0 via-x-red to-x-red/0 opacity-60" />
        </div>
      </header>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[55] flex flex-col overflow-y-auto bg-[#0a0a0a] xl:hidden"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Background texture */}
            <div className="pointer-events-none absolute inset-0 pattern-grid-dark opacity-20" aria-hidden />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(600px 400px at 80% 20%, rgba(222,48,36,0.12), transparent 70%)",
              }}
              aria-hidden
            />

            <div className="relative flex min-h-full flex-col px-6 pb-12 pt-[88px]">
              <nav className="flex flex-col" aria-label="Mobile navigation">
                {nav.map((item, i) => {
                  const isActive =
                    pathname === item.href || pathname.startsWith(item.href + "/");
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        transitionTypes={["nav-forward"]}
                        className={cn(
                          "flex items-baseline gap-4 border-b border-white/10 py-4 font-display text-2xl font-bold tracking-tight transition-colors",
                          isActive ? "text-x-red" : "text-white hover:text-x-red",
                        )}
                      >
                        <span className="font-display text-[11px] font-bold text-x-red/60">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {item.label}
                      </Link>
                      {item.label === "Services" ? (
                        <div className="grid grid-cols-2 gap-2 border-b border-white/10 pb-3 pl-9 pt-2">
                          {serviceNavGroups.map((group) => (
                            <div key={group.title}>
                              <p className="mb-1.5 font-display text-[9px] font-bold uppercase tracking-[0.2em] text-x-red">
                                {group.title}
                              </p>
                              {group.items.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={() => setOpen(false)}
                                  transitionTypes={["nav-forward"]}
                                  className="block py-1 text-[12px] text-white/50 hover:text-x-red"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      ) : item.children ? (
                        <div className="border-b border-white/10 pb-3 pl-9 pt-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setOpen(false)}
                              transitionTypes={["nav-forward"]}
                              className="block py-1.5 text-[13px] text-white/50 hover:text-x-red"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div
                className="mt-auto flex flex-col gap-3 pt-8"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  transitionTypes={["nav-forward"]}
                  className="flex w-full items-center justify-center gap-2 bg-x-red px-6 py-4 font-display text-[12px] font-bold uppercase tracking-[0.16em] text-white shadow-[0_8px_24px_rgba(222,48,36,0.4)]"
                >
                  Enquire Now <ArrowUpRight className="size-4" />
                </Link>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="flex w-full items-center justify-center gap-2 border border-white/20 py-4 text-[12px] font-semibold text-white/70"
                  onClick={() => setOpen(false)}
                >
                  <Phone className="size-4 text-x-red" />
                  {site.phone}
                </a>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

/** Prefer MobileChrome from AppShell */
export { MobileChrome as Header };
