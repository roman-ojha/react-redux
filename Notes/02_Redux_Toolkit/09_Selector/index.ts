import { configureStore } from "@reduxjs/toolkit";

const CAKE_ORDERED = "CAKE_ORDERED";

const orderCakeActionObj = {
  type: CAKE_ORDERED,
  payload: 1,
};

type OrderCakeActionType = {
  type: "CAKE_ORDERED";
  payload: number;
};

function orderCake() {
  return orderCakeActionObj;
}
type RestockCakeActionType = {
  type: "CAKE_RESTOCKED";
  payload: number;
};

function restockCake(payload: number = 1): RestockCakeActionType {
  return {
    type: "CAKE_RESTOCKED",
    payload,
  };
}

type ActionType = OrderCakeActionType | RestockCakeActionType;
const initialState = {
  numOfCakes: 10,
  anotherProperty: 0,
};

const reducer = (
  state = initialState,
  action: ActionType
): typeof initialState => {
  switch (action.type) {
    case "CAKE_ORDERED":
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    case "CAKE_RESTOCKED":
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const store = configureStore({ reducer: reducer });

console.log("Initial State: ", store.getState());

// https://redux.js.org/tutorials/essentials/part-1-overview-concepts#selectors
// Selectors are functions that know how to extract specific pieces of information from a store state value. As an application grows bigger, this can help avoid repeating logic as different parts of the app need to read the same data:

const selectNumberOfCakes = (state: typeof initialState) => state.numOfCakes;

const unsubscribe = store.subscribe(() => {
  // Now only getting the required information from application state using selector
  console.log("Updated State: ", store.getState());
  console.log("Updated cake: ", selectNumberOfCakes(store.getState()));
});

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake(3));

unsubscribe();
