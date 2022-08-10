// 리듀서
import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const name = "UserSlice";

const initialState = {
  id: 3,
  username: "다윤",
  email: "example@gmail.com",
  eye: 10,
};

export const userSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.eye = action.payload.eye;
    },
    initUser: state => {
      state.id = initialState.id;
      state.username = initialState.username;
      state.email = initialState.email;
      state.eye = initialState.eye;
    },
  },
  extraReducers: builder => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { setUser, initUser } = userSlice.actions;

export default userSlice.reducer;
