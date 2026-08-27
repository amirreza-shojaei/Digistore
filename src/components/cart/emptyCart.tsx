import React from 'react'
import Link from 'next/link';
function EmptyCart() {
   return (
      <div className="mx-auto flex min-h-[50vh] max-w-7xl flex-col items-center justify-center px-4">
        <p className="text-lg font-medium text-gray-600">سبد خرید شما خالی است</p>
        <Link
          href="/"
          className="mt-4 rounded-lg bg-red-500 px-6 py-3 text-white hover:bg-red-600"
        >
          بازگشت به فروشگاه
        </Link>
      </div>
    );
}

export default EmptyCart