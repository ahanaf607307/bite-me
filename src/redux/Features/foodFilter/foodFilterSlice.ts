// features/foodFilters/foodFiltersSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FoodFiltersState {
  searchTerm: string;
  selectedCategories: string[];
  priceRange: [number, number];
}

const initialState: FoodFiltersState = {
  searchTerm: "",
  selectedCategories: [],
  priceRange: [0, 50],
};

const foodFiltersSlice = createSlice({
  name: "foodFilters",
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    setSelectedCategories(state, action: PayloadAction<string[]>) {
      state.selectedCategories = action.payload;
    },
    toggleCategory(
      state,
      action: PayloadAction<{ category: string; checked: boolean }>
    ) {
      const { category, checked } = action.payload;
      if (checked) {
        if (!state.selectedCategories.includes(category)) {
          state.selectedCategories.push(category);
        }
      } else {
        state.selectedCategories = state.selectedCategories.filter(
          (c) => c !== category
        );
      }
    },
    setPriceRange(state, action: PayloadAction<[number, number]>) {
      state.priceRange = action.payload;
    },
    clearAllFilters(state) {
      state.searchTerm = "";
      state.selectedCategories = [];
      state.priceRange = [0, 50];
    },
  },
});

export const {
  setSearchTerm,
  setSelectedCategories,
  toggleCategory,
  setPriceRange,
  clearAllFilters,
} = foodFiltersSlice.actions;

export default foodFiltersSlice.reducer;
