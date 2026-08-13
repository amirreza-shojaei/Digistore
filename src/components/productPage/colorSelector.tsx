"use client";
import { useState } from "react";
import { Check } from "lucide-react";
import { Product } from "@/src/types/interfaces";

interface ColorSelectorProps {
  product: Product;
}

export default function ColorSelector({ product }: ColorSelectorProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  console.log(product.colors[selectedIndex].name);
  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-4" dir="rtl">
        <h3 className="font-bold text-lg">
          رنگ:
          <span className="font-normal mr-1">
            {product.colors[selectedIndex]?.title}
          </span>
        </h3>
        <div
          className={`w-5 h-5 rounded-full `}
          style={{
            backgroundColor:
              selectedIndex || selectedIndex == 0
                ? product.colors[selectedIndex].name
                : "",
          }}
        ></div>
      </div>

      <div className="flex gap-3" dir="rtl">
        {product.colors.map((color, index) => {
          const isSelected = selectedIndex === index;

          return (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`
                w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200
                ${isSelected ? "border-2 border-[#1a73e8]" : "border border-gray-300 hover:border-gray-400"}
              `}
              style={{
                backgroundColor: isSelected ? "#e8f0fe" : "transparent",
              }}
            >
              <div
                className="w-8 h-8 rounded-full shrink-0"
                style={{ backgroundColor: color.name }}
              />
              {isSelected && (
                <div className="absolute w-6 h-6 rounded-full bg-[#d2e3fc] flex items-center justify-center">
                  <Check size={16} className="text-black stroke-[3]" />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
