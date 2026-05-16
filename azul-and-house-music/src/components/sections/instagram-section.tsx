"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { INSTAGRAM_HANDLE } from "@/lib/data";
import { useLanguage } from "@/components/providers/language-provider";

const grid = [
  "/images/model-car.png",
  "/images/model-balcony.png",
  "/images/model-bottle.png",
  "/images/hero-hood.png",
];

export function InstagramSection() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-stone-900/8 bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-cognac">
              {t.instagram.label}
            </p>
            <h2 className="mt-2 font-display text-3xl text-ink md:text-4xl">
              {t.instagram.title}
            </h2>
            <p className="mt-3 text-sm text-stone">{t.instagram.body}</p>
          </div>
          <Button
            href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
            external
            variant="outline"
            className="shrink-0 gap-2"
          >
            <ExternalLink className="h-4 w-4" />
            @{INSTAGRAM_HANDLE}
          </Button>
        </motion.div>

        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
          {grid.map((src, i) => (
            <motion.a
              key={src}
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative aspect-square overflow-hidden bg-cream-dark"
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="25vw"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-500 group-hover:bg-ink/30 group-hover:opacity-100">
                <ExternalLink className="h-6 w-6 text-cream" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
