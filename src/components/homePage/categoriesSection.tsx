"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, FreeMode, Navigation } from "swiper/modules";
import { Category } from "@/src/types/interfaces";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/free-mode";
import "swiper/css/navigation";

interface CategoriesSectionProps{
  items:Category[]
}

function getBreakpoint() {
  if (typeof window === "undefined") return "default";

  const width = window.innerWidth;

  if (width >= 1536) return "1536";
  if (width >= 1280) return "1280";
  if (width >= 1024) return "1024";
  if (width >= 768) return "768";
  if (width >= 640) return "640";
  return "mobile";
}

export default function CategoriesSection({items}:CategoriesSectionProps) {
  const [breakpoint, setBreakpoint] = useState("default");

  useEffect(() => {
    const handleResize = () => {
      const newBreakpoint = getBreakpoint();
      setBreakpoint((prev) => (prev === newBreakpoint ? prev : newBreakpoint));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full py-8" dir="rtl">
      <h2 className="mb-8 text-right text-2xl font-bold">دسته‌بندی‌ها</h2>

      <Swiper
        key={breakpoint}
        modules={[Grid, FreeMode, Navigation]}
        dir="rtl"
        navigation
        freeMode={{
          enabled: true,
          momentum: true,
        }}
        grid={{
          rows: 2,
          fill: "row",
        }}
        spaceBetween={12}
        slidesPerView={5}
        breakpoints={{
          480: {
            slidesPerView: 6,
            spaceBetween: 12,
          },
          640: {
            slidesPerView: 7,
            spaceBetween: 14,
          },
          768: {
            slidesPerView: 8,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 9,
            spaceBetween: 18,
          },
          1280: {
            slidesPerView: 9,
            spaceBetween: 20,
          },
          1536: {
            slidesPerView: 9,
            spaceBetween: 24,
          },
        }}
        className="categories-swiper pb-2!"
      >
        {items.map((category) => (
          <SwiperSlide key={category.id}>
            <div className="group flex h-full cursor-pointer flex-col items-center text-center">
              <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden  sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 112px"
                  className="object-contain p-1.5 transition-transform duration-300 group-hover:scale-105 sm:p-2"
                />
              </div>

              <span className="mt-2 line-clamp-2 max-w-17.5 text-[11px] leading-5 text-gray-800 sm:max-w-22.5 sm:text-xs md:max-w-27. md:text-sm">
                {category.title}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}