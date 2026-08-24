import Image from "next/image";
import {  footerLinks } from "@/src/data/footer";
import { FeatureItems } from "./featureItem";
import { FooterColumn } from "./columsItem";
import { SocialLinks } from "./socialsLink";
import { Newsletter } from "./newsLetter";
import {GoBackButton} from "./goBackButton"
import {getSiteNameIcon} from"@/src/services/layouts"
export default async function Footer() {
  const icon=await getSiteNameIcon();
  return (
    <footer className="mt-10 w-full border-t bg-white">
      {/* Top */}
      <div className="mx-auto flex  items-center justify-between px-4 py-6">
        <Image
          src={icon.persian.image}
          alt="دیجی استور"
          width={180}
          height={40}
          className="h-13 w-auto"
          priority
        />

<GoBackButton/>
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
      <FeatureItems/>

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