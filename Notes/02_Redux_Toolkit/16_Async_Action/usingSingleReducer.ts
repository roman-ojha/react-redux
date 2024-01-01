import { configureStore, bindActionCreators } from "@reduxjs/toolkit";

type OrderCakeActionType = {
  type: "CAKE_ORDERED";
  payload: number;
};
type RestockCakeActionType = {
  type: "CAKE_RESTOCKED";
  payload: number;
};

// Let's define the another 2 action type which will handel the ice cream order and restock
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

// now create the action creator
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

const initialState = {
  numOfCakes: 10,
  numOfIceCreams: 20,
};

// First let's handle the Ice cream using the same reducer
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

// But when the application grows it is hard to handle all the actions by one reducer. so, rather we will split the one reducer into multiple reducer
// handled multiple reducer on './index.ts'

const store = configureStore({ reducer: reducer });

console.log("Initial State: ", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated State: ", store.getState());
});

// Bind actions into actions creator
const actions = bindActionCreators(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
);

actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);

// call the action
actions.orderIceCream();
actions.orderIceCream();
actions.restockIceCream(2);

unsubscribe();
