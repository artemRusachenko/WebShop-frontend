import { ORDER_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const ordersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({
        url: ORDER_URL,
        method: "POST",
        body: order,
      }),
      invalidatesTags: ["Order"],
    }),
    getUserOrders: builder.query({
      query: (userId) => ({
        url: `${ORDER_URL}/${userId}`,
      }),
      providesTags: ["Order"]
    }),
  }),
});

export const { useCreateOrderMutation, useGetUserOrdersQuery } = ordersApiSlice;
