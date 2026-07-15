"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

export function VendorForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="border border-line bg-[#fafafa] p-8">
        <h2 className="font-display text-2xl font-bold text-ink">
          Registration received
        </h2>
        <p className="mt-3 text-sm text-ink-muted">
          Thank you. Our procurement team will review your details and connect
          if there is a relevant opportunity.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6"
          onClick={() => setSent(false)}
        >
          Submit another
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 border border-line p-6 md:p-8"
    >
      <Field label="Company name" name="company" required />
      <Field label="Contact person" name="contact" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="Phone" name="phone" type="tel" required />
      <Field label="Category / specialisation" name="category" required />
      <Field label="City" name="city" />
      <label className="block">
        <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
          Brief capability note
        </span>
        <textarea
          name="note"
          rows={4}
          required
          className="w-full border border-line bg-white px-4 py-3 text-sm outline-none focus:border-x-red"
        />
      </label>
      <Button type="submit" variant="primary">
        Submit registration
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full border border-line bg-white px-4 py-3 text-sm outline-none focus:border-x-red"
      />
    </label>
  );
}
