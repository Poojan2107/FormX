"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Check,
  MessageSquare,
  Clock,
  ShieldCheck,
  Layers,
} from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FormMessage } from "@/components/ui/FormMessage";
import { Reveal } from "@/components/ui/Reveal";
import { validateContact, type ContactErrors } from "@/lib/formValidation";
import { cn } from "@/lib/cn";

const SERVICE_OPTIONS = [
  "Architectural Drawings",
  "Structural Engineering",
  "Civil Engineering",
  "Site Infrastructure",
  "Sustainable Design",
  "Project Management",
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
        prev.includes("Structural Engineering") ? prev : [...prev, "Structural Engineering"],
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
    <section id="contact" className="scroll-mt-32 bg-white section-y">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-8">
          <Reveal className="border border-line bg-white p-5 sm:p-7">
            <SectionHeading
              eyebrow="Send a message"
              title="Brief FORMX on your facility"
              description="Share facility type, location, and constraints. FormX starts with what must be resolved before issue."
            />

            {sent ? (
              <div className="mt-8 border border-line bg-[#fafafa] p-5" role="status">
                <p className="font-display text-lg font-bold text-ink">Thank you</p>
                <p className="mt-2 text-sm text-ink-muted">
                  Your enquiry has been received. A FORMX lead will connect shortly.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  className="mt-5"
                  onClick={() => setSent(false)}
                >
                  Send another
                </Button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={onSubmit}
                className="mt-6 space-y-3.5"
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
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" name="name" required error={errors.name} />
                  <Field label="Company" name="company" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
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
                </div>
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
                    ref={messageRef}
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
                  {loading ? "Sending…" : "Submit facility brief"}
                </Button>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.08} className="space-y-5">
            <div className="formx-cut-lg formx-edge formx-edge-lg bg-[#141414] p-6 text-white sm:p-8">
              <p className="font-display text-[10px] font-bold uppercase tracking-[0.24em] text-x-red">
                Direct lead channel
              </p>
              <h2 className="mt-2 font-display text-2xl font-extrabold uppercase tracking-tight">
                Design <span className="text-x-red">|</span> Engineering
              </h2>
              <p className="mt-3 max-w-[40ch] text-[13px] leading-relaxed text-white/55">
                Architecture, Structure &amp; Infrastructure — one accountable window from concept to GFC.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-[14px] text-white/80 transition-colors hover:text-x-red"
                >
                  <span className="flex size-9 items-center justify-center border border-white/15 bg-white/5 text-x-red">
                    <Phone className="size-4" />
                  </span>
                  {site.phone}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 text-[14px] text-white/80 transition-colors hover:text-x-red"
                >
                  <span className="flex size-9 items-center justify-center border border-white/15 bg-white/5 text-x-red">
                    <Mail className="size-4" />
                  </span>
                  {site.email}
                </a>
                <p className="flex items-start gap-3 text-[14px] text-white/70">
                  <span className="flex size-9 shrink-0 items-center justify-center border border-white/15 bg-white/5 text-x-red">
                    <MapPin className="size-4" />
                  </span>
                  {site.addressDetail}
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 border border-x-red/40 bg-x-red/10 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-x-red/20"
                >
                  <MessageSquare className="size-3.5" />
                  WhatsApp FORMX
                </a>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="inline-flex flex-1 items-center justify-center gap-2 border border-white/20 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-x-red hover:text-x-red"
                >
                  <Phone className="size-3.5 text-x-red" />
                  Call now
                </a>
              </div>
            </div>

            <div className="grid gap-3">
              {[
                {
                  icon: Clock,
                  title: "Clear first response",
                  body: "Share facility type, location and constraints — we reply with what needs resolving before issue.",
                },
                {
                  icon: ShieldCheck,
                  title: "IS & NBC aligned",
                  body: "Structural and statutory packages coordinated to Indian codes before drawings leave the studio.",
                },
                {
                  icon: Layers,
                  title: "Architecture · Structure · Infrastructure",
                  body: "One accountable window from concept through construction-ready documentation.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-3 border border-line bg-[#fafafa] p-4"
                >
                  <item.icon className="size-5 shrink-0 text-x-red" />
                  <div>
                    <p className="font-display text-[12px] font-bold uppercase tracking-tight text-ink">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-[12px] leading-relaxed text-ink-muted">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
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
