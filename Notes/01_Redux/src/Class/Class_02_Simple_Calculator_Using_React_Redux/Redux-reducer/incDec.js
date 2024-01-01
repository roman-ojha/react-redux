const initialState = 0;

const changeTheNumber = (state = initialState, action) => {
  // here chageTheNumber() function take the two argument where the first argument is an state of the element of value and the second is the action which we had already define in the action folder
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    //here we are incrementing by given payload
    case "DECREMENT":
      return state - 1;
    // and here we are decrementing by 1
    default:
      return state;
  }
};

export default changeTheNumber;