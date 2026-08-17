"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageType {
  src: string;
  alt: string;
}

interface GalleryProps {
  items: ImageType[];
}

export default function Gallery({ items }: GalleryProps) {
  const [selected, setSelected] = useState(0);

  if (!items?.length) return null;

  return (
    <div className="flex flex-col gap-4">
      {/* تصویر اصلی */}
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-50">
        <Image
          src={items[selected].src}
          alt={items[selected].alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-contain p-4"
          priority
        />
      </div>

      {/* تصاویر کوچک */}
      <div className="flex gap-3 overflow-x-auto pb-1">
        {items.map((image, index) => {
          const isSelected = selected === index;

          return (
            <button
              key={image.src + index}
              type="button"
              onClick={() => setSelected(index)}
              aria-label={`نمایش تصویر ${index + 1}`}
              className={`
                relative h-30 w-30 shrink-0 overflow-hidden rounded-xl border-2 transition
                ${isSelected ? "border-red-500" : "border-gray-200 hover:border-gray-300"}
              `}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="80px"
                className="object-contain p-1.5"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}