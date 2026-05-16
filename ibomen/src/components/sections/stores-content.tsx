"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import {
  branches,
  PHONE_DISPLAY,
  PHONE_E164,
  WHATSAPP_NUMBER,
} from "@/lib/data";
import { Button } from "@/components/ui/button";

export function StoresContent({ compact = false }: { compact?: boolean }) {
  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-px lg:bg-white/5">
        {branches.map((branch, i) => (
          <motion.article
            key={branch.id}
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="border border-white/10 bg-zinc-950 p-6 lg:border-0 lg:p-8"
          >
            <MapPin className="h-4 w-4 text-red-600" />
            <h2 className="mt-4 text-base font-medium uppercase tracking-[0.1em] text-white">
              {branch.name}
            </h2>
            <p className="mt-1.5 text-sm text-white/40">{branch.nameAz}</p>
            {!compact && (
              <p className="mt-4 text-xs leading-relaxed text-white/30">
                Metro stansiyasının yaxınlığında · Bakı
              </p>
            )}
          </motion.article>
        ))}
      </div>

      {!compact && (
        <>
          <div className="mt-8 space-y-4">
            <a
              href={`tel:+${PHONE_E164}`}
              className="flex items-center justify-between gap-4 border border-white/10 bg-zinc-950 p-5 transition-colors active:bg-zinc-900 md:p-6"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-red-900/40 bg-red-950/20">
                  <Phone className="h-5 w-5 text-red-500" />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
                    Telefon
                  </p>
                  <p className="mt-1 font-display text-2xl tracking-wide text-white">
                    {PHONE_DISPLAY}
                  </p>
                </div>
              </div>
              <span className="hidden text-[11px] uppercase tracking-[0.2em] text-red-400/80 sm:inline">
                Zəng et →
              </span>
            </a>

            <Button
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              external
              variant="whatsapp"
              size="lg"
              className="w-full gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp ilə yazın
            </Button>
          </div>

          <p className="mt-8 text-center text-xs text-white/30">
            <Link
              href="/catalog"
              className="underline-offset-4 hover:text-white hover:underline"
            >
              Kataloqa bax
            </Link>
            {" · "}
            <Link
              href="/"
              className="underline-offset-4 hover:text-white hover:underline"
            >
              Ana səhifə
            </Link>
          </p>
        </>
      )}
    </>
  );
}
