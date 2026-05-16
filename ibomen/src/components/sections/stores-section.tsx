"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { StoresContent } from "@/components/sections/stores-content";

export function StoresSection() {
  return (
    <section id="stores" className="border-t border-white/5 bg-black py-14 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between md:mb-12"
        >
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-red-500">
              Filiallar
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-wide text-white md:text-5xl">
              Bizim Mağazalar
            </h2>
          </div>
          <Link
            href="/filiallar"
            className="text-[11px] font-medium uppercase tracking-[0.2em] text-red-400/90 transition-colors hover:text-red-400"
          >
            Hamısına bax →
          </Link>
        </motion.div>
        <StoresContent compact />
      </div>
    </section>
  );
}
