import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  devtools: process.env.NODE_ENV !== "production",
});

export default store;
