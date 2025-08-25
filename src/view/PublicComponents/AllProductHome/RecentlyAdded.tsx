"use client";
import { Separator } from "@/components/ui/separator";
import { useGetFoodQuery } from "@/redux/api/baseApi";
import { SmallProductCard } from "@/view/Shared/SmallProductCard";

import TitleShared from "@/view/Shared/TitleShared";
import { FoodCardType } from "@/view/TypeExport/ProductCardType";
import { Loader } from "lucide-react";

export function RecentlyAdded() {
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

  const filterRecentlyAdded = data?.data.filter(
    (item: FoodCardType) => item.foodRating <= 2
  );
  console.log("Filter top selling ", filterRecentlyAdded);
  return (
    <div className="space-y-6">
      <TitleShared
        title="Recently added"
        className="text-start text-sm md:text-md"
      />
      <Separator className="-mt-2" />
      <div className="space-y-4">
        {filterRecentlyAdded?.slice(0, 3).map((item: FoodCardType) => (
          <SmallProductCard key={item?._id} product={item} />
        ))}
      </div>
    </div>
  );
}
