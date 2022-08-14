// 리듀서
import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const name = "UserSlice";

const initialState = {
  id: "",
  email: "",
  password: "",
  username: "",
};

export const userSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.username = action.payload.username;
    },
    initUser: state => {
      state.id = initialState.id;
      state.email = initialState.email;
      state.password = initialState.password;
      state.username = initialState.username;
    },
  },
  extraReducers: builder => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { setUser, initUser } = userSlice.actions;

export default userSlice.reducer;
