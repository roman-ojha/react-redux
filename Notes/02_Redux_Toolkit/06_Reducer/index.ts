console.log("From index.js");

const CAKE_ORDERED = "CAKE_ORDERED";

const orderCakeActionObj = {
  type: CAKE_ORDERED,
  quantity: 1,
};

function orderCake() {
  return orderCakeActionObj;
}

// Typescript action type
type ActionType = {
  type: typeof CAKE_ORDERED;
};

// https://redux.js.org/tutorials/essentials/part-1-overview-concepts#reducers
// Action only describe what happen but don't describe how application state changes, reducer are in charge of that

// now, we need a state of the application
// NOTE that to represent application state it has to be represented by single object
const initialState = {
  numOfCakes: 10,

  // There could be another list of properties available for the application
  // EX:
  anotherProperty: 0,
};

// Creating reducer:
const reducer = (state = initialState, action: ActionType) => {
  // so when the application starts the initial state of the app is passed as the argument to the reducer function
  // write the function body which will return the new state of the application base on the current state and the action provided.
  switch (action.type) {
    case "CAKE_ORDERED":
      // if action type is 'CAKE_ORDERED' then performed some action

      // returning the next state of the application
      return {
        // providing the same value of other properties available on the state
        ...state,
        numberOfCakes: state.numOfCakes - 1,
      };
    default:
      // if there is a action that we have not accounted for then we will just return the state of the application
      return state;
  }
};
