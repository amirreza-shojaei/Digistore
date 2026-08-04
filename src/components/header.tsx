import { Input } from '@/components/ui/input'
import React from 'react'
import Link from "next/link";

function Header() {
  return (
    <div>
    <div className='m-4 flex gap-4 shadow rounded-b-md'>
        <div>
            <img src="https://www.digikala.com/brand/full-horizontal.svg" alt="digikala" />
        </div>
        <div className='mr-4'>
            <Input className='' />
        </div>
    </div>
      <div>
         <nav className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <ul className='flex gap-4'>
            <li>دسته بندی</li>
            <li>شگفت انگیز </li>
            <li> سوپر مارکت </li>
            <li> طلا و نقره دیجیتال</li>
            <li> پرفروش ترین ها</li>
          
          </ul>
      </div>
    </nav>
      </div>
    </div>
  )
}

export default Header