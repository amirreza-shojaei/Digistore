"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { type CategorysSwiper } from "../sections/categorySwiper";

export interface ProductSwiperProps {
  items: CategorysSwiper;
}

export default function ProductSwiper({items}:ProductSwiperProps) {

  return (
    <div className="border m-6 rounded-2xl">
      <div>{items.catName}</div>
          <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={20}
      slidesPerView={5}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1280: {
          slidesPerView: 5,
        },
      }}
    >
      {items.product.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="h-80 rounded-xl border flex items-center justify-center m-4">
            <div className="h-30 rounded-xl m-2 flex">
              <img src={item.img} alt="sad" />
              <h4>{item.title}</h4>
              <h3>{item.price}</h3>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
}