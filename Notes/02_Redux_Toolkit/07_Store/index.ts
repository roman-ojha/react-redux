import { configureStore } from "@reduxjs/toolkit";

const CAKE_ORDERED = "CAKE_ORDERED";

const orderCakeActionObj = {
  type: CAKE_ORDERED,
  quantity: 2,
};

type OrderCakeActionType = typeof orderCakeActionObj;

function orderCake() {
  return orderCakeActionObj;
}

type ActionType = OrderCakeActionType;
// add other action type
// type ActionType = OrderCakeActionType | AnotherActionType;

// State of our application
const initialState = {
  numOfCakes: 10,
  anotherProperty: 0,
};

const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "CAKE_ORDERED":
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.quantity,
      };
    default:
      return state;
  }
};

// Store: https://redux.js.org/tutorials/essentials/part-1-overview-concepts#store
// 1. Holds application state './01_Store.png'
// Now need to create a store that will hold the initial state of our application
// 'configureStore' accept the reducer function and reducer function needs to have the initial state of the application
const store = configureStore({ reducer: reducer });

// 2. Allows access to state via getState() method which gives the current state
console.log("Initial State: ", store.getState());

// 4. Allow the app to subscribe to changes on the store
// it return the unsubscribe method that we will use bellow
// unsubscribe(<listener_function>)
const unsubscribe = store.subscribe(() => {
  // subscribe method accept the callback function
  console.log("Updated State: ", store.getState());
});

// 3. Store provides the dispatch method to update the state
// https://redux.js.org/tutorials/essentials/part-1-overview-concepts#dispatch
// 'dispatch' method accept the action as parameter
// we can provide the 'orderCakeActionObj' action directly but we have created the action creator which will return the action
store.dispatch(orderCake()); // this dispatch will call the reducer function with the current state and the dispatch action object
store.dispatch(orderCake());
store.dispatch({
  type: CAKE_ORDERED,
  quantity: 2,
});

// 5. Unsubscribe from the store by calling function returned by subscribe(listener) method
// now after all of our code have completed we can now unsubscribe
unsubscribe();
// If you dispatch action after you unsubscribe, you won't see the be subscribe as listener and won't run what is defined inside listener function.
