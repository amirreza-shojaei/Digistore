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
  Coffee,
  Gift,
  Mountain,
  Bike,
  Dog,
  ToyBrick,     
} from "lucide-react";
import {SidebarCategory} from "@/src/types/interfaces"

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
      {
      id: "food",
      title: "کالای خوراکی و اساسی",
      slug: "food",
      icon: <Coffee/>
    },
    {
      id: "gift",
      title: "هدیه و کادو",
      slug: "gift",
      icon: <Gift/>
    },
    {
      id: "mahali",
      title: "محصولات بومی و محلی",
      slug: "mahali",
      icon: <Mountain/>
    },
    {
      id: "sport",
      title: "ورزش و سفر",
      slug: "sport",
      icon: <Bike/>
    },
    {
      id: "petshop",
      title: "پت شاپ",
      slug: "petshop",
      icon: <Dog/>
    },
    {
      id: "toys",
      title: "اسباب بازی,کودک و نوزاد",
      slug: "toys",
      icon: <ToyBrick/>
    }
];