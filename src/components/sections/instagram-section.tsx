"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { InstagramIcon } from "@/components/icons/instagram";
import { INSTAGRAM_HANDLE } from "@/lib/data";

const galleryImages = [
  "/images/product-outfit-1.png",
  "/images/product-outfit-2.png",
  "/images/product-pants-2.png",
  "/images/product-pants-3.png",
  "/images/product-outfit-3.png",
  "/images/product-pants-1.png",
];

export function InstagramSection() {
  return (
    <section className="border-t border-white/5 bg-black py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-red-500">
              Sosial
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-wide text-white md:text-5xl">
              @ibomen
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/50 md:text-base">
              30.000+ izləyici ilə Bakının ən aktiv streetwear icması. Yeni
              gələnlər, stil tövsiyələri və ekskluziv buraxılışlar — birbaşa
              Instagram-da.
            </p>

            <div className="mt-8 flex items-center gap-6">
              <div>
                <p className="font-display text-4xl text-white md:text-5xl">30K+</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-white/40">
                  İzləyici
                </p>
              </div>
              <div className="h-12 w-px bg-white/10" />
              <div>
                <p className="font-display text-4xl text-white md:text-5xl">500+</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-white/40">
                  Paylaşım
                </p>
              </div>
            </div>

            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 border border-white/10 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-all hover:border-red-600 hover:text-red-400"
            >
              <InstagramIcon className="h-4 w-4" />
              İzlə
            </a>
          </motion.div>

          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/instagram.png"
                alt="IBOMEN Instagram"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2 md:gap-3">
              {galleryImages.map((src, i) => (
                <motion.div
                  key={src}
                  initial={false}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="relative aspect-square overflow-hidden bg-zinc-950"
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    sizes="150px"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
