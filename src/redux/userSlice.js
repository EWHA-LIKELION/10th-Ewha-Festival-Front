import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const name = "UserSlice";

const initialState = {
  userNumber: 0,
  id: "dy6678",
  nickname: "닉네임",
};

export const userSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userNumber = action.payload.userNumber;
      state.id = action.payload.id;
      state.nickname = action.payload.nickname;
    },
  },
  extraReducers: builder => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
