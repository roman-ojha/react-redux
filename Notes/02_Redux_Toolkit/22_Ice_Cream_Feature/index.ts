import store from "./app/store";
import { cakeActions } from "./features/cake/cakeSlice";
import { iceCreamAction } from "./features/icecream/iceCreamSlice";

console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated State: ", store.getState());
});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));

store.dispatch(iceCreamAction.ordered());
store.dispatch(iceCreamAction.ordered());
store.dispatch(iceCreamAction.restocked(2));

unsubscribe();
