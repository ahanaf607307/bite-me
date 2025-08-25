"use client";
import { Separator } from "@/components/ui/separator";
import { useGetFoodQuery } from "@/redux/api/baseApi";
import { SmallProductCard } from "@/view/Shared/SmallProductCard";

import TitleShared from "@/view/Shared/TitleShared";
import { FoodCardType } from "@/view/TypeExport/ProductCardType";
import { Loader } from "lucide-react";

export function TopSelling() {
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
  const filterTopSelling = data?.data.filter(
    (item: FoodCardType) => item?.foodRating <= 3
  );
  console.log("Filter top selling ", filterTopSelling);
  return (
    <div className="space-y-6">
      <TitleShared title="Top Selling" className="text-start text-xl" />
      <Separator className="-mt-2" />
      <div className="space-y-4">
        {filterTopSelling?.slice(0, 3).map((item: FoodCardType) => (
          <SmallProductCard key={item?._id} product={item} />
        ))}
      </div>
    </div>
  );
}
