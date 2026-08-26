import React from "react";
import Carousel from "@/src/components/ui/carousel";
import CategorySwiper from "@/src/components/homePage/categorySwiper";
import CategoriesSection from "@/src/components/homePage/categoriesSection"
import BannersSection from "@/src/components/homePage/bannersSection";
import { getCategories } from "@/src/services/categories";
import { getBannerItems, getCarouselItems,getSwipers } from "@/src/services/homePageItems";

async function Home() {
  const categoriesSectionItems =await getCategories();
  const carouselItems =await getCarouselItems();
  const bannerItems =await getBannerItems();
  const swipers =await getSwipers();
  console.log(swipers)
  return (
    <div>
      <Carousel items={carouselItems} />
      <div className="container mx-auto px-4">
      <BannersSection items={bannerItems} />
      <CategoriesSection items={categoriesSectionItems}/>
      <CategorySwiper items={swipers} />

      </div>
    </div>
  );
}

export default Home;
