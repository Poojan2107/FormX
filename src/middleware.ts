import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isEventMode } from "@/config/siteMode";

/** Paths that stay reachable during the event one-pager. */
const EVENT_ALLOW = new Set([
  "/",
  "/robots.txt",
  "/sitemap.xml",
  "/manifest.webmanifest",
  "/favicon.ico",
  "/icon.png",
  "/apple-icon.png",
]);

export function middleware(request: NextRequest) {
  if (!isEventMode()) return NextResponse.next();

  const { pathname } = request.nextUrl;

  // Static assets, Next internals, APIs (brochure PDF, contact forms, etc.)
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/brochure") ||
    pathname.startsWith("/assets") ||
    pathname.includes(".") // files with extensions (png, pdf, etc.)
  ) {
    return NextResponse.next();
  }

  if (EVENT_ALLOW.has(pathname)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
