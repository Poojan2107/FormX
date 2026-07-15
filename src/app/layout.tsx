import type { Metadata } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/shared/WhatsAppFloat";
import "./globals.css";

/** Geometric bold — close to FormX lockup (Gotham / Montserrat family) */
const display = Montserrat({
  variable: "--font-display-family",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

/** Clean readable body with industrial clarity */
const body = Source_Sans_3({
  variable: "--font-body-family",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "FormX Consultants | Design | Engineering",
    template: "%s | FormX Consultants",
  },
  description:
    "FormX Consultants delivers integrated architecture, structural, and MEPF design for industrial and infrastructure projects across India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="flex min-h-full flex-col font-body antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
