import { FoodCardType } from "./../../../view/TypeExport/ProductCardType";
// features/foodFilters/selectors.ts
import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "@/redux/store";

export const selectFoodFilters = (state: RootState) => state.foodFilters;

export const selectFilteredItems = (items: FoodCardType[]) =>
  createSelector([selectFoodFilters], (filters) => {
    const { searchTerm, selectedCategories, priceRange } = filters;

    return items.filter((item) => {
      const matchesSearch =
        item.foodName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.foodDesc.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(item.foodCategory);

      const matchesPrice =
        item.foodPrice >= priceRange[0] && item.foodPrice <= priceRange[1];

      return matchesSearch && matchesCategory && matchesPrice;
    });
  });
