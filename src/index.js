import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import store from "./components/store";
import Page from "./components/Page";

const App = () => (
  <Provider store={store}>
    <Page />
  </Provider>
);

render(<App />, document.getElementById("root"));