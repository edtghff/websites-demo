import Link from "next/link";
import { ProductCard } from "@/components/product/product-card";
import { products } from "@/lib/data";

export function Featured() {
  return (
    <section className="border-t border-stone-900/8 bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-10 flex items-end justify-between md:mb-14">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-cognac">
              Kolleksiya
            </p>
            <h2 className="mt-2 font-display text-3xl text-ink md:text-4xl">
              Niche Tees
            </h2>
          </div>
          <Link
            href="/catalog"
            className="text-[10px] uppercase tracking-[0.2em] text-stone hover:text-ink"
          >
            Hamısı →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-2 md:gap-x-8">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
