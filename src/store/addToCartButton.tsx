"use client";

import { useCartStore } from "@/src/store/cartStore";

interface AddToCartButtonProps {
  product: {
    id: string;
    slug: string;
    title: string;
    image: string;
    price: number;
    discount: number;
  };
  color: {
    title: string;
    hex?: string;
  } | null;
  className?: string;
}

export default function AddToCartButton({
  product,
  color,
  className = "",
}: AddToCartButtonProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAdd = () => {
    addItem({
      id: product.id,
      slug: product.slug,
      title: product.title,
      image: product.image,
      price: product.price,
      discount: product.discount,
      color,
    });
  };

  return (
    <button
      type="button"
      onClick={handleAdd}
      className={`w-full rounded-xl bg-red-500 py-4 font-bold text-white transition hover:bg-red-600 ${className}`}
    >
      افزودن به سبد خرید
    </button>
  );
}