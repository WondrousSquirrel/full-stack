import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  compose(
    //applyMiddleware(sagas)
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
