import React from 'react'
import ProductSwiper from "./swiper"
import { HomePageSwiper } from '@/src/types/interfaces';

interface CategorysSwiperProps {
    items:HomePageSwiper[]
}


function CategorySwiper({items}:CategorysSwiperProps) {
  return (
    <div>
        {items.map((item)=>(
          <ProductSwiper props={item} key={item.id}/>  
        ))}
    </div>
  )
}

export default CategorySwiper