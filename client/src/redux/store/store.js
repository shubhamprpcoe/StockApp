import { configureStore } from "@reduxjs/toolkit";
import ctxSlice from "../slice/slice";

export const store = configureStore({
  reducer: {
    ctx: ctxSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});
