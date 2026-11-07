import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StickyCta } from "@/components/StickyCta";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Revital | Consultoría gratuita",
  description: "Agenda tu consultoría gratuita y recibe tu diagnóstico inicial.",
  openGraph: {
    title: "Revital | Consultoría gratuita",
    description: "Agenda tu consultoría gratuita y recibe tu diagnóstico inicial.",
    images: ["/og.jpg"], // imagen de 1200x630 en /public
    locale: "es_ES",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
        {children}
        <StickyCta />
      </body>
    </html>
  );
}