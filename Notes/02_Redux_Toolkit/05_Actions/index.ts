console.log("From index.js");

// Define a string constant that indicate the type of an action.
const CAKE_ORDERED = "CAKE_ORDERED";

// Action object with type
const orderCakeActionObj = {
  type: CAKE_ORDERED,
  // adding another property for payload which carry out the data
  quantity: 1,
};

// Action creator which will create the action
// Action create is the function that return the action
function orderCake() {
  return orderCakeActionObj;
}
