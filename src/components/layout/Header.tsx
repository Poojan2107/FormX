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
  const onHome = pathname === "/";
  const overDarkHero = onHome && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
        style={{ ["--header-offset" as string]: "4.5rem" }}
      >
        <div
          className={cn(
            "border-b transition-all duration-500",
            /* Black (not transparent): sticky header sits above main; transparent
               would show body white and split the hero. Black merges with the field. */
            overDarkHero
              ? "border-transparent bg-black"
              : scrolled
                ? "border-black/8 bg-white/95 shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur-md"
                : "border-transparent bg-white",
          )}
        >
          <Container className="grid h-[4.25rem] grid-cols-[auto_1fr_auto] items-center gap-4 sm:h-[4.75rem] sm:gap-6">
            <Link
              href="/"
              transitionTypes={["nav-back"]}
              className="relative z-10 flex shrink-0 items-center"
              aria-label="FormX home"
              onClick={() => setOpen(false)}
            >
              <Logo variant="full" invert={overDarkHero} />
            </Link>

            <div className="hidden min-w-0 justify-center lg:flex">
              <DesktopNav onDark={overDarkHero} />
            </div>

            <div className="relative z-10 flex items-center justify-end gap-4 sm:gap-5">
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className={cn(
                  "hidden h-9 items-center gap-2 font-label text-[10px] transition-colors xl:flex",
                  overDarkHero ? "text-white/55 hover:text-white" : "text-ink/50 hover:text-ink",
                )}
                aria-label={`Call ${site.phone}`}
              >
                <Phone className="size-3.5 shrink-0 text-x-red" />
                <span className="tracking-[0.12em]">{site.phone}</span>
              </a>

              <Link
                href="/contact"
                transitionTypes={["nav-forward"]}
                className="relative hidden h-10 items-center gap-1.5 bg-x-red px-5 font-label text-[10px] text-white transition-colors hover:bg-x-red-hover lg:inline-flex"
              >
                Enquire
                <ArrowUpRight className="size-3.5" />
              </Link>

              <button
                type="button"
                className={cn(
                  "formx-cut-sm relative z-[60] inline-flex size-9 shrink-0 items-center justify-center border transition-colors lg:hidden",
                  overDarkHero
                    ? "border-white/25 bg-white/5 text-white hover:border-x-red hover:text-x-red"
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

          <div
            className={cn(
              "h-px w-full bg-gradient-to-r from-transparent via-x-red to-transparent transition-opacity",
              overDarkHero ? "opacity-40" : "opacity-70",
            )}
          />
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[55] flex flex-col overflow-y-auto bg-[#0a0a0a] lg:hidden"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
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
                  className="flex w-full items-center justify-center gap-2 bg-x-red px-6 py-4 font-label text-[11px] tracking-[0.18em] text-white"
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
