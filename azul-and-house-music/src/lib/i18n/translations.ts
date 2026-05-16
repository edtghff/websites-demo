export type Locale = "az" | "en" | "ru";

export const locales: { code: Locale; label: string }[] = [
  { code: "az", label: "AZ" },
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
];

const t = {
  az: {
    nav: { catalog: "Kataloq", about: "Haqqında", lookbook: "Lookbook", instagram: "Instagram", menu: "Menyu" },
    hero: {
      eyebrow: "Bakı · Niche luxury",
      title: "Niche Club",
      subtitle:
        "Azul and house music — sakit gecələr, house musiqi və incə lüks üçün premium köynək.",
      ctaShop: "Kataloqa Bax",
      ctaLookbook: "Lookbook",
    },
    product: {
      name: "Azul and house music. Tee",
      description:
        "Premium ağır pambıq köynək. Arxada minimal «Azul and house music» print. Gecə üçün incə lüks.",
      tag: "Yeni",
      price: "79",
    },
    featured: {
      label: "Kolleksiya",
      title: "The Tee",
      view: "Ətraflı bax",
      sizes: "Ölçülər",
      order: "Sifariş et",
    },
    story: {
      label: "Haqqında",
      title: "House music.\nQuiet luxury.",
      p1: "Bakıda yeni niche brend — səs-kürmə olmadan zövqli geyim. Premium pambıq, minimal print.",
      p2: "Azul and house music — gecə, musiqi və incə stil haqqındadır.",
    },
    gallery: { label: "Lookbook", title: "The mood" },
    marquee: [
      "Private club aesthetic",
      "Exclusive garments",
      "Worldwide shipping",
      "First drop soon",
      "Azul and house music",
    ],
    pillars: {
      label: "Niche club",
      items: [
        {
          title: "Private club aesthetic",
          body: "Qapalı otaq enerjisi — minimal, incə, gecə üçün.",
        },
        {
          title: "Exclusive garments",
          body: "Məhdud sayda parçalar. Hər drop — seçilmişlər üçün.",
        },
        {
          title: "Worldwide shipping",
          body: "Bakıdan dünyaya. Sifariş WhatsApp ilə, çatdırılma beynəlxalq.",
        },
        {
          title: "First drop soon",
          body: "İlk kolleksiya tezliklə. @niche.clubb — erkən giriş.",
        },
      ],
    },
    club: {
      label: "The room",
      title: "Private club\naesthetic",
      body: "Azul and house music — NICHE CLUB üçün sakit lüks. House, gecə və incə əhval. Üzv olmaq üçün səs-kürmə lazım deyil — zövq kifayətdir.",
      cta: "Lookbook",
    },
    drop: {
      label: "Drop 01",
      title: "First drop soon",
      body: "İlk tee artıq burada. Növbəti parçalar yoldadır — @niche.clubb izləyin.",
      ctaShop: "Kataloqa bax",
      ctaIg: "Instagram",
    },
    instagram: {
      label: "Sosial",
      title: "Join the club",
      body: "Yeni drop, lookbook və gecə əhvalı — @niche.clubb",
      cta: "İzlə",
    },
    editorial: {
      quote: "Quiet nights. House music. Quiet luxury.",
    },
    footer: {
      tagline: "Niche luxury · Bakı",
      contact: "Əlaqə",
      social: "Sosial",
    },
    mobile: { home: "Ana", catalog: "Kataloq", order: "Sifariş" },
    catalog: { label: "Mağaza", title: "Kataloq", count: "məhsul", one: "1 məhsul" },
    productPage: {
      back: "Geri",
      size: "Ölçü seçin",
      whatsapp: "WhatsApp ilə sifariş",
      perks: [
        "Premium pambıq",
        "Worldwide shipping",
        "Exclusive garments",
        "WhatsApp dəstəyi",
      ],
    },
  },
  en: {
    nav: { catalog: "Catalog", about: "About", lookbook: "Lookbook", instagram: "Instagram", menu: "Menu" },
    hero: {
      eyebrow: "Baku · Niche luxury",
      title: "Niche Club",
      subtitle:
        "Azul and house music — a premium tee for quiet nights, house music, and understated luxury.",
      ctaShop: "View Catalog",
      ctaLookbook: "Lookbook",
    },
    product: {
      name: "Azul and house music. Tee",
      description:
        "Premium heavyweight cotton tee. Minimal back print. Quiet luxury for the night.",
      tag: "New",
      price: "79",
    },
    featured: {
      label: "Collection",
      title: "The Tee",
      view: "View details",
      sizes: "Sizes",
      order: "Order now",
    },
    story: {
      label: "About",
      title: "House music.\nQuiet luxury.",
      p1: "A new niche brand in Baku — taste without noise. Premium cotton, minimal print.",
      p2: "Azul and house music is about the night, the music, and understated style.",
    },
    gallery: { label: "Lookbook", title: "The mood" },
    marquee: [
      "Private club aesthetic",
      "Exclusive garments",
      "Worldwide shipping",
      "First drop soon",
      "Azul and house music",
    ],
    pillars: {
      label: "Niche club",
      items: [
        {
          title: "Private club aesthetic",
          body: "Closed-door energy — minimal, refined, built for the night.",
        },
        {
          title: "Exclusive garments",
          body: "Limited pieces. Every drop is for the few, not the crowd.",
        },
        {
          title: "Worldwide shipping",
          body: "From Baku to the world. Order via WhatsApp, delivered globally.",
        },
        {
          title: "First drop soon",
          body: "The first collection is here. More pieces incoming — follow @niche.clubb.",
        },
      ],
    },
    club: {
      label: "The room",
      title: "Private club\naesthetic",
      body: "Azul and house music is quiet luxury for NICHE CLUB — house, night, and refined mood. No noise required; taste is the membership.",
      cta: "Lookbook",
    },
    drop: {
      label: "Drop 01",
      title: "First drop soon",
      body: "The tee is live. The next pieces are on the way — follow @niche.clubb for early access.",
      ctaShop: "Shop the tee",
      ctaIg: "Instagram",
    },
    instagram: {
      label: "Social",
      title: "Join the club",
      body: "New drops, lookbook, and night mood — @niche.clubb",
      cta: "Follow",
    },
    editorial: {
      quote: "Quiet nights. House music. Quiet luxury.",
    },
    footer: {
      tagline: "Niche luxury · Baku",
      contact: "Contact",
      social: "Social",
    },
    mobile: { home: "Home", catalog: "Shop", order: "Order" },
    catalog: { label: "Shop", title: "Catalog", count: "products", one: "1 product" },
    productPage: {
      back: "Back",
      size: "Select size",
      whatsapp: "Order on WhatsApp",
      perks: [
        "Premium cotton",
        "Worldwide shipping",
        "Exclusive garments",
        "WhatsApp support",
      ],
    },
  },
  ru: {
    nav: { catalog: "Каталог", about: "О нас", lookbook: "Lookbook", instagram: "Instagram", menu: "Меню" },
    hero: {
      eyebrow: "Баку · Niche luxury",
      title: "Niche Club",
      subtitle:
        "Azul and house music — премиальная футболка для тихих вечеров, house music и сдержанной роскоши.",
      ctaShop: "Смотреть каталог",
      ctaLookbook: "Lookbook",
    },
    product: {
      name: "Azul and house music. Tee",
      description:
        "Премиальный плотный хлопок. Минимальный принт сзади. Тихая роскошь для ночи.",
      tag: "Новинка",
      price: "79",
    },
    featured: {
      label: "Коллекция",
      title: "The Tee",
      view: "Подробнее",
      sizes: "Размеры",
      order: "Заказать",
    },
    story: {
      label: "О бренде",
      title: "House music.\nQuiet luxury.",
      p1: "Новый niche-бренд в Баку — вкус без крика. Премиальный хлопок, минимальный принт.",
      p2: "Azul and house music — про ночь, музыку и сдержанный стиль.",
    },
    gallery: { label: "Lookbook", title: "The mood" },
    marquee: [
      "Private club aesthetic",
      "Exclusive garments",
      "Worldwide shipping",
      "First drop soon",
      "Azul and house music",
    ],
    pillars: {
      label: "Niche club",
      items: [
        {
          title: "Private club aesthetic",
          body: "Энергия закрытого клуба — минимализм, ночь, сдержанная роскошь.",
        },
        {
          title: "Exclusive garments",
          body: "Лимитированные вещи. Каждый drop — для своих.",
        },
        {
          title: "Worldwide shipping",
          body: "Из Баку по всему миру. Заказ в WhatsApp, доставка worldwide.",
        },
        {
          title: "First drop soon",
          body: "Первая коллекция уже здесь. Следующие вещи скоро — @niche.clubb.",
        },
      ],
    },
    club: {
      label: "The room",
      title: "Private club\naesthetic",
      body: "Azul and house music — тихая роскошь для NICHE CLUB: house, ночь и сдержанный стиль. Членство — это вкус, а не шум.",
      cta: "Lookbook",
    },
    drop: {
      label: "Drop 01",
      title: "First drop soon",
      body: "Футболка уже в каталоге. Следующие вещи в пути — подпишись @niche.clubb.",
      ctaShop: "В каталог",
      ctaIg: "Instagram",
    },
    instagram: {
      label: "Соцсети",
      title: "Join the club",
      body: "Новые drop'ы, lookbook и ночной mood — @niche.clubb",
      cta: "Подписаться",
    },
    editorial: {
      quote: "Quiet nights. House music. Quiet luxury.",
    },
    footer: {
      tagline: "Niche luxury · Баку",
      contact: "Контакты",
      social: "Соцсети",
    },
    mobile: { home: "Главная", catalog: "Каталог", order: "Заказ" },
    catalog: { label: "Магазин", title: "Каталог", count: "товаров", one: "1 товар" },
    productPage: {
      back: "Назад",
      size: "Выберите размер",
      whatsapp: "Заказ в WhatsApp",
      perks: [
        "Премиум хлопок",
        "Worldwide shipping",
        "Exclusive garments",
        "Поддержка WhatsApp",
      ],
    },
  },
} as const;

export type TranslationKey = keyof typeof t.az;

export function getTranslations(locale: Locale) {
  return t[locale];
}
