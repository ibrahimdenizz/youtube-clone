import { combineReducers } from "redux";
import { uiSlice } from "./stores/ui/Slice";

export const rootReducer = combineReducers({
  // reducers go here
  ui: uiSlice.reducer,
});
