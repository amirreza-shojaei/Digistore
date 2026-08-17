import { } from "lucide-react";
import Image from "next/image";
import Navbar from "../navbar/navbar";
import HeaderSearch from "./headerSearch";
import HeaderActions from "./headerActions";

const Header = () => {
  return (
    <header className=" w-auto border-b bg-white mx-4" id="header">
      {/* Top Header */}
      <div className="  mx-auto flex h-20 items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-6">
          <HeaderLogo />
          <HeaderSearch />
        </div>

        {/* Actions Section */}
        <HeaderActions />
      </div>

      {/* Bottom Navbar */}
      <Navbar />
    </header>
  );
};

// Sub-components (می‌توانید در فایل‌های جداگانه قرار دهید)
const HeaderLogo = () => (
  <Image
src="https://www.digikala.com/brand/full-horizontal.svg"
    alt="digikala"
    className="w-44"
    height={10}
    width={250}
    priority
  />
);

export default Header;


