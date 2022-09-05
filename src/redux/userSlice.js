import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const name = "UserSlice";

const initialState = {
  id: "", // 고유 번호
  nickname: "", // 닉네임
  username: "", // 아이디
  isBooth: "", // 부스 여부
  isTf: "", // tf 여부
  boothId: "", // 소유한 부스 아이디
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
      state.boothId = initialState.boothId;
    },
    setUser: (state, action) => {
      state.username = action.payload.username;
      state.id = action.payload.id;
      state.nickname = action.payload.nickname;
      state.isBooth = action.payload.is_booth;
      state.isTf = action.payload.is_tf;
      state.boothId = action.payload.booth_id;
    },
  },
  extraReducers: builder => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
