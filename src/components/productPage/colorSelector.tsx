"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Product } from "@/src/types/interfaces";

interface ColorSelectorProps {
  product: Product;
}

export default function ColorSelector({ product }: ColorSelectorProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedColor = product.colors[selectedIndex];

  return (
    <div className="w-full">
      {/* color name*/}
      <div className="mb-4 flex items-center gap-3" dir="rtl">
        <h3 className="text-lg font-bold">
          رنگ:
          <span className="mr-1 font-normal">{selectedColor?.title}</span>
        </h3>
        <div
          className="h-5 w-5 rounded-full border border-gray-200"
          style={{ backgroundColor: selectedColor?.hex }}
        />
      </div>
{/*select button */}
      <div className="flex gap-3" dir="rtl">
        {product.colors.map((color, index) => {
          const isSelected = selectedIndex === index;

          return (
            <button
              key={color.name + index}
              type="button"
              onClick={() => setSelectedIndex(index)}
              aria-label={`انتخاب رنگ ${color.title}`}
              className={`
                relative flex h-12 w-12 items-center justify-center rounded-full
                transition-all duration-200
                ${
                  isSelected
                    ? "border-4 border-blue-600 bg-blue-50"
                    : "border border-gray-300 hover:border-gray-400"
                }
              `}
            >
              <div
                className="h-8 w-8 shrink-0 rounded-full"
                style={{ backgroundColor: color.hex }}
              />

              {isSelected && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full">
                    <Check size={14} className={`stroke-7 ${selectedColor.name.includes("white") ?"text-black" :"text-white"}`} />
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