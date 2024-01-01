import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber,mulNumber,divNumber } from "./Redux-actions/index";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const mulDivState=useSelector((state)=>state.mulDivNumber);
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
          <h1>Multiplication/Division counter</h1>
          <h4>using React and Redux</h4>
          <div className="quantity">
            <a
              className="quentity_minus"
              title="decrement"
              onClick={() => {
                dispatch(divNumber(5));
                // dispatch triggred the action
              }}
            >
              <span>/</span>
            </a>
            <input
              className="input_field"
              name="quantity"
              type="text"
              value={mulDivState}
            />
            <a
              className="quentity_plus"
              title="increment"
              onClick={() => {
                dispatch(mulNumber(5));
              }}
            >
              <span>*</span>
            </a>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
