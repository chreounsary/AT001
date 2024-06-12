import React from "react";
import { Provider } from 'react-redux';
import ReactDOM from "react-dom/client";
import Root from "./root";
import './global.css';
import './index.css';
import "./i18n"
import "react-multi-carousel/lib/styles.css";
import store from "./store/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>
);