import { ArrowUp } from "lucide-react";
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="mt-10 m-3 w-auto border rounded-4xl bg-red-200">
      {/* Top */}
      <div className="container mx-auto flex items-center justify-between py-6">
        <h2 className="text-4xl font-bold text-red-600">DigiStore</h2>

        <button className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
          <ArrowUp size={18} />
          بازگشت به بالا
        </button>
      </div>

      {/* Contact */}
      <div className="container mx-auto border-b pb-6 text-sm text-gray-500">
        <p>
          تلفن پشتیبانی: 021-12345678 | 7 روز هفته، 24 ساعته پاسخگوی شما هستیم
        </p>
      </div>

      {/* Features */}
      <div className="container mx-auto grid grid-cols-5 gap-8 py-8 text-center">
        <div>
          🚚
          <p className="mt-2 text-sm">امکان تحویل اکسپرس</p>
        </div>

        <div>
          💳
          <p className="mt-2 text-sm">امکان پرداخت در محل</p>
        </div>

        <div>
          ⏰<p className="mt-2 text-sm">7 روز هفته، 24 ساعته</p>
        </div>

        <div>
          🔄
          <p className="mt-2 text-sm">7 روز ضمانت بازگشت</p>
        </div>

        <div>
          ✅<p className="mt-2 text-sm">ضمانت اصل بودن کالا</p>
        </div>
      </div>

      {/* Links */}
      <div className="container mx-auto grid grid-cols-4 gap-10 border-t py-10">
        <div>
          <h3 className="mb-4 font-bold">با دیجی‌استور</h3>

          <ul className="space-y-3 text-gray-500">
            <li>درباره ما</li>
            <li>تماس با ما</li>
            <li>فرصت‌های شغلی</li>
            <li>گزارش تخلف</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-bold">خدمات مشتریان</h3>

          <ul className="space-y-3 text-gray-500">
            <li>پاسخ به سوالات</li>
            <li>شرایط استفاده</li>
            <li>حریم خصوصی</li>
            <li>گزارش باگ</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-bold">راهنمای خرید</h3>

          <ul className="space-y-3 text-gray-500">
            <li>نحوه ثبت سفارش</li>
            <li>ارسال سفارش</li>
            <li>شیوه پرداخت</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-bold">همراه ما باشید</h3>

          <div className="mb-6 flex gap-4 text-gray-500">
            <FaInstagram />

            <FaXTwitter />

            <FaLinkedin />

            <FaYoutube />
          </div>

          <h3 className="mb-3 font-bold">عضویت در خبرنامه</h3>

          <div className="flex gap-2">
            <input
              type="email"
              placeholder="ایمیل شما"
              className="flex-1 rounded-lg border px-3 py-2 outline-none"
            />

            <button className="rounded-lg bg-red-600 px-4 text-white">
              ثبت
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}

      <div className="border-t py-5 text-center text-sm text-gray-500">
        © 2026 DigiStore. All Rights Reserved.
      </div>
    </footer>
  );
}
