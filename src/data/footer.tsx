// data/footer.ts
import {
  Truck,
  MapPin,
  Headphones,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react";
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export const features = [
  {
    icon: Truck,
    title: "امکان تحویل اکسپرس",
  },
  {
    icon: MapPin,
    title: "امکان پرداخت در محل",
  },
  {
    icon: Headphones,
    title: "۷ روز هفته، ۲۴ ساعته",
  },
  {
    icon: RefreshCcw,
    title: "۷ روز ضمانت بازگشت",
  },
  {
    icon: ShieldCheck,
    title: "ضمانت اصل بودن کالا",
  },
] as const;

export const footerLinks = [
  {
    title: "با دیجی‌کالا",
    links: [
      { label: "درباره ما", href: "/about" },
      { label: "تماس با ما", href: "/contact" },
      { label: "فرصت‌های شغلی", href: "/careers" },
      { label: "گزارش تخلف", href: "/report" },
    ],
  },
  {
    title: "خدمات مشتریان",
    links: [
      { label: "پاسخ به سوالات", href: "/faq" },
      { label: "شرایط استفاده", href: "/terms" },
      { label: "حریم خصوصی", href: "/privacy" },
      { label: "گزارش باگ", href: "/bug-report" },
    ],
  },
  {
    title: "راهنمای خرید",
    links: [
      { label: "نحوه ثبت سفارش", href: "/how-to-order" },
      { label: "ارسال سفارش", href: "/shipping" },
      { label: "شیوه پرداخت", href: "/payment" },
    ],
  },
] as const;

export const socialLinks = [
  {
    icon: FaInstagram,
    href: "https://instagram.com/digikala",
    label: "اینستاگرام",
    hoverClass: "hover:text-pink-500",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/digikala",
    label: "توییتر",
    hoverClass: "hover:text-black",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/company/digikala",
    label: "لینکدین",
    hoverClass: "hover:text-blue-600",
  },
  {
    icon: FaYoutube,
    href: "https://youtube.com/digikala",
    label: "یوتیوب",
    hoverClass: "hover:text-red-600",
  },
] as const;