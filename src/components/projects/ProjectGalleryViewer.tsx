"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

export function ProjectGalleryViewer({
  cover,
  gallery,
  title,
}: {
  cover: string;
  gallery: string[];
  title: string;
}) {
  const allImages = [cover, ...gallery.filter((g) => g !== cover)];
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const activeSrc = lightboxIdx !== null ? `/assets/${allImages[lightboxIdx]}` : null;

  return (
    <>
      {/* Full Container Uncropped Image Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {allImages.map((slot, i) => (
          <div
            key={slot + i}
            onClick={() => setLightboxIdx(i)}
            className="group relative flex flex-col overflow-hidden border border-line bg-[#0f0f0f] shadow-md cursor-pointer transition-all duration-300 hover:border-x-red/60 hover:shadow-2xl"
          >
            {/* Image Container with Full-Frame Aspect Preservation */}
            <div className="relative min-h-[260px] sm:min-h-[300px] w-full overflow-hidden bg-[#0c0c0c] flex items-center justify-center p-2">
              <Image
                src={`/assets/${slot}`}
                alt={`${title} — image ${i + 1}`}
                width={800}
                height={600}
                unoptimized
                className="max-h-[360px] w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              />

              {/* Top View Badge */}
              <span className="absolute left-3 top-3 border border-white/20 bg-black/80 px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-wider text-white shadow-md z-10">
                View 0{i + 1} · Full Frame
              </span>

              {/* Fullscreen Expand Icon Button */}
              <span className="absolute right-3 bottom-3 flex size-9 items-center justify-center border border-white/20 bg-black/80 text-white backdrop-blur-sm opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bg-x-red group-hover:border-x-red z-10">
                <Maximize2 className="size-4" />
              </span>
            </div>

            <div className="border-t border-white/10 bg-[#161616] p-3 text-center text-[11px] font-bold uppercase tracking-widest text-white/70">
              Click to view full uncropped photo
            </div>
          </div>
        ))}
      </div>

      {/* Full Scale Lightbox Modal */}
      <AnimatePresence>
        {lightboxIdx !== null && activeSrc ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-xl"
            onClick={() => setLightboxIdx(null)}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setLightboxIdx(null)}
              className="absolute right-6 top-6 z-10 flex size-12 items-center justify-center border border-white/20 bg-black/80 text-white transition-colors hover:border-x-red hover:bg-x-red"
              aria-label="Close full view"
            >
              <X className="size-6" />
            </button>

            {/* Previous / Next Controls */}
            {allImages.length > 1 ? (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIdx((i) => (i === 0 || i === null ? allImages.length - 1 : i - 1));
                  }}
                  className="absolute left-6 top-1/2 -translate-y-1/2 z-10 flex size-12 items-center justify-center border border-white/20 bg-black/80 text-white transition-colors hover:border-x-red hover:bg-x-red"
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
                  className="absolute right-6 top-1/2 -translate-y-1/2 z-10 flex size-12 items-center justify-center border border-white/20 bg-black/80 text-white transition-colors hover:border-x-red hover:bg-x-red"
                  aria-label="Next image"
                >
                  <ChevronRight className="size-6" />
                </button>
              </>
            ) : null}

            {/* Uncropped Full Scale Image Display */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-[95vw] overflow-hidden flex flex-col items-center justify-center"
            >
              <Image
                src={activeSrc}
                alt={title}
                width={1600}
                height={1200}
                unoptimized
                className="max-h-[85vh] w-auto max-w-[90vw] object-contain shadow-2xl border border-white/10"
              />
              <div className="mt-3 flex items-center gap-4 text-white">
                <span className="font-display text-xs font-bold uppercase tracking-widest text-x-red">
                  {title}
                </span>
                <span className="text-xs text-white/50">
                  Image {lightboxIdx + 1} of {allImages.length} · 100% Full Scale Uncropped
                </span>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
