import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileBar } from "@/components/layout/mobile-bar";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "IBOMEN | Premium Streetwear — Bakı",
  description:
    "Bakının premium streetwear brendi. Müasir moda, yüksək keyfiyyət və 30.000+ Instagram icması. Kataloqa baxın və WhatsApp ilə sifariş edin.",
  keywords: ["IBOMEN", "streetwear", "Bakı", "premium fashion", "geyim"],
  openGraph: {
    title: "IBOMEN | Premium Streetwear",
    description: "Bakının premium streetwear brendi — 30K+ Instagram",
    type: "website",
    locale: "az_AZ",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="az"
      className={`${cormorant.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body
        className="bg-black text-white antialiased"
        suppressHydrationWarning
      >
        <Header />
        <main className="pb-[calc(4.75rem+env(safe-area-inset-bottom))] md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
