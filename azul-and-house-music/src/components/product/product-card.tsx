"use client";

import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Product } from "@/lib/data";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-cream-dark">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
        {product.tag && (
          <span className="absolute left-3 top-3 border border-stone-900/10 bg-cream/90 px-2 py-0.5 text-[9px] uppercase tracking-[0.2em] text-ink">
            {product.tag}
          </span>
        )}
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="text-sm tracking-wide text-ink group-hover:text-cognac">
          {product.name}
        </h3>
        <p className="text-sm text-stone">{formatPrice(product.price, product.currency)}</p>
      </div>
    </Link>
  );
}
