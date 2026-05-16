"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/providers/language-provider";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="pt-14 md:pt-[4.25rem]">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2 lg:min-h-[calc(100svh-4.25rem)]">
        {/* Copy — left on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center px-5 py-12 md:px-10 md:py-16 lg:px-14 lg:py-20"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-[10px] uppercase tracking-[0.32em] text-cognac"
          >
            {t.hero.eyebrow}
          </motion.p>
          <h1 className="mt-5 font-display text-[clamp(2.25rem,5vw,3.75rem)] uppercase leading-[1.08] tracking-[0.14em] text-ink">
            {t.hero.title}
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-stone md:text-base">
            {t.hero.subtitle}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/catalog" size="lg">
              {t.hero.ctaShop}
            </Button>
            <Button href="/#gallery" variant="outline" size="lg">
              {t.hero.ctaLookbook}
            </Button>
          </div>
        </motion.div>

        {/* Media — no dark overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] w-full overflow-hidden bg-cream-dark sm:aspect-[16/11] lg:aspect-auto lg:min-h-full"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/model-bottle.png"
            className="absolute inset-0 h-full w-full object-cover object-center"
          >
            <source src="/video/hero.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </div>
    </section>
  );
}
