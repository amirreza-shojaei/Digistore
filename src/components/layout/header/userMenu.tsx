"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { User, LogOut, Package, MapPin } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function UserMenu() {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (status === "loading") {
    return <div className="h-9 w-20 animate-pulse rounded-lg bg-gray-100" />;
  }
{/*login is false */}
  if (!session) {
    return (
      <Link
        href="/auth/login"
        className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm hover:bg-gray-100"
      >
        <User size={18} />
        ورود | ثبت‌نام
      </Link>
    );
  }
{/*login is true */}
  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition hover:bg-gray-50"
      >
        <User className="h-5 w-5 text-red-500" />
        <span className="max-w-[100px] truncate">
          {session.user?.name || "حساب من"}
        </span>
      </button>

      {open && (
        <div className="absolute left-0 z-50 mt-2 w-56 rounded-xl border bg-white py-2 shadow-lg">
          <div className="border-b px-4 py-3">
            <p className="font-medium text-gray-900">{session.user?.name}</p>
            <p className="text-xs text-gray-500">
              {(session.user as { phone?: string })?.phone}
            </p>
          </div>

          <Link
            href="/profile"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-50"
          >
            <User className="h-4 w-4 text-gray-500" />
            پروفایل
          </Link>

          <Link
            href="/profile/orders"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-50"
          >
            <Package className="h-4 w-4 text-gray-500" />
            سفارش‌ها
          </Link>

          <Link
            href="/profile/addresses"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-50"
          >
            <MapPin className="h-4 w-4 text-gray-500" />
            آدرس‌ها
          </Link>

          <button
            type="button"
            onClick={() => signOut({ callbackUrl: "/" })}
            className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50"
          >
            <LogOut className="h-4 w-4" />
            خروج
          </button>
        </div>
      )}
    </div>
  );
}
