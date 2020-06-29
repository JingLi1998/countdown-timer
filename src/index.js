import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";

const theme = {
  green: "#1b998b",
  pink: "#FDECF4",
  black: "#2d3047",
  yellow: "#fffd82",
  orange: "#ff9b71",
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.pink};
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
