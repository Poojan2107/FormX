"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

export function ProjectGalleryViewer({
  cover,
  gallery,
  title,
}: {
  cover: string;
  gallery: string[];
  title: string;
}) {
  const allImages = useMemo(
    () => [cover, ...gallery.filter((g) => g !== cover)],
    [cover, gallery],
  );
  const count = allImages.length;
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const activeSrc = lightboxIdx !== null ? `/assets/${allImages[lightboxIdx]}` : null;

  useEffect(() => {
    if (lightboxIdx === null) return;
    triggerRef.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIdx(null);
      else if (e.key === "ArrowLeft")
        setLightboxIdx((i) => (i === null || i === 0 ? count - 1 : i - 1));
      else if (e.key === "ArrowRight")
        setLightboxIdx((i) => (i === null || i === count - 1 ? 0 : i + 1));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      triggerRef.current?.focus();
    };
  }, [lightboxIdx, count]);

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {allImages.map((slot, i) => (
          <button
            key={slot + i}
            type="button"
            onClick={() => setLightboxIdx(i)}
            className="group relative aspect-[4/3] w-full overflow-hidden bg-[#0c0c0c] text-left"
            aria-label={`Open full view ${i + 1}`}
          >
            <Image
              src={`/assets/${slot}`}
              alt={`${title} — image ${i + 1}`}
              fill
              unoptimized
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/25" />

            <span className="absolute left-3 top-3 bg-black/70 px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
              {String(i + 1).padStart(2, "0")}
            </span>

            <span className="absolute bottom-3 right-3 flex size-9 items-center justify-center bg-x-red text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Maximize2 className="size-4" />
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {lightboxIdx !== null && activeSrc ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={`${title} full view`}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-xl"
            onClick={() => setLightboxIdx(null)}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={() => setLightboxIdx(null)}
              className="absolute right-6 top-6 z-10 flex size-12 items-center justify-center border border-white/20 bg-black/80 text-white transition-colors hover:border-x-red hover:bg-x-red"
              aria-label="Close full view"
            >
              <X className="size-6" />
            </button>

            {allImages.length > 1 ? (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIdx((i) => (i === 0 || i === null ? allImages.length - 1 : i - 1));
                  }}
                  className="absolute left-6 top-1/2 z-10 flex size-12 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/80 text-white transition-colors hover:border-x-red hover:bg-x-red"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="size-6" />
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIdx((i) => (i === null || i === allImages.length - 1 ? 0 : i + 1));
                  }}
                  className="absolute right-6 top-1/2 z-10 flex size-12 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/80 text-white transition-colors hover:border-x-red hover:bg-x-red"
                  aria-label="Next image"
                >
                  <ChevronRight className="size-6" />
                </button>
              </>
            ) : null}

            <div
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[90vh] max-w-[95vw] flex-col items-center justify-center"
            >
              <Image
                src={activeSrc}
                alt={title}
                width={1600}
                height={1200}
                unoptimized
                className="max-h-[85vh] w-auto max-w-[90vw] object-contain"
              />
              <div className="mt-3 flex items-center gap-4 text-white">
                <span className="font-display text-xs font-bold uppercase tracking-widest text-x-red">
                  {title}
                </span>
                <span aria-live="polite" className="text-xs text-white/50">
                  {lightboxIdx + 1} / {allImages.length}
                </span>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
