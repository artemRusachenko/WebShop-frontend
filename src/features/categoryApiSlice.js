import { CATEGORY_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const categoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategoriesByParentId: builder.query({
      query: (parentId) => ({
        url: `${CATEGORY_URL}/${parentId}`,
      }),
      providesTags: ["Categories"],
    }),
  }),
});

export const { useGetCategoriesByParentIdQuery } = categoryApiSlice;
