export type Category =
  | "t-shirts"
  | "jeans"
  | "hoodies"
  | "shoes"
  | "accessories";

export type Product = {
  id: string;
  slug: string;
  name: string;
  nameAz: string;
  price: number;
  currency: string;
  category: Category;
  image: string;
  images: string[];
  description: string;
  descriptionAz: string;
  sizes: string[];
  inStock: boolean;
  featured?: boolean;
  tag?: string;
};

export const categories: {
  slug: Category;
  name: string;
  nameAz: string;
  image: string;
}[] = [
  {
    slug: "t-shirts",
    name: "T-Shirts",
    nameAz: "Köynəklər",
    image: "/images/product-outfit-2.png",
  },
  {
    slug: "jeans",
    name: "Jeans",
    nameAz: "Cinslər",
    image: "/images/product-outfit-1.png",
  },
  {
    slug: "hoodies",
    name: "Hoodies",
    nameAz: "Hoodilər",
    image: "/images/product-outfit-3.png",
  },
  {
    slug: "shoes",
    name: "Shoes",
    nameAz: "Ayaqqabılar",
    image: "/images/instagram.png",
  },
  {
    slug: "accessories",
    name: "Accessories",
    nameAz: "Aksesuarlar",
    image: "/images/logo.png",
  },
];

export const products: Product[] = [
  {
    id: "1",
    slug: "essential-oversized-tee",
    name: "Essential Oversized Tee",
    nameAz: "Essential Oversized Köynək",
    price: 89,
    currency: "₼",
    category: "t-shirts",
    image: "/images/product-outfit-2.png",
    images: [
      "/images/product-outfit-2.png",
      "/images/product-outfit-3.png",
      "/images/product-outfit-3.png",
    ],
    description:
      "Heavyweight cotton oversized tee with refined minimal cut. Designed for everyday luxury streetwear.",
    descriptionAz:
      "Gündəlik premium streetwear üçün hazırlanmış, yüngül minimal kəsimli ağır pambıq oversized köynək.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    featured: true,
    tag: "Yeni",
  },
  {
    id: "2",
    slug: "monogram-track-pant",
    name: "Monogram Track Pant",
    nameAz: "Monogram Track Şalvar",
    price: 149,
    currency: "₼",
    category: "hoodies",
    image: "/images/product-pants-2.png",
    images: [
      "/images/product-pants-2.png",
      "/images/product-pants-1.png",
    ],
    description:
      "Premium fleece track pant with signature side stripe detailing. Relaxed fit with metal-tipped drawcords.",
    descriptionAz:
      "İmza yan zolaq detallı premium fleece track şalvar. Metal uclu kəmərlə rahat kəsim.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    featured: true,
    tag: "Ən çox satılan",
  },
  {
    id: "3",
    slug: "signature-jogger",
    name: "Signature Jogger",
    nameAz: "Signature Jogger",
    price: 129,
    currency: "₼",
    category: "jeans",
    image: "/images/product-pants-3.png",
    images: [
      "/images/product-pants-3.png",
      "/images/product-pants-1.png",
    ],
    description:
      "Structured jogger in premium cotton blend. Clean silhouette with subtle hardware accents.",
    descriptionAz:
      "Premium pambıq qarışığından strukturlu jogger. İncə metal detallarla təmiz siluet.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    featured: true,
  },
  {
    id: "4",
    slug: "editorial-flatlay-set",
    name: "Editorial Street Set",
    nameAz: "Editorial Street Set",
    price: 279,
    currency: "₼",
    category: "t-shirts",
    image: "/images/product-outfit-1.png",
    images: [
      "/images/product-outfit-1.png",
      "/images/product-outfit-3.png",
    ],
    description:
      "Curated streetwear set — tee, denim, and layered essentials. Limited drop.",
    descriptionAz:
      "Köynək, cins və qatlı əsaslar — seçilmiş streetwear seti. Məhdud buraxılış.",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    featured: true,
    tag: "Məhdud",
  },
  {
    id: "5",
    slug: "luxury-graffiti-pant",
    name: "Luxury Graffiti Pant",
    nameAz: "Luxury Graffiti Şalvar",
    price: 159,
    currency: "₼",
    category: "jeans",
    image: "/images/product-pants-1.png",
    images: ["/images/product-pants-1.png"],
    description:
      "Statement sweatpant with bold graphic energy. Heavy jersey construction.",
    descriptionAz:
      "Cəsarətli qrafik enerjili statement şalvar. Ağır jersey tikinti.",
    sizes: ["M", "L", "XL"],
    inStock: false,
    featured: true,
  },
  {
    id: "6",
    slug: "street-runner",
    name: "Street Runner",
    nameAz: "Street Runner",
    price: 199,
    currency: "₼",
    category: "shoes",
    image: "/images/instagram.png",
    images: ["/images/instagram.png", "/images/product-pants-3.png"],
    description:
      "Chunky silhouette runner inspired by premium street culture. Neutral palette, all-day comfort.",
    descriptionAz:
      "Premium küçə mədəniyyətindən ilhamlanan chunky runner. Neytral palitra, bütün gün rahatlıq.",
    sizes: ["40", "41", "42", "43", "44"],
    inStock: true,
    featured: true,
  },
];

export const whyIbomen = [
  {
    title: "Premium Keyfiyyət",
    titleEn: "Premium Quality",
    description:
      "Seçilmiş parçalar və diqqətlə hazırlanmış kəsimlər — hər parça premium hissi verir.",
  },
  {
    title: "Müasir Stil",
    titleEn: "Modern Style",
    description:
      "Bakının ən trend streetwear estetikası. Zamanın qabağında dizayn.",
  },
  {
    title: "Rahat Alış-veriş",
    titleEn: "Easy Shopping",
    description:
      "WhatsApp ilə bir toxunuşda sifariş. Sadə, sürətli, şəxsi xidmət.",
  },
  {
    title: "Sürətli Çatdırılma",
    titleEn: "Fast Delivery",
    description: "Bakı daxilində sürətli çatdırılma. Premium qablaşdırma.",
  },
];

export const PHONE_DISPLAY = "+994 51 644 48 09";
/** Azerbaijan format for tel:/wa.me links */
export const PHONE_E164 = "994516444809";
export const WHATSAPP_NUMBER = PHONE_E164;
export const INSTAGRAM_HANDLE = "ibomen";

export const branches = [
  { id: "1", name: "Həzi Aslanov M/S", nameAz: "Həzi Aslanov metro" },
  { id: "2", name: "Nizami M/S", nameAz: "Nizami metro" },
  { id: "3", name: "Əhmədli M/S", nameAz: "Əhmədli metro" },
  { id: "4", name: "28 May M/S", nameAz: "28 May metro" },
] as const;

export const BRAND_LOCATION = "Bakı, Azərbaycan · 4 filial";

export function formatPrice(price: number, currency = "₼") {
  return `${price} ${currency}`;
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getWhatsAppOrderUrl(product: Product, size?: string) {
  const text = encodeURIComponent(
    `Salam IBOMEN! Sifariş etmək istəyirəm:\n\n📦 ${product.nameAz}\n💰 ${formatPrice(product.price, product.currency)}${size ? `\n📏 Ölçü: ${size}` : ""}\n\nZəhmət olmasa mövcudluğu təsdiqləyin.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
