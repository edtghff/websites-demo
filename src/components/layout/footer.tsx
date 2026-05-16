import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { InstagramIcon } from "@/components/icons/instagram";
import {
  INSTAGRAM_HANDLE,
  WHATSAPP_NUMBER,
  PHONE_DISPLAY,
  PHONE_E164,
  branches,
} from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black pb-[calc(4.75rem+env(safe-area-inset-bottom))] md:pb-0">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="IBOMEN"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover"
              />
              <span className="font-display text-2xl tracking-[0.2em] text-white">
                IBOMEN
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/40">
              Bakının premium streetwear brendi. Müasir moda, yüksək keyfiyyət
              və 30.000+ Instagram icması.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center border border-white/10 text-white/60 transition-all hover:border-red-600 hover:text-red-500"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center border border-white/10 text-white/60 transition-all hover:border-[#25D366] hover:text-[#25D366]"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-8 md:grid-cols-3">
            <div>
              <h4 className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-white/30">
                Mağaza
              </h4>
              <ul className="space-y-3">
                {["Kataloq", "Yeni Gələnlər", "Filiallar"].map((item) => (
                  <li key={item}>
                    <Link
                      href={item === "Filiallar" ? "/filiallar" : "/catalog"}
                      className="text-sm text-white/50 transition-colors hover:text-white"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-white/30">
                Əlaqə
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`tel:+${PHONE_E164}`}
                    className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-red-600" />
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0 text-[#25D366]" />
                    WhatsApp Sifariş
                  </a>
                </li>
                <li>
                  <a
                    href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
                  >
                    <InstagramIcon className="h-4 w-4 shrink-0 text-red-600" />
                    @{INSTAGRAM_HANDLE}
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-white/30">
                Filiallar
              </h4>
              <ul className="space-y-3">
                {branches.map((branch) => (
                  <li key={branch.id}>
                    <p className="flex items-start gap-2 text-sm text-white/50">
                      <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-red-600" />
                      {branch.name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/25">
            © 2026 IBOMEN. Bütün hüquqlar qorunur.
          </p>
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/25">
            {PHONE_DISPLAY} · Bakı
          </p>
        </div>
      </div>
    </footer>
  );
}
