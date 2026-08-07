"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


interface Img {
  title:string;
  link:string;
}
interface CarouselProps {
  items:Img[]
}



export default function Carousel({items}:CarouselProps) {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation
      className="h-[500px] w-full rounded-2xl"
    >
      {items.map((image) => (
        <SwiperSlide key={image.title}>
          <img
            src={image.link}
            alt={image.title}
            className="h-full w-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
