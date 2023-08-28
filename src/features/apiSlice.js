import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState, endpoint }) => {
    const { user } = getState().auth;

    if (user) {
      headers.set("Authorization", `Bearer ${user.token}`);
    }

    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  credentials: "include",
  tagTypes: ["Product", "Order", "Category", "User", "Review", "Brand"],
  endpoints: (builder) => ({}),
});
