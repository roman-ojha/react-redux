import { configureStore } from "@reduxjs/toolkit";
import cakeReducers from "../features/cake/cakeSlice";
import iceCreamReducer from "../features/icecream/iceCreamSlice";
import { logger } from "redux-logger";

// creating redux store
const store = configureStore({
  // specify all the reducers
  reducer: {
    cake: cakeReducers,
    iceCream: iceCreamReducer,
  },
  // by default configure store function had some middleware for the redux setup automatically
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(logger as any);
  },
});

export default store;
