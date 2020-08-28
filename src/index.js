import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import theme from "./Styles/Theme";
import Main from "./Main";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./Redux/Reducer/index";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
