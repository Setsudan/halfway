import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App name="Kader">
      <h1>Je suis dans mon parent</h1>
    </App>
  </React.StrictMode>
);
