import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const name = "NoticeSlice";

const initialState = {
    id: "",
    title: "",
    content: "",
};

export const noticeSlice = createSlice({
    name: name,
    initialState,
    reducers: {
    initNotice: state => {
        state.id = initialState.id;
        state.title = initialState.title;
        state.content = initialState.content;
    },
    setNotice: (state, action) => {
        state.id = action.payload.id;
        state.title = action.payload.title;
        state.content = action.payload.content;
    },
  },
//   extraReducers: builder => {
//     builder.addCase(PURGE, () => initialState);
//   },
});

export const { setNotice, id } = noticeSlice.actions;
// export const { id } = state.notice.id

export default noticeSlice.reducer;

