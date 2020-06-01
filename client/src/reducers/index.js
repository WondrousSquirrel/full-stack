/*
 Главный редьюсер или root ( корневой ),
 который объединяет все остальные в один единственный.
 Отображает что происходит со store при определенном экшене.
*/

import { combineReducers } from "redux";

import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  //  Как будет выглядеть store или представление редьюсеров в store
  error: errorReducer,
});

export default rootReducer;
