import React from "react";
import ReactDOM from "react-dom";
import "src/index.css";
import App from "src/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import configureStore from "src/store";
import smoothscroll from "smoothscroll-polyfill";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

smoothscroll.polyfill();

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
