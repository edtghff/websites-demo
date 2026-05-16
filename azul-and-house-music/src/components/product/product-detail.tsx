"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Check, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  BRAND_NAME,
  formatPrice,
  getWhatsAppOrderUrl,
  type Product,
} from "@/lib/data";
import { useLanguage } from "@/components/providers/language-provider";
import { cn } from "@/lib/utils";

export function ProductDetail({ product }: { product: Product }) {
  const { t } = useLanguage();
  const [imageIndex, setImageIndex] = useState(0);
  const [size, setSize] = useState<string | null>(null);
  const orderUrl = getWhatsAppOrderUrl(
    t.product.name,
    product.price,
    product.currency,
    size ?? undefined
  );

  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-cream pt-16 pb-32 md:pb-16"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Link
          href="/catalog"
          className="mb-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-stone transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.productPage.back}
        </Link>

        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 lg:grid-cols-2 lg:gap-16"
        >
          <div>
            <div className="relative aspect-[3/4] overflow-hidden bg-cream-dark">
              <Image
                src={product.images[imageIndex]}
                alt={t.product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {product.images.length > 1 && (
              <div className="mt-3 grid grid-cols-4 gap-2">
                {product.images.map((img, i) => (
                  <button
                    key={img}
                    type="button"
                    onClick={() => setImageIndex(i)}
                    className={cn(
                      "relative aspect-square overflow-hidden border transition-all duration-300",
                      imageIndex === i
                        ? "border-ink"
                        : "border-stone-900/10 opacity-70 hover:opacity-100"
                    )}
                  >
                    <Image src={img} alt="" fill className="object-cover" sizes="80px" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="lg:py-8">
            <p className={`text-[10px] uppercase tracking-[0.28em] text-cognac`}>
              {BRAND_NAME}
            </p>
            <h1 className="mt-3 font-display text-3xl text-ink md:text-4xl">
              {t.product.name}
            </h1>
            <p className="mt-4 font-display text-2xl text-ink">
              {formatPrice(product.price, product.currency)}
            </p>
            <p className="mt-6 text-sm leading-relaxed text-stone md:text-base">
              {t.product.description}
            </p>

            <div className="mt-10">
              <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-stone">
                {t.productPage.size}
              </p>
              <motion.div
                initial={false}
                className="flex flex-wrap gap-2"
              >
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSize(s)}
                    className={cn(
                      "h-11 min-w-[3rem] border px-4 text-sm transition-all duration-300",
                      size === s
                        ? "border-ink bg-ink text-cream"
                        : "border-stone-900/15 text-ink hover:border-ink/40"
                    )}
                  >
                    {s}
                  </button>
                ))}
              </motion.div>
            </div>

            <Button
              href={orderUrl}
              external
              variant="whatsapp"
              size="lg"
              className="mt-10 w-full gap-2"
              disabled={!product.inStock}
            >
              <MessageCircle className="h-5 w-5" />
              {t.productPage.whatsapp}
            </Button>

            <ul className="mt-10 space-y-3 border-t border-stone-900/8 pt-8">
              {t.productPage.perks.map((perk) => (
                <li key={perk} className="flex items-center gap-2 text-xs text-stone">
                  <Check className="h-4 w-4 shrink-0 text-cognac" />
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      <div className="fixed inset-x-0 bottom-[calc(4.75rem+env(safe-area-inset-bottom))] border-t border-stone-900/8 bg-cream/95 p-3 backdrop-blur md:hidden">
        <Button href={orderUrl} external variant="whatsapp" size="lg" className="w-full gap-2">
          <MessageCircle className="h-4 w-4" />
          {t.mobile.order} — {formatPrice(product.price, product.currency)}
        </Button>
      </div>
    </motion.div>
  );
}
