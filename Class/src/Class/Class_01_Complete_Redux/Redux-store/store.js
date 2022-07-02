// here we are importing the store form the redux module from which we can be able to store all the reducer
import { createStore } from "redux";
import rootReducers from "../Redux-reducer/index";

const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // here another we add for the redux devtools
);

export default store;
