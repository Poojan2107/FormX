import type { Metadata, Viewport } from "next";
import { ViewTransition } from "react";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { AppShell } from "@/components/layout/AppShell";
import { JsonLd } from "@/components/shared/JsonLd";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import "./globals.css";

/**
 * FormX type system:
 * - Montserrat → brand / display / labels (matches lockup geometry)
 * - Source Sans 3 → reading voice (calmer body, less shout)
 */
const formxDisplay = Montserrat({
  variable: "--font-formx-family",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const formxBody = Source_Sans_3({
  variable: "--font-body-family",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

import { isEventMode } from "@/config/siteMode";

export const metadata: Metadata = {
  metadataBase: new URL("https://formxconsultants.com"),
  alternates: {
    canonical: "https://formxconsultants.com",
  },
  title: {
    default: "FormX Consultants | Where Vision Takes Form",
    template: "%s | FormX Consultants",
  },
  description:
    "FORM× Consultants — Ahmedabad. Architecture, Structure and Infrastructure for industrial and building facilities across India. Where Vision Takes Form.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "FormX Consultants",
    title: "FormX Consultants | Where Vision Takes Form",
    description:
      "Architecture, Structure and Infrastructure from Ahmedabad. Where Vision Takes Form.",
    images: [
      {
        url: "/formx-logo-solid.png",
        width: 1200,
        height: 630,
        alt: "FormX Consultants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FormX Consultants | Where Vision Takes Form",
    description:
      "Architecture, Structure and Infrastructure — construction-ready design from Ahmedabad.",
    images: ["/formx-logo-solid.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const eventMode = isEventMode();

  return (
    <html lang="en" className={`${formxDisplay.variable} ${formxBody.variable} h-full`}>
      <body
        className={`flex min-h-dvh flex-col overflow-x-clip bg-bg antialiased ${
          eventMode ? "font-display text-ink" : "font-body text-ink"
        }`}
      >
        <ScrollProgress />
        <a href="#main" className="skip-link sr-only">
          Skip to content
        </a>
        <JsonLd />
        <AppShell>
          <main id="main" className="min-w-0 flex-1">
            <ViewTransition
              enter={{
                "nav-forward": "nav-forward",
                "nav-back": "nav-back",
                default: "none",
              }}
              exit={{
                "nav-forward": "nav-forward",
                "nav-back": "nav-back",
                default: "none",
              }}
              default="none"
            >
              {children}
            </ViewTransition>
          </main>
          <Footer />
        </AppShell>
      </body>
    </html>
  );
}
