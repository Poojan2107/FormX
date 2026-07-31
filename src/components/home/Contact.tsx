"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Check } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FormMessage } from "@/components/ui/FormMessage";
import { Reveal } from "@/components/ui/Reveal";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";

const SERVICE_OPTIONS = [
  "Architectural Drawings",
  "Site Infrastructure",
  "Structural Engineering",
  "Civil Engineering",
  "Mechanical Utilities",
  "HVAC & Refrigeration",
  "Electrical Engineering",
  "Fire Protection",
  "Sustainable Design",
  "Project Management",
];

type Errors = Partial<Record<"name" | "email" | "message" | "phone", string>>;

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [formError, setFormError] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const el = formRef.current?.querySelector<HTMLElement>("[aria-invalid='true']");
    el?.focus();
  }, [errors]);

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
        body: JSON.stringify({ name, email, phone, message, company, services: selectedServices }),
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
          <Reveal className="formx-cut-lg formx-edge formx-edge-lg bg-[#1a1a1a] p-5 text-white sm:p-8 md:p-12">
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

          <Reveal delay={0.08} className="formx-cut-bl border border-line bg-white p-5 sm:p-8 md:p-12">
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
              <form
                ref={formRef}
                onSubmit={onSubmit}
                className="mt-8 space-y-4"
                noValidate
                aria-busy={loading}
              >
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
                {/* Service interest picker */}
                <div>
                  <span className="mb-2.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                    Services interested in
                    <span className="ml-1 text-ink/30">(optional)</span>
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {SERVICE_OPTIONS.map((svc) => {
                      const active = selectedServices.includes(svc);
                      return (
                        <button
                          key={svc}
                          type="button"
                          aria-pressed={active}
                          onClick={() =>
                            setSelectedServices((prev) =>
                              prev.includes(svc)
                                ? prev.filter((s) => s !== svc)
                                : [...prev, svc],
                            )
                          }
                          className={cn(
                            "inline-flex items-center gap-1.5 border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] transition-all duration-200",
                            active
                              ? "border-x-red bg-x-red text-white"
                              : "border-line text-ink-muted hover:border-x-red/50 hover:text-ink",
                          )}
                        >
                          {active && <Check className="size-3" />}
                          {svc}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <label className="block">
                  <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                    Message
                  </span>
                  <textarea
                    name="message"
                    rows={4}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={cn(
                      "w-full border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-x-red",
                      errors.message ? "border-x-red" : "border-line",
                    )}
                  />
                  {errors.message ? (
                    <FormMessage id="message-error" className="mt-1.5">
                      {errors.message}
                    </FormMessage>
                  ) : null}
                </label>
                {formError ? (
                  <FormMessage className="text-[13px]">{formError}</FormMessage>
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
  const errorId = `${name}-error`;
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
        aria-describedby={error ? errorId : undefined}
        className={cn(
          "w-full border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-x-red",
          error ? "border-x-red" : "border-line",
        )}
      />
      {error ? (
        <FormMessage id={errorId} className="mt-1.5">
          {error}
        </FormMessage>
      ) : null}
    </label>
  );
}
