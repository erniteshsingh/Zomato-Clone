import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from "../Feautures/Auth/AuthSlice.js";
import ProductsSlice from "../Feautures/Products/ProductsSlice.jsx";
export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    createproduct: ProductsSlice,
  },
});
