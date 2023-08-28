import { CATEGORY_URL, PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      providesTags: ["Products"],
    }),
    getPopularProducts: builder.query({
      query: () => ({
        url: `${PRODUCTS_URL}/popular`,
      }),
      providesTags: ["Order"],
    }),
    getProductById: builder.query({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
      }),
      providesTags: ["Product"],
    }),
    getProductsByCategoryId: builder.query({
      query: (categoryId) => ({
        url: `${CATEGORY_URL}/${categoryId}/products`,
      }),
      providesTags: ["Product"],
    }),
    getFilteredProducts: builder.query({
      query: (queryParams) => ({
        url: `${PRODUCTS_URL}/filter?${queryParams}`,
      }),
      providesTags: ["Products"],
    }),
    getTest: builder.query({
      query: (paginateQueryParams) => ({
        url: `${PRODUCTS_URL}/${paginateQueryParams}`,
      }),
      providesTags: ["Products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetPopularProductsQuery,
  useGetProductByIdQuery,
  useGetProductsByCategoryIdQuery,
  useGetFilteredProductsQuery,
  useGetTestQuery,
} = productsApiSlice;
