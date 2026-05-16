"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { formatPrice, type Product } from "@/lib/data";

export function ProductCard({
  product,
  index = 0,
}: {
  product: Product;
  index?: number;
}) {
  return (
    <motion.article
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-zinc-950">
          <Image
            src={product.image}
            alt={product.nameAz}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />
          {product.tag && (
            <div className="absolute left-3 top-3">
              <Badge>{product.tag}</Badge>
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-gradient-to-t from-black/90 to-transparent p-3 transition-transform duration-500 group-hover:translate-y-0 max-md:translate-y-0">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">
              Bax
            </p>
          </div>
        </div>

        <div className="mt-4 space-y-1">
          <h3 className="text-sm font-medium tracking-wide text-white transition-colors group-hover:text-red-400">
            {product.nameAz}
          </h3>
          <p className="text-sm text-white/40">
            {formatPrice(product.price, product.currency)}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
