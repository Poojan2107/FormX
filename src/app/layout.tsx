import type { Metadata } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { AppShell } from "@/components/layout/AppShell";
import { JsonLd } from "@/components/shared/JsonLd";
import "./globals.css";

const display = Montserrat({
  variable: "--font-display-family",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Source_Sans_3({
  variable: "--font-body-family",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://formxconsultants.com"),
  title: {
    default: "FormX Consultants | Design | Engineering",
    template: "%s | FormX Consultants",
  },
  description:
    "FORMX Consultants delivers precise, coordinated, construction-ready architecture, structural, civil, and MEP design for industrial, commercial, and institutional projects.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "FormX Consultants",
    title: "FormX Consultants | Design | Engineering",
    description:
      "Architecture, structure, civil, and MEP — coordinated packages from concept to GFC.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FormX Consultants",
    description:
      "Construction-ready multidisciplinary design for industrial and infrastructure projects.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="flex min-h-full flex-col font-body antialiased">
        <a href="#main" className="skip-link sr-only">
          Skip to content
        </a>
        <JsonLd />
        <AppShell>
          <main id="main" className="flex-1 pb-20 md:pb-0">
            {children}
          </main>
          <Footer />
        </AppShell>
      </body>
    </html>
  );
}
