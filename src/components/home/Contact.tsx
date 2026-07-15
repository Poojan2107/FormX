"use client";

import { FormEvent, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";

type Errors = Partial<Record<"name" | "email" | "message" | "phone", string>>;

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [formError, setFormError] = useState("");

  const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hello FormX — I'd like to discuss a facility project.",
  )}`;

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError("");
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const message = String(fd.get("message") || "").trim();
    const company = String(fd.get("company") || "").trim();

    const next: Errors = {};
    if (name.length < 2) next.name = "Please enter your full name.";
    if (!isEmail(email)) next.email = "Enter a valid work email.";
    if (message.length < 10) next.message = "Add a short note (at least 10 characters).";
    if (phone && phone.replace(/\D/g, "").length < 8) {
      next.phone = "Enter a valid phone number.";
    }
    setErrors(next);
    if (Object.keys(next).length) return;

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message, company }),
      });
      if (!res.ok) throw new Error("failed");
      setSent(true);
      e.currentTarget.reset();
    } catch {
      setFormError("Something went wrong. Please try again or reach us on WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-32 bg-white section-y">
      <Container>
        <div className="grid overflow-hidden border border-line lg:grid-cols-2">
          <Reveal className="bg-black p-5 text-white sm:p-8 md:p-12">
            <Logo invert variant="full" />
            <h2 className="mt-8 font-display text-3xl font-bold tracking-tight md:text-[2.15rem]">
              Design <span className="text-x-red">|</span> Engineering
            </h2>
            <p className="mt-4 max-w-md text-[14px] leading-[1.7] text-white/60">
              Share your project requirements and our team will respond with the
              information you need to move forward.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="flex min-w-0 items-center gap-3 break-words text-[14px] text-white/75 transition-colors hover:text-x-red"
              >
                <Phone className="size-4 text-x-red" />
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex min-w-0 items-center gap-3 break-words text-[14px] text-white/75 transition-colors hover:text-x-red"
              >
                <Mail className="size-4 text-x-red" />
                {site.email}
              </a>
              <p className="flex min-w-0 items-start gap-3 break-words text-[14px] text-white/75">
                <MapPin className="mt-0.5 size-4 shrink-0 text-x-red" />
                {site.addressDetail}
              </p>
            </div>

            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex border border-white/25 px-4 py-2.5 text-[12px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-x-red hover:text-x-red"
            >
              WhatsApp FormX
            </a>
          </Reveal>

          <Reveal delay={0.08} className="border border-line bg-white p-5 sm:p-8 md:p-12">
            <SectionHeading
              eyebrow="Send a message"
              title="Start a conversation"
              description="Tell us about your facility, timeline, and scope."
            />

            {sent ? (
              <div className="mt-10 border border-line bg-white p-6" role="status">
                <p className="font-display text-lg font-bold text-ink">Thank you</p>
                <p className="mt-2 text-sm text-ink-muted">
                  Your enquiry has been received. A FormX lead will connect shortly.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  className="mt-6"
                  onClick={() => setSent(false)}
                >
                  Send another
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-8 space-y-4" noValidate>
                <Field
                  label="Full name"
                  name="name"
                  required
                  error={errors.name}
                />
                <Field label="Company" name="company" />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  required
                  error={errors.email}
                />
                <Field
                  label="Phone"
                  name="phone"
                  type="tel"
                  error={errors.phone}
                />
                <label className="block">
                  <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                    Message
                  </span>
                  <textarea
                    name="message"
                    rows={4}
                    aria-invalid={Boolean(errors.message)}
                    className={cn(
                      "w-full border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-x-red",
                      errors.message ? "border-x-red" : "border-line",
                    )}
                  />
                  {errors.message ? (
                    <span className="mt-1.5 block text-[12px] text-x-red">
                      {errors.message}
                    </span>
                  ) : null}
                </label>
                {formError ? (
                  <p className="text-[13px] text-x-red" role="alert">
                    {formError}
                  </p>
                ) : null}
                <Button type="submit" variant="primary" className="mt-2" disabled={loading}>
                  {loading ? "Sending…" : "Submit enquiry"}
                </Button>
              </form>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
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
        aria-invalid={Boolean(error)}
        className={cn(
          "w-full border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-x-red",
          error ? "border-x-red" : "border-line",
        )}
      />
      {error ? (
        <span className="mt-1.5 block text-[12px] text-x-red">{error}</span>
      ) : null}
    </label>
  );
}
