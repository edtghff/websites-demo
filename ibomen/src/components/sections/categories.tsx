"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { categories } from "@/lib/data";

export function Categories() {
  return (
    <section id="categories" className="border-t border-white/5 bg-black py-14 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-red-500">
            Kateqoriyalar
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-wide text-white md:text-5xl">
            Kəşf Et
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Link
                href={`/catalog?category=${cat.slug}`}
                className="group relative block aspect-[3/4] overflow-hidden bg-zinc-950"
              >
                <Image
                  src={cat.image}
                  alt={cat.nameAz}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-red-400/80">
                    {cat.name}
                  </span>
                  <span className="mt-1 font-display text-lg text-white md:text-xl">
                    {cat.nameAz}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-0.5 scale-x-0 bg-red-600 transition-transform duration-500 group-hover:scale-x-100" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
