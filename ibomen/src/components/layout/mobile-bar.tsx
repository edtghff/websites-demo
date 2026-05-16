"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LayoutGrid, MapPin, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { WHATSAPP_NUMBER } from "@/lib/data";

const links = [
  { href: "/", label: "Ana", icon: Home },
  { href: "/catalog", label: "Kataloq", icon: LayoutGrid },
  { href: "/filiallar", label: "Filiallar", icon: MapPin },
] as const;

export function MobileBar() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 md:hidden"
      aria-label="Mobil naviqasiya"
    >
      <div className="border-t border-white/10 bg-black/95 backdrop-blur-xl supports-[backdrop-filter]:bg-black/80">
        <div className="mx-auto flex max-w-lg items-stretch justify-between gap-1 px-2 pt-2 pb-[max(0.625rem,env(safe-area-inset-bottom))]">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href ||
                  (link.href === "/catalog" &&
                    pathname.startsWith("/product"));
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex min-h-[52px] min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-lg px-1 py-2 transition-colors active:scale-[0.97]",
                  active
                    ? "bg-red-950/40 text-red-400"
                    : "text-white/45 active:bg-white/5"
                )}
              >
                <Icon
                  className={cn("h-5 w-5 shrink-0", active && "text-red-500")}
                  strokeWidth={active ? 2.25 : 1.75}
                />
                <span className="truncate text-[10px] font-medium uppercase tracking-wide">
                  {link.label}
                </span>
              </Link>
            );
          })}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[52px] min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-lg bg-[#25D366]/10 px-1 py-2 text-[#25D366] transition-colors active:scale-[0.97] active:bg-[#25D366]/20"
          >
            <MessageCircle className="h-5 w-5 shrink-0" strokeWidth={2} />
            <span className="truncate text-[10px] font-medium uppercase tracking-wide">
              Sifariş
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
