import produce from "immer";

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

function applyToggleModal(state, action) {
  //start wtih state return draftState
  return produce(state, draftState => {
    //find the modal where modalType is equal to the action.modalType and toggle the isOpen property
    draftState.modals[
      draftState.modals.findIndex(modal => modal.modalType === action.modalType)
    ].isOpen = !draftState.modals[
      draftState.modals.findIndex(modal => modal.modalType === action.modalType)
    ].isOpen;

    //set the modalProps to action.modalProps
    draftState.modals[
      draftState.modals.findIndex(modal => modal.modalType === action.modalType)
    ].modalProps = action.modalProps;
  });
}

function modalReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "TOGGLE_MODAL": {
      return applyToggleModal(state, action);
    }
    default:
      return state;
  }
}

//main export
export default modalReducer;
