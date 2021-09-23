import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSidebar: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.showSidebar = !state.showSidebar;
    },
  },
});
