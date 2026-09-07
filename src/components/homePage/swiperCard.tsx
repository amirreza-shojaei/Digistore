import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductsShortDetail } from "@/src/types/interfaces";
import { CalculatingDiscount } from "@/src/utils/calculatingDiscount";
import { ConvertNumbers } from "@/src/utils/convertNumbers";

interface SwiperCardProps {
  product: ProductsShortDetail;
}

function SwiperCard({ product }: SwiperCardProps) {
  const hasDiscount = product.discount > 0;

  const finalPrice = hasDiscount
    ? CalculatingDiscount(product.price, product.discount)
    : product.price;

  return (
    <Link href={`/product/${product.slug}`} className="block h-full min-w-0">
      <div className=" group flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-lg ">
        {/* Image */}
        <div className=" relative aspect-square w-full shrink-0 overflow-hidden rounded-t-xl">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.title || "Product image"}
              fill
              sizes="(max-width: 475px) 45vw,(max-width: 640px) 42vw,(max-width: 768px) 30vw,(max-width: 1024px) 22vw,20vw"
              className=" object-contain p-2 transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-xs text-gray-400 sm:text-sm">
              بدون تصویر
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex min-w-0 flex-1 flex-col p-2 sm:p-3">
          {/* Title */}
          <h4 className=" line-clamp-2 min-h-10 overflow-hidden text-xs font-medium leading-5 text-gray-800 sm:min-h-12 sm:text-sm sm:leading-6 md:text-base">
            {product.title || "نام محصول"}
          </h4>

          {/* Price Area */}
          <div className="mt-auto min-w-0 pt-2" dir="ltr">
            {/* Old Price + Discount */}
            <div
              dir="ltr"
              className=" flex h-6 min-w-0 items-center justify-between gap-1 "
            >
              {/* Old Price */}
              <div className="min-w-0 flex-1 text-right">
                {hasDiscount && (
                  <span className=" block truncate text-[9px] text-gray-400 line-through sm:text-[10px] md:text-xs ">
                    {ConvertNumbers(product.price, "toPersian")} تومان
                  </span>
                )}
              </div>

              {/* Discount */}
              <div className="flex h-full shrink-0 items-center">
                {hasDiscount && (
                  <span className=" inline-flex min-w-7 items-center justify-center rounded-full bg-red-500 px-1.5 py-0.5 text-[9px] font-bold leading-4 text-white sm:min-w-7.5 sm:px-2 sm:text-[10px] md:text-xs">
                    {ConvertNumbers(product.discount, "toPersian")}٪
                  </span>
                )}
              </div>
            </div>

            {/* Final Price */}
            <div className=" mt-1 flex min-w-0 items-center justify-end gap-1 flex-wrap">
              <span className=" min-w-0 wrap-break text-xs font-bold leading-5 text-gray-900 sm:text-sm md:text-lg">
                {ConvertNumbers(finalPrice, "toPersian")}
              </span>

              <span className=" shrink-0 text-[9px] text-gray-500 sm:text-[10px] md:text-xs">
                تومان
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SwiperCard;
