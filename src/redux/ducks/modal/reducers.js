import produce from "immer";
import { combineReducers } from "redux";
import types from "./types";

const INITIAL_STATE = {
  modals: [
    {
      modalType: "editStudentName",
      modalProps: { studentId: "" },
      isOpen: false
    }
  ],
  error: null
};

function applyToggle(state, action) {
  //start wtih state return draftState
  return produce(state, draftState => {
    //find the modal where modalType is equal to the action.modalType and toggle the isOpen property
    draftState.modals[
      draftState.modals.findIndex(
        modal => modal.modalType === action.payload.modalType
      )
    ].isOpen = !draftState.modals[
      draftState.modals.findIndex(
        modal => modal.modalType === action.payload.modalType
      )
    ].isOpen;

    //set the modalProps to action.modalProps
    draftState.modals[
      draftState.modals.findIndex(
        modal => modal.modalType === action.payload.modalType
      )
    ].modalProps = action.payload.modalProps;
  });
}

function modalReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "app/modal/TOGGLE_MODAL": {
      return applyToggle(state, action);
    }
    default:
      return state;
  }
}

//main export
export default modalReducer;
