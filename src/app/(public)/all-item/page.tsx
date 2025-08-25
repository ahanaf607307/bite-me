"use client";

import { Loader, Search } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useGetFoodQuery } from "@/redux/api/baseApi";
import SidebarFilter from "@/view/PublicComponents/AllItemComponents/SidebarFilter";
import ProductCard from "@/view/Shared/ProductCard";
import { FoodCardType } from "@/view/TypeExport/ProductCardType";

export default function Component() {
  const { isError, data, isLoading } = useGetFoodQuery(undefined, {
    pollingInterval: 5000000,
  });

  const foodData = data?.data;

  console.log("--------------> redux ", foodData);
  return (
    <div className="min-h-screen bg-background ">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sticky Sidebar wrapper */}
          <div className="sticky top-20 self-start">
            <SidebarFilter />
          </div>

          {/* Right side - Food Items */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">
                {foodData?.length} items found
              </h3>
              <div className="text-sm text-muted-foreground">
                Showing results for your selection
              </div>
            </div>

            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <Loader size={50} className="animate-spin " />
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {foodData?.map((item: FoodCardType) => (
                  <ProductCard key={item._id} product={item} />
                ))}
              </div>
            )}

            {foodData?.length === 0 && (
              <div className="text-center py-12">
                <div className="text-muted-foreground mb-4">
                  <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <h3 className="text-lg font-semibold mb-2">No items found</h3>
                  <p>Try adjusting your search or filter criteria</p>
                </div>
                <Button variant="outline" onClick={() => {}}>
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
