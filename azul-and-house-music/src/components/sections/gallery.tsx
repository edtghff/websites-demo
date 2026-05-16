"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/language-provider";

const shots = [
  "/images/model-car.png",
  "/images/model-balcony.png",
  "/images/lifestyle-trunk.png",
  "/images/hero-hood.png",
  "/images/product-seat.png",
  "/images/model-bottle.png",
];

export function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="border-t border-stone-900/8 bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-cognac">
            {t.gallery.label}
          </p>
          <h2 className="mt-2 font-display text-3xl text-ink md:text-4xl">
            {t.gallery.title}
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6 md:gap-3">
          {shots.map((src, i) => (
            <motion.div
              key={src}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative aspect-[3/4] overflow-hidden bg-cream-dark"
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="25vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
