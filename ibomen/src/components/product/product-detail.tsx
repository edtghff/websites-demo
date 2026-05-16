"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, MessageCircle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  formatPrice,
  getWhatsAppOrderUrl,
  type Product,
} from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProductDetail({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const orderUrl = getWhatsAppOrderUrl(
    product,
    selectedSize ?? undefined
  );

  return (
    <div className="min-h-screen bg-black pt-20 pb-36 md:pb-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Link
          href="/catalog"
          className="mb-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Kataloqa qayıt
        </Link>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-3">
            <motion.div
              layout
              className="relative aspect-[3/4] overflow-hidden bg-zinc-950"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImage}
                  initial={false}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={product.images[selectedImage]}
                    alt={product.nameAz}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
              {product.tag && (
                <div className="absolute left-4 top-4 z-10">
                  <Badge>{product.tag}</Badge>
                </div>
              )}
            </motion.div>

            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((img, i) => (
                  <button
                    key={img}
                    type="button"
                    onClick={() => setSelectedImage(i)}
                    className={cn(
                      "relative aspect-square overflow-hidden border transition-all",
                      selectedImage === i
                        ? "border-red-600"
                        : "border-white/10 opacity-60 hover:opacity-100"
                    )}
                  >
                    <Image
                      src={img}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="100px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col lg:py-8"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-red-500">
              IBOMEN
            </p>
            <h1 className="mt-3 font-display text-3xl tracking-wide text-white md:text-4xl">
              {product.nameAz}
            </h1>
            <p className="mt-1 text-sm text-white/40">{product.name}</p>

            <p className="mt-6 font-display text-3xl text-white">
              {formatPrice(product.price, product.currency)}
            </p>

            <div className="mt-4 inline-flex items-center gap-2">
              {product.inStock ? (
                <>
                  <span className="flex h-2 w-2 rounded-full bg-green-500" />
                  <span className="text-xs uppercase tracking-[0.2em] text-green-500/80">
                    Stokda var
                  </span>
                </>
              ) : (
                <>
                  <span className="flex h-2 w-2 rounded-full bg-red-600" />
                  <span className="text-xs uppercase tracking-[0.2em] text-red-400/80">
                    Stokda yoxdur
                  </span>
                </>
              )}
            </div>

            <p className="mt-8 text-sm leading-relaxed text-white/50">
              {product.descriptionAz}
            </p>

            {/* Sizes */}
            <div className="mt-10">
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">
                Ölçü seçin
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    disabled={!product.inStock}
                    className={cn(
                      "flex h-12 min-w-[3rem] items-center justify-center border px-4 text-sm font-medium transition-all",
                      selectedSize === size
                        ? "border-red-600 bg-red-950/30 text-white"
                        : "border-white/15 text-white/60 hover:border-white/40 hover:text-white",
                      !product.inStock && "cursor-not-allowed opacity-40"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {selectedSize && (
                <p className="mt-3 flex items-center gap-1 text-xs text-white/40">
                  <Check className="h-3 w-3 text-green-500" />
                  Seçildi: {selectedSize}
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="mt-10 space-y-3">
              <Button
                href={orderUrl}
                external
                variant="whatsapp"
                size="lg"
                className="w-full gap-3"
                disabled={!product.inStock}
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp ilə Sifariş Et
              </Button>
              {!selectedSize && product.inStock && (
                <p className="text-center text-[10px] uppercase tracking-[0.15em] text-white/30">
                  Sifariş üçün ölçü seçin (tövsiyə olunur)
                </p>
              )}
            </div>

            <div className="mt-12 space-y-4 border-t border-white/5 pt-8">
              {[
                "Bakı daxilində sürətli çatdırılma",
                "Premium qablaşdırma",
                "WhatsApp ilə birbaşa dəstək",
              ].map((text) => (
                <p
                  key={text}
                  className="flex items-center gap-3 text-xs text-white/40"
                >
                  <Check className="h-4 w-4 shrink-0 text-red-600" />
                  {text}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-[calc(4.75rem+env(safe-area-inset-bottom))] z-40 border-t border-white/10 bg-black/95 p-3 backdrop-blur-xl md:hidden">
        <Button
          href={orderUrl}
          external
          variant="whatsapp"
          size="lg"
          className="w-full gap-2"
          disabled={!product.inStock}
        >
          <MessageCircle className="h-5 w-5" />
          Sifariş — {formatPrice(product.price, product.currency)}
        </Button>
      </div>
    </div>
  );
}
