import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>
);
