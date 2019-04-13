import produce from "immer";

const INITIAL_STATE = {
  modals: [{ id: "editName", isOpen: false }],
  error: null
};

function applyToggleModal(state, action) {
  return produce(state, draftState => {
    draftState.modals[
      draftState.modals.findIndex(modal => modal.id === action.id)
    ].isOpen = !draftState.modals[
      draftState.modals.findIndex(modal => modal.id === action.id)
    ].isOpen;
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
