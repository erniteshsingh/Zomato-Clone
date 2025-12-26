import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from "../Feautures/Auth/AuthSlice.js";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
});
