import { ThemeProvider } from "@material-ui/core";
import App from "App";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "redux/store/store";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import theme from "./asset/material-ui/theme";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
