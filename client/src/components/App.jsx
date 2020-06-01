import React from "react";
import { Provider } from "react-redux";
import store from "../store";

import "./style.scss";

const App = () => {
  return (
    <div className="centered">
      <Provider store={store}>
        <h1 className="title">All Work Fine</h1>
      </Provider>
    </div>
  );
};

export default App;
