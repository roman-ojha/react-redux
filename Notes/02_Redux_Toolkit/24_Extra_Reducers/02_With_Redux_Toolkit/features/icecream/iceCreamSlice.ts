import { createSlice, Action } from "@reduxjs/toolkit";
import { cakeActions } from "../cake/cakeSlice";

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState: {
    numOfIceCreams: 20,
  },
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams--;
    },
    restocked: (state, action) => {
      state.numOfIceCreams += action.payload;
    },
  },
  // adding extra reducers
  // https://redux-toolkit.js.org/api/createslice#extrareducers
  // First way:
  extraReducers: (builder) => {
    // Add extra case
    // addCase(<action_type>, (state, action)=>{})
    builder
      .addCase(cakeActions.ordered, (state, action) => {
        state.numOfIceCreams--;
      })
      // Add chain of cases with builder
      // .addCase(<action>, (state, action)=>{});
      .addMatcher(
        // You can match a range of action types
        isRejectedAction,
        // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
        (state, action) => {}
      );
    // and provide a default case if no other handlers matched
    // .addDefaultCase((state, action) => {})
  },
});

interface RejectedAction extends Action {
  error: Error;
}

function isRejectedAction(action: Action): action is RejectedAction {
  return action.type.endsWith("rejected");
}

export default iceCreamSlice.reducer;
export const iceCreamAction = iceCreamSlice.actions;
