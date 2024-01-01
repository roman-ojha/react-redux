import {
  configureStore,
  bindActionCreators,
  combineReducers,
  applyMiddleware,
  Tuple,
} from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
// initializing the redux logger
const logger = createLogger();

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

type CakeActionType = OrderCakeActionType | RestockCakeActionType;

type IceCreamActionType = OrderIceCreamActionType | RestockIceCreamAction;

const initialCakeState = {
  numOfCakes: 10,
};

const cakeReducer = (
  state = initialCakeState,
  action: CakeActionType
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

const initialIceCreamState = {
  numOfIceCreams: 20,
};

const iceCreamReducer = (
  state = initialIceCreamState,
  action: IceCreamActionType
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

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

// Providing middleware into the store
// https://redux-toolkit.js.org/api/configureStore
// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => {
//     return getDefaultMiddleware().concat(logger as any);
//   },
// });
const store = configureStore({
  reducer: rootReducer,
  middleware: () => new Tuple(logger as any),
});

// console.log("Initial State: ", store.getState());

const unsubscribe = store.subscribe(() => {
  // now we don't need to log here because we have logged using logger middleware
  // console.log("Updated State: ", store.getState());
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
