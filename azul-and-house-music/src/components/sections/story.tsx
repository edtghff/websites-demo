import Image from "next/image";

export function Story() {
  return (
    <section id="story" className="bg-cream-dark py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center md:gap-16 md:px-8">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src="/images/model-bottle.png"
            alt="Azul and house music lifestyle"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-cognac">
            Haqqında
          </p>
          <h2 className="mt-3 font-display text-3xl leading-snug text-ink md:text-4xl">
            House music.
            <br />
            Quiet luxury.
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-stone">
            Bakıda yeni niche brend — səs-kürmə olmadan zövqli geyim. Premium
            pambıq, minimal print, old money estetikası.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-stone">
            Azul and house music — gecə, musiqi və incə stil haqqındadır.
          </p>
        </div>
      </div>
    </section>
  );
}
