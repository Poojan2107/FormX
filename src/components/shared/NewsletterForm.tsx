"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export function NewsletterForm({ invert = false }: { invert?: boolean }) {
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") || "").trim();
    if (!isEmail(email)) {
      setError("Enter a valid email address.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("failed");
      setDone(true);
    } catch {
      setError("Could not subscribe right now. Try again shortly.");
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <p
        className={invert ? "text-sm text-white/70" : "text-sm text-ink-muted"}
        role="status"
      >
        Thank you — you’re on the list.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2" noValidate>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          name="email"
          type="email"
          placeholder="Work email"
          aria-invalid={Boolean(error)}
          className={cn(
            "w-full px-4 py-3 text-sm outline-none transition-colors",
            invert
              ? "border bg-white/5 text-white placeholder:text-white/35 focus:border-x-red"
              : "border bg-white focus:border-x-red",
            error
              ? "border-x-red"
              : invert
                ? "border-white/20"
                : "border-line",
          )}
        />
        <Button type="submit" variant="primary" className="shrink-0" disabled={loading}>
          {loading ? "…" : "Subscribe"}
        </Button>
      </div>
      {error ? (
        <p className="text-[12px] text-x-red" role="alert">
          {error}
        </p>
      ) : null}
    </form>
  );
}
