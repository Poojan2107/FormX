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

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

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
        duration: 1.05,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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

    startLenis();
    window.addEventListener("formx:scroll-lock", onLock);

    const mqTouch = window.matchMedia("(hover: none), (pointer: coarse)");
    const mqWidth = window.matchMedia("(max-width: 1023px)");
    const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onCapabilityChange = () => startLenis();

    mqTouch.addEventListener("change", onCapabilityChange);
    mqWidth.addEventListener("change", onCapabilityChange);
    mqMotion.addEventListener("change", onCapabilityChange);
    window.addEventListener("orientationchange", onCapabilityChange);

    return () => {
      window.removeEventListener("formx:scroll-lock", onLock);
      mqTouch.removeEventListener("change", onCapabilityChange);
      mqWidth.removeEventListener("change", onCapabilityChange);
      mqMotion.removeEventListener("change", onCapabilityChange);
      window.removeEventListener("orientationchange", onCapabilityChange);
      destroyLenis();
    };
  }, []);

  useEffect(() => {
    // Route changes must never leave body/html locked (mobile menu race).
    unlockDocumentScroll();
    window.dispatchEvent(
      new CustomEvent("formx:scroll-lock", { detail: { locked: false } }),
    );

    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [pathname]);

  return <>{children}</>;
}
