import React from "react";
import Carousel from "@/src/components/ui/carousel";
import CategorySwiper from "@/src/components/sections/categorySwiper";
import { categoryP } from "@/src/data/swiper";
function Home() {
  return (
    <div>
      <Carousel />
      <CategorySwiper items={categoryP} />
    </div>
  );
}

export default Home;
