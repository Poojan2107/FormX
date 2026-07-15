"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);
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
      <header className="sticky top-0 z-50">
        {/* Utility strip — brand black */}
        <div className="border-b border-white/10 bg-black text-white">
          <Container className="flex h-8 items-center justify-between gap-4 text-[10px] font-medium uppercase tracking-[0.16em] md:h-9 md:text-[11px] md:tracking-[0.18em]">
            <p className="truncate text-white/55">
              Design <span className="text-x-red">|</span> Engineering
              <span className="mx-2 hidden text-white/20 sm:inline">·</span>
              <span className="hidden text-white/40 sm:inline">
                Industrial facilities · India
              </span>
            </p>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="inline-flex shrink-0 items-center gap-1.5 text-white/70 transition-colors hover:text-white"
            >
              <Phone className="size-3 text-x-red" />
              <span className="normal-case tracking-normal">{site.phone}</span>
            </a>
          </Container>
        </div>

        {/* Primary bar */}
        <div
          className={cn(
            "border-b bg-white/95 backdrop-blur-md transition-[box-shadow,border-color] duration-300",
            scrolled
              ? "border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
              : "border-line",
          )}
        >
          <Container className="relative flex h-[76px] items-stretch justify-between gap-6 md:h-[84px]">
            <Link
              href="/"
              className="relative z-10 flex shrink-0 items-center self-stretch border-l-[3px] border-b-[3px] border-x-red py-2 pl-3 pr-4 md:pl-4 md:pr-5"
              aria-label="FormX home"
            >
              <Logo variant="lockup" />
            </Link>

            <nav
              className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center xl:flex"
              aria-label="Primary"
            >
              {nav.map((item, i) => (
                <div key={item.label} className="group relative flex items-center">
                  {i > 0 ? (
                    <span className="mx-0.5 h-3 w-px bg-ink/10" aria-hidden />
                  ) : null}
                  <Link
                    href={item.href}
                    className="relative inline-flex items-center gap-1 px-3 py-2 font-display text-[12px] font-semibold uppercase tracking-[0.12em] text-ink/55 transition-colors hover:text-ink"
                  >
                    <span className="mr-0.5 text-[10px] font-bold text-x-red/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                    {item.children ? (
                      <ChevronDown className="size-3 opacity-40 transition-transform duration-200 group-hover:rotate-180 group-hover:text-x-red" />
                    ) : null}
                    <span className="absolute inset-x-3 bottom-1 h-[2px] origin-left scale-x-0 bg-x-red transition-transform duration-300 group-hover:scale-x-100" />
                  </Link>
                  {item.children ? (
                    <div className="invisible absolute left-1/2 top-full z-20 min-w-[248px] -translate-x-1/2 translate-y-1 border border-line bg-white py-2 opacity-0 shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="group/item flex items-center justify-between px-4 py-2.5 text-[13px] text-ink/60 transition-colors hover:bg-black/[0.02] hover:text-x-red"
                        >
                          {child.label}
                          <span className="font-display text-x-red opacity-0 transition-opacity group-hover/item:opacity-100">
                            ×
                          </span>
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </nav>

            <div className="relative z-10 hidden items-center gap-2 self-center lg:flex">
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
              className="relative z-10 inline-flex size-10 items-center justify-center self-center border border-line text-ink transition-colors hover:border-x-red hover:text-x-red xl:hidden"
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
            className="fixed inset-0 z-40 overflow-y-auto bg-white xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex min-h-full flex-col px-5 pb-10 pt-28">
              <div className="mb-6 flex h-16 items-center justify-between border-b border-line pb-4">
                <div className="h-14 border-l-[3px] border-b-[3px] border-x-red py-1 pl-2 pr-3">
                  <Logo variant="lockup" />
                </div>
                <button
                  type="button"
                  className="inline-flex size-10 items-center justify-center border border-line text-ink"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  <X className="size-5" />
                </button>
              </div>
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
                      className="flex items-baseline gap-3 border-b border-line py-4 font-display text-xl font-bold tracking-tight text-ink"
                    >
                      <span className="text-sm text-x-red">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item.label}
                    </Link>
                    {item.children ? (
                      <div className="border-b border-line pb-3 pl-9">
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
              </nav>
              <Button
                href="/contact"
                className="mt-8 w-full"
                onClick={() => setOpen(false)}
              >
                Enquire
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
