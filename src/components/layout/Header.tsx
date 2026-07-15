"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { nav } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
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
        className={cn(
          "sticky top-0 z-50 border-b bg-white transition-[box-shadow,border-color] duration-300",
          scrolled
            ? "border-black/8 shadow-[0_1px_0_rgba(0,0,0,0.04),0_8px_28px_rgba(0,0,0,0.06)]"
            : "border-line",
        )}
      >
        {/* Brand rail — red accent left edge */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[3px] bg-x-red" aria-hidden />

        <Container className="flex h-[72px] items-center justify-between gap-8 md:h-[76px]">
          <Link href="/" className="shrink-0" aria-label="FormX home">
            <Logo variant="lockup" />
          </Link>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Primary"
          >
            {nav.map((item) => (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="relative inline-flex items-center gap-1 px-3.5 py-2 text-[13px] font-medium tracking-[-0.01em] text-ink/65 transition-colors hover:text-ink"
                >
                  {item.label}
                  {item.children ? (
                    <ChevronDown className="size-3.5 text-ink/30 transition-transform duration-200 group-hover:rotate-180 group-hover:text-x-red" />
                  ) : null}
                </Link>
                {item.children ? (
                  <div className="invisible absolute left-1/2 top-full z-20 min-w-[240px] -translate-x-1/2 translate-y-1 border border-line bg-white py-2 opacity-0 shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="mb-1 h-px w-full bg-gradient-to-r from-transparent via-x-red to-transparent" />
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

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/career"
              className="text-[12px] font-medium text-ink/45 transition-colors hover:text-ink"
            >
              Career
            </Link>
            <Button
              href="/contact"
              variant="secondary"
              className="px-5 py-2.5 text-[12px] tracking-[0.02em]"
            >
              Get in touch
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center border border-line text-ink transition-colors hover:border-x-red hover:text-x-red lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </Container>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-40 overflow-y-auto bg-white lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex min-h-full flex-col px-5 pb-10 pt-24">
              <div className="mb-8 flex items-center justify-between border-b border-line pb-4">
                <Logo variant="lockup" />
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
                      className="block border-b border-line py-4 font-display text-xl font-bold tracking-tight text-ink"
                    >
                      {item.label}
                    </Link>
                    {item.children ? (
                      <div className="border-b border-line pb-3 pl-1">
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
                Get in touch
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
