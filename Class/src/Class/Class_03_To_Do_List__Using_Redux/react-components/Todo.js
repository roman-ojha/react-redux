import React, { useState } from "react";
import "./todo.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../Redux-actions/index";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add Your List Here 👌</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍️ Add Items..."
              value={inputData}
              onChange={(event) => {
                setInputData(event.target.value);
              }}
            />
            <i
              className="fa fa-plus add-btn"
              style={{ fontSize: "30px" }}
              onClick={() => {
                dispatch(addTodo(inputData));
                setInputData("");
              }}
            >
              +
            </i>
          </div>
          <div className="showItems">
            {list.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3 style={{ display: "inline-block" }}>{elem.data}</h3>
                  <div className="todo-btn">
                    <i
                      className="fa fa-trash-alt add-btn"
                      title="Delete Item"
                      style={{
                        fontSize: "30px",
                        display: "inline-block",
                      }}
                      onClick={() => {
                        dispatch(deleteTodo(elem.id));
                      }}
                    >
                      -
                    </i>
                  </div>
                </div>
              );
            })}
            <div>
              <button
                onClick={() => {
                  dispatch(removeTodo());
                }}
              >
                Check List
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
