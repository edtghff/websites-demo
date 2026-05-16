"use client";

import { motion } from "framer-motion";
import { whyIbomen } from "@/lib/data";

export function WhyIbomen() {
  return (
    <section id="about" className="border-t border-white/5 bg-zinc-950 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-red-500">
            Niyə IBOMEN?
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-wide text-white md:text-5xl">
            Premium Təcrübə
          </h2>
        </motion.div>

        <div className="grid gap-px bg-white/5 md:grid-cols-2 lg:grid-cols-4">
          {whyIbomen.map((item, i) => (
            <motion.div
              key={item.title}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-black p-8 md:p-10"
            >
              <span className="font-display text-5xl text-white/5 transition-colors group-hover:text-red-950">
                0{i + 1}
              </span>
              <h3 className="mt-4 text-sm font-medium uppercase tracking-[0.15em] text-white">
                {item.title}
              </h3>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/30">
                {item.titleEn}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/45">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
