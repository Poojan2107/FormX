import type { Metadata, Viewport } from "next";
import { ViewTransition } from "react";
import { Chakra_Petch, IBM_Plex_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { AppShell } from "@/components/layout/AppShell";
import { JsonLd } from "@/components/shared/JsonLd";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import "./globals.css";

const display = Chakra_Petch({
  variable: "--font-display-family",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = IBM_Plex_Sans({
  variable: "--font-body-family",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#0c0c0c",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://formxconsultants.com"),
  title: {
    default: "FormX Consultants | Design | Engineering",
    template: "%s | FormX Consultants",
  },
  description:
    "FORMX Consultants — Ahmedabad industrial design & engineering. Architecture, Structure and Infrastructure coordinated as construction-ready GFC packages for industrial, commercial, and institutional facilities.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "FormX Consultants",
    title: "FormX Consultants | Design | Engineering",
    description:
      "Architecture, structure and infrastructure — coordinated GFC packages from concept to site support. Ahmedabad, India.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FormX Consultants | Design | Engineering",
    description:
      "Architecture, Structure and Infrastructure — construction-ready design for industrial and building projects across India.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="flex min-h-full flex-col font-body antialiased text-ink bg-bg">
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
