// data/products.ts
import { Product } from "../types/interfaces";

export const products: Product[] = [
  // ========== موبایل ==========
  {
    id: "1",
    slug: "mobile-Samsung-Galaxy-S25-FE",
    category: "mobile",
    subcategory: "samsung",
    brand: "Samsung",
    title:
      "گوشی موبایل سامسونگ مدل Galaxy S25 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
    name: "Samsung Galaxy S25 FE",
    price: 45600000,
    discount: 12,
    rating: "4.8",
    ratingCount: 1247,
    image:
      "https://dkstatics-public.digikala.com/digikala-products/55582a9ac4add1b88050b458e7d490564b3ac4b6_1759667022.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/format,webp/quality,q_90",
    gallery: [
      {
        src: "https://dkstatics-public.digikala.com/digikala-products/55582a9ac4add1b88050b458e7d490564b3ac4b6_1759667022.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        alt: "Galaxy S25 FE",
      },
      {
        src: "https://dkstatics-public.digikala.com/digikala-products/e685a271510b2a7d3d8a35f79eb995a9e0e47cca_1764607711.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        alt: "Galaxy S25 FE back",
      },
      {
        src: "https://dkstatics-public.digikala.com/digikala-products/3696bc624d46179c5af8682f7560dc6864c1f89e_1764607739.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        alt: "Galaxy S25 FE side",
      },
    ],
    colors: [
      { title: "مشکی", name: "black", hex: "#1a1a1a" },
      { title: "آبی", name: "blue", hex: "#1e3a8a" },
      { title: "نقره‌ای", name: "silver", hex: "#c0c0c0" },
    ],
    properties: [
      { name: "حافظه داخلی", text: "256 گیگابایت" },
      { name: "رم", text: "8 گیگابایت" },
      { name: "پردازنده", text: "Exynos 2400" },
      { name: "اندازه صفحه", text: "6.7 اینچ" },
    ],
    specifications: [
      {
        name: "صفحه نمایش",
        text: "6.7 اینچ Dynamic AMOLED 2X، رفرش‌ریت 120 هرتز",
      },
      { name: "باتری", text: "4700 میلی‌آمپرساعت با شارژ سریع 45 وات" },
      {
        name: "دوربین اصلی",
        text: "50 مگاپیکسل + 12 مگاپیکسل اولترا واید + 8 مگاپیکسل تله‌فوتو",
      },
      { name: "دوربین سلفی", text: "12 مگاپیکسل" },
      { name: "سیستم عامل", text: "Android 15 با One UI 7" },
      { name: "مقاومت در برابر آب", text: "IP68" },
    ],
    stock: 34,
    isAmazing: true,
    isOriginal: true,
    seller: "دیجی‌کالا",
    description:
      "گلکسی S25 FE نسل جدید میان‌رده پرچمدار سامسونگ با پردازنده قدرتمند و دوربین حرفه‌ای.",
  },
  {
    id: "2",
    slug: "mobile-Apple-iPhone-16-Pro-Max",
    category: "mobile",
    subcategory: "apple",
    brand: "Apple",
    title:
      "گوشی موبایل اپل مدل iPhone 16 Pro Max دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
    name: "Apple iPhone 16 Pro Max",
    price: 124900000,
    discount: 5,
    rating: "4.9",
    ratingCount: 892,
    image:
      "https://dkstatics-public.digikala.com/digikala-products/48daaebd4cb7706cce21ce8b5e485d6fdafa6bd1_1736598863.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
    gallery: [
      {
        src: "https://dkstatics-public.digikala.com/digikala-products/48daaebd4cb7706cce21ce8b5e485d6fdafa6bd1_1736598863.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        alt: "iPhone 16 Pro Max",
      },
    ],
    colors: [
      { title: "تیتانیوم طبیعی", name: "natural-titanium", hex: "#8a8a8a" },
      { title: "تیتانیوم مشکی", name: "black-titanium", hex: "#2c2c2c" },
      { title: "تیتانیوم سفید", name: "white-titanium", hex: "#f5f5f5" },
      { title: "تیتانیوم آبی", name: "blue-titanium", hex: "#3b5998" },
    ],
    properties: [
      { name: "حافظه داخلی", text: "256 گیگابایت" },
      { name: "رم", text: "8 گیگابایت" },
      { name: "چیپست", text: "A18 Pro" },
      { name: "اندازه صفحه", text: "6.9 اینچ" },
    ],
    specifications: [
      {
        name: "نمایشگر",
        text: "6.9 اینچ Super Retina XDR OLED، ProMotion 120Hz",
      },
      { name: "چیپست", text: "Apple A18 Pro" },
      {
        name: "دوربین اصلی",
        text: "48 مگاپیکسل + 12 مگاپیکسل اولترا واید + 12 مگاپیکسل تله‌فوتو 5x",
      },
      { name: "باتری", text: "تا 33 ساعت پخش ویدیو" },
      { name: "سیستم عامل", text: "iOS 18" },
      { name: "مقاومت", text: "IP68 + Ceramic Shield" },
    ],
    stock: 18,
    isAmazing: false,
    isOriginal: true,
    seller: "دیجی‌کالا",
  },
  {
    id: "7",
    slug: "mobile-Xiaomi-Redmi-Note-14",
    category: "mobile",
    brand: "Xiaomi",
    title:
      "گوشی موبایل شیائومی مدل Redmi Note 14 4G دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
    name: "Xiaomi Redmi Note 14",
    price: 18990000,
    discount: 8,
    rating: "4.6",
    ratingCount: 2156,
    image:
      "https://dkstatics-public.digikala.com/digikala-products/55582a9ac4add1b88050b458e7d490564b3ac4b6_1759667022.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/format,webp/quality,q_90",
    gallery: [
      {
        src: "https://dkstatics-public.digikala.com/digikala-products/55582a9ac4add1b88050b458e7d490564b3ac4b6_1759667022.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        alt: "Redmi Note 14",
      },
    ],
    colors: [
      { title: "مشکی", name: "black" },
      { title: "آبی", name: "blue" },
      { title: "سبز", name: "green" },
    ],
    properties: [
      { name: "حافظه", text: "256 گیگابایت" },
      { name: "رم", text: "8 گیگابایت" },
      { name: "پردازنده", text: "Helio G99 Ultra" },
    ],
    specifications: [
      { name: "صفحه نمایش", text: "6.67 اینچ AMOLED 120Hz" },
      { name: "باتری", text: "5500mAh با شارژ 33 وات" },
      { name: "دوربین", text: "108 مگاپیکسل اصلی" },
    ],
    stock: 89,
    isAmazing: true,
    isOriginal: true,
  },
// ========== لپ‌تاپ ==========
{
  id: "3",
  slug: "laptop-ASUS-Vivobook-15",
  category: "laptop",
  brand: "ASUS",
  title:
    "لپ تاپ 15.6 اینچی ایسوس مدل Vivobook 15 X1504VA-NJ928-i7 13620H-16GB DDR4-512GB SSD-Intel",
  name: "ASUS Vivobook 15",
  price: 38900000,
  discount: 18,
  rating: "4.6",
  ratingCount: 432,
  image:
    "https://dkstatics-public.digikala.com/digikala-products/9930f7954726af3d2b465182926e18b5b25e8162_1755788508.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
  gallery: [
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/9930f7954726af3d2b465182926e18b5b25e8162_1755788508.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
      alt: "Vivobook 15",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/f25b8cbd34c83bb6fdeab45d2d9e567c82fb54c3_1756555451.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
      alt: "Vivobook side",
    },
  ],
  colors: [
    { title: "نقره‌ای", name: "silver", hex: "#C0C0C0" },
    { title: "آبی تیره", name: "quiet-blue", hex: "#2c3e50" },
  ],
  properties: [
    { name: "پردازنده", text: "Core i7-13620H" },
    { name: "رم", text: "16 گیگابایت" },
    { name: "حافظه", text: "512 گیگابایت SSD" },
  ],
  specifications: [
    { name: "نمایشگر", text: "15.6 اینچ Full HD IPS" },
    { name: "گرافیک", text: "Intel Iris Xe" },
    { name: "وزن", text: "1.7 کیلوگرم" },
    { name: "باتری", text: "42 وات‌ساعت" },
  ],
  stock: 12,
  isAmazing: true,
  isOriginal: true,
},

// ========== هدفون ==========
{
  id: "4",
  slug: "digital-Sony-WH-1000XM5",
  category: "digital",
  brand: "Sony",
  title: "هدفون بی‌سیم سونی مدل WH-1000XM5 با نویز کنسلینگ فعال",
  name: "Sony WH-1000XM5",
  price: 18900000,
  discount: 0,
  rating: "4.9",
  ratingCount: 1563,
  image:
    "https://dkstatics-public.digikala.com/digikala-products/3bc08f041859daac2c0af8535b4c6894f1b496cf_1745825003.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
  gallery: [
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/3bc08f041859daac2c0af8535b4c6894f1b496cf_1745825003.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
      alt: "Sony XM5",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/e7d12999420e140c398fa1f8a4fb631312552e41_1695473459.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
      alt: "Sony XM5 folded",
    },
  ],
  colors: [
    { title: "مشکی", name: "black", hex: "#1a1a1a" },
    { title: "نقره‌ای", name: "silver", hex: "#C0C0C0" },
  ],
  properties: [
    { name: "نوع اتصال", text: "بلوتوث 5.3" },
    { name: "شارژدهی", text: "30 ساعت (با ANC)" },
    { name: "نویز کنسلینگ", text: "فعال (ANC)" },
  ],
  specifications: [
    { name: "درایور", text: "30 میلی‌متری" },
    { name: "وزن", text: "250 گرم" },
    { name: "میکروفون", text: "8 میکروفون برای مکالمه شفاف" },
    { name: "مقاومت", text: "IPX4" },
  ],
  stock: 41,
  isAmazing: false,
  isOriginal: true,
},

// ========== ساعت هوشمند ==========
{
  id: "5",
  slug: "digital-Apple-Watch-Series-10",
  category: "digital",
  brand: "Apple",
  title: "ساعت هوشمند اپل مدل Series 10 Aluminum Case 46mm با بند ورزشی",
  name: "Apple Watch Series 10",
  price: 35900000,
  discount: 10,
  rating: "4.7",
  ratingCount: 678,
  image:
    "https://dkstatics-public.digikala.com/digikala-products/e0adcb187655ea1d704a4b4a288ffc41e8e2a233_1739285743.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
  gallery: [
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/e0adcb187655ea1d704a4b4a288ffc41e8e2a233_1739285743.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
      alt: "Apple Watch Series 10",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/c7cbe7f10b2d893f4fd6577649c83186c6cb2fd1_1727616118.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
      alt: "Apple Watch side",
    },
  ],
  colors: [
    { title: "آلومینیوم نقره‌ای", name: "silver", hex: "#C0C0C0" },
    { title: "آلومینیوم جت بلک", name: "jet-black", hex: "#2b2b2b" },
    { title: "آلومینیوم رز گلد", name: "rose-gold", hex: "#B76E79" },
  ],
  properties: [
    { name: "سایز", text: "46 میلی‌متر" },
    { name: "GPS", text: "دارد" },
    { name: "مانیتور ضربان قلب", text: "دارد" },
  ],
  specifications: [
    { name: "باتری", text: "تا 18 ساعت" },
    { name: "ضد آب", text: "تا عمق 50 متر (WR50)" },
    { name: "نمایشگر", text: "Always-On Retina LTPO OLED" },
    { name: "حسگرها", text: "ECG، اکسیژن خون، دما" },
  ],
  stock: 22,
  isAmazing: false,
  isOriginal: true,
},

// ========== تبلت ==========
{
  id: "6",
  slug: "mobile-Xiaomi-Pad-7-Pro",
  category: "mobile",
  brand: "Xiaomi",
  title: "تبلت شیائومی مدل Pad 7 Pro ظرفیت 256 گیگابایت و رم 12 گیگابایت",
  name: "Xiaomi Pad 7 Pro",
  price: 29900000,
  discount: 7,
  rating: "4.5",
  ratingCount: 198,
  image:
    "https://dkstatics-public.digikala.com/digikala-products/f91a9fa4f89204cc6f23a39bcc356e17e943d73d_1772625340.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
  gallery: [
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/f91a9fa4f89204cc6f23a39bcc356e17e943d73d_1772625340.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
      alt: "Pad 7 Pro",
    },
  ],
  colors: [
    { title: "خاکستری", name: "grey", hex: "#808080" },
    { title: "آبی", name: "blue", hex: "#1e3a8a" },
  ],
  properties: [
    { name: "حافظه", text: "256 گیگابایت" },
    { name: "رم", text: "12 گیگابایت" },
    { name: "پردازنده", text: "Snapdragon 8s Gen 3" },
  ],
  specifications: [
    { name: "نمایشگر", text: "11.2 اینچ 3.2K 144Hz" },
    { name: "باتری", text: "8850 میلی‌آمپرساعت" },
    { name: "قلم", text: "پشتیبانی از Xiaomi Smart Pen" },
  ],
  stock: 15,
  isAmazing: false,
  isOriginal: true,
},

// ========== موبایل ==========
{
  id: "7",
  slug: "mobile-Xiaomi-Redmi-Note-14",
  category: "mobile",
  brand: "Xiaomi",
  title:
    "گوشی موبایل شیائومی مدل Redmi Note 14 4G دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
  name: "Xiaomi Redmi Note 14",
  price: 18990000,
  discount: 8,
  rating: "4.6",
  ratingCount: 2156,
  image:
    "https://dkstatics-public.digikala.com/digikala-products/55582a9ac4add1b88050b458e7d490564b3ac4b6_1759667022.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/format,webp/quality,q_90",
  gallery: [
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/55582a9ac4add1b88050b458e7d490564b3ac4b6_1759667022.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
      alt: "Redmi Note 14",
    },
  ],
  colors: [
    { title: "مشکی", name: "black", hex: "#1a1a1a" },
    { title: "آبی", name: "blue", hex: "#1e3a8a" },
    { title: "سبز", name: "green", hex: "#4CAF50" },
  ],
  properties: [
    { name: "حافظه", text: "256 گیگابایت" },
    { name: "رم", text: "8 گیگابایت" },
    { name: "پردازنده", text: "Helio G99 Ultra" },
  ],
  specifications: [
    { name: "صفحه نمایش", text: "6.67 اینچ AMOLED 120Hz" },
    { name: "باتری", text: "5500mAh با شارژ 33 وات" },
    { name: "دوربین", text: "108 مگاپیکسل اصلی" },
  ],
  stock: 89,
  isAmazing: true,
  isOriginal: true,
},

// ========== لپ‌تاپ ==========
{
  id: "8",
  slug: "laptop-Lenovo-IdeaPad-Slim-3",
  category: "laptop",
  brand: "Lenovo",
  title:
    "لپ تاپ 15.6 اینچی لنوو مدل IdeaPad Slim 3 15IRH8-i5 13420H-16GB-512GB SSD",
  name: "Lenovo IdeaPad Slim 3",
  price: 32900000,
  discount: 10,
  rating: "4.5",
  ratingCount: 287,
  image:
    "https://dkstatics-public.digikala.com/digikala-products/9930f7954726af3d2b465182926e18b5b25e8162_1755788508.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
  gallery: [
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/9930f7954726af3d2b465182926e18b5b25e8162_1755788508.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
      alt: "IdeaPad Slim 3",
    },
  ],
  colors: [
    { title: "خاکستری", name: "grey", hex: "#808080" },
  ],
  properties: [
    { name: "پردازنده", text: "Core i5-13420H" },
    { name: "رم", text: "16GB" },
    { name: "SSD", text: "512GB" },
  ],
  specifications: [
    { name: "نمایشگر", text: "15.6 اینچ FHD" },
    { name: "گرافیک", text: "Intel UHD" },
  ],
  stock: 25,
  isAmazing: false,
  isOriginal: true,
},

// ========== هدفون ==========
{
  id: "9",
  slug: "digital-Anker-Soundcore-R50i",
  category: "digital",
  brand: "Anker",
  title:
    "هدفون بلوتوثی انکر مدل Soundcore R50i با قابلیت مکالمه و مقاومت در برابر آب",
  name: "Anker Soundcore R50i",
  price: 2400000,
  discount: 15,
  rating: "4.4",
  ratingCount: 3241,
  image:
    "https://dkstatics-public.digikala.com/digikala-products/3bc08f041859daac2c0af8535b4c6894f1b496cf_1745825003.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
  gallery: [
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/3bc08f041859daac2c0af8535b4c6894f1b496cf_1745825003.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
      alt: "Anker R50i",
    },
  ],
  colors: [
    { title: "مشکی", name: "black", hex: "#1a1a1a" },
    { title: "سفید", name: "white", hex: "#FFFFFF" },
  ],
  properties: [
    { name: "نوع", text: "ایربادز بی‌سیم" },
    { name: "شارژدهی", text: "تا 30 ساعت با کیس" },
  ],
  specifications: [
    { name: "درایور", text: "10 میلی‌متری" },
    { name: "مقاومت", text: "IPX5" },
    { name: "درگاه شارژ", text: "USB-C" },
  ],
  stock: 156,
  isAmazing: true,
  isOriginal: true,
},

// ========== ساعت هوشمند ==========
{
  id: "10",
  slug: "digital-Samsung-Galaxy-Watch-7",
  category: "digital",
  brand: "Samsung",
  title: "ساعت هوشمند سامسونگ مدل Galaxy Watch 7 44mm",
  name: "Samsung Galaxy Watch 7",
  price: 18900000,
  discount: 12,
  rating: "4.6",
  ratingCount: 512,
  image:
    "https://dkstatics-public.digikala.com/digikala-products/e0adcb187655ea1d704a4b4a288ffc41e8e2a233_1739285743.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
  gallery: [
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/e0adcb187655ea1d704a4b4a288ffc41e8e2a233_1739285743.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
      alt: "Galaxy Watch 7",
    },
  ],
  colors: [
    { title: "سبز", name: "green", hex: "#4CAF50" },
    { title: "کرم", name: "cream", hex: "#FFFDD0" },
  ],
  properties: [
    { name: "سایز", text: "44 میلی‌متر" },
    { name: "سیستم عامل", text: "Wear OS" },
  ],
  specifications: [
    { name: "باتری", text: "تا 40 ساعت" },
    { name: "ضد آب", text: "5ATM + IP68" },
    { name: "حسگر BioActive", text: "دارد" },
  ],
  stock: 37,
  isAmazing: true,
  isOriginal: true,
},

// ========== تبلت ==========
{
  id: "11",
  slug: "mobile-Samsung-Galaxy-Tab-S10",
  category: "mobile",
  brand: "Samsung",
  title:
    "تبلت سامسونگ مدل Galaxy Tab S10 FE ظرفیت 128 گیگابایت و رم 8 گیگابایت",
  name: "Samsung Galaxy Tab S10 FE",
  price: 24900000,
  discount: 9,
  rating: "4.7",
  ratingCount: 145,
  image:
    "https://dkstatics-public.digikala.com/digikala-products/f91a9fa4f89204cc6f23a39bcc356e17e943d73d_1772625340.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
  gallery: [
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/f91a9fa4f89204cc6f23a39bcc356e17e943d73d_1772625340.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
      alt: "Tab S10 FE",
    },
  ],
  colors: [
    { title: "خاکستری", name: "gray", hex: "#808080" },
    { title: "آبی", name: "blue", hex: "#1e3a8a" },
  ],
  properties: [
    { name: "حافظه", text: "128 گیگابایت" },
    { name: "رم", text: "8 گیگابایت" },
  ],
  specifications: [
    { name: "نمایشگر", text: "10.9 اینچ TFT" },
    { name: "باتری", text: "8000mAh" },
    { name: "S Pen", text: "همراه محصول" },
  ],
  stock: 28,
  isAmazing: true,
  isOriginal: true,
},

// ========== تلویزیون ==========
{
  id: "12",
  slug: "digital-XVision-65XCU705",
  category: "digital",
  brand: "XVision",
  title: "تلویزیون LED هوشمند 65 اینچ ایکس ویژن مدل 65XCU705",
  name: "XVision 65XCU705",
  price: 99900000,
  discount: 21,
  rating: "4.4",
  ratingCount: 89,
  image:
    "https://dkstatics-public.digikala.com/digikala-products/9930f7954726af3d2b465182926e18b5b25e8162_1755788508.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
  gallery: [
    {
      src: "https://dkstatics-public.digikala.com/digikala-products/9930f7954726af3d2b465182926e18b5b25e8162_1755788508.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
      alt: "XVision TV",
    },
  ],
  colors: [
    { title: "مشکی", name: "black", hex: "#1a1a1a" },
  ],
  properties: [
    { name: "سایز", text: "65 اینچ" },
    { name: "رزولوشن", text: "4K UHD" },
    { name: "سیستم عامل", text: "Android TV" },
  ],
  specifications: [
    { name: "نمایشگر", text: "LED 4K با HDR10" },
    { name: "نرخ نوسازی", text: "60 هرتز" },
    { name: "ورودی‌ها", text: "3x HDMI، 2x USB" },
  ],
  stock: 7,
  isAmazing: true,
  isOriginal: true,
},
];

// توابع کمکی مفید
export const getProductsByCategory = (categorySlug: string) =>
  products.filter((p) => p.category === categorySlug);

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

export const getAmazingOffers = () => products.filter((p) => p.isAmazing);

export const searchProducts = (query: string) =>
  products.filter(
    (p) =>
      p.title.includes(query) ||
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.brand.toLowerCase().includes(query.toLowerCase()),
  );
