import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/Static.css";
import "./styles/common.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
