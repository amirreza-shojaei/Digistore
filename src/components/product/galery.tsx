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

  return (
    <div className="grid-rows-2">
      

      {/*main image */}
      <div className="flex-1 rounded-3xl ">
        <Image
          src={items[selected].src}
          alt={items[selected].alt}
          width={500}
          height={500}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
      {/*other image */}
      <div className="flex gap-3">
        {items.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            className={`w-30 h-30 rounded-lg overflow-hidden border-2 transition p-2 ${
              selected === index
                ? "border-red-500"
                : "border-gray-200"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={64}
              height={64}
              className="w-full h-full object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
}