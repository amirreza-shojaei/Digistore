"use client";

import { useCartStore } from "@/src/store/cartStore";
import { ConvertNumbers } from "@/src/utils/convertNumbers";
import EmptyCart from "@/src/components/cart/emptyCart";
import Checkout from "@/src/components/cart/checkout";
import ProductCard from "@/src/components/cart/productCard";
export default function CartPage() {
  const { items, totalPrice, totalItems } = useCartStore();

  if (items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="mx-auto container px-4 py-8 ">
      <div>
        <h1 className="mb-8 text-2xl font-bold">
        سبد خرید
        <span className="mr-2 text-base font-normal text-gray-500">
          ({ConvertNumbers(totalItems(), "toPersian")} کالا)
        </span>
      </h1>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        {/* product list */}
        <ProductCard />
        {/* Checkout Form*/}
        <Checkout totalPrice={totalPrice} totalItems={totalItems} />
      </div>
    </div>
  );
}
