"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { product, formatPrice, getWhatsAppOrderUrl } from "@/lib/data";
import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";

export function Featured() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-stone-900/8 bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-cognac">
            {t.featured.label}
          </p>
          <h2 className="mt-2 font-display text-3xl text-ink md:text-4xl">
            {t.featured.title}
          </h2>
        </motion.div>

        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-center"
        >
          <Link
            href={`/product/${product.slug}`}
            className="group relative aspect-[3/4] overflow-hidden bg-cream-dark sm:aspect-[4/5]"
          >
            <Image
              src={product.image}
              alt={t.product.name}
              fill
              className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <span className="absolute left-4 top-4 border border-stone-900/10 bg-cream/95 px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-ink">
              {t.product.tag}
            </span>
          </Link>

          <div className="flex flex-col justify-center lg:py-8">
            <h3 className="font-display text-2xl text-ink md:text-3xl">
              {t.product.name}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-stone md:text-base">
              {t.product.description}
            </p>
            <p className="mt-6 font-display text-3xl text-ink">
              {formatPrice(product.price, product.currency)}
            </p>
            <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-stone">
              {t.featured.sizes}: {product.sizes.join(" · ")}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={`/product/${product.slug}`} size="lg">
                {t.featured.view}
              </Button>
              <Button
                href={getWhatsAppOrderUrl(
                  t.product.name,
                  product.price,
                  product.currency
                )}
                external
                variant="outline"
                size="lg"
              >
                {t.featured.order}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
