import Link from "next/link";
import {
  BRAND_NAME,
  INSTAGRAM_HANDLE,
  WHATSAPP_NUMBER,
  PHONE_DISPLAY,
} from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-stone-900/8 bg-cream-dark pb-[calc(4.75rem+env(safe-area-inset-bottom))] md:pb-12">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <p className="font-display text-2xl tracking-wide text-ink">
              {BRAND_NAME}
            </p>
            <p className="mt-2 text-sm text-stone">Niche luxury · Bakı</p>
          </div>
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-stone">
                Əlaqə
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                className="mt-3 block text-sm text-ink hover:text-cognac"
              >
                WhatsApp
              </a>
              <p className="mt-1 text-sm text-stone">{PHONE_DISPLAY}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-stone">
                Sosial
              </p>
              <a
                href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-sm text-ink hover:text-cognac"
              >
                @{INSTAGRAM_HANDLE}
              </a>
            </div>
          </div>
        </div>
        <p className="mt-12 text-[10px] uppercase tracking-[0.2em] text-stone/70">
          © 2026 {BRAND_NAME}
        </p>
      </div>
    </footer>
  );
}
