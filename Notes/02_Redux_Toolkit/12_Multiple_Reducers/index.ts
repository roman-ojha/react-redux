import { configureStore, bindActionCreators } from "@reduxjs/toolkit";

// First: './usingSingleReducer.ts'
type OrderCakeActionType = {
  type: "CAKE_ORDERED";
  payload: number;
};
type RestockCakeActionType = {
  type: "CAKE_RESTOCKED";
  payload: number;
};

type OrderIceCreamActionType = {
  type: "ICE_CREAM_ORDERED";
  payload: number;
};
type RestockIceCreamAction = {
  type: "ICE_CREAM_RESTOCKED";
  payload: number;
};

function orderCake(): OrderCakeActionType {
  return {
    type: "CAKE_ORDERED",
    payload: 1,
  };
}

function restockCake(payload: number = 1): RestockCakeActionType {
  return {
    type: "CAKE_RESTOCKED",
    payload,
  };
}

function orderIceCream(quantity = 1): OrderIceCreamActionType {
  return {
    type: "ICE_CREAM_ORDERED",
    payload: quantity,
  };
}
function restockIceCream(quantity = 1): RestockIceCreamAction {
  return {
    type: "ICE_CREAM_RESTOCKED",
    payload: quantity,
  };
}

type ActionType =
  | OrderCakeActionType
  | RestockCakeActionType
  | OrderIceCreamActionType
  | RestockIceCreamAction;

// Now rather then using the one initial state we will split this into multiple one
const initialState = {
  numOfCakes: 10,
  numOfIceCreams: 20,
};

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 20,
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
    case "ICE_CREAM_ORDERED":
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - action.payload,
      };
    case "ICE_CREAM_RESTOCKED":
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload,
      };
    default:
      return state;
  }
};

// Creating reducer which will handle the cake related stuff
const cakeReducer = (
  state = initialCakeState,
  action: ActionType
): typeof initialCakeState => {
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

// Creating reducer which will handle the ice cream related stuff
const iceCreamReducer = (
  state = initialIceCreamState,
  action: ActionType
): typeof initialIceCreamState => {
  switch (action.type) {
    case "ICE_CREAM_ORDERED":
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - action.payload,
      };
    case "ICE_CREAM_RESTOCKED":
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload,
      };
    default:
      return state;
  }
};

// we will going to understand about combining the reducer in '../13_Combine_Reducers'

const store = configureStore({ reducer: reducer });

console.log("Initial State: ", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated State: ", store.getState());
});

const actions = bindActionCreators(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
);

actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);

actions.orderIceCream();
actions.orderIceCream();
actions.restockIceCream(2);

unsubscribe();
