"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";

export function Club() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      <motion.div
        initial={false}
        className="mx-auto grid max-w-7xl lg:grid-cols-2"
      >
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[32rem]"
        >
          <Image
            src="/images/lifestyle-trunk.png"
            alt=""
            fill
            className="object-cover"
            sizes="50vw"
          />
        </motion.div>

        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col justify-center px-5 py-16 md:px-14 md:py-24"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-cognac">
            {t.club.label}
          </p>
          <h2 className="mt-4 whitespace-pre-line font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] tracking-wide">
            {t.club.title}
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/70 md:text-base">
            {t.club.body}
          </p>
          <Link
            href="/#gallery"
            className="group mt-10 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-cream transition-colors hover:text-cognac"
          >
            {t.club.cta}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
