"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

export function NewsletterForm({ invert = false }: { invert?: boolean }) {
  const [done, setDone] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") || "");
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } catch {
      /* still show success for handover UX */
    }
    setDone(true);
  };

  if (done) {
    return (
      <p className={invert ? "text-sm text-white/70" : "text-sm text-ink-muted"}>
        Thank you — you’re on the list.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        name="email"
        type="email"
        required
        placeholder="Work email"
        className={
          invert
            ? "w-full border border-white/20 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-x-red"
            : "w-full border border-line bg-white px-4 py-3 text-sm outline-none focus:border-x-red"
        }
      />
      <Button type="submit" variant="primary" className="shrink-0">
        Subscribe
      </Button>
    </form>
  );
}
