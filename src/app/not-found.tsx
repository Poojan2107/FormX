import Link from "next/link";
import { ArrowRight, Home, Layers, Building2, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-[75vh] flex items-center bg-white py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          {/* Big geometric 404 display */}
          <div className="relative inline-block mb-6 select-none">
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
            The page you requested could not be located
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
            The link may be outdated or the page has moved. Explore our core sections below to find what you need.
          </p>

          {/* Quick links grid */}
          <div className="mt-10 grid gap-3 sm:grid-cols-3 text-left">
            <Link
              href="/"
              transitionTypes={["nav-back"]}
              className="formx-cut-x formx-edge formx-edge-x group flex flex-col justify-between border border-line bg-white p-5 transition-all hover:border-x-red/40 hover:shadow-[0_8px_24px_rgba(222,48,36,0.06)]"
            >
              <Home className="size-5 text-x-red" />
              <div className="mt-6">
                <p className="font-display text-sm font-bold text-ink group-hover:text-x-red">Home</p>
                <p className="mt-1 text-[11px] text-ink-muted">Back to overview</p>
              </div>
            </Link>

            <Link
              href="/services"
              transitionTypes={["nav-forward"]}
              className="formx-cut-x formx-edge formx-edge-x group flex flex-col justify-between border border-line bg-white p-5 transition-all hover:border-x-red/40 hover:shadow-[0_8px_24px_rgba(222,48,36,0.06)]"
            >
              <Layers className="size-5 text-x-red" />
              <div className="mt-6">
                <p className="font-display text-sm font-bold text-ink group-hover:text-x-red">Services</p>
                <p className="mt-1 text-[11px] text-ink-muted">10 disciplines</p>
              </div>
            </Link>

            <Link
              href="/projects"
              transitionTypes={["nav-forward"]}
              className="formx-cut-x formx-edge formx-edge-x group flex flex-col justify-between border border-line bg-white p-5 transition-all hover:border-x-red/40 hover:shadow-[0_8px_24px_rgba(222,48,36,0.06)]"
            >
              <Building2 className="size-5 text-x-red" />
              <div className="mt-6">
                <p className="font-display text-sm font-bold text-ink group-hover:text-x-red">Projects</p>
                <p className="mt-1 text-[11px] text-ink-muted">Facility portfolio</p>
              </div>
            </Link>
          </div>

          <div className="mt-10 flex justify-center gap-4">
            <Button href="/contact" variant="primary" className="gap-2">
              <Mail className="size-4" />
              Contact FormX
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
