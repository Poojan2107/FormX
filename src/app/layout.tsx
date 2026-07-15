import type { Metadata } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/shared/WhatsAppFloat";
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
    "FormX Consultants delivers integrated architecture, structural, and MEPF design for industrial and infrastructure projects across India.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "FormX Consultants",
    title: "FormX Consultants | Design | Engineering",
    description:
      "Single-window architecture, structure, and MEPF for industrial facilities.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FormX Consultants",
    description:
      "Integrated industrial design — architecture, structure, and MEPF.",
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
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
