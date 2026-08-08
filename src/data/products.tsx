export interface Product {
id:string,
slug:string,
category:string,
title:string,
name:string,
price:number,
image:string,
dicount:number,
rating:string,
galery:{src:string,alt:string}[]
colors:{title:string,name:string}[],
propertys:{name:string,text:string}[],
specifications:{name:string,text:string}[]
}

export const products: Product[] = [
  {
    id: "1",
    slug:"Samsung-Galaxy-S25-FE",
    category: "mobile",
    title: "گوشی موبایل سامسونگ Galaxy S25 FE",
    name: "Samsung Galaxy S25 FE",
    price: 45600000,
    image: "https://dkstatics-public.digikala.com/digikala-products/55582a9ac4add1b88050b458e7d490564b3ac4b6_1759667022.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/format,webp/quality,q_90",
    dicount: 12,
    rating: "4.8",
    galery: [
      { src: "https://dkstatics-public.digikala.com/digikala-products/55582a9ac4add1b88050b458e7d490564b3ac4b6_1759667022.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90", alt: "Galaxy S25 FE" },
      { src: "https://dkstatics-public.digikala.com/digikala-products/e685a271510b2a7d3d8a35f79eb995a9e0e47cca_1764607711.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90", alt: "Galaxy S25 FE" },
      { src: "https://dkstatics-public.digikala.com/digikala-products/3696bc624d46179c5af8682f7560dc6864c1f89e_1764607739.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90", alt: "Galaxy S25 FE" }
    ],
    colors: [{title:"مشکی",name:"black"}, {title:"آبی",name:"blue"}, {title:"نقره‌ای",name:"silver"}],
    propertys: [
      { name: "حافظه", text: "256 گیگابایت" },
      { name: "رم", text: "8 گیگابایت" },
      { name: "پردازنده", text: "Exynos 2400" }
    ],
    specifications: [
      { name: "صفحه نمایش", text: "6.7 اینچ Dynamic AMOLED" },
      { name: "باتری", text: "4700mAh" },
      { name: "دوربین", text: "50MP + 12MP + 8MP" }
    ]
  },

  {
    id: "2",
    category: "mobile",
    slug:"Apple-iPhone-16-Pro-Max",
    title: "گوشی موبایل اپل مدل iPhone 16 Pro Max ZAA دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
    name: "Apple iPhone 16 Pro Max",
    price: 124900000,
    image: "https://dkstatics-public.digikala.com/digikala-products/48daaebd4cb7706cce21ce8b5e485d6fdafa6bd1_1736598863.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
    dicount: 5,
    rating: "4.9",
    galery: [
      { src: "https://dkstatics-public.digikala.com/digikala-products/48daaebd4cb7706cce21ce8b5e485d6fdafa6bd1_1736598863.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90", alt: "iPhone 16 Pro Max" }
      ,{src:"https://dkstatics-public.digikala.com/digikala-products/48daaebd4cb7706cce21ce8b5e485d6fdafa6bd1_1736598863.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",alt:"16 pro"}
    ],
    colors: [{title:"مشکی",name:"black"}, {title:"آبی",name:"blue"}, {title:"نقره‌ای",name:"silver"}],
    propertys: [
      { name: "حافظه", text: "512 گیگابایت" },
      { name: "رم", text: "8 گیگابایت" },
      {name:"نسخه سیستم عامل" ,text:"ios 18"},
      {name:"رزولوشن دوربین اصلی" ,text:"48 مگاپیکسل"}
    ],
    specifications: [
      { name: "نمایشگر", text: "6.9 اینچ OLED" },
      { name: "چیپست", text: "Apple A18 Pro" },
            { name: "حافظه", text: "512 گیگابایت" },
      { name: "رم", text: "8 گیگابایت" },
      {name:"نسخه سیستم عامل" ,text:"ios 18"},
      {name:"رزولوشن دوربین اصلی" ,text:"48 مگاپیکسل"}
    ]
  },

  {
    id: "3",
    category: "laptop",
    slug:"ASUS-Vivobook-15",
    title: "لپ تاپ ایسوس Vivobook 15",
    name: "ASUS Vivobook 15",
    price: 38900000,
    image: "https://dkstatics-public.digikala.com/digikala-products/9930f7954726af3d2b465182926e18b5b25e8162_1755788508.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
    dicount: 18,
    rating: "4.6",
    galery: [
      { src: "https://dkstatics-public.digikala.com/digikala-products/9930f7954726af3d2b465182926e18b5b25e8162_1755788508.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90", alt: "Vivobook" }
      ,{src :"https://dkstatics-public.digikala.com/digikala-products/f25b8cbd34c83bb6fdeab45d2d9e567c82fb54c3_1756555451.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",alt:"Vivobook"}
    ],
    colors: [{title:"مشکی",name:"black"}, {title:"آبی",name:"blue"}, {title:"نقره‌ای",name:"silver"}],
    propertys: [
      { name: "پردازنده", text: "Core i7-13620H" },
      { name: "رم", text: "16GB" },
      { name: "SSD", text: "1TB" }
    ],
    specifications: [
      { name: "نمایشگر", text: "15.6 اینچ Full HD" },
      { name: "گرافیک", text: "RTX 4050" }
    ]
  },

  {
    id: "4",
    slug:"Sony-WH-1000XM5",
    category: "headphone",
    title: "هدفون بی سیم سونی WH-1000XM5",
    name: "Sony WH-1000XM5",
    price: 18900000,
    image: "https://dkstatics-public.digikala.com/digikala-products/3bc08f041859daac2c0af8535b4c6894f1b496cf_1745825003.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
    dicount: 0,
    rating: "4.9",
    galery: [
      { src: "https://dkstatics-public.digikala.com/digikala-products/3bc08f041859daac2c0af8535b4c6894f1b496cf_1745825003.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90", alt: "Sony XM5" }
        ,{src:"https://dkstatics-public.digikala.com/digikala-products/e7d12999420e140c398fa1f8a4fb631312552e41_1695473459.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",alt:"headphonw"}
    ],
    colors: [{title:"مشکی",name:"black"}, {title:"آبی",name:"blue"}, {title:"نقره‌ای",name:"silver"}],
    propertys: [
      { name: "نوع اتصال", text: "Bluetooth" },
      { name: "شارژدهی", text: "30 ساعت" }
    ],
    specifications: [
      { name: "نویز کنسلینگ", text: "دارد" },
      { name: "وزن", text: "250 گرم" }
    ]
  },

  {
    id: "5",
    slug:"Apple-Watch-Series-10",
    category: "smartwatch",
    title: "ساعت هوشمند اپل Watch Series 10",
    name: "Apple Watch Series 10",
    price: 35900000,
    image: "https://dkstatics-public.digikala.com/digikala-products/e0adcb187655ea1d704a4b4a288ffc41e8e2a233_1739285743.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
    dicount: 10,
    rating: "4.7",
    galery: [
      { src: "https://dkstatics-public.digikala.com/digikala-products/e0adcb187655ea1d704a4b4a288ffc41e8e2a233_1739285743.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90", alt: "Apple Watch" },
      {src:"https://dkstatics-public.digikala.com/digikala-products/c7cbe7f10b2d893f4fd6577649c83186c6cb2fd1_1727616118.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",alt:"smartwatch"}
    ],
   colors: [{title:"مشکی",name:"black"}, {title:"آبی",name:"blue"}, {title:"نقره‌ای",name:"silver"}],
    propertys: [
      { name: "سایز", text: "46mm" },
      { name: "GPS", text: "دارد" }
    ],
    specifications: [
      { name: "باتری", text: "18 ساعت" },
      { name: "ضد آب", text: "تا عمق 50 متر" }
    ]
  },

  {
    id: "6",
    slug:"Xiaomi-Pad-7-Pro",
    category: "tablet",
    title: "تبلت شیائومی Pad 7 Pro",
    name: "Xiaomi Pad 7 Pro",
    price: 29900000,
    image: "https://dkstatics-public.digikala.com/digikala-products/f91a9fa4f89204cc6f23a39bcc356e17e943d73d_1772625340.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
    dicount: 7,
    rating: "4.5",
    galery: [
      { src: "https://dkstatics-public.digikala.com/digikala-products/f91a9fa4f89204cc6f23a39bcc356e17e943d73d_1772625340.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90", alt: "Pad 7 Pro" }
    ],
    colors: [{title:"مشکی",name:"black"}, {title:"آبی",name:"blue"}, {title:"نقره‌ای",name:"silver"}],
    propertys: [
      { name: "حافظه", text: "256GB" },
      { name: "رم", text: "12GB" }
    ],
    specifications: [
      { name: "نمایشگر", text: "11.2 اینچ" },
      { name: "باتری", text: "8850mAh" }
    ]
  }
];