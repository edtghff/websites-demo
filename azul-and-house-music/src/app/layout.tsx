import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileBar } from "@/components/layout/mobile-bar";
import { BRAND_NAME } from "@/lib/data";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: `${BRAND_NAME} | Niche Luxury Tees — Bakı`,
  description:
    "Azul and house music — niche luxury t-shirts in Bakı. Quiet, elegant streetwear with an old-money feel.",
  openGraph: {
    title: BRAND_NAME,
    description: "Niche luxury · Bakı",
    locale: "az_AZ",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f0e8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="az"
      className={`${cormorant.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-cream text-ink antialiased" suppressHydrationWarning>
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
