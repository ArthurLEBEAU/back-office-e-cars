import { createSlice } from "@reduxjs/toolkit";

export const collapsedSlice = createSlice({
  name: "collapsed",
  initialState: {
    collapsed: false,
    mobileCollapsed: false,
  },
  reducers: {
    setCollapsed: (state, action) => {
      state.collapsed = action.payload;
    },
    setMobileCollapsed: (state, action) => {
      state.mobileCollapsed = action.payload;
    },
  },
});

export const { setCollapsed, setMobileCollapsed } = collapsedSlice.actions;
