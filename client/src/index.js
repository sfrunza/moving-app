import React from "react";
import ReactDOM from "react-dom";
import "src/index.css";
// import "nprogress/nprogress.css";
import App from "src/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import configureStore from "src/store";
import smoothscroll from "smoothscroll-polyfill";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import "react-lazy-load-image-component/src/effects/blur.css";

smoothscroll.polyfill();

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorkerRegistration.unregister();
reportWebVitals();
