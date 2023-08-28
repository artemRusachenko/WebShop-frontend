import { AUTH_URL, USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (user) => ({
        url: `${AUTH_URL}/signup`,
        method: "POST",
        body: user,
      }),
    }),
    signIn: builder.mutation({
      query: (user) => ({
        url: `${AUTH_URL}/signin`,
        method: "POST",
        body: user,
      }),
    }),
    getUserInfo: builder.query({
      query: () => ({
        url: `${USERS_URL}`,
      }),
      providesTags: ["User"],
    }),
    updateUserInfo: builder.mutation({
      query: (newUser) => ({
        url: `${USERS_URL}/data`,
        method: "PUT",
        body: newUser,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useSignUpMutation,
  useSignInMutation,
  useGetUserInfoQuery,
  useUpdateUserInfoMutation,
} = usersApiSlice;
