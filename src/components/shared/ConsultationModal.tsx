"use client";

import { FormEvent, useEffect, useState } from "react";
import { X, CheckCircle2, AlertCircle, ArrowRight, Mail, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
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

export function ConsultationModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setSubmitted(false);
      setErrorMsg("");
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

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
      setErrorMsg(
        "Unable to send enquiry right now. Please call us directly at " +
          site.phone +
          " or email " +
          site.email,
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Dark Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.1 }}
            className="relative z-10 w-full max-w-lg sm:max-w-xl rounded-xs border-2 border-ink/20 bg-[#faf9f5] p-6 sm:p-8 md:p-10 shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button (X) */}
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-2 text-ink/60 transition-colors hover:bg-ink/10 hover:text-x-red cursor-pointer"
              aria-label="Close consultation modal"
            >
              <X className="size-6" />
            </button>

            {submitted ? (
              /* Success / Approved Popup View */
              <div className="py-6 text-center">
                <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-x-red/10 text-x-red">
                  <CheckCircle2 className="size-10" />
                </div>

                <h3 className="mt-5 font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-ink">
                  Consultation Approved & Submitted!
                </h3>

                <div className="mt-3 h-[2px] w-12 bg-x-red mx-auto" />

                <p className="mt-4 font-body text-[15px] sm:text-[16px] leading-relaxed text-ink/80 max-w-md mx-auto">
                  Thank you for connecting with <span className="font-bold text-ink">FormX Consultants</span>. Your consultation request has been received by our engineering team. We will review your project details and get back to you within 24 hours.
                </p>

                <div className="mt-6 border-t border-b border-ink/10 py-4 font-label text-[12px] uppercase tracking-wider text-ink/60 space-y-1">
                  <p>Direct Inquiries: <span className="text-ink font-bold">{site.email}</span></p>
                  <p>Call Us: <span className="text-ink font-bold">{site.phone}</span></p>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="formx-cut-sm w-full sm:w-auto bg-x-red px-8 py-3.5 font-label text-[12px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-ink cursor-pointer"
                  >
                    Done & Close
                  </button>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto font-label text-[11px] font-bold uppercase tracking-[0.16em] text-ink/70 underline underline-offset-4 hover:text-x-red transition-colors py-2"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              /* Form View ("Start The Conversation") */
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-[2px] w-6 bg-x-red" />
                  <span className="font-label text-[11px] font-bold uppercase tracking-[0.24em] text-x-red">
                    INQUIRIES & COLLABORATION
                  </span>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-ink">
                  Start The Conversation
                </h2>

                <p className="mt-2 font-body text-[14.5px] sm:text-[15.5px] text-ink/70 leading-relaxed">
                  Fill the form for project discussions, collaborations, or general enquiries.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {/* Name field */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Name*"
                      className="w-full border border-line/90 bg-[#f2f0e8]/80 px-4 py-3.5 text-[14.5px] font-medium text-ink placeholder:text-ink/45 outline-none transition-all focus:border-x-red focus:bg-white focus:shadow-xs"
                    />
                  </div>

                  {/* Email & Mobile 2-column grid */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email*"
                      className="w-full border border-line/90 bg-[#f2f0e8]/80 px-4 py-3.5 text-[14.5px] font-medium text-ink placeholder:text-ink/45 outline-none transition-all focus:border-x-red focus:bg-white focus:shadow-xs"
                    />
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Mobile no*"
                      className="w-full border border-line/90 bg-[#f2f0e8]/80 px-4 py-3.5 text-[14.5px] font-medium text-ink placeholder:text-ink/45 outline-none transition-all focus:border-x-red focus:bg-white focus:shadow-xs"
                    />
                  </div>

                  {/* Purpose of Enquiry Select */}
                  <div>
                    <select
                      name="purpose"
                      defaultValue=""
                      className="w-full border border-line/90 bg-[#f2f0e8]/80 px-4 py-3.5 text-[14.5px] font-medium text-ink/80 outline-none transition-all focus:border-x-red focus:bg-white focus:shadow-xs appearance-none cursor-pointer"
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
                      rows={3}
                      placeholder="Message*"
                      className="w-full border border-line/90 bg-[#f2f0e8]/80 px-4 py-3.5 text-[14.5px] font-medium text-ink placeholder:text-ink/45 outline-none transition-all focus:border-x-red focus:bg-white focus:shadow-xs resize-y"
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
                      className="formx-cut-sm group relative inline-flex w-full items-center justify-center gap-2 border-[1.5px] border-ink bg-[#1a1918] px-8 py-4 font-label text-[12px] font-bold uppercase tracking-[0.2em] text-white shadow-md transition-all duration-300 hover:bg-x-red hover:border-x-red disabled:opacity-50 cursor-pointer"
                    >
                      {loading ? "Submitting..." : "Get In Touch"}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>

                {/* Footer direct contact details strip */}
                <div className="mt-6 pt-4 border-t border-line/80 flex flex-wrap items-center justify-between gap-3 text-xs font-body text-ink/75">
                  <a
                    href={`mailto:${site.email}`}
                    className="flex items-center gap-1.5 hover:text-x-red transition-colors"
                  >
                    <Mail className="size-3.5 text-x-red" />
                    <span>{site.email}</span>
                  </a>
                  <a
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-1.5 hover:text-x-red transition-colors"
                  >
                    <Phone className="size-3.5 text-x-red" />
                    <span>{site.phone}</span>
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
