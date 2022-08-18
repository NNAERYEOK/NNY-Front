// 리듀서
import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const name = "UserSlice";

const initialState = {
  id: "",
  password: "",
  username: "",
  eyes: 3,
};

export const userSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.password = action.payload.password;
      state.username = action.payload.username;
      state.eyes = action.payload.eyes;
    },
    setEye: (state, action) => {
      state.eyes = action.payload.eyes;
    },
    initUser: state => {
      state.id = initialState.id;
      state.password = initialState.password;
      state.username = initialState.username;
      state.eyes = initialState.eyes;
    },
  },
  extraReducers: builder => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { setUser, initUser, setEye } = userSlice.actions;

export default userSlice.reducer;
