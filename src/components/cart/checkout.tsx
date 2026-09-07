import React from 'react'
import { ConvertNumbers } from '@/src/utils/convertNumbers';

interface CheckoutProps{
    totalItems:() => number;
    totalPrice:() => number;
}

function Checkout({totalItems,totalPrice}:CheckoutProps) {
  return (
      <div className="lg:col-span-4">
          <div className="sticky top-24 rounded-xl border-2 border-red-300 bg-gray-50 p-8">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>
                قیمت کالاها ({ConvertNumbers(totalItems(), "toPersian")})
              </span>
              <span>
                {ConvertNumbers(Math.round(totalPrice()), "toPersian")} تومان
              </span>
            </div>

            <hr className="my-4" />

            <div className="flex items-center justify-between font-bold">
              <span>جمع سبد خرید</span>
              <span>
                {ConvertNumbers(Math.round(totalPrice()), "toPersian")} تومان
              </span>
            </div>

            <button
              type="button"
              className="mt-6 w-full rounded-xl bg-red-500 py-4 font-bold text-white transition hover:bg-red-600"
            >
              تایید و تکمیل سفارش
            </button>
          </div>
        </div>
  )
}

export default Checkout