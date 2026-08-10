import React from 'react'
import Link from "next/link";
import {
  MapPin,
  Menu,
} from "lucide-react";

import items from "../data/navbar.json"
import MegaMenu from './home/megaMenu/megaMenuMain';
function Navbar() {
  return (
    
      <div className="container mx-auto flex h-14 items-center justify-between ">

        <nav>
          <ul className="flex items-center gap-6 text-sm text-gray-600">

            <div className="flex cursor-pointer items-center gap-2 font-semibold text-black">
              <MegaMenu/>
            </div>
            
                 {
                    items.map((item)=>(
                        <Link key={item.id} href={item.link} className="border-b-5 border-transparent transition-all hover:border-red-500" > {item.title}</Link>
                    ))
                 }
          </ul>
        </nav>
        <button className="flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm text-orange-500">

          <MapPin size={18} />

          انتخاب آدرس

        </button>


      </div>

  );
}

export default Navbar