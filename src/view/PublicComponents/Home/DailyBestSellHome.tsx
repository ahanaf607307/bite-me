"use client";
import ProductCard from "@/view/Shared/ProductCard";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Button } from "@/components/ui/button";
import { useGetFoodQuery } from "@/redux/api/baseApi";
import TitleShared from "@/view/Shared/TitleShared";
import { FoodCardType } from "@/view/TypeExport/ProductCardType";
import { Loader, MoveRight } from "lucide-react";
import { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { FreeMode, Pagination } from "swiper/modules";

const DailyBestSellHome = () => {
  const { isError, data, isLoading } = useGetFoodQuery(undefined, {
    pollingInterval: 5000000,
  });

  if (isLoading) {
    <div className="flex justify-center items-center py-20">
      <Loader size={50} className="animate-spin " />
    </div>;
  }

  const foodData = data?.data;

  console.log("--------------> redux ", foodData);
  const filterDailyBestSell = foodData?.filter(
    (item: FoodCardType) => item.foodStatus === "dailySell"
  );
  console.log("best sell", filterDailyBestSell);

  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center lg:items-start ">
        <TitleShared title="Daily Best Sells" className="text-start " />
        <Button
          onClick={() => swiperRef.current?.slideNext()}
          className="flex gap-x-2 items-center cursor-pointer "
          variant="outline"
        >
          {" "}
          <MoveRight /> <span>View all</span>
        </Button>
      </div>

      <div className="pt-6 ">
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
              slidesPerView: 1,
              spaceBetween: 16,
            },
            480: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 24,
            },
            1440: {
              slidesPerView: 4.5,
              spaceBetween: 24,
            },
          }}
        >
          {filterDailyBestSell?.map((product: FoodCardType) => (
            <SwiperSlide
              key={product?._id}
              className="rounded-2xl border-0 shadow-none"
            >
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DailyBestSellHome;
