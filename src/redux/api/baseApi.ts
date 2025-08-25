import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  tagTypes: ["food"], // it store tag when run any query
  endpoints: (builder) => ({
    getFood: builder.query({
      query: () => "/food",
      providesTags: ["food"], // it cached data when get
    }),
    postFood: builder.mutation({
      query: (FoodData) => ({
        url: "/food",
        method: "POST",
        body: FoodData,
      }),
      invalidatesTags: ["food"], // it set that in Get query Food Data cached in invalid now. run the get query again
    }),

    // Update Food --->
    updateFood: builder.mutation({
      query: ({ id, data }) => ({
        url: `/food/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["food"],
    }),

    // Delete food ->
    deleteFood: builder.mutation({
      query: (id) => ({
        url: `/food/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["food"],
    }),
  }),
});

export const {
  useGetFoodQuery,
  usePostFoodMutation,
  useUpdateFoodMutation,
  useDeleteFoodMutation,
} = baseApi;
