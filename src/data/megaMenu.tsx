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
}

export const sidebarCategories: SidebarCategory[] = [
  {
    id: "mobile",
    title: "موبایل",
    slug: "mobile",
    icon: <Smartphone />
  },
  {
    id: "laptop",
    title: "لپ تاپ",
    slug: "laptop",
    icon: <Laptop />
  },
  {
    id: "digital",
    title: "کالای دیجیتال",
    slug: "digital",
    icon: <Monitor />
  },
  {
    id: "home-kitchen",
    title: "خانه و آشپزخانه",
    slug: "home-kitchen",
    icon: <Home />
  },
  {
    id: "home-appliances",
    title: "لوازم خانگی برقی",
    slug: "home-appliances",
    icon: <Plug />
  },
  {
    id: "beauty",
    title: "آرایشی بهداشتی",
    slug: "beauty",
    icon: <Sparkles />
  },
  {
    id: "fashion",
    title: "مد و پوشاک",
    slug: "fashion",
    icon: <Shirt />
  },
  {
    id: "gold",
    title: "طلا و نقره",
    slug: "gold",
    icon: <Gem />
  },
  {
    id: "auto",
    title: "خودرو و موتورسیکلت",
    slug: "auto",
    icon: <Car />
  },
  {
    id: "health",
    title: "سلامت و پزشکی",
    slug: "health",
    icon: <HeartPulse />
  },
  {
    id: "tools",
    title: "ابزارآلات و تجهیزات",
    slug: "tools",
    icon: <Wrench />
  },
  {
    id: "books",
    title: "کتاب و هنر",
    slug: "books",
    icon: <BookOpen />
  },
];