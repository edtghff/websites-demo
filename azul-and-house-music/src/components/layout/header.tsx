"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { BRAND_NAME, INSTAGRAM_HANDLE } from "@/lib/data";
import { useLanguage } from "@/components/providers/language-provider";
import { LangSwitcher } from "@/components/layout/lang-switcher";

const brandMarkClass =
  "font-display text-[11px] uppercase leading-none tracking-[0.32em] text-ink md:text-xs md:tracking-[0.36em]";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  const nav = [
    { href: "/catalog", label: t.nav.catalog },
    { href: "/#story", label: t.nav.about },
    { href: "/#gallery", label: t.nav.lookbook },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-stone-900/6 bg-cream/95 shadow-sm shadow-stone-900/5 backdrop-blur-md"
            : "border-b border-transparent bg-cream/80 backdrop-blur-sm"
        )}
      >
        <div className="mx-auto grid h-14 max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-4 md:h-[4.25rem] md:px-10">
          <Link
            href="/"
            className="relative z-50 justify-self-start transition-opacity hover:opacity-70"
          >
            <span className={brandMarkClass}>{BRAND_NAME}</span>
          </Link>

          <nav className="hidden items-center justify-center gap-10 md:flex">
            {nav.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[11px] uppercase tracking-[0.18em] text-stone transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-4 justify-self-end">
            <LangSwitcher className="hidden md:inline-flex" />
            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-[11px] uppercase tracking-[0.18em] text-stone transition-colors hover:text-ink md:block"
            >
              {t.nav.instagram}
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-stone-900/10 bg-cream md:hidden"
              aria-label="Menu"
            >
              <Menu className="h-[18px] w-[18px]" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-stone-900/20 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 36 }}
              className="fixed inset-y-0 right-0 z-50 flex w-[min(100%,20rem)] flex-col bg-cream shadow-2xl md:hidden"
            >
              <div className="flex items-center justify-between border-b border-stone-900/8 px-5 py-4">
                <span className={brandMarkClass}>{BRAND_NAME}</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-900/10"
                  aria-label="Close"
                >
                  <X className="h-[18px] w-[18px]" />
                </button>
              </div>

              <nav className="flex flex-1 flex-col justify-center gap-1 px-6">
                {nav.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-stone-900/5 py-5 font-display text-3xl tracking-wide text-ink"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="space-y-5 border-t border-stone-900/8 px-6 py-8">
                <LangSwitcher />
                <a
                  href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[11px] uppercase tracking-[0.2em] text-cognac"
                >
                  @{INSTAGRAM_HANDLE}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
