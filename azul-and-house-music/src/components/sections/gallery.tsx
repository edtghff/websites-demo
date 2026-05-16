import Image from "next/image";

const shots = [
  { src: "/images/model-car.png", alt: "Model in car" },
  { src: "/images/model-balcony.png", alt: "Model on balcony" },
  { src: "/images/lifestyle-trunk.png", alt: "Lifestyle trunk" },
  { src: "/images/hero-hood.png", alt: "Product on hood" },
];

export function Gallery() {
  return (
    <section id="gallery" className="border-t border-stone-900/8 bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <p className="text-[10px] uppercase tracking-[0.3em] text-cognac">Lookbook</p>
        <h2 className="mt-2 font-display text-3xl text-ink md:text-4xl">The mood</h2>
        <div className="mt-10 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
          {shots.map((shot) => (
            <div
              key={shot.src}
              className="relative aspect-[3/4] overflow-hidden bg-cream-dark"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
