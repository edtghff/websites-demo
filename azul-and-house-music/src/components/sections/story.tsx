"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/language-provider";

export function Story() {
  const { t } = useLanguage();

  return (
    <section id="story" className="bg-cream-dark py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 md:items-center md:gap-16 md:px-10">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[4/5] overflow-hidden"
        >
          <Image
            src="/images/model-bottle.png"
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-cognac">
            {t.story.label}
          </p>
          <h2 className="mt-3 whitespace-pre-line font-display text-3xl leading-snug text-ink md:text-4xl">
            {t.story.title}
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-stone md:text-base">
            {t.story.p1}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-stone md:text-base">
            {t.story.p2}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
