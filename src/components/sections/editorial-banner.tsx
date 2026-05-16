"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function EditorialBanner() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-zinc-950 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(185,28,28,0.06),transparent_70%)]" />
      <div className="grain absolute inset-0 opacity-20" />

      <div className="relative mx-auto max-w-7xl px-5 text-center md:px-8">
        <motion.p
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] uppercase tracking-[0.5em] text-red-500"
        >
          Yeni Mövsüm
        </motion.p>
        <motion.h2
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="mt-4 font-display text-4xl text-white md:text-6xl"
        >
          Küçə Modasının Zirvəsi
        </motion.h2>
        <motion.p
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mx-auto mt-5 max-w-lg text-sm text-white/40"
        >
          Seçilmiş kolleksiya — Bakıda premium streetwear
        </motion.p>
        <motion.div
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="/catalog"
            className="mt-8 inline-block border-b border-red-600 pb-1 text-[11px] uppercase tracking-[0.3em] text-white transition-colors hover:text-red-400"
          >
            İndi Kəşf Et
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
