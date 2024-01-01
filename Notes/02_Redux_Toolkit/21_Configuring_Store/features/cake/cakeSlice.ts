import { createSlice } from "@reduxjs/toolkit";
// https://redux.js.org/tutorials/essentials/part-2-app-structure#creating-slice-reducers-and-actions

const initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  // spacify name for this slice
  name: "cake",
  // initial state for this slice
  initialState,
  // spacify reducer function
  reducers: {
    // reducer container a function which receives 'state' and action as argument
    // ordered:(state, action)=>{}
    // but we don't need the action for this reducer
    ordered: (state) => {
      // now here we don't have to explicity return the state and we can directly mutate this state
      state.numOfCakes--; // here 'createSlice' in backend uses the immer library
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
  // Now we don't have to specify the action and 'createSlice' will automatically generate an action creators with the same names as the reducer function that we have returned
  // it also returned the main reducer functions which we can provide to our redux store
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
// Or:
export const cakeActions = cakeSlice.actions;
