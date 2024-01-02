import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import StoreProvider from "./StoreProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* Provider component uses react context under the hood and will provide the store to every component in your application */}
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
