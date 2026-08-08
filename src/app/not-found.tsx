import Link from "next/link";
import { Home } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { isEventMode } from "@/config/siteMode";

export default function NotFound() {
  const eventMode = isEventMode();

  return (
    <section className="flex min-h-[75vh] items-center bg-white py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="relative mb-6 inline-block select-none">
            <span className="font-display text-[7rem] font-extrabold leading-none tracking-tighter text-ink/10 sm:text-[9rem]">
              404
            </span>
            <span className="absolute inset-0 flex items-center justify-center font-display text-4xl font-bold uppercase text-x-red sm:text-5xl">
              Page Not Found
            </span>
          </div>

          <p className="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-x-red">
            Error 404
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {eventMode
              ? "This page isn’t part of the launch preview"
              : "The page you requested could not be located"}
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
            {eventMode
              ? "FormX’s full website is taking form. Return home for the one-page overview."
              : "The link may be outdated or the page has moved."}
          </p>

          <div className="mt-10 flex justify-center">
            <Link
              href="/"
              transitionTypes={["nav-back"]}
              className="formx-cut-x formx-edge formx-edge-x group inline-flex items-center gap-3 border border-line bg-white px-6 py-4 transition-all hover:border-x-red/40 hover:shadow-[0_8px_24px_rgba(222,48,36,0.06)]"
            >
              <Home className="size-5 text-x-red" />
              <span className="font-display text-sm font-bold text-ink group-hover:text-x-red">
                Back to FormX
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
