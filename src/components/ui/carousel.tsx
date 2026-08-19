"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Banner } from "@/src/types/interfaces";
import Image from "next/image";

interface CarouselProps {
  items: Banner[];
}

export default function Carousel({ items }: CarouselProps) {
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
      className="h-125 w-full"
    >
      {items.map((image) => (
        <SwiperSlide key={image.title}>
          <Image
            src={image.image}
            alt={image.title}
            className="h-full w-full object-cover"
            fill
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
