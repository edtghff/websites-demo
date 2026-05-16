"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { InstagramIcon } from "@/components/icons/instagram";
import { cn } from "@/lib/utils";
import { INSTAGRAM_HANDLE } from "@/lib/data";

const navLinks = [
  { href: "/#featured", label: "Kolleksiya" },
  { href: "/#categories", label: "Kateqoriyalar" },
  { href: "/catalog", label: "Kataloq" },
  { href: "/#about", label: "Haqqımızda" },
  { href: "/filiallar", label: "Filiallar" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/5 bg-black/80 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <motion.div
          initial={false}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8"
        >
          <Link href="/" className="relative z-50 flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="IBOMEN"
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-cover"
            />
            <span className="font-display text-lg tracking-[0.25em] text-white md:text-xl">
              IBOMEN
            </span>
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <motion.div
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden items-center gap-4 md:flex"
          >
            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 transition-colors hover:text-red-500"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <Link
              href="/catalog"
              className="border border-red-700/60 bg-red-950/20 px-5 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-red-400 transition-all hover:border-red-600 hover:bg-red-900/30 hover:text-red-300"
            >
              Mağaza
            </Link>
          </motion.div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center text-white md:hidden"
            aria-label={menuOpen ? "Menyunu bağla" : "Menyunu aç"}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </motion.div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black md:hidden"
          >
            <motion.nav
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="flex h-full flex-col items-center justify-center gap-8"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-3xl tracking-[0.15em] text-white"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                initial={false}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-red-500"
              >
                <InstagramIcon className="h-5 w-5" />
                @{INSTAGRAM_HANDLE}
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
