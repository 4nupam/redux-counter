import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./ConfigureSlice";
export const store = configureStore({
  reducer: {
    // <-- singular
    counter: counterReducer,
  },
});
