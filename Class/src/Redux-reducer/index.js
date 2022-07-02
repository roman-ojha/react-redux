import { combineReducers } from "redux";
import todoReducers from "./todoReducers";

const rootReducer = combineReducers({
  todoReducers,
});

export default rootReducer;
