import type { Metadata, Viewport } from "next";
import { ViewTransition } from "react";
import { Montserrat } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { AppShell } from "@/components/layout/AppShell";
import { JsonLd } from "@/components/shared/JsonLd";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import "./globals.css";

/**
 * Single type family matched to FormX lockup:
 * geometric sans, bold wordmark, tracked labels — Montserrat is the closest
 * free match to Form / CONSULTANTS / DESIGN | ENGINEERING.
 */
const formx = Montserrat({
  variable: "--font-formx-family",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://formxconsultants.com"),
  title: {
    default: "FormX Consultants | Where Vision Takes Form",
    template: "%s | FormX Consultants",
  },
  description:
    "FORM× Consultants — Ahmedabad. Architecture, Structure and Infrastructure coordinated Before × Issue for industrial and building facilities across India.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "FormX Consultants",
    title: "FormX Consultants | Where Vision Takes Form",
    description:
      "Architecture, Structure and Infrastructure — coordinated Before × Issue. Ahmedabad, India.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FormX Consultants | Where Vision Takes Form",
    description:
      "Architecture, Structure and Infrastructure — construction-ready design from Ahmedabad.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${formx.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-bg font-body text-ink antialiased">
        <ScrollProgress />
        <a href="#main" className="skip-link sr-only">
          Skip to content
        </a>
        <JsonLd />
        <AppShell>
          <main id="main" className="flex-1 pb-20 md:pb-0">
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
