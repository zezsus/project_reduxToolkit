/** @format */

import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/users/userSlice";
import productSlice from "./features/products/productSlice";

export const store = configureStore({
  reducer: {
    users: userSlice,
    products: productSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
