"use client";

import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { scroller } from "@/src/utils/scrollManager";
import { features, footerLinks } from "@/src/data/footer";
import { FeatureItem } from "./featureItem";
import { FooterColumn } from "./columsItem";
import { SocialLinks } from "./socialsLink";
import { Newsletter } from "./newsLetter";

export default function Footer() {
  return (
    <footer className="mt-10 w-full border-t bg-white">
      {/* Top */}
      <div className="mx-auto flex  items-center justify-between px-4 py-6">
        <Image
          src="https://www.digikala.com/brand/full-horizontal.svg"
          alt="دیجی‌کالا"
          width={180}
          height={40}
          className="h-10 w-auto"
          priority
        />

        <button
          onClick={() => scroller("header")}
          className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50"
        >
          بازگشت به بالا
          <ArrowUp size={16} />
        </button>
      </div>

      <div className="mx-auto flex px-4 pb-6 text-sm text-gray-500">
        <p >
          تلفن پشتیبانی: ۰۲۱-۶۱۹۳۰۰۰۰ 
        </p>
        <span className="w-px h-3 bg-gray-300 mx-5" />
        <p > ۰۲۱-۹۱۰۰۰۱۰۰ </p>
         <span className="w-px h-3 bg-gray-300 mx-5" />
         <p > ۷ روز هفته، ۲۴ ساعته
          پاسخگوی شما هستیم</p>
      </div>

      {/* Features */}
      <div className="mx-auto grid  grid-cols-2 gap-6 px-4 py-8 sm:grid-cols-3 md:grid-cols-5">
        {features.map((item) => (
          <FeatureItem key={item.title} icon={item.icon} title={item.title} />
        ))}
      </div>

      {/* Links + Social + Newsletter */}
      <div className="mx-auto grid  grid-cols-2 gap-8 px-4 py-10 md:grid-cols-4">
        {footerLinks.map((column) => (
          <FooterColumn
            key={column.title}
            title={column.title}
            links={column.links}
          />
        ))}

        <div>
          <h3 className="mb-4 text-xl font-bold text-gray-800">همراه ما باشید!</h3>
          <SocialLinks />
          <Newsletter />
        </div>
      </div>
    </footer>
  );
}