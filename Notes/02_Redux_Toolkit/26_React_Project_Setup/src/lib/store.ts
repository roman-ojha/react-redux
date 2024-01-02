import { configureStore } from "@reduxjs/toolkit";
import cakeReducers from "./features/cake/cakeSlice";
import iceCreamReducer from "./features/icecream/iceCreamSlice";
import { userReducers } from "./features/user/userSlice";

// https://redux.js.org/usage/nextjs#initial-setup
// creating redux store
export const makeStore = () => {
  return configureStore({
    // specify all the reducers
    reducer: {
      cake: cakeReducers,
      iceCream: iceCreamReducer,
      user: userReducers,
    },
    // by default configure store function had some middleware for the redux setup automatically
  });
};

// export default store;
// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
