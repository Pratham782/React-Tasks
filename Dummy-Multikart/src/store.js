import { applyMiddleware, combineReducers, createStore } from "redux";
import { itemsmodule } from "./redux/reducer/itemsmodule";
import thunk from "redux-thunk";

let rootreducer = combineReducers({ itemsmodule });

let init = {};

let store = createStore(rootreducer, init, applyMiddleware(thunk));

export default store;
