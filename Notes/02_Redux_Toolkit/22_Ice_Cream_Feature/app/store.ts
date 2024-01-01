import { configureStore } from "@reduxjs/toolkit";
import cakeReducers from "../features/cake/cakeSlice";
import iceCreamReducer from "../features/icecream/iceCreamSlice";

// creating redux store
const store = configureStore({
  // specify all the reducers
  reducer: {
    cake: cakeReducers,
    iceCream: iceCreamReducer,
  },
});

export default store;
