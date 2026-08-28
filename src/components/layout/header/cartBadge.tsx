"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/src/store/cartStore";
import { ConvertNumbers } from "@/src/utils/convertNumbers";

const emptySubscribe = () => () => {};

function useHasMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,  
    () => false  
  );
}

export default function CartBadge() {
  const totalItems = useCartStore((state) => state.totalItems());
  const mounted = useHasMounted();

  return (
    <Link
      href="/shopping/cart"
      className="relative flex items-center justify-center rounded-lg p-2 transition hover:bg-gray-100"
      aria-label="سبد خرید"
    >
      <ShoppingCart className="h-6 w-6 text-gray-700" />

      {mounted && totalItems > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[11px] font-bold text-white">
          {ConvertNumbers(totalItems, "toPersian")}
        </span>
      )}
    </Link>
  );
}