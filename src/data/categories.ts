// data/categories.ts
import { Category } from "../types/interfaces";

export const categories: Category[] = [
  {
    id: "1",
    title: "کالای دیجیتال",
    slug: "digital",
    icon: "📱",
    children: [
      { id: "1-1", title: "موبایل", slug: "mobile", parentId: "1" },
      { id: "1-2", title: "لپ‌تاپ و الترابوک", slug: "laptop", parentId: "1" },
      { id: "1-3", title: "تبلت", slug: "tablet", parentId: "1" },
      {
        id: "1-4",
        title: "ساعت هوشمند و مچ‌بند",
        slug: "smartwatch",
        parentId: "1",
      },
      {
        id: "1-5",
        title: "هدفون، هدست و هندزفری",
        slug: "headphone",
        parentId: "1",
      },
      { id: "1-6", title: "اسپیکر", slug: "speaker", parentId: "1" },
      { id: "1-7", title: "کنسول بازی", slug: "console", parentId: "1" },
      {
        id: "1-8",
        title: "لوازم جانبی موبایل",
        slug: "mobile-accessory",
        parentId: "1",
      },
    ],
  },
  {
    id: "2",
    title: "لوازم خانگی برقی",
    slug: "home-appliances",
    icon: "🏠",
    children: [
      {
        id: "2-1",
        title: "یخچال و فریزر",
        slug: "refrigerator",
        parentId: "2",
      },
      {
        id: "2-2",
        title: "ماشین لباسشویی",
        slug: "washing-machine",
        parentId: "2",
      },
      { id: "2-3", title: "تلویزیون", slug: "tv", parentId: "2" },
      { id: "2-4", title: "جاروبرقی", slug: "vacuum", parentId: "2" },
    ],
  },
  {
    id: "3",
    title: "مد و پوشاک",
    slug: "fashion",
    icon: "👕",
    children: [
      { id: "3-1", title: "لباس مردانه", slug: "men-clothing", parentId: "3" },
      { id: "3-2", title: "لباس زنانه", slug: "women-clothing", parentId: "3" },
      { id: "3-3", title: "کفش", slug: "shoes", parentId: "3" },
      { id: "3-4", title: "کیف و کوله", slug: "bag", parentId: "3" },
    ],
  },
  {
    id: "4",
    title: "آرایشی، بهداشتی و سلامت",
    slug: "beauty-health",
    icon: "💄",
    children: [
      { id: "4-1", title: "آرایش صورت", slug: "makeup", parentId: "4" },
      { id: "4-2", title: "مراقبت پوست", slug: "skincare", parentId: "4" },
      { id: "4-3", title: "عطر و ادکلن", slug: "perfume", parentId: "4" },
      {
        id: "4-4",
        title: "مکمل‌های غذایی",
        slug: "supplements",
        parentId: "4",
      },
    ],
  },
  {
    id: "5",
    title: "خانه و آشپزخانه",
    slug: "home-kitchen",
    icon: "🍳",
  },
  {
    id: "6",
    title: "کتاب، لوازم تحریر و هنر",
    slug: "books",
    icon: "📚",
  },
  {
    id: "7",
    title: "ورزش و سفر",
    slug: "sports",
    icon: "⚽",
  },
  {
    id: "8",
    title: "خودرو و موتورسیکلت",
    slug: "auto",
    icon: "🚗",
  },
];

export const flatCategories = categories.flatMap((c) =>
  c.children ? [c, ...c.children] : [c],
);
