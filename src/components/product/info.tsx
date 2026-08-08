"use client";

import { Product } from "../../data/products";
import { ChevronLeft } from "lucide-react";
import Purchase from "./purchase";
import Breadcrumb from "../ui/breadcrumb";
import ColorSelector from "./colorSelector"
import { scroller } from "../../utils/scrollManager";
interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const scrollToSection = scroller;
  return (
    <div className="space-y-6 ">
      {/* title */}
      <div className="w-full">
        <Breadcrumb className="mb-5 text-sm text-blue-600" />
        <h1 className="text-xl font-bold leading-10">{product.title}</h1>
      </div>
      {/* info box */}
      <div className="grid grid-cols-6 gap-10">
        <div className="space-y-6 col-span-4">
          <div>
            <p className="text-sm text-gray-400  border-b pb-4">
              {product.name}
            </p>
          </div>

          {/* evaluation */}
          <div className="flex items-center gap-5 text-xs">
            <div className="flex items-center gap-1 ">
              <span className="text-yellow-500 text-lg">★</span>
              <span className="font-bold">{product.rating}</span>
            </div>

            <span className="text-gray-300">|</span>

            <div className="border p-1 rounded-4xl bg-gray-100 font-bold flex ">
              <button className="">۸۹۰ دیدگاه</button>
              <span>
                <ChevronLeft />
              </span>
            </div>

            <div className="border p-1 rounded-4xl bg-gray-100 font-bold flex">
              <button className="">۶۶۶ پرسش</button>
              <span>
                <ChevronLeft />
              </span>
            </div>
          </div>

          {/* colors */}
          <ColorSelector product={product} />

          {/* shipping info */}
          <div className="rounded-xl bg-blue-50 p-5 flex items-center justify-between">
            <span className="text-blue-700 font-semibold">
              تحویل امروز با ارسال سریع
            </span>

            <span>🚚</span>
          </div>

          {/* propertis */}
          <div>
            <h3 className="font-bold mb-4">ویژگی‌ها</h3>

            <div className="grid grid-cols-3 gap-4">
              {product.propertys.map((item) => (
                <div key={item.name} className="rounded-xl bg-gray-100 p-4">
                  <p className="text-gray-500 text-sm">{item.name}</p>

                  <p className="font-semibold mt-2">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center my-8">
              <div className="flex-1 border-t border-gray-200"></div>

              <button
                onClick={() => scrollToSection("specifications")}
                className="mx-4 flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-bold hover:bg-gray-50"
              >
                مشاهده همه ویژگی‌ها
                <ChevronLeft size={18} strokeWidth={2.5} />
              </button>

              <div className="flex-1 border-t border-gray-200"></div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <Purchase price={product.price} />
        </div>
      </div>
    </div>
  );
}
