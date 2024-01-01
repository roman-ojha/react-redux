import {
  configureStore,
  bindActionCreators,
  combineReducers,
} from "@reduxjs/toolkit";

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
  console.log("Cake reducer");
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
  console.log("Ice cream reducer");
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

// combining the list of reducer and only after that we can provide the combined reducer into store
const rootReducer = combineReducers({
  // providing the list of all reducer inside combine reducer
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = configureStore({ reducer: rootReducer }); // providing rootReducer
// now store contain: { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 20 } }

console.log("Initial State: ", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated State: ", store.getState());
});

const actions = bindActionCreators(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
);

// NOTE that whenever you will dispatch the action both 'cakeReducer' and 'iceCream' reducer received that action and one of them act on that action where else other ignores it.
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);

actions.orderIceCream();
actions.orderIceCream();
actions.restockIceCream(2);

unsubscribe();
