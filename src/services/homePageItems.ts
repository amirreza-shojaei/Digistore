import { apiFetch } from "../libs/api";
import { Banner, HomePageSwiper } from "../types/interfaces";

export async function getCarouselItems():Promise<Banner[]> {
    return apiFetch<Banner[]>("/carouselItems")
}
export async function getBannerItems():Promise<Banner[]> {
    return apiFetch<Banner[]>("/bannerItems")
}
export async function getSwipers() :Promise<HomePageSwiper[]> {
   return apiFetch<HomePageSwiper[]>("/homePageSwipers")
}