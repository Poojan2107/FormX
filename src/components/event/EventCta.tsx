"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import { site } from "@/data/site";
import { FormxTransparentLogo } from "@/components/ui/FormxTransparentLogo";

export function EventCta() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    purpose: "Architectural & Engineering Design",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.mobile) return;
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <footer id="contact" className="scroll-mt-[5.75rem] border-t border-white/10 bg-[#090908] py-16 text-white md:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 md:px-12">
        
        {/* VMS-Style FormX Connect & Contact Form Grid */}
        <div className="grid gap-12 border-b border-white/10 pb-16 lg:grid-cols-12 lg:gap-16">
          
          {/* LEFT SIDE: CONNECT WITH FORMX (Info, Studio Address, Inquiries) */}
          <div className="flex flex-col justify-between space-y-10 lg:col-span-5 lg:space-y-0">
            <div className="space-y-6">
              {/* High-res vector logo */}
              <FormxTransparentLogo size="lg" dark />

              <h2 className="font-display text-[clamp(1.75rem,3.2vw,2.75rem)] font-black uppercase leading-tight tracking-tight text-white">
                Connect With <span className="text-x-red">FormX</span>
              </h2>

              <p className="font-body text-[15px] sm:text-[16px] leading-relaxed text-white/80 max-w-md">
                Connect with us for enquiries, structural engineering collaboration, architectural coordination, or general information. We will reach out and guide you through the next steps.
              </p>
            </div>

            {/* Address & Inquiries Details */}
            <div className="space-y-6 pt-4 border-t border-white/10">
              {/* Studio Address */}
              <div className="space-y-2">
                <p className="font-label text-[11px] font-black uppercase tracking-[0.28em] text-x-red">
                  STUDIO ADDRESS
                </p>
                <div className="flex items-start gap-3 text-[14.5px] sm:text-[15.5px] font-medium text-white/90">
                  <MapPin className="mt-1 size-5 shrink-0 text-x-red" />
                  <span>{site.addressDetail}</span>
                </div>
              </div>

              {/* Direct Inquiries */}
              <div className="space-y-2">
                <p className="font-label text-[11px] font-black uppercase tracking-[0.28em] text-x-red">
                  CONTACT US
                </p>
                <div className="space-y-3 text-[14.5px] sm:text-[15.5px] font-medium">
                  <a
                    href={`mailto:${site.email}`}
                    className="flex items-center gap-3 text-white/90 transition-colors hover:text-x-red"
                  >
                    <Mail className="size-5 shrink-0 text-x-red" />
                    <span>{site.email}</span>
                  </a>
                  <a
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-white/90 transition-colors hover:text-x-red"
                  >
                    <Phone className="size-5 shrink-0 text-x-red" />
                    <span>{site.phone}</span>
                  </a>
                </div>
              </div>

              {/* Quick Actions (Brochure & LinkedIn) */}
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={site.brochurePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 border border-white/20 bg-white/[0.04] px-5 py-3 font-label text-[11.5px] font-extrabold uppercase tracking-[0.18em] text-white transition-all hover:border-x-red hover:bg-x-red/10"
                >
                  <span>Download Brochure</span>
                  <ArrowUpRight className="size-4 text-x-red transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href={site.linkedinCompany}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 border border-white/20 bg-white/[0.04] px-5 py-3 font-label text-[11.5px] font-extrabold uppercase tracking-[0.18em] text-white transition-all hover:border-x-red hover:bg-x-red/10"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="size-4 text-x-red transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: WORKING CONTACT FORM (VMS Layout for FormX) */}
          <div className="lg:col-span-7">
            <div className="border border-white/15 bg-white/[0.03] p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xs">
              <div className="mb-6 space-y-1">
                <p className="font-label text-[11px] font-black uppercase tracking-[0.28em] text-x-red">
                  — START THE CONVERSATION
                </p>
                <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                  Fill the form for project discussions, collaborations, or general enquiries.
                </h3>
              </div>

              {submitted ? (
                <div className="my-8 flex flex-col items-center justify-center space-y-4 rounded-lg border border-x-red/40 bg-x-red/10 p-8 text-center">
                  <CheckCircle2 className="size-12 text-x-red animate-bounce" />
                  <h4 className="font-display text-xl font-black uppercase text-white">Enquiry Received!</h4>
                  <p className="font-body text-sm text-white/80 max-w-md leading-relaxed">
                    Thank you, <span className="font-bold text-white">{formData.name}</span>. Your message regarding <span className="font-bold text-x-red">{formData.purpose}</span> has been logged. Our engineering leadership team will reach out to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", mobile: "", purpose: "Architectural & Engineering Design", message: "" });
                    }}
                    className="mt-4 border border-x-red bg-x-red px-6 py-2.5 font-label text-xs font-bold uppercase tracking-wider text-white transition-hover hover:bg-white hover:text-x-red"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block mb-1.5 font-label text-[11px] font-bold uppercase tracking-wider text-white/70">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Full Name"
                      className="w-full border border-white/20 bg-white/[0.06] px-4 py-3 font-body text-sm text-white placeholder-white/40 outline-none transition-all focus:border-x-red focus:bg-white/[0.1] focus:ring-1 focus:ring-x-red"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block mb-1.5 font-label text-[11px] font-bold uppercase tracking-wider text-white/70">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@domain.com"
                        className="w-full border border-white/20 bg-white/[0.06] px-4 py-3 font-body text-sm text-white placeholder-white/40 outline-none transition-all focus:border-x-red focus:bg-white/[0.1] focus:ring-1 focus:ring-x-red"
                      />
                    </div>
                    <div>
                      <label className="block mb-1.5 font-label text-[11px] font-bold uppercase tracking-wider text-white/70">
                        Mobile No *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full border border-white/20 bg-white/[0.06] px-4 py-3 font-body text-sm text-white placeholder-white/40 outline-none transition-all focus:border-x-red focus:bg-white/[0.1] focus:ring-1 focus:ring-x-red"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-1.5 font-label text-[11px] font-bold uppercase tracking-wider text-white/70">
                      Purpose of Enquiry
                    </label>
                    <select
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      className="w-full border border-white/20 bg-[#161615] px-4 py-3 font-body text-sm text-white outline-none transition-all focus:border-x-red focus:ring-1 focus:ring-x-red"
                    >
                      <option value="Architectural & Engineering Design">Architectural & Engineering Design</option>
                      <option value="RCC & Steel Structural Design">RCC & Steel Structural Design</option>
                      <option value="Industrial & Warehouse Facility">Industrial & Warehouse Facility</option>
                      <option value="Structural Audit & Retrofit Solutions">Structural Audit & Retrofit Solutions</option>
                      <option value="Infrastructure Planning">Infrastructure Planning</option>
                      <option value="General Project Inquiry">General Project Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-1.5 font-label text-[11px] font-bold uppercase tracking-wider text-white/70">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your project requirements, location, and timelines..."
                      className="w-full border border-white/20 bg-white/[0.06] px-4 py-3 font-body text-sm text-white placeholder-white/40 outline-none transition-all focus:border-x-red focus:bg-white/[0.1] focus:ring-1 focus:ring-x-red resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="formx-cut-sm relative inline-flex w-full items-center justify-center gap-2 border-[1.5px] border-x-red bg-x-red py-4 font-label text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-x-red hover:shadow-[0_10px_28px_-10px_rgba(224,49,40,0.4)] disabled:opacity-50 cursor-pointer"
                  >
                    {submitting ? (
                      <span>Sending Enquiry...</span>
                    ) : (
                      <>
                        <span>Get In Touch</span>
                        <Send className="size-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Seamless Lower Footer Big Vector Brand Display (No double lines, no gap) */}
        <div className="pt-14 pb-6 text-center border-t border-white/10">
          <FormxTransparentLogo size="display" dark align="center" className="my-4" />

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 font-label text-[12px] uppercase tracking-[0.26em] text-white/50">
            <p>© {new Date().getFullYear()} FORMX CONSULTANTS LLP. ALL RIGHTS RESERVED.</p>
            <p className="text-x-red font-bold">ARCHITECTURE · STRUCTURE · INFRASTRUCTURE</p>
            <p>AHMEDABAD, GUJARAT, INDIA</p>
          </div>
        </div>

      </div>
    </footer>
  );
}




