import React from "react";
import { TopSelling } from "../AllProductHome/TopSelling";
import { TopRated } from "../AllProductHome/TopRated";
import { TrendingProducts } from "../AllProductHome/TrendingProduct";
import { RecentlyAdded } from "../AllProductHome/RecentlyAdded";

const AllProductsHom = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <TopSelling />
        <TopRated />
        <TrendingProducts />
        <RecentlyAdded />
      </div>
    </div>
  );
};

export default AllProductsHom;
