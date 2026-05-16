"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/language-provider";

export function Editorial() {
  const { t } = useLanguage();
  const lines = t.editorial.quote.split(". ").filter(Boolean);

  return (
    <section className="border-y border-stone-900/8 bg-cream-dark py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
          >
            <span className="select-none font-display text-[clamp(4rem,14vw,10rem)] uppercase leading-none tracking-[0.2em] text-ink/[0.04]">
              Niche
            </span>
          </div>

          <div className="relative mx-auto max-w-4xl border border-stone-900/10 bg-cream px-8 py-14 md:px-16 md:py-20">
            <div className="mx-auto mb-10 h-px w-12 bg-cognac" />
            <blockquote className="space-y-4 text-center">
              {lines.map((line, i) => (
                <motion.p
                  key={line}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="font-display text-[clamp(1.5rem,3.5vw,2.75rem)] leading-snug tracking-wide text-ink"
                >
                  {line.endsWith(".") ? line : `${line}.`}
                </motion.p>
              ))}
            </blockquote>
            <p className="mt-10 text-center text-[10px] uppercase tracking-[0.32em] text-cognac">
              NICHE CLUB · BAKU
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
