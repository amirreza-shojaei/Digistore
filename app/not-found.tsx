import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
        صفحه‌ای که دنبال آن بودید پیدا نشد!
      </h1>

      <p className="text-gray-500 mt-4">
        ممکن است آدرس وارد شده اشتباه باشد یا این صفحه حذف شده باشد.
      </p>
      <Image
        src="/page-not-found.webp"
        alt="notFound"
        width={500}
        height={500}
      />
      <Link
        href="/"
        className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition"
      >
        بازگشت به صفحه اصلی
      </Link>
    </main>
  );
}
