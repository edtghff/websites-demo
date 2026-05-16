"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { locales } from "@/lib/i18n/translations";
import { useLanguage } from "@/components/providers/language-provider";

export function LangSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border border-stone-900/10 bg-cream-dark/60 p-0.5",
        className
      )}
    >
      {locales.map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => setLocale(l.code)}
          className={cn(
            "relative min-w-[2.25rem] rounded-full px-2.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] transition-colors duration-300",
            locale === l.code ? "text-ink" : "text-stone hover:text-ink/70"
          )}
        >
          {locale === l.code && (
            <motion.span
              layoutId="lang-pill"
              className="absolute inset-0 rounded-full bg-cream shadow-sm ring-1 ring-stone-900/5"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{l.label}</span>
        </button>
      ))}
    </div>
  );
}
