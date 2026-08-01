import Link from "next/link";
import { ArrowRight, Phone, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";

export function LeadStrip({
  title = "Planning a new industrial or commercial facility?",
  subtitle = "Engage FORMX engineering leads early for site zoning, structural grid optimization, and utility budget estimates.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="border-y border-line bg-gradient-to-r from-[#141414] via-[#1a1a1a] to-[#141414] py-10 text-white">
      <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="max-w-2xl prose-measure">
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.24em] text-x-red">
            Direct Lead Engagement
          </span>
          <h3 className="mt-1 font-display text-xl font-bold uppercase tracking-tight text-white md:text-2xl">
            {title}
          </h3>
          <p className="mt-1.5 text-[13px] leading-relaxed text-white/60">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0 w-full sm:w-auto">
          <Link
            href="/contact"
            transitionTypes={["nav-forward"]}
            className="formx-cut-sm inline-flex items-center justify-center gap-2 bg-x-red px-6 py-3.5 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-white shadow-[0_4px_16px_rgba(222,48,36,0.35)] transition-all hover:bg-x-red-hover w-full sm:w-auto"
          >
            Request Facility Briefing <ArrowRight className="size-4" />
          </Link>
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-white/20 px-5 py-3.5 font-display text-[11px] font-bold uppercase tracking-[0.14em] text-white/80 transition-colors hover:border-emerald-400 hover:text-emerald-400 w-full sm:w-auto"
          >
            <MessageSquare className="size-3.5 text-emerald-400" />
            <span>WhatsApp</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
