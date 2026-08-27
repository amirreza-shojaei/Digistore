"use client"
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import Purchase from "./purchase";
import ColorSelector from "./colorSelector";
import { Product } from "@/src/types/interfaces";
import Breadcrumb from "../ui/breadcrumb";
import {ConvertNumbers} from "@/src/utils/convertNumbers"
import ScrollToSpecsButton from "./scrollToSpeceButton"


interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [selectedColor, setSelectedColor] = useState<{
    title: string;
    hex?: string;
  } | null>(null);
  return (
    <div className="space-y-4">
      {/* title */}
      <div>
         <Breadcrumb className="mb-5 text-sm text-blue-600" />
        <h1 className="text-xl font-bold leading-10">{product.title}</h1>
      </div>

      <div className="grid grid-cols-6 gap-10">
        {/* left colum*/}
        <div className="col-span-4 space-y-6">
          <p className="border-b pb-4 text-sm text-gray-400">{product.name}</p>

          {/* rating and comments*/}
          <div className="flex items-center gap-5 text-xs">
            <div className="flex items-center gap-1">
              <span className="text-lg text-yellow-500">★</span>
              <span className="font-bold">{ConvertNumbers(product.rating,"toPersian")}</span>
            </div>

            <span className="text-gray-300">|</span>

            <button className="flex items-center gap-1 rounded-full border bg-gray-100 px-3 py-1 font-bold">
              {ConvertNumbers(product.ratingCount,"toPersian")} دیدگاه
              <ChevronLeft size={16} />
            </button>

            <button className="flex items-center gap-1 rounded-full border bg-gray-100 px-3 py-1 font-bold">
              ۶۶۶ پرسش
              <ChevronLeft size={16} />
            </button>
          </div>

          {/* select color*/}
          <ColorSelector product={product} onColorChange={setSelectedColor}/>

          <div className="flex items-center justify-between rounded-xl bg-blue-50 p-5">
            <span className="font-semibold text-blue-700">
              تحویل امروز با ارسال سریع
            </span>
            <span>🚚</span>
          </div>

          {/*feature*/}
          <div>
            <h3 className="mb-4 font-bold">ویژگی‌ها</h3>

            <div className="grid grid-cols-3 gap-4">
              {product.properties.map((item) => (
                <div key={item.name} className="rounded-xl bg-gray-100 p-4">
                  <p className="text-sm text-gray-500">{item.name}</p>
                  <p className="mt-2 font-semibold">{item.text}</p>
                </div>
              ))}
            </div>
              <ScrollToSpecsButton/>
          </div>
        </div>

        {/*purchase box*/}
        <div className="col-span-2">
          <Purchase item={product} color={selectedColor} />
        </div>
      </div>
    </div>
  );
}