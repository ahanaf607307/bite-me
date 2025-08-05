// app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import foodFiltersReducer from "../redux/Features/foodFilter/foodFilterSlice";

export const store = configureStore({
  reducer: {
    foodFilters: foodFiltersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
