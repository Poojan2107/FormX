"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden bg-[#0c0c0c] px-6 py-24 text-center text-white">
      <div
        aria-hidden
        className="pattern-grid-dark pointer-events-none absolute inset-0 opacity-20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px 400px at 80% 20%, rgba(222,48,36,0.14), transparent 70%)",
        }}
      />
      <div className="relative">
        <p className="font-display text-[11px] font-bold uppercase tracking-[0.28em] text-x-red">
          Error
        </p>
        <h1 className="font-display mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
          Something went wrong
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/60">
          This page hit an unexpected problem. Try again — if it keeps
          happening, reach out through the contact page.
        </p>
        {error.digest ? (
          <p className="mt-4 font-mono text-[11px] text-white/30">
            Ref: {error.digest}
          </p>
        ) : null}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => unstable_retry()}
            className="bg-x-red inline-flex items-center gap-2 px-6 py-3 font-display text-[12px] font-bold uppercase tracking-[0.16em] text-white shadow-[0_8px_24px_rgba(222,48,36,0.4)] transition-colors hover:bg-x-red-hover"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-white/25 px-6 py-3 font-display text-[12px] font-bold uppercase tracking-[0.16em] text-white/80 transition-colors hover:border-white/60 hover:text-white"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
