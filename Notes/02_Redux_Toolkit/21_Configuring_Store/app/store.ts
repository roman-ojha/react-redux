import { configureStore } from "@reduxjs/toolkit";
import cakeReducers from "../features/cake/cakeSlice";

// creating redux store
const store = configureStore({
  // specify all the reducers
  reducer: {
    cake: cakeReducers,
  },
});

export default store;
