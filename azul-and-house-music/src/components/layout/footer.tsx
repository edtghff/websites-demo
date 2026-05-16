"use client";

import {
  BRAND_NAME,
  INSTAGRAM_HANDLE,
  WHATSAPP_NUMBER,
  PHONE_DISPLAY,
} from "@/lib/data";
import { useLanguage } from "@/components/providers/language-provider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-stone-900/8 bg-cream-dark pb-[calc(4.75rem+env(safe-area-inset-bottom))] md:pb-12">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <p className="font-display text-xl uppercase tracking-[0.28em] text-ink md:text-2xl md:tracking-[0.32em]">
              {BRAND_NAME}
            </p>
            <p className="mt-2 text-sm text-stone">{t.footer.tagline}</p>
          </div>
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-stone">
                {t.footer.contact}
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                className="mt-3 block text-sm text-ink transition-colors hover:text-cognac"
              >
                WhatsApp
              </a>
              <p className="mt-1 text-sm text-stone">{PHONE_DISPLAY}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-stone">
                {t.footer.social}
              </p>
              <a
                href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-sm text-ink transition-colors hover:text-cognac"
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
