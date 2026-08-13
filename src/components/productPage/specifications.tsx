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
    <section id="specifications" className="mt-16 border-t pt-8 ">
      {/* header */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold border-b-2 border-red-500 inline-block pb-2">
          مشخصات
        </h2>
      </div>
     {/* propertis box */}
      <div className="w-max">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr]">
          <h3 className="text-xl font-bold mb-8 ">مشخصات کلی</h3>

          <div className="space-y-5">
            {data.map((item) => (
              <div
                key={item.name}
                className="grid grid-cols-[220px_1fr]  border-gray-200 pb-5"
              >
                <span className="text-gray-500">{item.name}</span>

                <span className="font-medium border-b pb-3 ">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-6 text-blue-600  flex"
        >
          {showAll ? "بستن" : "مشاهده بیشتر"}
          <ChevronLeft />
        </button>

        <div className="mt-10 border-b pb-6 text-sm text-gray-500">
          هشدار سامانه همتا: در صورت انجام معامله، از فروشنده کد فعالسازی را
          گرفته و حتما در حضور ایشان، دستگاه را از طریق #7777*، برای سیمکارت خود
          فعالسازی نمایید. آموزش تصویری در آدرس اینترنتی hmti.ir/06
        </div>
      </div>
    </section>
  );
}
