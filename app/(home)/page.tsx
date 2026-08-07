import React from "react";
import Carousel from "@/src/components/ui/carousel";
import CategorySwiper from "@/src/components/sections/categorySwiper";
import { categoryP } from "@/src/data/swiper";
import images from "@/src/data/carousel.json";
function Home() {
  return (
    <div>
      <Carousel items={images} />
      <CategorySwiper items={categoryP} />
    </div>
  );
}

export default Home;
