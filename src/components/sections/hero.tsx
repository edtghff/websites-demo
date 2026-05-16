"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-black md:min-h-[100dvh] md:justify-end">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(185,28,28,0.15),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_100%,rgba(185,28,28,0.06),transparent_40%)]" />
        <div className="absolute -right-16 top-1/4 hidden h-72 w-72 rounded-full border border-red-900/15 md:block md:-right-12 md:h-[560px] md:w-[560px]" />
        <div className="absolute -left-20 bottom-1/4 hidden h-48 w-48 rounded-full border border-white/5 md:block" />
        <div
          className="absolute inset-0 opacity-[0.025] md:opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="grain absolute inset-0 opacity-20 md:opacity-25" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-6 pt-20 md:px-8 md:pb-36 md:pt-32">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center md:min-h-[calc(100dvh-12rem)] md:items-start md:justify-center md:text-left"
        >
          <Image
            src="/images/logo.png"
            alt="IBOMEN"
            width={72}
            height={72}
            priority
            className="mb-6 h-[4.5rem] w-[4.5rem] rounded-full object-cover ring-1 ring-white/10 md:mb-8 md:h-24 md:w-24"
          />

          <p className="text-[9px] font-medium uppercase tracking-[0.28em] text-red-500 sm:tracking-[0.4em]">
            Bakı · Premium Streetwear
          </p>

          <h1 className="mt-4 font-display text-[clamp(2.75rem,13vw,7.5rem)] leading-[0.92] tracking-[0.06em] text-white sm:mt-5 sm:tracking-[0.1em] md:tracking-[0.12em]">
            IBOMEN
          </h1>

          <p className="mt-3 font-display text-lg italic tracking-wide text-white/60 md:mt-4 md:text-2xl">
            Premium Streetwear
          </p>

          <div className="mt-8 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center md:mt-12 md:justify-start">
            <Button href="/catalog" size="lg" className="w-full sm:min-w-[200px] sm:w-auto">
              Kataloqa Bax
            </Button>
            <Button
              href="/#featured"
              variant="outline"
              size="lg"
              className="w-full sm:min-w-[200px] sm:w-auto"
            >
              Kəşf Et
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-900/50 to-transparent" />
    </section>
  );
}
