import store from "./app/store";
import { cakeActions } from "./features/cake/cakeSlice";

// Get state data
console.log("Initial State", store.getState());

// Action names:
console.log(cakeActions.ordered());
// { type: 'cake/ordered', payload: undefined }
console.log(cakeActions.restocked(2));
// { type: 'cake/restocked', payload: 2 }

// Subscribe to update in the store
const unsubscribe = store.subscribe(() => {
  console.log("Updated State: ", store.getState());
});

// Dispatch the action
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));
