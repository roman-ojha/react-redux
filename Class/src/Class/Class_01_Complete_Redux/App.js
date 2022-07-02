import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
// in react we have useContext now in redux we have useSelector
import { incNumber, decNumber } from "./Redux-actions/index";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="body_page">
        <div className="main_container">
          <h1>Increment/Decrement counter</h1>
          <h4>using React and Redux</h4>
          <div className="quantity">
            <a
              className="quentity_minus"
              title="decrement"
              onClick={() => {
                dispatch(decNumber());
                // dispatch triggred the action
              }}
            >
              <span>-</span>
            </a>
            <input
              className="input_field"
              name="quantity"
              type="text"
              value={myState}
            />
            <a
              className="quentity_plus"
              title="increment"
              onClick={() => {
                dispatch(incNumber(5));
              }}
            >
              <span>+</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
