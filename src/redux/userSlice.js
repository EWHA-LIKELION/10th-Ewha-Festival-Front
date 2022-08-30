import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const name = "UserSlice";

const initialState = {
  id: "", // 고유 번호
  nickname: "", // 닉네임
  username: "", // 아이디
  isBooth: "", // 부스 여부
  isTf: "", // tf 여부
};

export const userSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    initUser: state => {
      state.username = initialState.username;
      state.id = initialState.id;
      state.nickname = initialState.nickname;
      state.isBooth = initialState.isBooth;
      state.isTf = initialState.isTf;
    },
    setUser: (state, action) => {
      state.username = action.payload.username;
      state.id = action.payload.id;
      state.nickname = action.payload.nickname;
      state.isBooth = action.payload.isBooth;
      state.isTf = action.payload.isTf;
    },
  },
  extraReducers: builder => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
