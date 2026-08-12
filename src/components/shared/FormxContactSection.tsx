"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { MapPin, Mail, Phone, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { site } from "@/data/site";

const ENQUIRY_PURPOSES = [
  "Structural Design & Engineering",
  "Architectural Coordination & Planning",
  "Project Peer Review & Value Engineering",
  "Retrofitting & NDT Structural Audit",
  "BIM & 3D Tekla Modeling",
  "Site Infrastructure & Civil Support",
  "General Enquiry & Collaboration",
] as const;

export function FormxContactSection() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const purpose = String(fd.get("purpose") || "").trim();
    const message = String(fd.get("message") || "").trim();

    if (!name || !email || !phone || !message) {
      setErrorMsg("Please fill in all required fields (*)");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          company: purpose ? `Purpose: ${purpose}` : undefined,
          message: purpose ? `[${purpose}]\n${message}` : message,
          services: purpose ? [purpose] : [],
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
    } catch {
      setErrorMsg("Unable to send enquiry. Please call us directly or email " + site.email);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 relative isolate overflow-hidden bg-[#faf9f5] text-ink py-16 md:py-24 border-t border-line/80"
      aria-label="Connect With FormX"
    >
      {/* Background Structural CAD Grid Overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16">
        {/* Main 2-Column Section */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Title, Subtitle & Architectural Visual */}
          <div className="flex flex-col h-full justify-between text-center lg:text-left">
            <div>
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                <span className="h-[2px] w-6 bg-x-red" />
                <span className="font-label text-[11px] font-bold uppercase tracking-[0.24em] text-x-red">
                  INQUIRIES & COLLABORATION
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-black uppercase tracking-tight text-ink leading-tight text-center lg:text-left">
                Connect With FormX
              </h2>

              <p className="mt-4 font-body text-[15px] sm:text-[16.5px] font-medium leading-relaxed text-ink/75 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                Connect with us for enquiries, collaboration, or general information. We will reach out and guide you through the next steps.
              </p>

              {/* Architectural Image Card */}
              <div className="relative mt-8 overflow-hidden rounded-xs border border-line/80 bg-white p-2 shadow-xs">
                <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden bg-[#eeeae0] formx-cut-sm">
                  <Image
                    src="/assets/services/structural.jpg"
                    alt="FormX Structural & Architectural Engineering"
                    fill
                    className="object-cover object-center filter contrast-[1.03] transition-transform duration-700 hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent"
                  />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <span className="font-label text-[10px] font-bold uppercase tracking-[0.22em] text-white/90 bg-black/60 backdrop-blur-xs px-3 py-1 border border-white/20">
                      FORMX CONSULTANTS · AHMEDABAD
                    </span>
                    <span className="font-display font-black text-x-red text-xl">×</span>
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM LEFT: Address Block */}
            <div className="mt-10 pt-8 border-t border-line/80">
              <h3 className="font-display text-base font-bold underline tracking-wide text-ink underline-offset-4 text-center lg:text-left">
                Address:
              </h3>
              <div className="mt-3 flex items-start justify-center lg:justify-start gap-2.5 font-body text-[14.5px] sm:text-[15.5px] font-medium text-ink/85 max-w-lg mx-auto lg:mx-0 leading-relaxed text-left">
                <MapPin className="mt-1 size-4.5 shrink-0 text-x-red" />
                <span>
                  — {site.addressDetail}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Form & Contact Info */}
          <div className="flex flex-col h-full justify-between border-t lg:border-t-0 lg:border-l border-line/80 pt-10 lg:pt-0 lg:pl-12 text-center lg:text-left">
            <div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span className="font-display text-xl sm:text-2xl font-bold text-ink">
                  — Start The Conversation
                </span>
              </div>

              <p className="mt-2 font-body text-[14.5px] sm:text-[15.5px] text-ink/70 leading-relaxed text-center lg:text-left">
                Fill the form for project discussions, collaborations, or general enquiries.
              </p>

              {submitted ? (
                <div className="mt-8 border border-x-red/30 bg-x-red/[0.04] p-6 sm:p-8 formx-cut-sm">
                  <div className="flex items-center gap-3 text-x-red">
                    <CheckCircle2 className="size-6 shrink-0" />
                    <h3 className="font-display text-xl font-bold uppercase tracking-tight">
                      Enquiry Received
                    </h3>
                  </div>
                  <p className="mt-3 font-body text-[15px] text-ink/80 leading-relaxed">
                    Thank you for connecting with FormX Consultants. Our engineering team will review your project details and reach out within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 font-label text-[11px] font-bold uppercase tracking-[0.2em] text-x-red underline underline-offset-4 hover:text-ink transition-colors"
                  >
                    Submit Another Enquiry →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {/* Name field */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Name*"
                      className="w-full border border-line/90 bg-[#f2f0e8]/60 px-4 py-3.5 text-[14.5px] font-medium text-ink placeholder:text-ink/45 outline-none transition-all focus:border-x-red focus:bg-white focus:shadow-xs"
                    />
                  </div>

                  {/* Email & Mobile 2-column grid */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email*"
                      className="w-full border border-line/90 bg-[#f2f0e8]/60 px-4 py-3.5 text-[14.5px] font-medium text-ink placeholder:text-ink/45 outline-none transition-all focus:border-x-red focus:bg-white focus:shadow-xs"
                    />
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Mobile no*"
                      className="w-full border border-line/90 bg-[#f2f0e8]/60 px-4 py-3.5 text-[14.5px] font-medium text-ink placeholder:text-ink/45 outline-none transition-all focus:border-x-red focus:bg-white focus:shadow-xs"
                    />
                  </div>

                  {/* Purpose of Enquiry Select */}
                  <div>
                    <select
                      name="purpose"
                      defaultValue=""
                      className="w-full border border-line/90 bg-[#f2f0e8]/60 px-4 py-3.5 text-[14.5px] font-medium text-ink/80 outline-none transition-all focus:border-x-red focus:bg-white focus:shadow-xs appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%20%23111' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 1rem center",
                        backgroundSize: "1.2rem",
                      }}
                    >
                      <option value="" disabled>
                        Purpose of Enquiry
                      </option>
                      {ENQUIRY_PURPOSES.map((p) => (
                        <option key={p} value={p} className="text-ink bg-white py-1">
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message field */}
                  <div>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Message*"
                      className="w-full border border-line/90 bg-[#f2f0e8]/60 px-4 py-3.5 text-[14.5px] font-medium text-ink placeholder:text-ink/45 outline-none transition-all focus:border-x-red focus:bg-white focus:shadow-xs resize-y"
                    />
                  </div>

                  {errorMsg && (
                    <div className="flex items-center gap-2 text-x-red text-xs font-semibold">
                      <AlertCircle className="size-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="formx-cut-sm group relative inline-flex items-center gap-2 border-[1.5px] border-ink bg-[#1a1918] px-8 py-4 font-label text-[12px] font-bold uppercase tracking-[0.2em] text-white shadow-md transition-all duration-300 hover:bg-x-red hover:border-x-red disabled:opacity-50 cursor-pointer"
                    >
                      {loading ? "Submitting..." : "Get In Touch"}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* BOTTOM RIGHT: Contact Us Block */}
            <div className="mt-10 pt-8 border-t border-line/80">
              <h3 className="font-display text-base font-bold underline tracking-wide text-ink underline-offset-4">
                Contact Us
              </h3>
              <div className="mt-3 space-y-2 font-body text-[14.5px] sm:text-[15.5px] font-medium text-ink/85">
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2.5 text-ink/90 transition-colors hover:text-x-red"
                >
                  <Mail className="size-4.5 shrink-0 text-x-red" />
                  <span>— {site.email}</span>
                </a>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2.5 text-ink/90 transition-colors hover:text-x-red"
                >
                  <Phone className="size-4.5 shrink-0 text-x-red" />
                  <span>— {site.phone}</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
