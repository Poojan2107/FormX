"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, serviceNavGroups, site } from "@/data/site";
import { DesktopNav } from "@/components/layout/MegaMenu";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
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
        style={{ ["--header-offset" as string]: "7.5rem" }}
      >
        <div className="border-b border-white/10 bg-black text-white">
          <Container className="flex h-8 items-center justify-between gap-3 text-[10px] font-medium uppercase tracking-[0.14em] md:h-9 md:gap-4 md:text-[11px] md:tracking-[0.18em]">
            <p className="min-w-0 truncate text-white/55">
              Design <span className="text-x-red">|</span> Engineering
              <span className="mx-2 hidden text-white/20 sm:inline">·</span>
              <span className="hidden text-white/40 sm:inline">
                Industrial facilities · India
              </span>
            </p>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="inline-flex shrink-0 items-center gap-1.5 text-white/70 transition-colors hover:text-white"
              aria-label={`Call ${site.phone}`}
            >
              <Phone className="size-3 text-x-red" />
              <span className="hidden normal-case tracking-normal sm:inline">
                {site.phone}
              </span>
              <span className="normal-case tracking-normal sm:hidden">Call</span>
            </a>
          </Container>
        </div>

        <div
          className={cn(
            "border-b bg-white/95 backdrop-blur-md transition-[box-shadow,border-color] duration-300",
            scrolled
              ? "border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
              : "border-line",
          )}
        >
          <Container className="relative flex h-[64px] items-stretch justify-between gap-3 sm:h-[72px] sm:gap-4 md:h-[84px] md:gap-6">
            <Link
              href="/"
              className="relative z-10 flex min-w-0 max-w-[min(200px,calc(100%-3.5rem))] shrink items-center self-stretch border-l-[3px] border-b-[3px] border-x-red py-1.5 pl-2.5 pr-3 sm:max-w-[240px] sm:py-2 sm:pl-3 sm:pr-4 md:max-w-none md:pl-4 md:pr-5"
              aria-label="FormX home"
              onClick={() => setOpen(false)}
            >
              <Logo variant="lockup" />
            </Link>

            <DesktopNav />

            <div className="relative z-10 hidden items-center gap-2 self-center xl:flex">
              <Link
                href="/career"
                className="px-3 py-2 font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/40 transition-colors hover:text-ink"
              >
                Career
              </Link>
              <Button
                href="/contact"
                variant="primary"
                className="px-5 py-2.5 text-[11px] uppercase tracking-[0.14em]"
              >
                Enquire
              </Button>
            </div>

            <button
              type="button"
              className="relative z-[60] inline-flex size-10 shrink-0 items-center justify-center self-center border border-line text-ink transition-colors hover:border-x-red hover:text-x-red xl:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </Container>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[55] overflow-y-auto bg-white xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex min-h-full flex-col px-5 pb-10 pt-[7.5rem]">
              <nav className="flex flex-col" aria-label="Mobile">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * i }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-3 border-b border-line py-3.5 font-display text-lg font-bold tracking-tight text-ink sm:py-4 sm:text-xl"
                    >
                      <span className="text-sm text-x-red">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item.label}
                    </Link>
                    {item.label === "Services" ? (
                      <div className="space-y-3 border-b border-line pb-4 pl-8 pt-1 sm:pl-9">
                        {serviceNavGroups.map((group) => (
                          <div key={group.title}>
                            <p className="mb-1 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-x-red">
                              {group.title}
                            </p>
                            {group.items.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setOpen(false)}
                                className="block py-1.5 text-sm text-ink/55 hover:text-x-red"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    ) : item.children ? (
                      <div className="border-b border-line pb-3 pl-8 sm:pl-9">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="block py-2 text-sm text-ink/55 hover:text-x-red"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </motion.div>
                ))}
                <Link
                  href="/career"
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-3 border-b border-line py-3.5 font-display text-lg font-bold tracking-tight text-ink"
                >
                  <span className="text-sm text-x-red">06</span>
                  Career
                </Link>
              </nav>
              <div className="mt-8 flex flex-col gap-3">
                <Button
                  href="/contact"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Enquire
                </Button>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="inline-flex w-full items-center justify-center gap-2 border border-line py-3 text-sm font-semibold text-ink"
                  onClick={() => setOpen(false)}
                >
                  <Phone className="size-4 text-x-red" />
                  {site.phone}
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

/** Prefer MobileChrome from AppShell */
export { MobileChrome as Header };
