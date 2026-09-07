"use client";

import { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { Product } from "@/src/types/interfaces";

interface ColorSelectorProps {
  product: Product;
  onColorChange?: (color: { title: string; name?: string }) => void;
}

export default function ColorSelector({
  product,
  onColorChange,
}: ColorSelectorProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedColor = product.colors?.[selectedIndex];

  // هر بار رنگ عوض شد، به والد اطلاع بده
  useEffect(() => {
    if (selectedColor && onColorChange) {
      onColorChange({
        title: selectedColor.title,
        name: selectedColor.name,
      });
    }
  }, [selectedIndex]); // عمداً selectedColor را dependency نکردیم تا لوپ نشود

  // اولین رنگ را هم در mount بفرست
  useEffect(() => {
    if (product.colors?.[0] && onColorChange) {
      onColorChange({
        title: product.colors[0].title,
        name: product.colors[0].name,
      });
    }
  }, []);

  if (!product.colors?.length) return null;

  return (
    <div className="w-full">
      <div className="mb-4 flex items-center gap-3" dir="rtl">
        <h3 className="text-lg font-bold">
          رنگ:
          <span className="mr-1 font-normal">{selectedColor?.title}</span>
        </h3>
        <div
          className="h-5 w-5 rounded-full border border-gray-200"
          style={{ backgroundColor: selectedColor?.name }}
        />
      </div>

      <div className="flex gap-3" dir="rtl">
        {product.colors.map((color, index) => {
          const isSelected = selectedIndex === index;

          return (
            <button
              key={color.name + index}
              type="button"
              onClick={() => setSelectedIndex(index)}
              aria-label={`انتخاب رنگ ${color.title}`}
              className={`relative flex h-12 w-12 items-center justify-center rounded-full transition-all duration-200 ${
                isSelected
                  ? "border-2 border-blue-600 bg-blue-50"
                  : "border border-gray-300 hover:border-gray-400"
              }`}
            >
              <div
                className="h-8 w-8 shrink-0 rounded-full"
                style={{ backgroundColor: color.name }}
              />
              {isSelected && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                    <Check size={14} className="stroke-[3] text-black" />
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}