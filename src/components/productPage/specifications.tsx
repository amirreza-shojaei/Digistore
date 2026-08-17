"use client";

import { useState } from "react";
import { ChevronLeft } from "lucide-react";

interface Specification {
  name: string;
  text: string;
}

interface Props {
  items: Specification[];
}

export default function Specifications({ items }: Props) {
  const [showAll, setShowAll] = useState(false);

  const data = showAll ? items : items.slice(0, 5);

  return (
    <section id="specifications" className="mt-16 border-t pt-8">
      <div className="mb-10">
        <h2 className="inline-block border-b-2 border-red-500 pb-2 text-2xl font-bold">
          مشخصات
        </h2>
      </div>

      <div className="max-w-4xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
          <h3 className="text-xl font-bold">مشخصات کلی</h3>

          <div className="space-y-5">
            {data.map((item) => (
              <div
                key={item.name}
                className="grid grid-cols-1 gap-2 border-b border-gray-100 pb-5 sm:grid-cols-[220px_1fr]"
              >
                <span className="text-gray-500">{item.name}</span>
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {items.length > 5 && (
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="mt-6 flex items-center gap-1 text-blue-600 hover:text-blue-700"
          >
            {showAll ? "بستن" : "مشاهده بیشتر"}
            <ChevronLeft size={18} />
          </button>
        )}

        <div className="mt-10 border-b pb-6 text-sm leading-7 text-gray-500">
          هشدار سامانه همتا: در صورت انجام معامله، از فروشنده کد فعالسازی را
          گرفته و حتما در حضور ایشان، دستگاه را از طریق #۷۷۷۷*، برای سیمکارت خود
          فعالسازی نمایید. آموزش تصویری در آدرس اینترنتی hmti.ir/06
        </div>
      </div>
    </section>
  );
}