import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "./Styles/Theme";
import Main from "./Main";
import CustomMize from "./Component/CumstomMize/CustomMize";
import Test from "./Test";

import RegisterMain from "./Component/Register/RegisterMain";
import Footer from "./Component/Footer";
import rootReducer from "./Redux/Reducer/index";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/register" component={RegisterMain} />
          <Route exact path="/" component={Test} />
          <Route exact path="/costume" component={CustomMize} />
        </Switch>
      </Router>
      <Footer />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
