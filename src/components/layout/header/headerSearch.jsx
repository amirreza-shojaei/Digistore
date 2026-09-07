"use client"

import { Search } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

const HeaderSearch = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="relative hidden lg:block">
      <Search
        className={clsx(
          "absolute right-4 top-1/2 -translate-y-1/2 transition-colors",
          isFocused ? "text-red-500" : "text-gray-400"
        )}
        size={18}
      />
      <input
        type="text"
        placeholder="جستجو"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={clsx(
          "h-12 w-150 rounded-4xl bg-gray-100 pr-11 outline-none transition-all",
          isFocused && "ring-2 ring-red-500"
        )}
      />
    </div>
  );
};

export default HeaderSearch;