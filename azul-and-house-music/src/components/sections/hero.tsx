"use client";

import { Button } from "@/components/ui/button";
import { BRAND_NAME } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ink text-cream">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero-hood.png"
        className="absolute inset-0 h-full w-full object-cover opacity-90"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-4 pb-10 pt-20 md:px-8 md:pb-16">
        <p className="text-[10px] uppercase tracking-[0.35em] text-cream/60">
          Bakı · Niche luxury
        </p>
        <h1 className="mt-4 max-w-xl font-display text-[clamp(2.5rem,10vw,4.5rem)] leading-[1.05] tracking-wide text-cream">
          {BRAND_NAME}
        </h1>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
          Quiet tees for house nights and old-money moods. Understated. Premium.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/catalog" size="lg" className="bg-cream text-ink hover:bg-cream-dark">
            Kataloqa Bax
          </Button>
          <Button
            href="/#gallery"
            variant="outline"
            size="lg"
            className="border-cream/30 text-cream hover:border-cream"
          >
            Lookbook
          </Button>
        </div>
      </div>
    </section>
  );
}
