export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  currency: string;
  image: string;
  images: string[];
  description: string;
  sizes: string[];
  inStock: boolean;
  tag?: string;
};

export const products: Product[] = [
  {
    id: "1",
    slug: "azul-tee-cream",
    name: "Azul and house music. Tee",
    price: 79,
    currency: "₼",
    image: "/images/product-seat.png",
    images: [
      "/images/product-seat.png",
      "/images/product-stack.png",
      "/images/model-car.png",
      "/images/model-balcony.png",
      "/images/model-bottle.png",
    ],
    description:
      "Premium heavyweight cotton tee. Minimal back print — Azul and house music. Quiet luxury for the night.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    tag: "Yeni",
  },
  {
    id: "2",
    slug: "niche-club-tee",
    name: "Niche Club Tee",
    price: 69,
    currency: "₼",
    image: "/images/product-stack.png",
    images: ["/images/product-stack.png", "/images/lifestyle-trunk.png"],
    description:
      "Chest logo edition. Clean serif mark on off-white cotton. Understated, old-money energy.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
  },
];

export const BRAND_NAME = "Azul and house music";
export const BRAND_TAGLINE = "Niche luxury · Bakı";
export const INSTAGRAM_HANDLE = "azulandhousemusic";
export const WHATSAPP_NUMBER = "994501234567";
export const PHONE_DISPLAY = "+994 50 000 00 00";
export const PHONE_E164 = "994500000000";

export function formatPrice(price: number, currency = "₼") {
  return `${price} ${currency}`;
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getWhatsAppOrderUrl(product: Product, size?: string) {
  const text = encodeURIComponent(
    `Salam! Sifariş etmək istəyirəm:\n\n📦 ${product.name}\n💰 ${formatPrice(product.price, product.currency)}${size ? `\n📏 Ölçü: ${size}` : ""}`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
