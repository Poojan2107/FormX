import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
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
    <section className="border-y border-line bg-[#111] py-8 text-white md:py-9">
      <Container className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center md:gap-8">
        <div className="max-w-2xl">
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-x-red">
            Direct lead engagement
          </p>
          <h3 className="mt-1 font-display text-lg font-bold uppercase tracking-tight text-white md:text-xl">
            {title}
          </h3>
          <p className="mt-1.5 max-w-[55ch] text-[13px] leading-relaxed text-white/50">
            {subtitle}
          </p>
        </div>

        <div className="flex w-full flex-wrap items-center gap-2.5 sm:w-auto">
          <Link
            href="/contact"
            transitionTypes={["nav-forward"]}
            className="inline-flex flex-1 items-center justify-center gap-2 bg-x-red px-5 py-3 font-display text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-x-red-hover sm:flex-none"
          >
            Request briefing <ArrowRight className="size-3.5" />
          </Link>
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 border border-white/20 px-4 py-3 font-display text-[11px] font-bold uppercase tracking-[0.12em] text-white/70 transition-colors hover:border-emerald-400/50 hover:text-emerald-400 sm:flex-none"
          >
            <MessageSquare className="size-3.5 text-emerald-400" />
            WhatsApp
          </a>
        </div>
      </Container>
    </section>
  );
}
