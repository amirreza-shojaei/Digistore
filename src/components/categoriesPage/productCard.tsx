import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Product } from "@/src/types/interfaces";
import { ConvertNumbers } from "@/src/utils/convertNumbers";
import { CalculatingDiscount } from "@/src/utils/calculatingDiscount";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const hasDiscount = product.discount > 0;
  const finalPrice = hasDiscount
    ? CalculatingDiscount(product.price, product.discount)
    : product.price;

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white transition-shadow duration-200 hover:shadow-md"
    >
      {/* تصویر */}
      <div className="relative aspect-square bg-white p-3">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
          className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
        />

        {/* نقطه‌های رنگ */}
        {product.colors && product.colors.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.colors.slice(0, 4).map((color, index) => (
              <span
                key={color.hex || color.name || index}
                className="h-2.5 w-2.5 rounded-full border border-gray-200"
                style={{ backgroundColor: color.hex || color.name || "#ccc" }}
                title={color.title}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-center text-[10px] text-gray-400">+</span>
            )}
          </div>
        )}
      </div>

      {/* اطلاعات */}
      <div className="flex flex-1 flex-col gap-2 p-3 pt-1">
        <h3 className="line-clamp-2 min-h-12 text-sm leading-6 text-gray-800">
          {product.title}
        </h3>

        <div dir="ltr">
          {/* امتیاز + ارسال سریع */}
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              <span className="text-gray-700">
                {ConvertNumbers(product.rating, "toPersian")}
              </span>
            </div>

            {product.isOriginal && (
              <div className="flex items-center gap-1 text-blue-500">
                <span className="text-[11px]">ارسال سریع</span>
                <span>🚚</span>
              </div>
            )}
          </div>

          {/* قیمت و تخفیف */}
          <div className=" flex items-end justify-between gap-2 mt-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-1 mb-3">
                <span className="font-bold text-gray-900 text-xl">
                  {ConvertNumbers(finalPrice, "toPersian")}
                </span>
                <span className="text-xs text-gray-500">تومان</span>
              </div>

              {hasDiscount && (
                <span className="text-xxs text-gray-400 line-through">
                  {ConvertNumbers(product.price, "toPersian")}
                </span>
              )}
            </div>

            {hasDiscount && (
              <span className="rounded-full bg-red-500 px-2 py-0.5 text-xs font-medium text-white">
                {ConvertNumbers(product.discount, "toPersian")}٪
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
