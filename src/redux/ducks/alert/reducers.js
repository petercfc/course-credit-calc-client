import produce from "immer";
import { combineReducers } from "redux";
import types from "./types";

const INITIAL_STATE = {
  message: "wayo",
  isOpen: false,
  error: null
};

function applySetAlert(state, action) {
  return produce(state, draftState => {
    draftState.message = action.payload.message;
    draftState.isOpen = action.payload.isOpen;
  });
}

function alertReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SET_ALERT: {
      return applySetAlert(state, action);
    }
    default:
      return state;
  }
}

//main export
export default alertReducer;
