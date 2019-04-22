import produce from "immer";
import { combineReducers } from "redux";
import types from "./types";

const INITIAL_STATE = {
  alert: {
    message: "",
    isOpen: false
  },
  error: null
};

function applySetModal(state, action) {
  //start wtih state return draftState
  return produce(state, draftState => {
    //find the modal where modalType is equal to the action.modalType and toggle the isOpen property
    draftState.alert.message = action.payload.message;
    draftState.alert.isOpen = action.payload.isOpen;
  });
}

function modalReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SET_MODAL: {
      return applySetModal(state, action);
    }
    default:
      return state;
  }
}

//main export
export default modalReducer;
