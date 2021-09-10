import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Componente que quiero renderizar. */}
  </React.StrictMode>,
  document.getElementById("root") //Donde lo voy a renderizar.
);