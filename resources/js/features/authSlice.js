import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    storeUser: (state, action) => {
      state.userInfo = action?.payload?.data;
    },
    clearAuth: (state, action) => {
      state.userInfo = [];
    }
  }
});
export const { 
  storeUser, 
  clearUser
} = authSlice.actions;
export const getUserStore = (state) => state.auth.userInfo
export default authSlice.reducer;