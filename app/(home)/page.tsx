import React from "react";
import Carousel from "@/src/components/ui/carousel";
import CategorySwiper from "@/src/components/home/categorySwiper";
import { categoryP } from "@/src/data/swiper";
import {banners} from "@/src/data/carousel";
function Home() {
  return (
    <div>
      <Carousel items={banners} />
      <CategorySwiper items={categoryP} />
    </div>
  );
}

export default Home;
