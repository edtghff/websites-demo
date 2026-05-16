"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/language-provider";

export function Editorial() {
  const { t } = useLanguage();

  return (
    <section className="border-y border-stone-900/8 bg-cream-dark py-8 md:py-10">
      <motion.div
        initial={false}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-7xl px-5 text-center md:px-10"
      >
        <p className="font-display text-lg leading-snug tracking-wide text-ink md:text-xl">
          {t.editorial.quote}
        </p>
        <p className="mt-3 text-[9px] uppercase tracking-[0.28em] text-cognac">
          Niche Club · Bakı
        </p>
      </motion.div>
    </section>
  );
}
