"use client";

import { useState } from "react";
import MegaMenuSidebar from "./sidebar";

export default function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("mobile"); 

  return (
    <div className="relative ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-2   text-black font-bold hover:text-red-500"
      >
        <span className="text-lg ">☰</span>
        دسته‌بندی کالاها
      </button>

      {isOpen && (
        <div
          className="absolute top-full right-0 mt-1 bg-white shadow-xl rounded-b-lg border border-gray-200 z-50"
          onMouseLeave={() => setIsOpen(false)}
        >
          <MegaMenuSidebar activeId={activeId} onSelect={setActiveId} />
        </div>
      )}
    </div>
  );
}