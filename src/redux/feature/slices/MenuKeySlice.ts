import { createSlice } from "@reduxjs/toolkit";

export const menuKeySlice = createSlice({
  name: "stateKey",
  initialState: {
    key: "",
  },
  reducers: {
    setKey: (state, action) => {
      state.key = action.payload;
    },
  },
});

export const { setKey } = menuKeySlice.actions;
