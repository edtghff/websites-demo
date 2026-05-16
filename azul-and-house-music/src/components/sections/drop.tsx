"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { INSTAGRAM_HANDLE } from "@/lib/data";
import { useLanguage } from "@/components/providers/language-provider";

export function Drop() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-stone-900/8 bg-cream-dark py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 text-center md:px-10">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-cognac">
            {t.drop.label}
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-none tracking-wide text-ink">
            {t.drop.title}
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-stone md:text-base">
            {t.drop.body}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/catalog" size="lg">
              {t.drop.ctaShop}
            </Button>
            <Button
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              external
              variant="outline"
              size="lg"
            >
              {t.drop.ctaIg}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
