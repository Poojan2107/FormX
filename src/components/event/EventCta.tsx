"use client";

import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { eventCta } from "@/data/eventLanding";
import { site } from "@/data/site";

export function EventCta() {
  const reduce = useReducedMotion();

  return (
    <section
      id="contact"
      className="fx-grain relative scroll-mt-[5.75rem] overflow-hidden bg-[#0a0a09] text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 80% 20%, rgba(224,49,40,0.25), transparent 55%)",
        }}
      />
      {!reduce ? (
        <div
          aria-hidden
          className="event-scan-line pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent via-x-red/15 to-transparent"
        />
      ) : null}

      <div className="relative mx-auto max-w-[1400px]">
        {/* Top CTA split section */}
        <div className="grid items-center gap-12 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-8 inline-flex items-center gap-2.5 border border-x-red/40 px-3 py-1.5">
                <span
                  className={`size-2 rounded-full bg-x-red ${reduce ? "" : "event-status-blink"}`}
                  aria-hidden
                />
                <span className="font-label text-[10px] font-bold uppercase tracking-[0.28em] text-x-red">
                  Spec 06 · Issue for construction
                </span>
              </div>

              <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-black uppercase leading-[0.95] tracking-[-0.03em] text-white">
                Let’s shape
                <br />
                your next
                <br />
                <span className="text-x-red">facility</span>
              </h2>

              <p className="mt-8 max-w-lg font-display text-[clamp(1.05rem,2vw,1.3rem)] leading-relaxed text-white/60">
                {eventCta.brochureNote}
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <motion.a
                  href={site.brochurePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={reduce ? undefined : { y: -3, scale: 1.02 }}
                  className="formx-cut-sm inline-flex items-center gap-2 border-[1.5px] border-x-red bg-x-red px-10 py-4 font-label text-[13px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_10px_28px_-8px_rgba(224,49,40,0.5)] transition-all duration-300 hover:bg-white hover:text-x-red hover:shadow-[0_14px_36px_-8px_rgba(224,49,40,0.6)]"
                >
                  Download Brochure
                  <ArrowUpRight className="size-4" />
                </motion.a>
                <motion.a
                  href={site.linkedinCompany}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={reduce ? undefined : { y: -3 }}
                  className="formx-cut-sm inline-flex items-center gap-2 border-[1.5px] border-white/25 bg-transparent px-10 py-4 font-label text-[13px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-x-red hover:bg-white/5 hover:text-x-red"
                >
                  LinkedIn
                  <ArrowUpRight className="size-4" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right CAD spec badge card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative border border-white/15 bg-white/[0.03] p-8 backdrop-blur-xs md:p-10"
            >
              <span aria-hidden className="absolute left-2.5 top-2.5 size-3 border-l-2 border-t-2 border-x-red" />
              <span aria-hidden className="absolute right-2.5 top-2.5 size-3 border-r-2 border-t-2 border-x-red" />
              <span aria-hidden className="absolute bottom-2.5 left-2.5 size-3 border-b-2 border-l-2 border-x-red" />
              <span aria-hidden className="absolute bottom-2.5 right-2.5 size-3 border-b-2 border-r-2 border-x-red" />

              <p className="font-label text-[10px] font-bold uppercase tracking-[0.28em] text-x-red">
                FormX Digital HQ
              </p>
              <p className="mt-4 font-display text-2xl font-bold uppercase tracking-wide text-white">
                Where Vision Takes <span className="text-x-red">Form</span>
              </p>
              <div className="mt-6 space-y-3 border-t border-white/10 pt-6 font-label text-[10.5px] uppercase tracking-[0.2em] text-white/50">
                <p className="flex justify-between">
                  <span>Location</span>
                  <span className="text-white">Ahmedabad, IN</span>
                </p>
                <p className="flex justify-between">
                  <span>Status</span>
                  <span className="text-x-red">Taking Form</span>
                </p>
                <p className="flex justify-between">
                  <span>Services</span>
                  <span className="text-white">Arch · Struct · Infra</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom 3-column contact details strip */}
        <div className="grid border-t border-white/15 bg-white/[0.02] md:grid-cols-3">
          {[
            {
              icon: MapPin,
              label: "Studio",
              body: site.addressDetail,
              href: undefined as string | undefined,
            },
            {
              icon: Mail,
              label: "Email",
              body: site.email,
              href: `mailto:${site.email}`,
            },
            {
              icon: Phone,
              label: "Phone",
              body: site.phone,
              href: `tel:${site.phone.replace(/\s/g, "")}`,
            },
          ].map((item, i) => (
            <div
              key={item.label}
              className={`group relative flex flex-1 flex-col justify-center gap-3 px-6 py-10 transition-all duration-300 hover:bg-white/[0.04] md:px-10 ${
                i > 0 ? "border-t border-white/10 md:border-t-0 md:border-l" : ""
              }`}
            >
              <span aria-hidden className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-x-red/0 to-transparent transition-all duration-300 group-hover:via-x-red" />
              <div className="flex items-center gap-3">
                <item.icon className="size-4 text-x-red transition-transform duration-300 group-hover:scale-110" />
                <p className="font-label text-[10px] font-bold uppercase tracking-[0.28em] text-x-red">
                  {item.label}
                </p>
              </div>
              {item.href ? (
                <a
                  href={item.href}
                  className="font-display text-[clamp(1.05rem,2vw,1.35rem)] font-medium text-white/80 transition-colors group-hover:text-white"
                >
                  {item.body}
                </a>
              ) : (
                <p className="font-display text-[clamp(1.05rem,2vw,1.35rem)] font-medium leading-snug text-white/80 transition-colors group-hover:text-white">
                  {item.body}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
