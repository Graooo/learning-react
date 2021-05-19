import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { show: false },
  reducers: {
    toggle(state) {
      state.show = !state.show;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
