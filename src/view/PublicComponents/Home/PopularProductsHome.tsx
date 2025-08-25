"use client";
import { useGetFoodQuery } from "@/redux/api/baseApi";
import { FoodCardType } from "@/view/TypeExport/ProductCardType";
import ProductCard from "../../Shared/ProductCard";
import TitleShared from "../../Shared/TitleShared";
import { Loader } from "lucide-react";

const PopularProductsHome = () => {
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
  const filterPopularFood = foodData?.filter(
    (item: FoodCardType) => item.foodStatus === "popular"
  );

  return (
    <div className="container mx-auto p-6">
      {/* Title  */}
      <div>
        <TitleShared title="Popular Products" className="text-start" />
      </div>
      {/* map card data  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 pt-6 ">
        {filterPopularFood?.map((item: FoodCardType) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default PopularProductsHome;
