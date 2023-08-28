import { REVIEWS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const reviewsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProductReviews: builder.query({
      query: (productId) => ({
        url: `${REVIEWS_URL}/${productId}`,
      }),
      providesTags: ["Review"],
    }),
    createReview: builder.mutation({
      query: (newReview) => ({
        url: REVIEWS_URL,
        method: "POST",
        body: newReview,
      }),
      invalidatesTags: ["Review"],
    }),
    getUserReviews: builder.query({
      query: (userId) => ({
        url: `${REVIEWS_URL}/user/${userId}`,
      }),
    }),
  }),
});

export const { useGetProductReviewsQuery, useCreateReviewMutation, useGetUserReviewsQuery } =
  reviewsApiSlice;
