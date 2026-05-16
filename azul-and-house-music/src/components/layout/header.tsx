"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { INSTAGRAM_HANDLE } from "@/lib/data";

const nav = [
  { href: "/catalog", label: "Kataloq" },
  { href: "/#story", label: "Haqqında" },
  { href: "/#gallery", label: "Lookbook" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
            ? "border-b border-stone-900/5 bg-cream/90 backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:h-16 md:px-8">
          <Link href="/" className="relative z-50 flex items-center gap-2.5">
            <Image
              src="/images/logo.png"
              alt="Azul and house music"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
            <span className="hidden font-display text-sm tracking-[0.12em] text-ink sm:inline">
              Azul
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[10px] uppercase tracking-[0.22em] text-stone hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <a
            href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-[10px] uppercase tracking-[0.2em] text-stone hover:text-ink md:block"
          >
            Instagram
          </a>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="relative z-50 md:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 bg-cream md:hidden">
          <nav className="flex h-full flex-col items-center justify-center gap-8">
            {nav.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl tracking-wide text-ink"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              className="text-[11px] uppercase tracking-[0.2em] text-cognac"
            >
              @{INSTAGRAM_HANDLE}
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
