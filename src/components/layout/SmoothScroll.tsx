"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

type ScrollLockDetail = { locked?: boolean };

function unlockDocumentScroll() {
  document.documentElement.classList.remove("scroll-locked");
  document.body.classList.remove("scroll-locked");
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
  document.body.style.paddingRight = "";
}

/** Lenis only on fine-pointer desktops — touch/coarse devices use native scroll. */
function canUseLenis() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return false;
  if (window.matchMedia("(max-width: 1023px)").matches) return false;
  return true;
}

function clearLenisHtmlClasses() {
  document.documentElement.classList.remove(
    "lenis",
    "lenis-smooth",
    "lenis-scrolling",
    "lenis-stopped",
  );
}

function headerOffsetPx() {
  const header = document.querySelector("header");
  if (!(header instanceof HTMLElement)) return 88;
  // sticky header height + small breathing room under the bar
  return Math.round(header.getBoundingClientRect().height) + 12;
}

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);
  const scrollTimerRef = useRef<number | null>(null);

  useEffect(() => {
    let animationFrameId = 0;
    let lenis: Lenis | null = null;

    const onLock = (event: Event) => {
      const locked = Boolean((event as CustomEvent<ScrollLockDetail>).detail?.locked);
      if (!lenisRef.current) return;
      if (locked) lenisRef.current.stop();
      else lenisRef.current.start();
    };

    const destroyLenis = () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = 0;
      if (lenis) {
        lenis.destroy();
        lenis = null;
      }
      lenisRef.current = null;
      clearLenisHtmlClasses();
    };

    const startLenis = () => {
      destroyLenis();
      if (!canUseLenis()) return;

      lenis = new Lenis({
        duration: 1.15,
        easing: easeOutExpo,
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.5,
        autoResize: true,
      });

      lenisRef.current = lenis;

      const raf = (time: number) => {
        lenis?.raf(time);
        animationFrameId = requestAnimationFrame(raf);
      };
      animationFrameId = requestAnimationFrame(raf);
    };

    const scrollToHashTarget = (target: HTMLElement, hash: string) => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const offset = headerOffsetPx();
      const lenis = lenisRef.current;

      if (lenis) {
        lenis.start();
        lenis.scrollTo(target, {
          offset: -offset,
          duration: reduce ? 0 : 1.35,
          immediate: reduce,
          easing: easeOutExpo,
          lock: true,
        });
      } else {
        const top = Math.max(
          0,
          target.getBoundingClientRect().top + window.scrollY - offset,
        );
        window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
      }

      if (history.replaceState) {
        history.replaceState(null, "", hash);
      }

      // A11y: move focus without another jump
      const prevTabIndex = target.getAttribute("tabindex");
      if (prevTabIndex === null) target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
      if (prevTabIndex === null) {
        const clear = () => {
          target.removeAttribute("tabindex");
          target.removeEventListener("blur", clear);
        };
        target.addEventListener("blur", clear);
      }
    };

    startLenis();
    window.addEventListener("formx:scroll-lock", onLock);

    const onHashClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = (event.target as Element | null)?.closest?.(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#" || hash.length < 2) return;

      const target = document.querySelector(hash);
      if (!(target instanceof HTMLElement)) return;

      event.preventDefault();

      const wasLocked =
        document.documentElement.classList.contains("scroll-locked") ||
        document.body.classList.contains("scroll-locked");

      unlockDocumentScroll();
      window.dispatchEvent(
        new CustomEvent("formx:scroll-lock", { detail: { locked: false } }),
      );

      if (scrollTimerRef.current) {
        window.clearTimeout(scrollTimerRef.current);
        scrollTimerRef.current = null;
      }

      // Wait for mobile drawer exit so measurements (and Lenis) are stable
      const delay = wasLocked ? 360 : 16;
      scrollTimerRef.current = window.setTimeout(() => {
        scrollTimerRef.current = null;
        scrollToHashTarget(target, hash);
      }, delay);
    };

    document.addEventListener("click", onHashClick);

    const mqTouch = window.matchMedia("(hover: none), (pointer: coarse)");
    const mqWidth = window.matchMedia("(max-width: 1023px)");
    const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onCapabilityChange = () => startLenis();

    mqTouch.addEventListener("change", onCapabilityChange);
    mqWidth.addEventListener("change", onCapabilityChange);
    mqMotion.addEventListener("change", onCapabilityChange);
    window.addEventListener("orientationchange", onCapabilityChange);

    // Open with #hash already in the URL
    if (window.location.hash.length > 1) {
      const initial = document.querySelector(window.location.hash);
      if (initial instanceof HTMLElement) {
        window.setTimeout(() => scrollToHashTarget(initial, window.location.hash), 50);
      }
    }

    return () => {
      window.removeEventListener("formx:scroll-lock", onLock);
      document.removeEventListener("click", onHashClick);
      mqTouch.removeEventListener("change", onCapabilityChange);
      mqWidth.removeEventListener("change", onCapabilityChange);
      mqMotion.removeEventListener("change", onCapabilityChange);
      window.removeEventListener("orientationchange", onCapabilityChange);
      if (scrollTimerRef.current) window.clearTimeout(scrollTimerRef.current);
      destroyLenis();
    };
  }, []);

  useEffect(() => {
    unlockDocumentScroll();
    window.dispatchEvent(
      new CustomEvent("formx:scroll-lock", { detail: { locked: false } }),
    );

    // Don't yank to top when landing with a hash
    if (window.location.hash) return;

    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [pathname]);

  return <>{children}</>;
}
