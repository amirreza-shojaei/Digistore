import {
  Store,
  ShieldCheck,
  Truck,
  BadgePercent,
  ChevronLeft,
  Gift,
} from "lucide-react";
import {
  sellerInfo,
  shippingMethods,
  plusBenefits,
} from "@/src/data/purchaseInfo";

interface PurchaseProps {
  price: number;
}

export default function Purchase({ price }: PurchaseProps) {
  const formattedPrice = new Intl.NumberFormat("fa-IR").format(price);

  return (
    <div className="sticky top-5 rounded-xl border border-gray-200 bg-gray-50 p-5">
      {/* فروشنده */}
      <div>
        <h3 className="text-lg font-bold">فروشنده</h3>

        <div className="mt-5 flex items-start gap-4">
          <Store className="h-7 w-7 shrink-0 text-gray-500" />
          <div>
            <p className="text-lg font-medium">{sellerInfo.name}</p>
            <p className="mt-2 text-sm text-green-600">
              {sellerInfo.performance}
            </p>
          </div>
        </div>
      </div>

      <hr className="my-6" />

      {/* قیمت */}
      <div className="flex items-end gap-1" dir="ltr">
        <span className="text-xs text-gray-500">تومان</span>
        <span className="text-2xl font-bold">{formattedPrice}</span>
      </div>

      {/* دکمه خرید */}
      <button
        type="button"
        className="mt-5 w-full rounded-xl bg-red-500 py-4 font-bold text-white transition hover:bg-red-600"
      >
        افزودن به سبد خرید
      </button>

      {/* گارانتی */}
      <div className="mt-6 flex items-center gap-3">
        <ShieldCheck className="h-5 w-5 text-gray-500" />
        <span className="text-sm">{sellerInfo.warranty}</span>
      </div>

      <hr className="my-6" />

      {/* روش‌های ارسال */}
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Truck className="h-5 w-5 text-blue-600" />
            <span className="font-medium">روش‌ها و هزینه‌های ارسال</span>
          </div>
          <ChevronLeft className="h-5 w-5 text-gray-400" />
        </div>

        <ul className="mt-4 space-y-3 text-sm text-gray-600">
          {shippingMethods.map((method) => (
            <li key={method}>• {method}</li>
          ))}
        </ul>
      </div>

      <hr className="my-6" />

      {/* پلاس */}
      <div>
        <div className="flex items-center gap-2">
          <BadgePercent className="h-5 w-5 text-fuchsia-500" />
          <span className="font-medium">{plusBenefits.title}</span>
        </div>
        <p className="mt-3 text-sm text-gray-500">
          {plusBenefits.description}
        </p>
      </div>

      <hr className="my-6" />

      {/* دیجی‌کلاب */}
      <div className="flex items-center gap-2">
        <Gift className="h-5 w-5 text-yellow-500" />
        <span className="font-medium">
          {sellerInfo.digiclubPoints} امتیاز دیجی‌کلاب
        </span>
      </div>
    </div>
  );
}