import { createSlice } from "@reduxjs/toolkit";

export const searchPaginateSlice = createSlice({
  name: "search_paginate",
  initialState: {
    paginate: 1,
    search: "",
  },
  reducers: {
    setPaginate: (state, action) => {
      state.paginate = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setPaginate, setSearch } = searchPaginateSlice.actions;
