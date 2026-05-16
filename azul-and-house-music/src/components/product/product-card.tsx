"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { formatPrice, type Product } from "@/lib/data";
import { useLanguage } from "@/components/providers/language-provider";

export function ProductCard({ product }: { product: Product }) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Link href={`/product/${product.slug}`} className="group block">
        <div className="relative aspect-[3/4] overflow-hidden bg-cream-dark">
          <Image
            src={product.image}
            alt={t.product.name}
            fill
            className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <span className="absolute left-4 top-4 border border-stone-900/10 bg-cream/95 px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-ink">
            {t.product.tag}
          </span>
        </div>
        <div className="mt-5 space-y-1">
          <h3 className="font-display text-xl text-ink transition-colors group-hover:text-cognac md:text-2xl">
            {t.product.name}
          </h3>
          <p className="text-sm text-stone">
            {formatPrice(product.price, product.currency)}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
