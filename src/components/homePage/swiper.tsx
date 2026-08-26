"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {ChevronLeft } from "lucide-react"
import { HomePageSwiper,ProductsShortDetail } from "@/src/types/interfaces";
import SwiperCard from "./swiperCard"
export interface ProductSwiperProps {
  props: HomePageSwiper;
}

export default function ProductSwiper( {props} : ProductSwiperProps) {
  
  return (
    <div className="  border my-5 rounded-2xl bg-white shadow-lg overflow-hidden">
      {/* Header Section */}
      <div className="flex justify-between items-center pt-6 md:pl-6  md:pr-6 ">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
          {props.title}
        </h2>
        <button className=" flex felx-row  p-2 rounded-lg hover:text-red-700   transition-colors">
          مشاهده همه
          <ChevronLeft />
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
              slidesPerView: 4,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 7,
              spaceBetween: 20,
            },
          }}
          className="product-swiper"
        >
          {props.items.map((product:ProductsShortDetail) => (
            
            <SwiperSlide key={product.id} ><SwiperCard product={product} key={product.id}/></SwiperSlide>
            
            
          ))}
        </Swiper>
      </div>
    </div>
  );
}
