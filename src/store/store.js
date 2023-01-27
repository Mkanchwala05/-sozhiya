import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./auth/userSlice";

export const store = configureStore({
  reducer: {
    user: useReducer,
  },
});
