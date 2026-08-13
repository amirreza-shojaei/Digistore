// components/ProductCard.tsx

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Product } from "@/src/types/interfaces"; // اینترفیس محصول خودت

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const finalPrice = product.discount
    ? Math.round(product.price * (1 - product.discount / 100))
    : product.price;

  const formatPrice = (price: number) => price.toLocaleString("fa-IR");

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group relative flex flex-col bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200"
    >
      {/* بج فروش ویژه */}
      {product.isAmazing && (
        <span className="absolute top-2 left-1/2 -translate-x-1/2 z-10 text-xs font-medium text-red-500">
          فروش ویژه
        </span>
      )}

      {/* تصویر محصول */}
      <div className="relative aspect-square p-4 bg-white">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 50vw, 25vw"
        />

        {/* نقطه‌های رنگ (سمت چپ) */}
        {product.colors && product.colors.length > 0 && (
          <div className="absolute top-3 right-3 flex flex-col gap-1.5">
            {product.colors.slice(0, 4).map((color, index) => (
              <span
                key={index}
                className="w-2.5 h-2.5 rounded-full border border-gray-200"
                style={{ backgroundColor: color.hex || "#ccc" }}
                title={color.title}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-[10px] text-gray-400 text-center">+</span>
            )}
          </div>
        )}
      </div>

      {/* اطلاعات محصول */}
      <div className="flex flex-col gap-2 p-3 pt-0 flex-1">
        {/* عنوان */}
        <h3 className="text-sm text-gray-800 line-clamp-2 leading-6 min-h-[48px]">
          {product.title}
        </h3>

        {/* امتیاز + ارسال سریع */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="text-gray-700">{product.rating}</span>
          </div>

          {product.isOriginal && (
            <div className="flex items-center gap-1 text-blue-500">
              <span className="text-[11px]">ارسال سریع دیجی‌کالا</span>
              {/* می‌تونی آیکون بذاری */}
            </div>
          )}
        </div>

        {/* قیمت و تخفیف */}
        <div className="mt-auto flex items-end justify-between">
          <div className="flex flex-col">
            {product.discount > 0 && (
              <span className="text-xs text-gray-400 line-through">
                {formatPrice(product.price)}
              </span>
            )}
            <div className="flex items-center gap-1">
              <span className="font-bold text-gray-900">
                {formatPrice(finalPrice)}
              </span>
              <span className="text-xs text-gray-600">تومان</span>
            </div>
          </div>

          {/* درصد تخفیف */}
          {product.discount > 0 && (
            <span className="bg-red-500 text-white text-xs font-medium px-2 py-0.5 rounded-full">
              {product.discount}٪
            </span>
          )}
        </div>

        {/* تایمر (اختیاری - فقط برای فروش ویژه) */}
        {product.isAmazing && (
          <div className="text-xs text-red-500 font-medium text-left mt-1">
            ۲۴ : ۳۱ : ۳۲
          </div>
        )}
      </div>
    </Link>
  );
}
