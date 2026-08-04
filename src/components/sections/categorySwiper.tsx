import React from 'react'
import ProductSwiper from "../ui/swiper"

export interface Items {
  id:string,
  img:string,
  title:string,
  price:string

}
export interface ProductSwiperItems {
  items: Items[];
}

 export interface CategorysSwiper {
    id:string,
    catName:string,
    product:Items[]
}
interface CategorysSwiperProps {
    items:CategorysSwiper[]
}


function CategorySwiper({items}:CategorysSwiperProps) {
  return (
    <div>
        {items.map((item)=>(
          <ProductSwiper items={item} key={item.id}/>  
        ))}
    </div>
  )
}

export default CategorySwiper