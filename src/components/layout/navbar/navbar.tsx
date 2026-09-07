import React from "react";
import MegaMenu from "../megaMenu/megaMenuMain";
import NavLinks from "./navLinks"
import AddressButton from "./addressButton";

const Navbar = () => {
  return (
    <div className="mx-auto flex h-14 items-center justify-between">
      <nav>
        <ul className="flex items-center gap-4 text-sm text-gray-600">
          {/* Mega Menu */}
          <li className="flex items-center">
            <MegaMenu />
          </li>

          {/* Divider */}
          <span className="w-px h-6 bg-gray-300" />

          {/* Navigation Links */}
          <NavLinks />
        </ul>
      </nav>

      {/* Address Button */}
      <AddressButton />
    </div>
  );
};

export default Navbar;