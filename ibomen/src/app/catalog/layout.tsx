import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kataloq | IBOMEN",
  description:
    "IBOMEN kataloqu — premium streetwear: köynəklər, cinslər, hoodilər, ayaqqabılar və aksesuarlar.",
};

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
