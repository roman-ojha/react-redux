import { configureStore } from "@reduxjs/toolkit";
import cakeReducers from "../features/cake/cakeSlice";
import iceCreamReducer from "../features/icecream/iceCreamSlice";
import { userReducers } from "../features/user/userSlice";

// creating redux store
const store = configureStore({
  // specify all the reducers
  reducer: {
    cake: cakeReducers,
    iceCream: iceCreamReducer,
    user: userReducers,
  },
  // by default configure store function had some middleware for the redux setup automatically
});

export default store;
