"use client";

import { useLanguage } from "@/components/providers/language-provider";

export function Marquee() {
  const { t } = useLanguage();
  const items = [...t.marquee, ...t.marquee];

  return (
    <section
      aria-hidden
      className="overflow-hidden border-y border-stone-900/8 bg-ink py-4"
    >
      <div className="flex w-max animate-marquee gap-12 md:gap-16">
        {items.map((text, i) => (
          <span
            key={`${text}-${i}`}
            className="shrink-0 font-display text-lg italic tracking-wide text-cream/90 md:text-xl"
          >
            {text}
            <span className="mx-6 text-cognac/60 md:mx-8">·</span>
          </span>
        ))}
      </div>
    </section>
  );
}
