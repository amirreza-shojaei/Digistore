import React from "react";
import Link from "next/link";
import clsx from "clsx";
import items from "../../../data/navbar.json";

 function NavLinks() {

  return (
    <div className="hidden lg:flex items-center gap-6 text-sm text-gray-600">
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.link}
          className={clsx(
           "border-b-2 border-transparent transition-all hover:border-red-500"
          )}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;