"use client";

import { ChevronLeft } from "lucide-react";
import { scroller } from "@/src/utils/scrollManager";

export default function ScrollToSpecsButton() {
  return (
    <div className="my-8 flex items-center">
      <div className="flex-1 border-t border-gray-200" />
      <button
        onClick={() => scroller("specifications")}
        className="mx-4 flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-bold hover:bg-gray-50"
      >
        مشاهده همه ویژگی‌ها
        <ChevronLeft size={18} strokeWidth={2.5} />
      </button>
      <div className="flex-1 border-t border-gray-200" />
    </div>
  );
}