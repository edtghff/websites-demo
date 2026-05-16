"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/language-provider";

export function Pillars() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-stone-900/8 bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-cognac">
            {t.pillars.label}
          </p>
        </motion.div>

        <motion.div
          initial={false}
          className="grid gap-px border border-stone-900/8 bg-stone-900/8 md:grid-cols-2 lg:grid-cols-4"
        >
          {t.pillars.items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col bg-cream p-8 md:p-10"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-cognac">
                0{i + 1}
              </span>
              <h3 className="mt-4 font-display text-xl leading-snug text-ink md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-stone">
                {item.body}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
