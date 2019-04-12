import { combineReducers } from "redux";
import modalReducer from "./modal";

const rootReducer = combineReducers({
  modalState: modalReducer
});

export default rootReducer;
