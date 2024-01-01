import { configureStore } from "@reduxjs/toolkit";

const CAKE_ORDERED = "CAKE_ORDERED";

const orderCakeActionObj = {
  type: CAKE_ORDERED,
  payload: 1,
};

type OrderCakeActionType = {
  type: "CAKE_ORDERED";
  // in redux there is a convention that we should write payload for any additional information that you want to send
  payload: number;
};

function orderCake() {
  return orderCakeActionObj;
}

// Creating another action type which will restock the cake
// const CAKE_RESTOCKED = "CAKE_RESTOCKED";

// Define the Action Types for typescript
type RestockCakeActionType = {
  type: "CAKE_RESTOCKED";
  payload: number;
};

// Define the action creator which will for restock cake
// and we will provide the dynamic quantity which is the number of cake we want to restock
function restockCake(payload: number = 1): RestockCakeActionType {
  return {
    type: "CAKE_RESTOCKED",
    payload,
  };
}

// add another action type that we define
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
    // handle case of 'CAKE_RESTOCKED' action type
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

const unsubscribe = store.subscribe(() => {
  console.log("Updated State: ", store.getState());
});

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake(3)); // restocking 3 cake

unsubscribe();
