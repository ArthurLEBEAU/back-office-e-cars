import { apiSlice } from "@redux/feature/api/apiSlice";
import { authSlice } from "@redux/feature/slices/authSlice";
import { collapsedSlice } from "@redux/feature/slices/collapsedSlice";
import { menuKeySlice } from "@redux/feature/slices/MenuKeySlice";
import { searchPaginateSlice } from "@redux/feature/slices/search_paginate_slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice.reducer,
    menuKey: menuKeySlice.reducer,
    collapsedState: collapsedSlice.reducer,
    searchAndPaginate: searchPaginateSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
