import { configureStore, bindActionCreators } from "@reduxjs/toolkit";

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

const selectNumberOfCakes = (state: typeof initialState) => state.numOfCakes;

const unsubscribe = store.subscribe(() => {
  console.log("Updated State: ", store.getState());
  console.log("Updated cake: ", selectNumberOfCakes(store.getState()));
});

// rather then specifying action inside the dispatch we can bind list of all action of the application
const actions = bindActionCreators({ orderCake, restockCake }, store.dispatch);
// bindActionCreators({<list_of_actions>}, <what_we_are_bind_to>)
// in that case we are binding to the dispatch

// Now to dispatch the action we can do this
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);

unsubscribe();
