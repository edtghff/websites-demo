"use client";

import { motion } from "framer-motion";
import { ProductCard } from "@/components/product/product-card";
import { product } from "@/lib/data";
import { useLanguage } from "@/components/providers/language-provider";

export function CatalogContent() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-cream pt-16 md:pt-[4.25rem]">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-10 md:py-16">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-cognac">
            {t.catalog.label}
          </p>
          <h1 className="mt-2 font-display text-4xl text-ink md:text-5xl">
            {t.catalog.title}
          </h1>
          <p className="mt-3 text-sm text-stone">{t.catalog.one}</p>
        </motion.div>

        <div className="mt-12 max-w-xl">
          <ProductCard product={product} />
        </div>
      </div>
    </div>
  );
}
