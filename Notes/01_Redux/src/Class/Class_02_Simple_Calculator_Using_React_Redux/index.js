import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./Redux-store/store";
import { Provider } from "react-redux";

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <>
    {/* here we are providing the centralized data */}
    <Provider store={store}>
      {/* now here App component became the provider which will provide the data for all the component */}
      <App />
    </Provider>
  </>,
  document.getElementById("root")
);
