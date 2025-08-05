// features/foodFilters/selectors.ts
import { createSelector } from "@reduxjs/toolkit";

import { ProductCardType } from "@/view/TypeExport/ProductCardType";
import { RootState } from "@/redux/store";

export const selectFoodFilters = (state: RootState) => state.foodFilters;

export const selectFilteredItems = (items: ProductCardType[]) =>
  createSelector([selectFoodFilters], (filters) => {
    const { searchTerm, selectedCategories, priceRange } = filters;

    return items.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(item.category);

      const matchesPrice =
        item.price >= priceRange[0] && item.price <= priceRange[1];

      return matchesSearch && matchesCategory && matchesPrice;
    });
  });
