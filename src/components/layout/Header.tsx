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
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
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
    const onScroll = () => setScrolled(window.scrollY > 24);
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
      <header
        className="sticky top-0 z-50"
        style={{ ["--header-offset" as string]: "4.75rem" }}
      >
        <div
          className={cn(
            "relative border-b bg-white transition-shadow duration-300",
            scrolled
              ? "border-black/8 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
              : "border-ink/[0.06]",
          )}
        >
          <span
            aria-hidden
            className="absolute bottom-0 left-0 top-0 w-[3px] bg-x-red"
          />

          <Container className="grid h-[4.5rem] grid-cols-[auto_1fr_auto] items-center gap-4 sm:h-[4.75rem] sm:gap-6">
            <Link
              href="/"
              transitionTypes={["nav-back"]}
              className="relative z-10 flex shrink-0 flex-col justify-center"
              aria-label="FormX home"
              onClick={() => setOpen(false)}
            >
              <Logo variant="full" />
              <span className="mt-0.5 hidden font-label text-[8px] tracking-[0.22em] text-ink/40 xl:block">
                Architecture · Structure · Infrastructure
              </span>
            </Link>

            <div className="hidden min-w-0 justify-center lg:flex">
              <DesktopNav />
            </div>

            <div className="relative z-10 flex items-center justify-end gap-3 sm:gap-4">
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="hidden h-9 items-center gap-2 font-label text-[10px] tracking-[0.12em] text-ink/45 transition-colors hover:text-ink xl:flex"
                aria-label={`Call ${site.phone}`}
              >
                <Phone className="size-3.5 shrink-0 text-x-red" />
                {site.phone}
              </a>

              <Link
                href="/contact"
                transitionTypes={["nav-forward"]}
                className="formx-cut-sm relative hidden h-10 items-center gap-1.5 bg-x-red px-5 font-label text-[10px] tracking-[0.18em] text-white transition-colors hover:bg-x-red-hover lg:inline-flex"
              >
                Enquire
                <ArrowUpRight className="size-3.5" />
              </Link>

              <button
                type="button"
                className="formx-cut-sm relative z-[60] inline-flex size-9 shrink-0 items-center justify-center border border-line bg-white text-ink transition-colors hover:border-x-red hover:text-x-red lg:hidden"
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
            </div>
          </Container>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fx-grain fixed inset-0 z-[55] flex flex-col overflow-y-auto bg-[#0a0a0a] lg:hidden"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(500px 320px at 90% 10%, rgba(224,49,40,0.14), transparent 70%)",
              }}
              aria-hidden
            />

            <div className="relative flex min-h-full flex-col px-6 pb-12 pt-[96px]">
              <p className="mb-8 font-label text-[10px] tracking-[0.28em] text-x-red">
                Architecture · Structure · Infrastructure
              </p>

              <nav className="flex flex-col" aria-label="Mobile navigation">
                {nav.map((item, i) => {
                  const isActive =
                    item.label === "Practice" || item.label === "Insights"
                      ? pathname.startsWith("/knowledge-center")
                      : pathname === item.href ||
                        pathname.startsWith(item.href + "/");
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.04 * i,
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        transitionTypes={["nav-forward"]}
                        className={cn(
                          "flex items-baseline gap-3 border-b border-white/10 py-5 font-display text-2xl font-bold uppercase tracking-tight transition-colors",
                          isActive ? "text-x-red" : "text-white hover:text-x-red",
                        )}
                      >
                        <span className="font-label text-[10px] tracking-[0.16em] text-x-red/70">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {item.label}
                      </Link>
                      {item.label === "Services" ? (
                        <div className="grid grid-cols-1 gap-4 border-b border-white/10 py-4 pl-10 sm:grid-cols-3">
                          {serviceNavGroups.map((group) => (
                            <div key={group.title}>
                              <p className="mb-2 font-label text-[9px] tracking-[0.2em] text-x-red">
                                × {group.title}
                              </p>
                              {group.items
                                .filter((c) => c.href !== "/services")
                                .map((child) => (
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
                          ))}
                        </div>
                      ) : null}
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div
                className="mt-auto flex flex-col gap-3 pt-10"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  transitionTypes={["nav-forward"]}
                  className="formx-cut flex w-full items-center justify-center gap-2 bg-x-red px-6 py-4 font-label text-[11px] tracking-[0.18em] text-white"
                >
                  Enquire <ArrowUpRight className="size-4" />
                </Link>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="flex w-full items-center justify-center gap-2 border border-white/15 py-4 font-label text-[11px] tracking-[0.14em] text-white/60"
                  onClick={() => setOpen(false)}
                >
                  <Phone className="size-3.5 text-x-red" />
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

export { MobileChrome as Header };
