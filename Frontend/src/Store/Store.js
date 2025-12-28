import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from "../Feautures/Auth/AuthSlice.js";

import productReducer from "../Feautures/Products/ProductSlice.js";
export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    product: productReducer,
  },
});
