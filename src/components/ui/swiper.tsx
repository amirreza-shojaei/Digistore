"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { type CategorysSwiper } from "../sections/categorySwiper";
import Image from "next/image";

export interface ProductSwiperProps {
  items: CategorysSwiper;
}

export default function ProductSwiper({ items }: ProductSwiperProps) {
  return (
    <div className="  border m-10 mr-30 ml-30 rounded-2xl bg-white shadow-lg overflow-hidden">
      {/* Header Section */}
      <div className="flex justify-between items-center p-4  md:p-6 ">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
          {items.catName}
        </h2>
        <button className="text-blue-600 hover:text-blue-800 font-medium text-sm md:text-base transition-colors">
          مشاهده همه
        </button>
      </div>

      {/* Swiper Section */}
      <div className="p-4 md:p-6">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={15}
          slidesPerView={1}
          breakpoints={{
            480: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          className="product-swiper"
        >
          {items.product.map((item) => (
            <SwiperSlide key={item.id} className="!w-[250]">
              <div className="group rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 h-full">
                <div className="flex flex-col h-full">
                  {/* Image Container */}
                  <div className="relative w-full aspect-square rounded-t-xl overflow-hidden">
                    {item.img ? (
                      <img
                        src={item.img}
                        alt={item.title || "Product image"}
                        className="w-full h-full object-contain  group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <span>بدون تصویر</span>
                      </div>
                    )}
                  </div>

                  {/* Content Container */}
                  <div className="p-3 flex-1 flex flex-col">
                    {/* Title */}
                    <h4 className="text-sm md:text-base font-medium text-gray-800 line-clamp-2 mb-1 min-h-[2.5rem]">
                      {item.title || "نام محصول"}
                    </h4>

                    {/* Price */}
                    <div className="mt-auto pt-2  text-left ">
                      <p className="text-base md:text-lg font-bold text-gray-900">
                        {item.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
