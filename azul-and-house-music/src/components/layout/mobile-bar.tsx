"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LayoutGrid, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { WHATSAPP_NUMBER } from "@/lib/data";
import { useLanguage } from "@/components/providers/language-provider";

export function MobileBar() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const isHome = pathname === "/";
  const isCatalog =
    pathname.startsWith("/catalog") || pathname.startsWith("/product");

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-stone-900/8 bg-cream/95 backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-lg px-2 pt-2 pb-[max(0.625rem,env(safe-area-inset-bottom))]">
        <Link
          href="/"
          className={cn(
            "flex min-h-[52px] flex-1 flex-col items-center justify-center gap-1 rounded-lg py-2 transition-colors duration-300",
            isHome ? "bg-stone-900/5 text-ink" : "text-stone"
          )}
        >
          <Home className="h-5 w-5" strokeWidth={isHome ? 2 : 1.5} />
          <span className="text-[10px] uppercase tracking-wide">{t.mobile.home}</span>
        </Link>
        <Link
          href="/catalog"
          className={cn(
            "flex min-h-[52px] flex-1 flex-col items-center justify-center gap-1 rounded-lg py-2 transition-colors duration-300",
            isCatalog ? "bg-stone-900/5 text-ink" : "text-stone"
          )}
        >
          <LayoutGrid className="h-5 w-5" strokeWidth={isCatalog ? 2 : 1.5} />
          <span className="text-[10px] uppercase tracking-wide">{t.mobile.catalog}</span>
        </Link>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[52px] flex-1 flex-col items-center justify-center gap-1 rounded-lg py-2 text-[#1a3d2e] transition-opacity hover:opacity-80"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-[10px] uppercase tracking-wide">{t.mobile.order}</span>
        </a>
      </div>
    </nav>
  );
}
