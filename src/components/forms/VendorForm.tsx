"use client";

import { FormEvent, useState } from "react";
import { Check, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

const VENDOR_CATEGORIES = [
  "Architectural Work",
  "Structural Steel",
  "RCC & Civil Works",
  "HVAC Systems",
  "Electrical & Automation",
  "Fire Protection",
  "Utility Piping",
  "Instrumentation & Controls",
  "Project Management / Site QC",
];

export function VendorForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");
    const fd = new FormData(e.currentTarget);
    const company = String(fd.get("company") || "").trim();
    const contact = String(fd.get("contact") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const city = String(fd.get("city") || "").trim();
    const note = String(fd.get("note") || "").trim();

    const categoryStr =
      selectedCategories.length > 0
        ? selectedCategories.join(", ")
        : String(fd.get("category") || "").trim();

    setLoading(true);
    try {
      const res = await fetch("/api/vendor-registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company,
          contact,
          email,
          phone,
          category: categoryStr,
          city,
          note,
        }),
      });

      if (!res.ok) throw new Error("Failed");
      setSent(true);
    } catch {
      setErrorMsg("Submission failed. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="formx-cut-x formx-edge formx-edge-x border border-line bg-white p-8 md:p-10">
        <div className="inline-flex size-10 items-center justify-center bg-x-red/10 text-x-red mb-4">
          <Check className="size-5" />
        </div>
        <h2 className="font-display text-2xl font-bold text-ink">
          Registration received
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          Thank you. Our procurement and engineering team will review your capability profile and contact you for upcoming industrial project tenders.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6"
          onClick={() => setSent(false)}
        >
          Submit another registration
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="formx-cut-x formx-edge formx-edge-x space-y-4 border border-line bg-white p-6 md:p-8"
    >
      <Field label="Company name" name="company" required />
      <Field label="Contact person" name="contact" required />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" required />
      </div>

      {/* Category multi-select chips */}
      <div>
        <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
          Categories of work / specialisation
        </span>
        <div className="flex flex-wrap gap-2 mb-3">
          {VENDOR_CATEGORIES.map((cat) => {
            const active = selectedCategories.includes(cat);
            return (
              <button
                key={cat}
                type="button"
                onClick={() =>
                  setSelectedCategories((prev) =>
                    prev.includes(cat)
                      ? prev.filter((c) => c !== cat)
                      : [...prev, cat],
                  )
                }
                className={[
                  "inline-flex items-center gap-1.5 border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.06em] transition-all duration-200",
                  active
                    ? "border-x-red bg-x-red text-white"
                    : "border-line text-ink-muted hover:border-x-red/50 hover:text-ink",
                ].join(" ")}
              >
                {active && <Check className="size-3" />}
                {cat}
              </button>
            );
          })}
        </div>
        {selectedCategories.length === 0 && (
          <Field label="Other category" name="category" placeholder="e.g. Cleanroom equipment" />
        )}
      </div>

      <Field label="City / Base location" name="city" required />

      <label className="block">
        <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
          Brief capability note / major clients
        </span>
        <textarea
          name="note"
          rows={4}
          required
          placeholder="Mention major industrial projects, certifications, or plant capacity..."
          className="w-full border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-x-red"
        />
      </label>

      {errorMsg ? <p className="text-[13px] text-x-red">{errorMsg}</p> : null}

      <Button type="submit" variant="primary" className="gap-2" disabled={loading}>
        <Send className="size-4" />
        {loading ? "Submitting..." : "Submit vendor registration"}
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
        {label}
        {required ? <span className="text-x-red"> *</span> : null}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-x-red"
      />
    </label>
  );
}
