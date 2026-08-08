import {
  Store,
  ShieldCheck,
  Truck,
  BadgePercent,
  ChevronLeft,
  Gift,
} from "lucide-react";
interface PurchaseProps {
  price: number;
}
export default function Purchase({ price }: PurchaseProps) {
  return (
    <div className="rounded-lg border border-gray-200 p-5 bg-gray-50 sticky top-5">
      {/* seller info */}
      <div>
        <h3 className="font-bold text-lg">فروشنده</h3>

        <div className="flex justify-between items-center mt-5">
          <div>
            <div className="flex gap-5">
              <Store className="w-7 h-7 text-gray-500" />
              <p className="text-lg font-medium">بهار کیهان ارتباطات</p>
            </div>
            <p className="text-green-600 text-sm mt-5 mr-12  ">عملکرد عالی</p>
          </div>
        </div>
      </div>

      <hr className="my-6" />

      {/* price */}
      <div className="flex items-end gap-1 " dir="ltr">
        <span className="text-xs text-gray-500">تومان</span>

        <span className="text-2xl ">
          {new Intl.NumberFormat("fa-IR").format(price)}
        </span>
      </div>


      {/* buy button */}
      <button className="w-full  bg-red-400 hover:bg-red-600 text-white rounded-xl py-4 mt-5 font-bold transition">
        افزودن به سبد خرید
      </button>

      {/* warranty */}
      <div className="flex items-center gap-3 mt-6">
        <ShieldCheck className="text-gray-500 w-5 h-5" />

        <span className="text-sm">گارانتی ۱۸ ماهه شرکتی</span>
      </div>

      <hr className="my-6" />

      {/* shipping information */}
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Truck className="text-blue-600 w-5 h-5" />

            <span className="font-medium">روش‌ها و هزینه‌های ارسال</span>
          </div>

          <ChevronLeft className="w-5 h-5 text-gray-400" />
        </div>

        <ul className="mt-4 space-y-3 text-sm text-gray-600">
          <li>• توسط دیجی‌کالا • وابسته به سبد</li>

          <li>• ارسال سریع دیجی‌کالا • وابسته به سبد</li>
        </ul>
      </div>

      <hr className="my-6" />

      {/* plus propertis */}
      <div>
        <div className="flex items-center gap-2">
          <BadgePercent className="text-fuchsia-500 w-5 h-5" />

          <span className="font-medium">ویژه اعضای پلاس</span>
        </div>

        <p className="text-sm text-gray-500 mt-3">
          ارسال سریع و رایگان دیجی‌کالا
        </p>
      </div>

      <hr className="my-6" />

      {/* club */}
      <div className="flex items-center gap-2">
        <Gift className="text-yellow-500 w-5 h-5" />

        <span className="font-medium">۱۵۰ امتیاز دیجی‌کلاب</span>
      </div>
    </div>
  );
}
