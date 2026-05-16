"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { ProductCard } from "@/components/product/product-card";
import { PageHeader } from "@/components/layout/page-header";
import { products, categories, type Category } from "@/lib/data";
import { cn } from "@/lib/utils";

function CatalogContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") as Category | null;

  const filtered = categoryParam
    ? products.filter((p) => p.category === categoryParam)
    : products;

  const activeCategory = categories.find((c) => c.slug === categoryParam);

  return (
    <div className="min-h-screen bg-black pt-20 md:pt-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <PageHeader
          label="Mağaza"
          title={activeCategory ? activeCategory.nameAz : "Kataloq"}
          description={`${filtered.length} məhsul${activeCategory ? ` · ${activeCategory.name}` : ""}`}
        />

        <div className="-mx-1 mb-8 flex gap-2 overflow-x-auto px-1 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <Link
            href="/catalog"
            className={cn(
              "shrink-0 border px-4 py-2.5 text-[10px] uppercase tracking-[0.15em] transition-all",
              !categoryParam
                ? "border-red-600 bg-red-950/20 text-red-400"
                : "border-white/10 text-white/50 active:bg-white/5"
            )}
          >
            Hamısı
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/catalog?category=${cat.slug}`}
              className={cn(
                "shrink-0 border px-4 py-2.5 text-[10px] uppercase tracking-[0.15em] transition-all",
                categoryParam === cat.slug
                  ? "border-red-600 bg-red-950/20 text-red-400"
                  : "border-white/10 text-white/50 active:bg-white/5"
              )}
            >
              {cat.nameAz}
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-3 md:gap-x-6 md:gap-y-10 lg:grid-cols-4">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-20 text-center text-white/40">
            Bu kateqoriyada məhsul tapılmadı.
          </p>
        )}
      </div>
    </div>
  );
}

export default function CatalogPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-black pt-20">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-red-600" />
        </div>
      }
    >
      <CatalogContent />
    </Suspense>
  );
}
