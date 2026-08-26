// types.ts

export interface GalleryItem {
  src: string;
  alt: string;
}

export interface ColorOption {
  title: string;   // فارسی
  name: string;    // انگلیسی (برای کلاس و فیلتر)
  hex?: string;    // اختیاری
}

export interface Property {
  name: string;
  text: string;
}

export interface Specification {
  name: string;
  text: string;
}

export interface Product {
  id: string;
  slug: string;
  category: string;          // slug دسته اصلی (mobile, laptop, ...)
  subcategory?: string;      // زیر دسته
  brand: string;
  title: string;             // عنوان کامل فارسی
  name: string;              // نام انگلیسی کوتاه
  price: number;             // قیمت به تومان
  discount: number;          // درصد تخفیف (0 تا 100)
  rating: string;            // مثلاً "4.8"
  ratingCount: number;      // تعداد نظرات
  image: string;             // تصویر اصلی
  gallery: GalleryItem[];
  colors: ColorOption[];
  properties: Property[];    // ویژگی‌های کوتاه (برای کارت)
  specifications: Specification[]; // مشخصات کامل
  stock: number;             // موجودی
  isAmazing?: boolean;       // پیشنهاد شگفت‌انگیز
  isOriginal?: boolean;      // گارانتی اصالت
  seller?: string;
  description?: string;
}

export interface Category {
  id: string;
  title: string;            
  slug: string;   
  icon:""        
  image: string;
}

export interface Banner {
  id: string;
  title: string;
  image: string;
  link: string;
}

// types.ts (اضافه کن)

export interface MegaMenuLink {
  title: string;
  href: string;
  isHot?: boolean; // برای «داغ‌ترین‌ها»
}

export interface MegaMenuColumn {
  title: string;
  links: MegaMenuLink[];
}

export interface MegaMenuCategory {
  id: string;
  title: string;
  slug: string;
  icon?: string;
  href: string;
  columns: MegaMenuColumn[]; // محتوای سمت چپ وقتی این دسته انتخاب شده
}

export interface FooterFeature{
  id:string;
  image:string;
  title:string;
}

export interface Icons{
  persian:{id:string,image:string};
  english :{id:string,image:string}
}

export interface NavbarItem{
  id:number;
  title:string;
  link:string;
}

export interface SidebarCategory {
  id: string;
  title: string;
  slug: string;
  icon: React.ReactNode; 
}
export interface ProductsShortDetail{
  id:string;
  slug:string;
  image:string;
  title:string;
  price:number;
  discount:number;
}
export interface HomePageSwiper{
  id:string;
  title:string;
  items:ProductsShortDetail[]
}