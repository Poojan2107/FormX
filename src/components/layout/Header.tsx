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
import { isEventMode } from "@/config/siteMode";
import { DesktopNav } from "@/components/layout/MegaMenu";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { FormxLogoCutX } from "@/components/ui/XMotif";
import { cn } from "@/lib/cn";

const eventNav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Who We Partner With", href: "#partners" },
  { label: "Contact", href: "#contact" },
] as const;

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
  const eventMode = isEventMode();

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
        className={cn(
          "z-50 w-full border-b",
          eventMode
            ? "sticky top-0 border-white/10 bg-[#090908] backdrop-blur-md"
            : "relative border-line/80 bg-white",
        )}
        style={{ ["--header-offset" as string]: "4.75rem" }}
      >
        <div className="h-0.5 w-full bg-gradient-to-r from-x-red via-x-red to-transparent" />

        {eventMode ? (
          <div className="border-b border-white/10 bg-[#090908] py-2.5 text-center overflow-hidden">
            <div className="mx-auto flex items-center justify-center gap-2 px-3 text-center">
              <FormxLogoCutX className="size-3.5 sm:size-4 text-x-red shrink-0" />
              <p className="font-label text-[10.5px] min-[360px]:text-[11.5px] sm:text-[13.5px] font-black uppercase tracking-[0.16em] sm:tracking-[0.24em] text-x-red text-center whitespace-nowrap">
                Website Taking Form. Launching Soon.
              </p>
            </div>
          </div>
        ) : null}

        <Container className="grid h-[4.5rem] grid-cols-[auto_1fr_auto] items-center gap-5 sm:h-[5.25rem] sm:gap-8">
          <Link
            href="/"
            transitionTypes={["nav-back"]}
            className="relative z-10 flex shrink-0 items-center transition-opacity duration-300 hover:opacity-90"
            aria-label="FormX home"
            onClick={() => setOpen(false)}
          >
            <Logo
              variant="full"
              className={cn(
                eventMode || overDarkHero
                  ? "h-10 sm:h-11 md:h-12"
                  : "h-11 sm:h-13 md:h-14",
              )}
              invert={eventMode || overDarkHero}
            />
          </Link>

          <div className="hidden min-w-0 justify-center lg:flex">
            {eventMode ? (
              <nav className="flex items-center gap-8 xl:gap-10" aria-label="Page sections">
                {eventNav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="font-label text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.22em] text-white/70 transition-colors duration-200 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            ) : (
              <DesktopNav onDark={overDarkHero} />
            )}
          </div>

          <div className="relative z-10 flex items-center justify-end gap-4 sm:gap-5">
            {eventMode ? (
              <a
                href="#contact"
                className="formx-cut-sm relative hidden h-10 items-center gap-1.5 border-[1.5px] border-x-red bg-x-red px-6 font-label text-[10.5px] tracking-[0.18em] text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-x-red hover:shadow-[0_10px_28px_-12px_rgba(224,49,40,0.35)] lg:inline-flex"
              >
                Enquire
                <ArrowUpRight className="size-3.5" />
              </a>
            ) : (
              <Link
                href="/contact"
                transitionTypes={["nav-forward"]}
                className="formx-cut-sm relative hidden h-10 items-center gap-1.5 border-[1.5px] border-x-red bg-x-red px-6 font-label text-[10.5px] tracking-[0.18em] text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-x-red hover:shadow-[0_10px_28px_-12px_rgba(224,49,40,0.35)] lg:inline-flex"
              >
                Enquire
                <ArrowUpRight className="size-3.5" />
              </Link>
            )}

            <button
              type="button"
              className={cn(
                "formx-cut-sm relative z-[60] inline-flex h-11 w-11 min-h-[44px] min-w-[44px] shrink-0 items-center justify-center border transition-colors lg:hidden",
                eventMode
                  ? "border-white/20 bg-transparent text-white hover:border-x-red hover:text-x-red"
                  : "border-line bg-white text-ink hover:border-x-red hover:text-x-red",
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
            className="fx-grain fixed inset-0 h-dvh min-h-dvh w-screen z-[55] flex flex-col overflow-y-auto overscroll-contain bg-[#0a0a0a] lg:hidden"
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

            <div className="relative flex min-h-full flex-col px-5 sm:px-6 pb-[max(3rem,env(safe-area-inset-bottom))] pt-[max(5.5rem,env(safe-area-inset-top))]">
              <nav className="flex flex-col" aria-label="Mobile navigation">
                {eventMode
                  ? eventNav.map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * i, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <a
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="block border-b border-white/10 py-5 font-display text-2xl font-bold uppercase tracking-tight text-white transition-colors hover:text-x-red"
                        >
                          {item.label}
                        </a>
                      </motion.div>
                    ))
                  : nav.map((item, i) => {
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
                {eventMode ? (
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="formx-cut flex w-full items-center justify-center gap-2 border-[1.5px] border-x-red bg-x-red px-6 py-4 font-label text-[11px] tracking-[0.18em] text-white transition-all duration-300 hover:bg-white hover:text-x-red"
                  >
                    Enquire <ArrowUpRight className="size-4" />
                  </a>
                ) : (
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    transitionTypes={["nav-forward"]}
                    className="formx-cut flex w-full items-center justify-center gap-2 border-[1.5px] border-x-red bg-x-red px-6 py-4 font-label text-[11px] tracking-[0.18em] text-white transition-all duration-300 hover:bg-white hover:text-x-red"
                  >
                    Enquire <ArrowUpRight className="size-4" />
                  </Link>
                )}
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
