import Link from "next/link";
import { Bell, MapPin, Menu, Search, ShoppingCart, User } from "lucide-react";

import Navbar from "./layout/navbar";

export default function Header() {
  return (
    <header className="w-auto border-b bg-red-200 m-3 rounded-4xl">
      {/* Top Header */}
      <div className="container mx-auto flex h-20 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <img
            src="https://www.digikala.com/brand/full-horizontal.svg"
            alt="digikala"
            className="w-44"
          />

          {/* Search */}
          <div className="relative hidden lg:block">
            <Search
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />

            <input
              type="text"
              placeholder="جستجو"
              className="h-12 w-[600px] rounded-xl bg-red-300 pr-11 outline-none"
            />
          </div>
        </div>

        {/* Left */}
        <div className="flex items-center gap-4">
          <Bell className="cursor-pointer text-gray-600" />

          <button className="flex items-center gap-2 rounded-lg border px-4 py-2 hover:bg-gray-100">
            <User size={18} />
            ورود | ثبت‌نام
          </button>

          <ShoppingCart className="cursor-pointer" />
        </div>
      </div>

      {/* Bottom Navbar */}
      <Navbar />
    </header>
  );
}
