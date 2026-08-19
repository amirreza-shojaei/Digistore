import React from "react";
import Carousel from "@/src/components/ui/carousel";
import CategorySwiper from "@/src/components/homePage/categorySwiper";
import { categoryP } from "@/src/data/swiper";
import { banners } from "@/src/data/carousel";
import CategoriesSection from "@/src/components/homePage/categoriesSection"
import BannersSection from "@/src/components/homePage/bannersSection";
import { bannersSection } from "@/src/data/banners";
function Home() {
  return (
    <div>
      <Carousel items={banners} />
      <div className="container mx-auto px-4">
      <BannersSection items={bannersSection} />
      <CategoriesSection/>
      <CategorySwiper items={categoryP} />

      </div>
    </div>
  );
}

export default Home;
