import { createSlice } from "@reduxjs/toolkit";
interface UserState {
  token: null
  userInfo: null | any
  isLogout: boolean
}
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    userInfo: null,
    isLogout: false,
  } as UserState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
      state.isLogout = false
    },
    logOutState: (state) =>{
      state.userInfo = null
      state.isLogout = true
    },
    updateUserInfo: (state, action) => {
      state.userInfo.userInfo = action.payload
    }
  },
});

export const { setToken, setUserInfo, logOutState, updateUserInfo } = authSlice.actions;
