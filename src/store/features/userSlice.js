// 리듀서
import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const name = "UserSlice";

const initialState = {
  nickname: "기본값",
  email: "기본값",
};

export const userSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.nickname = action.payload.nickname;
      state.email = action.payload.email;
    },
    initUser: state => {
      state.nickname = initialState.nickname;
      state.email = initialState.email;
    },
  },
  extraReducers: builder => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { setUser, initUser } = userSlice.actions;

export default userSlice.reducer;
