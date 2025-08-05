"use client";
import ProductCard from "@/view/Shared/ProductCard";
import TitleShared from "./TitleShared";

import { Swiper, SwiperSlide } from "swiper/react";
import food1 from "../../../public/images/foodImage/burger.jpg";
import food2 from "../../../public/images/foodImage/fishFry.jpg";
import food3 from "../../../public/images/foodImage/plater.jpg";
import food4 from "../../../public/images/foodImage/vagitableTrea.jpg";
import food5 from "../../../public/images/foodImage/vagitableTrea2.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { FreeMode, Pagination } from "swiper/modules";
import { ProductCardType } from "../TypeExport/ProductCardType";

const DailyBestSellHome = () => {
  const bestSellProduct: ProductCardType[] = [
    {
      id: 1,
      name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
      description: "Instant Herbal Beverage with Dandelion",
      brand: "NestFood",
      rating: 4.0,
      price: 28.85,
      oldPrice: 32.8,
      image: food1,
      isHot: true,
    },
    {
      id: 2,
      name: "Nature's Path Organic Oats & Honey",
      description: "Crunchy granola snack for breakfast",
      brand: "GreenBites",
      rating: 4.5,
      price: 19.99,
      oldPrice: 22.49,
      image: food2,
      isHot: false,
    },
    {
      id: 3,
      name: "Organic Fruit & Nut Trail Mix",
      description: "A mix of dried fruits and roasted nuts",
      brand: "HealthyChoice",
      rating: 3.8,
      price: 14.99,
      oldPrice: 17.5,
      image: food3,
      isHot: true,
    },
    {
      id: 4,
      name: "Gluten-Free Coconut Cookies",
      description: "Light, crispy and sweet coconut cookies",
      brand: "CrispyCo",
      rating: 4.2,
      price: 9.99,
      oldPrice: 12.0,
      image: food4,
      isHot: false,
    },
    {
      id: 5,
      name: "Vegan Dark Chocolate Almond Bar",
      description: "Rich vegan chocolate with almond crunch",
      brand: "ChocoLuxe",
      rating: 4.9,
      price: 6.75,
      oldPrice: 8.25,
      image: food5,
      isHot: true,
    },
  ];

  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-start pb-6 md:pb-10">
        <TitleShared title="Daily Best Sells" className="text-start " />
        <Button
          onClick={() => swiperRef.current?.slideNext()}
          className="flex gap-x-2 items-center cursor-pointer -mt-7 md:-mt-0 mb-7 md:mb-0"
          variant="outline"
        >
          {" "}
          <MoveRight /> <span>View all</span>
        </Button>
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
            spaceBetween: 16,
          },
          480: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4.5,
            spaceBetween: 24,
          },
          1440: {
            slidesPerView: 4.5,
            spaceBetween: 24,
          },
        }}
      >
        {bestSellProduct?.map((product) => (
          <SwiperSlide className="rounded-2xl border-0 shadow-none">
            <ProductCard key={product.id} product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DailyBestSellHome;
