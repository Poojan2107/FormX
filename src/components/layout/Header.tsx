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
    const onScroll = () => setScrolled(window.scrollY > 8);
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
          "sticky top-0 z-50 border-b border-white/10 bg-black transition-all duration-300",
          scrolled && "shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-sm",
        )}
      >
        <Container className="flex h-[78px] items-center justify-between gap-6">
          <Link
            href="/"
            className="group shrink-0 transition-transform duration-300 hover:scale-[1.02]"
            aria-label="FormX home"
          >
            <Logo invert variant="mark" />
          </Link>

          <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
            {nav.map((item) => (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="relative inline-flex items-center gap-1 px-3 py-2 text-[13px] font-medium text-white/70 transition-colors hover:text-white"
                >
                  {item.label}
                  {item.children ? (
                    <ChevronDown className="size-3.5 opacity-50 transition-transform duration-200 group-hover:rotate-180" />
                  ) : null}
                  <span className="absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-x-red transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
                {item.children ? (
                  <div className="invisible absolute left-0 top-full z-20 min-w-[270px] translate-y-1 border border-white/10 bg-[#0c0c0c] py-2 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="group/item flex items-center justify-between px-4 py-2.5 text-[13px] text-white/55 transition-colors hover:bg-white/[0.04] hover:text-x-red"
                      >
                        {child.label}
                        <span className="text-x-red opacity-0 transition-opacity group-hover/item:opacity-100">
                          ×
                        </span>
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              href="/contact"
              variant="primary"
              className="relative overflow-hidden px-5 py-2.5 text-[11px] uppercase tracking-[0.16em] before:absolute before:inset-0 before:translate-x-[-100%] before:bg-white/15 before:transition-transform before:duration-300 hover:before:translate-x-0"
            >
              <span className="relative">Get in touch</span>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center border border-white/20 text-white transition-colors hover:border-x-red hover:text-x-red xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </Container>

        {/* Thin red progress accent when scrolled */}
        <div
          className={cn(
            "h-[2px] origin-left bg-x-red transition-transform duration-300",
            scrolled ? "scale-x-100" : "scale-x-0",
          )}
        />
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-40 overflow-y-auto bg-black xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex min-h-full flex-col px-5 pb-10 pt-28">
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {nav.map((item, i) => (
                  <div key={item.label}>
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.04 * i }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block border-b border-white/10 py-4 font-display text-2xl font-bold uppercase tracking-tight text-white"
                      >
                        {item.label}
                      </Link>
                      {item.children ? (
                        <div className="border-b border-white/10 pb-3 pl-3">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className="block py-2 text-sm text-white/55 hover:text-x-red"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </motion.div>
                  </div>
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
