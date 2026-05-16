"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/product/product-card";
import { products } from "@/lib/data";

const featured = products.filter((p) => p.featured);

export function FeaturedProducts() {
  return (
    <section id="featured" className="bg-black py-14 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end"
        >
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-red-500">
              Seçilmişlər
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-wide text-white md:text-5xl">
              Yeni Kolleksiya
            </h2>
          </div>
          <Link
            href="/catalog"
            className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-red-500"
          >
            Hamısına bax →
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-3 md:gap-x-6 md:gap-y-10 lg:grid-cols-4">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
