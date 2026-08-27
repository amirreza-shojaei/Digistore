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
import { Product } from "@/src/types/interfaces";
import AddToCartButton from "@/src/store/addToCartButton";
import { CalculatingDiscount } from "@/src/utils/calculatingDiscount";
import { ConvertNumbers } from "@/src/utils/convertNumbers";
interface PurchaseProps {
  item: Product;
  color:{
    title: string;
    hex?: string;
  } | null
}

export default function Purchase({ item,color }: PurchaseProps) {
  const hasDiscount = item.discount > 0;

  const finalPrice = hasDiscount
    ? CalculatingDiscount(item.price, item.discount)
    : item.price;
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
      <div
        dir="ltr"
        className=" flex h-6 min-w-0 items-center justify-between gap-1 "
      >
        {/* Old Price */}
        <div className="min-w-0 flex-1 text-right">
          {hasDiscount && (
            <span className=" block truncate text-[9px] text-gray-400 line-through sm:text-[10px] md:text-xs ">
              {ConvertNumbers(item.price, "toPersian")} تومان
            </span>
          )}
        </div>

        {/* Discount */}
        <div className="flex h-full shrink-0 items-center">
          {hasDiscount && (
            <span className=" inline-flex min-w-7 items-center justify-center rounded-full bg-red-500 px-1.5 py-0.5 text-[9px] font-bold leading-4 text-white sm:min-w-7.5 sm:px-2 sm:text-[10px] md:text-xs">
              {ConvertNumbers(item.discount, "toPersian")}٪
            </span>
          )}
        </div>
      </div>
      <div className="flex items-end gap-1" dir="ltr">
        <span className="text-xs text-gray-500">تومان</span>
        <span className="text-2xl font-bold">
          {ConvertNumbers(finalPrice, "toPersian")}
        </span>
      </div>
      <AddToCartButton
        product={{
          id: item.id,
          slug: item.slug,
          title: item.title,
          image: item.image,
          price: item.price,
          discount: item.discount,
        }}
        color={color}
      />

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
        <p className="mt-3 text-sm text-gray-500">{plusBenefits.description}</p>
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
