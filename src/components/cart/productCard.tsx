"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/src/store/cartStore";
import { ConvertNumbers } from "@/src/utils/convertNumbers";
function ProductCard() {
    const { items, removeItem, updateQuantity } =
      useCartStore();
  return (
     <div className="space-y-4 lg:col-span-8">
          {items.map((item) => {
            const finalPrice = item.discount
              ? item.price * (1 - item.discount / 100)
              : item.price;

            return (
              <div
                key={`${item.id}-${item.color?.title || "default"}`}
                className="flex gap-4 rounded-xl border border-gray-100 bg-white p-4"
              >
                <Link
                  href={`/product/${item.slug}`}
                  className="relative h-28 w-28 shrink-0"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                    sizes="112px"
                  />
                </Link>

                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <Link
                      href={`/product/${item.slug}`}
                      className="line-clamp-2 text-sm font-medium text-gray-800 hover:text-red-500"
                    >
                      {item.title}
                    </Link>

                    {item.color && (
                      <p className="mt-2 text-xs text-gray-500">
                        رنگ: {item.color.title}
                      </p>
                    )}
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    {/* کنترل تعداد */}
                    <div className="flex items-center rounded-lg border">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.quantity + 1,
                            item.color?.title,
                          )
                        }
                        className="px-3 py-1 text-lg"
                      >
                        +
                      </button>
                      <span className="min-w-8 text-center text-sm">
                        {ConvertNumbers(item.quantity, "toPersian")}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.quantity - 1,
                            item.color?.title,
                          )
                        }
                        className="px-3 py-1 text-lg"
                      >
                        −
                      </button>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-left">
                        <p className="font-bold">
                          {ConvertNumbers(
                            Math.round(finalPrice * item.quantity),
                            "toPersian",
                          )}{" "}
                          <span className="text-xs font-normal">تومان</span>
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(item.id, item.color?.title)}
                        className="text-sm text-red-500 hover:text-red-600"
                      >
                        حذف
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
  );
}

export default ProductCard;
