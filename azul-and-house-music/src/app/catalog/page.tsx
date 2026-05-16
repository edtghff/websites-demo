import { ProductCard } from "@/components/product/product-card";
import { products } from "@/lib/data";

export const metadata = {
  title: "Kataloq | Azul and house music",
};

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-cream pt-16 md:pt-20">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-8 md:py-14">
        <p className="text-[10px] uppercase tracking-[0.3em] text-cognac">Mağaza</p>
        <h1 className="mt-2 font-display text-4xl text-ink md:text-5xl">Kataloq</h1>
        <p className="mt-3 text-sm text-stone">{products.length} məhsul</p>
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:gap-x-8">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
