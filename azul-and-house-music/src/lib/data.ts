export type Product = {
  id: string;
  slug: string;
  price: number;
  currency: string;
  image: string;
  images: string[];
  sizes: string[];
  inStock: boolean;
};

export const product: Product = {
  id: "1",
  slug: "azul-tee-cream",
  price: 79,
  currency: "₼",
  image: "/images/product-seat.png",
  images: [
    "/images/product-seat.png",
    "/images/model-car.png",
    "/images/model-balcony.png",
    "/images/model-bottle.png",
    "/images/hero-hood.png",
  ],
  sizes: ["S", "M", "L", "XL"],
  inStock: true,
};

/** @deprecated use `product` — kept for catalog route */
export const products = [product];

export const BRAND_NAME = "Niche Club";
export const COLLECTION_NAME = "Azul and house music";
export const INSTAGRAM_HANDLE = "niche.clubb";
export const WHATSAPP_NUMBER = "994501234567";
export const PHONE_DISPLAY = "+994 50 000 00 00";
export const PHONE_E164 = "994500000000";

export function formatPrice(price: number, currency = "₼") {
  return `${price} ${currency}`;
}

export function getProductBySlug(slug: string) {
  return slug === product.slug ? product : undefined;
}

export function getWhatsAppOrderUrl(
  productName: string,
  price: number,
  currency: string,
  size?: string
) {
  const text = encodeURIComponent(
    `Salam! Sifariş etmək istəyirəm:\n\n📦 ${productName}\n💰 ${formatPrice(price, currency)}${size ? `\n📏 Ölçü: ${size}` : ""}`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
