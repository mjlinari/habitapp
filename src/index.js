import React from "react";
import ReactDOM from "react-dom";
import "./habitapp.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./states/store";

const app = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

const target = document.getElementById("root");

ReactDOM.render(app, target);
