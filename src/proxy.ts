import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isEventMode } from "@/config/siteMode";

/** Paths that stay reachable during the event one-pager. */
const EVENT_ALLOW = new Set(["/"]);

export function proxy(request: NextRequest) {
  if (!isEventMode()) return NextResponse.next();

  const { pathname } = request.nextUrl;

  // Static assets, Next internals, APIs (brochure PDF, contact forms, etc.)
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/brochure") ||
    pathname.startsWith("/assets") ||
    pathname.includes(".")
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
  matcher: [
    /*
     * Do not run on metadata or static files. Next.js 16 500s /sitemap.xml
     * when this proxy wraps the metadata route.
     */
    "/((?!api|_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|sitemap.xml|robots.txt|manifest.webmanifest).*)",
  ],
};
