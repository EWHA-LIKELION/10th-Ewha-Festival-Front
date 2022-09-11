import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const name = "PageSlice";

const initialState = {
  day: "1",
  location: "정문",
  page: "1",
  search: "",
};

export const pageSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    initPage: state => {
      state.day = initialState.day;
      state.location = initialState.location;
      state.page = initialState.page;
      state.search = initialState.search;
    },
    setPage: (state, action) => {
      state.day = action.payload.day;
      state.location = action.payload.location;
      state.page = action.payload.page;
    },
    setSearchRedux: (state, action) => {
      state.search = action.payload.search;
    },
  },
  extraReducers: builder => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { setPage, initPage, setSearchRedux } = pageSlice.actions;

export default pageSlice.reducer;
