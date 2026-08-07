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
  const pathname = usePathname();
  const overDarkHero = false;

  // Close mobile drawer on navigation so scroll never stays locked.
  useEffect(() => {
    setOpen(false);
  }, [pathname, setOpen]);

  useEffect(() => {
    const root = document.documentElement;
    const scrollbarGap = open ? window.innerWidth - root.clientWidth : 0;

    if (open) {
      root.classList.add("scroll-locked");
      document.body.classList.add("scroll-locked");
      if (scrollbarGap > 0) {
        document.body.style.paddingRight = `${scrollbarGap}px`;
      }
    } else {
      root.classList.remove("scroll-locked");
      document.body.classList.remove("scroll-locked");
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
      root.style.overflow = "";
    }

    window.dispatchEvent(
      new CustomEvent("formx:scroll-lock", { detail: { locked: open } }),
    );

    return () => {
      root.classList.remove("scroll-locked");
      document.body.classList.remove("scroll-locked");
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
      root.style.overflow = "";
      window.dispatchEvent(
        new CustomEvent("formx:scroll-lock", { detail: { locked: false } }),
      );
    };
  }, [open]);

  return (
    <>
      <header
        className="relative z-50 w-full border-b border-line/80 bg-white"
        style={{ ["--header-offset" as string]: "4.75rem" }}
      >
        <div className="h-0.5 w-full bg-gradient-to-r from-x-red via-x-red to-transparent" />

        <Container className="grid h-[4.5rem] grid-cols-[auto_1fr_auto] items-center gap-4 sm:h-[5.25rem] sm:gap-6">
          <Link
            href="/"
            transitionTypes={["nav-back"]}
            className="relative z-10 flex shrink-0 items-center transition-transform duration-300 hover:scale-[1.02]"
            aria-label="FormX home"
            onClick={() => setOpen(false)}
          >
            <Logo variant="full" className="h-11 sm:h-13 md:h-14" invert={overDarkHero} />
          </Link>

          <div className="hidden min-w-0 justify-center lg:flex">
            <DesktopNav onDark={overDarkHero} />
          </div>

          <div className="relative z-10 flex items-center justify-end gap-4 sm:gap-5">
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className={cn(
                "hidden h-9 items-center gap-2 font-label text-[10px] tracking-[0.14em] transition-colors xl:flex",
                "text-ink/60 hover:text-x-red",
              )}
              aria-label={`Call ${site.phone}`}
            >
              <Phone className="size-3.5 shrink-0 text-x-red" />
              <span>{site.phone}</span>
            </a>

            <Link
              href="/contact"
              transitionTypes={["nav-forward"]}
              className="formx-cut-sm relative hidden h-10 items-center gap-1.5 border-[1.5px] border-x-red bg-x-red px-6 font-label text-[10.5px] tracking-[0.18em] text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-x-red hover:shadow-[0_10px_28px_-12px_rgba(224,49,40,0.35)] lg:inline-flex"
            >
              Enquire
              <ArrowUpRight className="size-3.5" />
            </Link>

            <button
              type="button"
              className={cn(
                "formx-cut-sm relative z-[60] inline-flex size-9 shrink-0 items-center justify-center border transition-colors lg:hidden",
                "border-line bg-white text-ink hover:border-x-red hover:text-x-red",
              )}
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
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fx-grain fixed inset-0 z-[55] flex flex-col overflow-y-auto overscroll-contain bg-[#0a0a0a] lg:hidden"
            style={{ WebkitOverflowScrolling: "touch" }}
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pointer-events-none absolute inset-0 pattern-grid-dark opacity-25" aria-hidden />
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
                          "block border-b border-white/10 py-5 font-display text-2xl font-bold uppercase tracking-tight transition-colors",
                          isActive ? "text-x-red" : "text-white hover:text-x-red",
                        )}
                      >
                        {item.label}
                      </Link>
                      {item.label === "Services" ? (
                        <div className="grid grid-cols-2 gap-2 border-b border-white/10 pb-3 pl-9 pt-2">
                          {serviceNavGroups.map((group) => (
                            <div key={group.title}>
                              <p className="mb-1.5 font-label text-[9px] text-x-red">
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
                  className="formx-cut flex w-full items-center justify-center gap-2 border-[1.5px] border-x-red bg-x-red px-6 py-4 font-label text-[11px] tracking-[0.18em] text-white transition-all duration-300 hover:bg-white hover:text-x-red"
                >
                  Enquire <ArrowUpRight className="size-4" />
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

export { MobileChrome as Header };
