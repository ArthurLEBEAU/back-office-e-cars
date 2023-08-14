import { apiSlice } from "../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (initialLogin) => ({
        url: "/user/login",
        method: "POST",
        body: {
          ...initialLogin,
          username: String(initialLogin.username),
          password: String(initialLogin.password),
        },
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/user/logout",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
} = extendedApiSlice;
