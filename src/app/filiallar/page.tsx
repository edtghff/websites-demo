import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { StoresContent } from "@/components/sections/stores-content";

export const metadata: Metadata = {
  title: "Filiallar | IBOMEN",
  description:
    "IBOMEN filialları Bakıda — Həzi Aslanov, Nizami, Əhmədli, 28 May metro. Əlaqə: +994 51 644 48 09",
};

export default function FiliallarPage() {
  return (
    <div className="min-h-screen bg-black pt-20 md:pt-24">
      <div className="mx-auto max-w-7xl px-4 pb-4 md:px-8">
        <PageHeader
          label="Əlaqə"
          title="Filiallar"
          description="Bakıda 4 filial — metro stansiyalarının yaxınlığında. Zəng edin və ya WhatsApp ilə yazın."
        />
        <StoresContent />
      </div>
    </div>
  );
}
