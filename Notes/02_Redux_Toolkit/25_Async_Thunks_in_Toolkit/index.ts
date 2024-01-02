import store from "./app/store";
import { cakeActions } from "./features/cake/cakeSlice";
import { iceCreamAction } from "./features/icecream/iceCreamSlice";
import { userAction } from "./features/user/userSlice";

console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated State: ", store.getState());
});

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));

// store.dispatch(iceCreamAction.ordered());
// store.dispatch(iceCreamAction.ordered());
// store.dispatch(iceCreamAction.restocked(2));

store.dispatch(userAction.fetchUsers());

// not add unsubscribe() function because 'fetchUsers' is an async action
// unsubscribe();
