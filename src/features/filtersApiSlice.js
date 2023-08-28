import { BRANDS_URL, PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const filtersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFiteredFilters: builder.query({
      query: (queryParams) => ({
        url: `${PRODUCTS_URL}/filters?${queryParams}`,
      }),
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetFiteredFiltersQuery } = filtersApiSlice;
