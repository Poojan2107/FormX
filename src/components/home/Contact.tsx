"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Check, MessageSquare } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FormMessage } from "@/components/ui/FormMessage";
import { Reveal } from "@/components/ui/Reveal";
import { validateContact, type ContactErrors } from "@/lib/formValidation";
import { cn } from "@/lib/cn";

/** ASI + brochure typologies only — no mega chip wall */
const SERVICE_OPTIONS = [
  "Architecture",
  "Structure",
  "Infrastructure",
  "Industrial Facilities",
  "High-Rise & Residential",
  "Institutional & Commercial",
  "Strengthening & Retrofitting",
];

type Errors = ContactErrors;

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [formError, setFormError] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const formRef = useRef<HTMLFormElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const area = params.get("area");
    const crane = params.get("crane");
    const type = params.get("type");
    if (!area && !crane && !type) return;
    const timer = window.setTimeout(() => {
      setSelectedServices((prev) =>
        prev.includes("Structure") ? prev : [...prev, "Structure"],
      );
    }, 0);
    if (messageRef.current) {
      const typeLabel =
        type === "peb"
          ? "PEB Steel Frame"
          : type === "rcc"
            ? "Heavy RCC Frame"
            : type === "hybrid"
              ? "Hybrid Steel-RCC"
              : "";
      messageRef.current.value = [
        "Enquiry from the Industrial Structural & PEB Load Estimator.",
        area ? `Facility area: ${Number(area).toLocaleString()} sq.ft` : null,
        crane ? `EOT crane capacity: ${crane} tonnes` : null,
        type ? `Structural system: ${typeLabel}` : null,
      ]
        .filter(Boolean)
        .join("\n");
    }
    return () => window.clearTimeout(timer);
  }, []);

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

    const next = validateContact({ name, email, message, phone });
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
      setSelectedServices([]);
    } catch {
      setFormError("Something went wrong. Please try again or reach us on WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-32 border-b border-line bg-white py-16 md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-start lg:gap-16">
          <Reveal>
            <p className="eyebrow text-x-red">Facility brief</p>
            <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
              Brief FORMX
            </h2>
            <p className="mt-4 max-w-[44ch] text-[15px] leading-[1.85] text-ink/55">
              Share facility type, location, and constraints. FormX starts with what must be
              resolved before issue.
            </p>

            {sent ? (
              <div className="mt-10 border-y border-ink/[0.08] py-8" role="status">
                <p className="font-display text-lg font-extrabold text-ink">Thank you</p>
                <p className="mt-2 text-sm leading-[1.75] text-ink/55">
                  Your enquiry has been received. A FORMX lead will connect shortly.
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
                className="mt-10 space-y-5"
                noValidate
                aria-busy={loading}
              >
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-9999px", opacity: 0 }}
                />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" name="name" required error={errors.name} />
                  <Field label="Company" name="company" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    required
                    error={errors.email}
                  />
                  <Field label="Phone" name="phone" type="tel" error={errors.phone} />
                </div>
                <div>
                  <span className="mb-3 block font-label text-[10px] tracking-[0.16em] text-ink/40">
                    Scope · optional
                  </span>
                  <div className="flex flex-wrap gap-x-5 gap-y-3">
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
                            "inline-flex items-center gap-1.5 font-label text-[10px] tracking-[0.14em] transition-colors",
                            active
                              ? "text-x-red underline decoration-2 underline-offset-6"
                              : "text-ink/40 hover:text-ink",
                          )}
                        >
                          {active ? <Check className="size-3" /> : null}
                          {svc}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <label className="block">
                  <span className="mb-2 block font-label text-[10px] tracking-[0.16em] text-ink/40">
                    Message
                  </span>
                  <textarea
                    ref={messageRef}
                    name="message"
                    rows={5}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={cn(
                      "w-full border bg-[#fafaf8] px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-x-red",
                      errors.message ? "border-x-red" : "border-ink/[0.12]",
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
                  {loading ? "Sending…" : "Submit facility brief"}
                </Button>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.08} className="lg:sticky lg:top-28">
            <div className="border border-ink/[0.08] bg-[#0a0a09] p-7 text-white md:p-8">
              <p className="eyebrow text-x-red">Direct</p>
              <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight">
                Design <span className="text-x-red">|</span> Engineering
              </h2>
              <p className="mt-3 text-[14px] leading-[1.8] text-white/50">
                Architecture · Structure · Infrastructure — one accountable window from concept to
                GFC.
              </p>

              <div className="mt-8 space-y-5 border-t border-white/10 pt-7">
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-[14px] text-white/75 transition-colors hover:text-x-red"
                >
                  <Phone className="size-4 shrink-0 text-x-red" />
                  {site.phone}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 text-[14px] text-white/75 transition-colors hover:text-x-red"
                >
                  <Mail className="size-4 shrink-0 text-x-red" />
                  {site.email}
                </a>
                <p className="flex items-start gap-3 text-[14px] leading-[1.7] text-white/55">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-x-red" />
                  {site.addressDetail}
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fx-btn-primary justify-center"
                >
                  <MessageSquare className="size-3.5" />
                  WhatsApp FORMX
                </a>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 border border-white/15 px-4 py-3.5 font-label text-[10px] tracking-[0.18em] text-white/70 transition-colors hover:border-x-red hover:text-x-red"
                >
                  Call the studio
                </a>
              </div>
            </div>
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
      <span className="mb-2 block font-label text-[10px] tracking-[0.16em] text-ink/40">
        {label}
        {required ? <span className="text-x-red"> *</span> : null}
      </span>
      <input
        name={name}
        type={type}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          "w-full border bg-[#fafaf8] px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-x-red",
          error ? "border-x-red" : "border-ink/[0.12]",
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
