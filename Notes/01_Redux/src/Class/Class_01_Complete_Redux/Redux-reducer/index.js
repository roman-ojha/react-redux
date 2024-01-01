// here this is the root reducer where all the reducer will come(compile) and can be able use from here, and we will pass this to store

// imorting all reducer from the 'Readux-reducer' folder to the index.js

import changeTheNumber from "./incDec";

// to put multiple reducer in one we need the redux module
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  changeTheNumber,
  // second reducer
  // third reducer
});

export default rootReducers;
// now after that we have to store the reducer inside the store
