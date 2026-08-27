"use client"
import React from 'react'
import { ArrowUp } from "lucide-react";
import { scroller } from "@/src/utils/scrollManager";
export  function GoBackButton() {
  return (
            <button
          onClick={() => scroller("header")}
          className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50"
        >
          بازگشت به بالا
          <ArrowUp size={16} />
        </button>
  )
}
