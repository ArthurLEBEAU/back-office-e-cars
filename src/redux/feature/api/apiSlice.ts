import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../app/store";

export const apiSlice = createApi({
  reducerPath: "api", // optional
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}`,
    prepareHeaders: (headers, { getState }) => {
      const userInfo: any = (getState() as RootState).auth.userInfo;
      const tokenLocalStorage = localStorage.getItem('token')
      if (userInfo) {
        headers.set("authorization", `Bearer ${userInfo.token}`);
      } else if (tokenLocalStorage) {
        headers.set("authorization", `Bearer ${tokenLocalStorage}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Request", "Cars"],
  endpoints: (builder) => ({}),
});
