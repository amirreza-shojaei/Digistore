// data/megaMenuSidebar.ts
import {
  Smartphone,   
  Home,         
  Laptop,       
  Monitor,      
  Plug,         
  Sparkles,     
  Shirt,        
  Gem,          
  Car,          
  HeartPulse,   
  Wrench,       
  BookOpen,     
} from "lucide-react";
export interface SidebarCategory {
  id: string;
  title: string;
  slug: string;
  icon: React.ReactNode; 
  href: string;
}

export const sidebarCategories: SidebarCategory[] = [
  {
    id: "mobile",
    title: "موبایل",
    slug: "mobile",
    icon: <Smartphone />,
    href: "/search/category-mobile-phone/",
  },
  {
    id: "laptop",
    title: "لپ تاپ",
    slug: "laptop",
    icon: <Laptop />,
    href: "/search/category-notebook-netbook-ultrabook/",
  },
  {
    id: "digital",
    title: "کالای دیجیتال",
    slug: "digital",
    icon: <Monitor />,
    href: "/main/electronic-devices/",
  },
  {
    id: "home-kitchen",
    title: "خانه و آشپزخانه",
    slug: "home-kitchen",
    icon: <Home />,
    href: "/main/home-and-kitchen/",
  },
  {
    id: "home-appliances",
    title: "لوازم خانگی برقی",
    slug: "home-appliances",
    icon: <Plug />,
    href: "/main/home-appliances/",
  },
  {
    id: "beauty",
    title: "آرایشی بهداشتی",
    slug: "beauty",
    icon: <Sparkles />,
    href: "/main/beauty/",
  },
  {
    id: "fashion",
    title: "مد و پوشاک",
    slug: "fashion",
    icon: <Shirt />,
    href: "/main/apparel/",
  },
  {
    id: "gold",
    title: "طلا و نقره",
    slug: "gold",
    icon: <Gem />,
    href: "/main/gold/",
  },
  {
    id: "auto",
    title: "خودرو و موتورسیکلت",
    slug: "auto",
    icon: <Car />,
    href: "/main/vehicles/",
  },
  {
    id: "health",
    title: "سلامت و پزشکی",
    slug: "health",
    icon: <HeartPulse />,
    href: "/main/health/",
  },
  {
    id: "tools",
    title: "ابزارآلات و تجهیزات",
    slug: "tools",
    icon: <Wrench />,
    href: "/main/tools/",
  },
  {
    id: "books",
    title: "کتاب و هنر",
    slug: "books",
    icon: <BookOpen />,
    href: "/main/books/",
  },
];