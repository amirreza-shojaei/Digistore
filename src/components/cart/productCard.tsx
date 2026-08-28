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
     <div className="space-y-4 lg:col-span-8 border-2 border-red-300 p-7 rounded-2xl">
          {items.map((item) => {
            const finalPrice = item.discount
              ? item.price * (1 - item.discount / 100)
              : item.price;

            return (
              <div
                key={`${item.id}-${item.color?.title || "default"}`}
                className="flex gap-4 rounded-xl border-2 border-gray-100 bg-white shadow-sm p-4"
              >
                <Link
                  href={`/product/${item.slug}`}
                  className="relative h-40 w-40 shrink-0"
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
                      className="line-clamp-2 text-lg font-medium text-gray-800 hover:text-red-500"
                    >
                      {item.title}
                    </Link>

                    {item.color && (
                      <p className="mt-2 text-sm text-gray-500">
                        رنگ: {item.color.title}
                      </p>
                    )}
                  </div>

                  <div className="mt-4 flex items-center justify-between">
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
