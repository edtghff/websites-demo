"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Check, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  formatPrice,
  getWhatsAppOrderUrl,
  type Product,
} from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProductDetail({ product }: { product: Product }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [size, setSize] = useState<string | null>(null);
  const orderUrl = getWhatsAppOrderUrl(product, size ?? undefined);

  return (
    <div className="min-h-screen bg-cream pt-16 pb-32 md:pb-16">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Link
          href="/catalog"
          className="mb-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-stone hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" />
          Kataloq
        </Link>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="relative aspect-[3/4] bg-cream-dark">
              <Image
                src={product.images[imageIndex]}
                alt={product.name}
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
                      "relative aspect-square overflow-hidden border",
                      imageIndex === i
                        ? "border-ink"
                        : "border-stone-900/10 opacity-70"
                    )}
                  >
                    <Image src={img} alt="" fill className="object-cover" sizes="80px" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="lg:py-8">
            <p className="text-[10px] uppercase tracking-[0.25em] text-cognac">
              Azul and house music
            </p>
            <h1 className="mt-3 font-display text-3xl text-ink md:text-4xl">
              {product.name}
            </h1>
            <p className="mt-4 font-display text-2xl text-ink">
              {formatPrice(product.price, product.currency)}
            </p>
            <p className="mt-6 text-sm leading-relaxed text-stone">
              {product.description}
            </p>

            <div className="mt-10">
              <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-stone">
                Ölçü
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSize(s)}
                    className={cn(
                      "h-11 min-w-[3rem] border px-4 text-sm transition-colors",
                      size === s
                        ? "border-ink bg-ink text-cream"
                        : "border-stone-900/15 text-ink hover:border-ink/40"
                    )}
                  >
                    {s}
                  </button>
                ))}
              </div>
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
              WhatsApp ilə sifariş
            </Button>

            <ul className="mt-10 space-y-3 border-t border-stone-900/8 pt-8">
              {[
                "Premium pambıq",
                "Bakı daxilində çatdırılma",
                "WhatsApp dəstəyi",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2 text-xs text-stone">
                  <Check className="h-4 w-4 text-cognac" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-[calc(4.75rem+env(safe-area-inset-bottom))] border-t border-stone-900/8 bg-cream/95 p-3 backdrop-blur md:hidden">
        <Button href={orderUrl} external variant="whatsapp" size="lg" className="w-full gap-2">
          <MessageCircle className="h-4 w-4" />
          Sifariş — {formatPrice(product.price, product.currency)}
        </Button>
      </div>
    </div>
  );
}

