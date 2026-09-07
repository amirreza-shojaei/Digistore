import Image from "next/image";
import Navbar from "../navbar/navbar";
import HeaderSearch from "./headerSearch";
import HeaderActions from "./headerActions";
import { getSiteNameIcon } from "@/src/services/layouts";
async function Header() {
  const logo = await getSiteNameIcon();
  return (
    <header className=" w-auto border-b bg-white mx-4" id="header">
      {/* Top Header */}
      <div className="  mx-auto flex h-20 items-center justify-between">
        {/* Logo Section */}
        <div className="relative flex items-center gap-6">
          <Image
            src={logo.persian.image}
            alt={logo.persian.id}
            className="w-44"
            height={10}
            width={250}
            priority
          />
          <HeaderSearch />
        </div>

        {/* Actions Section */}
        <HeaderActions />
      </div>

      {/* Bottom Navbar */}
      <Navbar />
    </header>
  );
}

export default Header;
