"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import {sidebarCategories} from "@/src/data/megaMenu"
interface BreadcrumbProps {
  className?: string;
}

const names: Record<string, string> = {
  product: "محصولات",
  category: "دسته‌بندی",
  mobile: "موبایل",
  laptop: "لپ تاپ",
};


export default function Breadcrumb({ className = "" }: BreadcrumbProps) {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);
  console.log(paths);
  const temp = paths[paths.length-1].split("-").filter(Boolean);
  const catName =[];
  catName[0]=temp[0];
  return (
    <nav
      className={`text-sm ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center flex-wrap gap-2">
        <li>
          <Link href="/" className="hover:text-red-600 transition-colors">
            خانه
          </Link>
        </li>

        {catName.map((path, index) => {
          // const href = "/" + paths.slice(0, index + 1).join("/");
          const href ="/category/"+path  ;
          console.log(href);
          return (
            <li key={href} className="flex items-center gap-2">
              <span className="text-gray-400">/</span>

              {index === paths.length - 1 ? (
                <span className="font-medium ">
                  {names[path] ?? decodeURIComponent(path)}
                </span>
              ) : (
                <Link
                  href={href}
                  className="hover:text-red-600 transition-colors"
                >
                  {names[path] ?? decodeURIComponent(path)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}