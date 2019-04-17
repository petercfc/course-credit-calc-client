import { createStore, combineReducers } from "redux";
import * as reducers from "./ducks";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer, composeWithDevTools());

export default store;
